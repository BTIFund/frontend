/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { useReadContract, usePublicClient, useAccount } from 'wagmi';
import { wagmiContractSolarConfig } from '@/app/services/contract';
import { readContract } from 'viem/actions';
import { Address } from 'viem';
import CreateProjectModal from '../dashboard/components/CreateProjectModal';

export default function ProjectsPage() {
  const { address, isConnected } = useAccount();
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState<any[]>([]);
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);
  const [idx, setIdx] = useState(null);
  const publicClient = usePublicClient();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const {
    data: allProjectIdsRaw,
    isLoading: isProjectIdsLoading,
    error: projectIdsError,
  } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getAllProjectIds',
    query: { refetchInterval: 10000 },
  });

  const allProjectIds = allProjectIdsRaw as bigint[] | undefined;

  const { data: isDeveloper } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'isDeveloper',
    args: [address],
    query: {
      refetchInterval: 10000,
      enabled: isConnected && !!address,
    },
  });

  useEffect(() => {
    console.log("[DEBUG] publicClient:", publicClient);
    console.log("[DEBUG] allProjectIdsRaw:", allProjectIdsRaw);

    if (projectIdsError) {
      console.error("[ERROR] useReadContract getAllProjectIds failed:", projectIdsError);
    }
  }, [allProjectIdsRaw, projectIdsError, publicClient]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!publicClient) {
        console.warn("[WARN] publicClient is not ready yet");
        return;
      }

      if (!allProjectIds || allProjectIds.length === 0) {
        console.log("[INFO] No project IDs to fetch.");
        setProjectDetails([]);
        return;
      }

      setIsFetchingDetails(true);

      try {
        console.log("[DEBUG] Fetching details for project IDs:", allProjectIds);

        const detailPromises = allProjectIds.map((projectId) =>
          readContract(publicClient, {
            address: wagmiContractSolarConfig.address as Address,
            abi: wagmiContractSolarConfig.abi,
            functionName: 'getProjectDetails',
            args: [projectId],
          }).then((result) => {
            console.log(`[DEBUG] Fetched details for project ${projectId}:`, result);
            return result;
          })
        );

        const allDetails = await Promise.all(detailPromises);
        setProjectDetails(allDetails);
      } catch (err) {
        console.error("[ERROR] Fetching project details failed:", err);
        setProjectDetails([]);
      } finally {
        setIsFetchingDetails(false);
      }
    };

    fetchProjects();
  }, [allProjectIds, publicClient]);

  const handleProjectClick = (project: any, index: any) => {
    setSelectedProject(project);
    setIdx(index);
    setIsModalOpen(true);
  };

  return (
    <main className='bg-gray-100 min-h-screen text-gray-900'>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Solar Projects</h2>
          {(isDeveloper === true) &&
            <button
              className="cursor-pointer inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create Project
            </button>
          }
          <CreateProjectModal
            isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
          />
        </div>

        {(isProjectIdsLoading || isFetchingDetails) ? (
          <div className="text-center text-lg">Loading projects...</div>
        ) : projectDetails.length === 0 ? (
          <div className="text-center text-lg text-gray-600">No projects found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectDetails.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => handleProjectClick(project, index)}
              />
            ))}
          </div>
        )}

        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
          id={idx}
        />
      </div>
    </main>
  );
}

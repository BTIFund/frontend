/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { useReadContract, usePublicClient } from 'wagmi';
import { wagmiContractSolarConfig } from '@/app/services/contract';
import { readContract } from 'viem/actions';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState<any[]>([]);
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);
  const publicClient = usePublicClient();

  const { data: allProjectIdsRaw, isLoading: isProjectIdsLoading } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getAllProjectIds',
    query: { refetchInterval: 10000 },
  });

  const allProjectIds = allProjectIdsRaw as bigint[];

  useEffect(() => {
    const fetchProjects = async () => {
      if (!publicClient || !allProjectIds || allProjectIds.length === 0) {
        setProjectDetails([]);
        return;
      }

      setIsFetchingDetails(true);

      try {
        const detailPromises = allProjectIds.map((projectId) =>
          readContract(publicClient, {
            address: wagmiContractSolarConfig.address,
            abi: wagmiContractSolarConfig.abi,
            functionName: "getProjectDetails",
            args: [projectId],
          })
        );

        const allDetails = await Promise.all(detailPromises);
        setProjectDetails(allDetails);
      } catch (err) {
        console.error("Error fetching project details:", err);
        setProjectDetails([]);
      } finally {
        setIsFetchingDetails(false);
      }
    };

    fetchProjects();
  }, [allProjectIds, publicClient]);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className='bg-gray-100 min-h-screen text-gray-900'>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 mt-4">Solar Projects</h1>

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
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        )}

        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      </div>
    </main>
  );
}

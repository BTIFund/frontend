/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useAccount, usePublicClient, useReadContract } from "wagmi";
import { readContract } from "viem/actions";
import CreateProjectModal from "./CreateProjectModal";
import ProjectCard from "../../projects/components/ProjectCard";
import ProjectModal from "../../projects/components/ProjectModal";
import { wagmiContractSolarConfig } from "@/app/services/contract";

export default function ProjectsView() {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState<any[]>([]);
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);

  const {
    data: investedProjectIdsRaw,
    isLoading: isProjectIdsLoading,
  } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: "getInvestedProjectIds",
    args: [address],
    query: {
      refetchInterval: 10000,
      enabled: isConnected && !!address,
    },
  });

  // const { data: isDeveloper } = useReadContract({
  //   ...wagmiContractSolarConfig,
  //   functionName: 'isDeveloper',
  //   args: [address],
  //   query: {
  //     refetchInterval: 10000,
  //     enabled: isConnected && !!address,
  //   },
  // });

  const investedProjectIds = (investedProjectIdsRaw as bigint[]) || [];

  useEffect(() => {
    const fetchProjects = async () => {
      if (!publicClient || investedProjectIds.length === 0) {
        setProjectDetails([]);
        return;
      }

      setIsFetchingDetails(true);
      try {
        const detailPromises = investedProjectIds.map((projectId) =>
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
  }, [publicClient, investedProjectIds]);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header and Create Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Solar Projects</h2>
        {/* {(isDeveloper === true) && 
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
        } */}
        <CreateProjectModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      </div>

      {/* Project Grid */}
      {isProjectIdsLoading || isFetchingDetails ? (
        <div className="text-center text-lg">Loading projects...</div>
      ) : projectDetails.length === 0 ? (
        <div className="p-11 text-center text-gray-500">No projects found.</div>
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

      {/* Detail Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}

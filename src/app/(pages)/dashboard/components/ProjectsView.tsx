"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Zap, Percent, HelpCircle } from "lucide-react";
import { Project } from "../types/project.types";
import CreateProjectModal from "./CreateProjectModal";

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    if (filter === "active") return matchesSearch && project.status === "Active";
    if (filter === "funding") return matchesSearch && project.status === "Funding";
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Solar Projects</h2>
        {/* <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-auto border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Projects</option>
            <option value="active">Active</option>
            <option value="funding">Funding</option>
          </select>
        </div> */}
        <button 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
        <CreateProjectModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Project Image */}
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
                  ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
              >
                {project.status}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {project.name}
                </h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin size={14} className="mr-1" />
                  {project.location}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Capacity</div>
                  <div className="flex items-center font-medium">
                    <Zap size={14} className="mr-1 text-yellow-500" />
                    {project.capacity}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Returns</div>
                  <div className="flex items-center font-medium">
                    <Percent size={14} className="mr-1 text-green-500" />
                    {project.returns}
                  </div>
                </div>
              </div>

              {/* Funding Progress */}
              {project.status === "Funding" && (
                <div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: project.funded }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-gray-600">
                      {project.fundedAmount} IDRX
                    </span>
                    <span className="text-gray-600">
                      Goal: {project.goalAmount} IDRX
                    </span>
                  </div>
                </div>
              )}

              {/* Investment Details */}
              {project.status === "Active" && (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Your investment:</span>
                    <span className="font-medium">{project.invested} IDRX</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next payout:</span>
                    <span className="font-medium">{project.nextPayout}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  {project.status === "Active" ? "Claim Returns" : "Invest Now"}
                </button>
                <button
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Learn More"
                >
                  <HelpCircle size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No projects found matching your criteria
          </p>
        </div>
      )}
    </div>
  );
}
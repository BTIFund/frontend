'use client';

import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { projectCards } from './constants';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className='bg-gray-100 min-h-screen text-gray-900'>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Solar Projects</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectCards.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                />
                ))}
            </div>

            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={selectedProject}
            />
        </div>
    </main>
  );
}
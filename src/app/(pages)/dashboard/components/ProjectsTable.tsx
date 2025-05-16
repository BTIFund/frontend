import Image from "next/image";
import { Project } from "../types/project.types";

interface ProjectsTableProps {
  projects: Project[];
}

export default function ProjectsTable({ projects }: ProjectsTableProps) {
  const isLoading = projects === null;
  const isEmpty = projects?.length === 0;

  if (isLoading) {
    return (
      <div className="p-6 text-center text-gray-500">Loading projects...</div>
    );
  }

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center text-gray-500">

        <p className="mt-4 text-sm">You don’t have any investments yet.</p>
      </div>

    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invested</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Returns</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Payout</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project.id.toString()} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{project.name}</div>
                    <div className="text-sm text-gray-500">{project.capacity}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{Number(project.invested) || 0} IDRX</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{Number(project.returns) || 0} IDRX</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${project.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                  {project.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.nextPayout}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {project.status === "Active" ? (
                  <button className="text-blue-600 hover:text-blue-700 font-medium">Claim Returns</button>
                ) : (
                  <span className="text-gray-400">Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

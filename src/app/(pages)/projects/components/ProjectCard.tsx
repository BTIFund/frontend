import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Zap, CheckCircle, BarChart3, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import BTIProject1 from "../../../../../public/img/bti-project-1.webp";
import BTIProject2 from "../../../../../public/img/bti-project-2.webp";
import BTIProject3 from "../../../../../public/img/bti-project-3.webp";

interface ProjectCardProps {
  project: {
    name: string;
    image?: StaticImageData;
    title: string;
    capacity?: string;
    expectedMonthlyReturn: bigint;
    fundingRaised?: bigint;
    fundingGoal: bigint;
    status?: 'funding' | 'active' | 'completed';
    badge: { text: string; color: string };
    category: string;
    impact: string;
    location: string;
    energyFor: string;
  };
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const images = [BTIProject1, BTIProject2, BTIProject3];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const fundingPercent =
    Number(project?.fundingRaised ?? 0) / Number(project?.fundingGoal ?? 1) * 100;


  let color = "";

  if (fundingPercent < 25) {
    color = "bg-red-500";
  } else if (fundingPercent < 50) {
    color = "bg-yellow-500";
  } else if (fundingPercent < 75) {
    color = "bg-blue-500";
  } else {
    color = "bg-green-500";
  }

  const badge = {
    text: `Funding: ${fundingPercent}%`,
    color,
  };

  const status = project.status || 'funding';
  const capacity = project.capacity || '10,000';

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl">
      <div className="relative h-56">
        <Image
          src={randomImage}
          alt={project.name || "img-project"}
          layout="fill"
          objectFit="cover"
        />
        <div className={`absolute top-4 right-4 ${badge.color} text-black text-sm font-semibold px-3 py-1 rounded-full shadow-md`}>
          {badge.text}
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-bold text-white uppercase">{project.name}</h3>
          <p className="text-white text-opacity-90 text-sm capitalize">{project.location}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
            <Sun size={12} className="mr-1" /> Solar PV
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Capacity</span>
            <div className="flex items-center mt-1">
              <Zap size={16} className="text-yellow-500 mr-2" />
              <span className="font-semibold">{capacity}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Monthly Return</span>
            <div className="flex items-center mt-1">
              <BarChart3 size={16} className="text-green-500 mr-2" />
              <span className="font-semibold text-green-600">{Number(project.expectedMonthlyReturn).toLocaleString()}</span>
            </div>
          </div>
        </div>

        {status === 'funding' ? (
          <>
            <div className="relative h-2 bg-gray-200 rounded-full mb-2 overflow-hidden">
              <motion.div
                className="h-2 bg-yellow-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${fundingPercent}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            <div className="flex justify-between text-sm mb-5">
              <span className="text-gray-600">Funded: <span className="font-semibold">{project?.fundingRaised?.toLocaleString() || 0}</span></span>
              <span className="text-gray-600">Goal: <span className="font-semibold">{project.fundingGoal.toLocaleString() || 0}</span></span>
            </div>

            <motion.button
              onClick={onClick}
              className="w-full cursor-pointer text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-3 rounded-lg transition duration-300"
              whileHover={buttonHover}
              whileTap={{ scale: 0.98 }}
            >
              Secure Your Investment
            </motion.button>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center p-3 bg-green-100 rounded-lg mb-5">
              <CheckCircle size={16} className="text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Currently Generating Returns</span>
            </div>

            <motion.button
              onClick={onClick}
              className="w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-lg transition duration-300"
              whileHover={buttonHover}
              whileTap={{ scale: 0.98 }}
            >
              View Performance Data
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
}
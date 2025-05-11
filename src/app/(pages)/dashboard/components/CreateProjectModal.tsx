"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useAccount, useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { BTIabi } from "@/app/services/abi";

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateProjectModal({ isOpen, onClose }: CreateProjectModalProps) {
    // const [isLoading, setIsLoading] = useState(false);
    const { address } = useAccount();
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        fundingGoal: "",
        expectedMonthlyReturn: "",
        fundingDurationDays: "",
    });

    const { writeContract: createProject } = useWriteContract();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!address) return;

        createProject({
            abi: BTIabi,
            functionName: "createProject",
            address: process.env.NEXT_PUBLIC_BTI_CONTRACT as `0x${string}`,
            args: [
                formData.name,
                formData.location,
                parseUnits(formData.fundingGoal, 18),
                parseUnits(formData.expectedMonthlyReturn, 2), // Assuming percentage with 2 decimals
                BigInt(Number(formData.fundingDurationDays)),
            ]
        })
    };

    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Create New Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter project name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter project location"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Funding Goal (IDRX)
            </label>
            <input
              type="number"
              value={formData.fundingGoal}
              onChange={(e) => setFormData({ ...formData, fundingGoal: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter funding goal"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expected Monthly Return (%)
            </label>
            <input
              type="number"
              value={formData.expectedMonthlyReturn}
              onChange={(e) => setFormData({ ...formData, expectedMonthlyReturn: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter expected monthly return"
              min="0"
              max="100"
              step="0.01"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Funding Duration (Days)
            </label>
            <input
              type="number"
              value={formData.fundingDurationDays}
              onChange={(e) => setFormData({ ...formData, fundingDurationDays: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter funding duration in days"
              min="1"
              required
            />
          </div>

          <button
            type="submit"
            // disabled={isLoading}
            className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* {isLoading ? "Creating Project..." : "Create Project"} */}
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import BTIProject1 from "../../../../../public/img/bti-project-1.webp";
import BTIProject2 from "../../../../../public/img/bti-project-2.webp";
import BTIProject3 from "../../../../../public/img/bti-project-3.webp";
import { wagmiContractSolarConfig } from '@/app/services/contract';
import { useWriteContract } from 'wagmi';


export default function ProjectModal({ isOpen, onClose, project, id }: any) {
  const [localProject, setLocalProject] = useState<any | null>(project);
  const [idx, setIdx] = useState(id);
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [isInvesting, setIsInvesting] = useState(false);

  const { writeContractAsync } = useWriteContract();

  useEffect(() => {
    setLocalProject(project);
    setIdx(id)
  }, [project, id]);

  if (!localProject) return null;
  const images = [BTIProject1, BTIProject2, BTIProject3];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const fundingPercent = (Number(localProject.fundingRaised) / Number(localProject.fundingGoal)) * 100;

  const handleInvest = async () => {
    if (!investmentAmount) {
      alert("Please connect wallet and enter a valid amount.");
      return;
    }

    setIsInvesting(true);

    try {
      const txHash = await writeContractAsync({
        ...wagmiContractSolarConfig,
        functionName: 'invest',
        args: [
          BigInt(idx),
          BigInt(investmentAmount)
        ],
      });

      console.log("Transaction Hash:", txHash);
      alert("Investment successful!");
      onClose();
    } catch (err) {
      console.error("Investment failed:", err);
      alert("Investment failed. Check console.");
    } finally {
      setIsInvesting(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="relative h-64 w-full mb-6">
                  <Image
                    src={localProject.image || randomImage}
                    alt={localProject.name || "img-project"}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <Dialog.Title className="text-2xl font-semibold mb-4 text-slate-800 uppercase">
                  {localProject.name}
                </Dialog.Title>

                <div className="grid grid-cols-2 gap-6 mb-6 text-slate-600">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-900 font-semibold">Location</h4>
                      <p className="font-medium capitalize">{localProject.location}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">Category</h4>
                      <p className="font-medium capitalize">{localProject.category || "Comercial"}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">Capacity</h4>
                      <p className="font-medium">{localProject.capacity || "10,000"}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-900 font-semibold">Expected Monthly Return</h4>
                      <p className="font-medium text-green-600">{localProject.expectedMonthlyReturn.toLocaleString()}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">Impact</h4>
                      <p className="font-medium">{localProject.impact || "210 tons CO2 saved yearly"}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">Energy Production</h4>
                      <p className="font-medium">Powers {localProject.energyFor || "85 households"}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-800">
                    <span>Funding Progress</span>
                    <span>{fundingPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${fundingPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Funded: {localProject.fundingRaised.toLocaleString() || 0}</span>
                    <span>Goal: {localProject.fundingGoal.toLocaleString() || 0}</span>
                  </div>
                </div>

                <div className='space-y-2 mb-6'>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Investment Amount
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your investment amount"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleInvest}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer disabled:opacity-50"
                    disabled={isInvesting}
                  >
                    {isInvesting ? "Processing..." : "Invest Now"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
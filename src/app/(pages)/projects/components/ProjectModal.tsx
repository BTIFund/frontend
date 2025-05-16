/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';

export default function ProjectModal({ isOpen, onClose, project }: any) {
  if (!project) return null;

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
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <Dialog.Title className="text-2xl font-semibold mb-4 text-slate-800">
                  {project.title}
                </Dialog.Title>

                <div className="grid grid-cols-2 gap-6 mb-6 text-slate-600">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-900 font-semibold">Location</h4>
                      <p className="font-medium">{project.location}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">Category</h4>
                      <p className="font-medium capitalize">{project.category}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">Capacity</h4>
                      <p className="font-medium">{project.capacity}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-900 font-semibold">Expected Return</h4>
                      <p className="font-medium text-green-600">{project.return}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">Impact</h4>
                      <p className="font-medium">{project.impact}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">Energy Production</h4>
                      <p className="font-medium">Powers {project.energyFor}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-800">
                    <span>Funding Progress</span>
                    <span>{project.fundingPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${project.fundingPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Funded: {project.funded}</span>
                    <span>Goal: {project.goal}</span>
                  </div>
                </div>

                <div className='space-y-2 mb-6'>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Investment Amount
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your investment amount"
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  >
                    Close
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Invest Now
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
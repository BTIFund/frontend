import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, ArrowRight, Award, BarChart3, Sun } from 'lucide-react';
import BTIProject1 from "../../../public/img/bti-project-1.webp";
import BTIProject2 from "../../../public/img/bti-project-2.webp";
import BTIProject3 from "../../../public/img/bti-project-3.webp";

export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState('all');
    const [isInView, setIsInView] = useState(false);
    
    useEffect(() => {
        setIsInView(true);
    }, []);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };
    
    const buttonHover = {
        scale: 1.05,
        transition: { duration: 0.2 }
    };
    
    const projectCards = [
        {
            id: 'project1',
            image: BTIProject1,
            title: 'Surabaya Commercial Rooftop',
            capacity: '250 kWp',
            return: '12%',
            fundingPercent: 70,
            funded: '175,000 IDRX',
            goal: '250,000 IDRX',
            status: 'funding',
            badge: { text: 'Funding: 70%', color: 'bg-yellow-500' },
            category: 'commercial',
            impact: '210 tons CO2 saved yearly',
            location: 'East Java, Indonesia',
            energyFor: '85 households'
        },
        {
            id: 'project2',
            image: BTIProject2,
            title: 'Bali Resort Solar Farm',
            capacity: '500 kWp',
            return: '10%',
            fundingPercent: 45,
            funded: '225,000 IDRX',
            goal: '500,000 IDRX',
            status: 'funding',
            badge: { text: 'Funding: 45%', color: 'bg-yellow-500' },
            category: 'resort',
            impact: '450 tons CO2 saved yearly',
            location: 'Bali, Indonesia',
            energyFor: '180 households'
        },
        {
            id: 'project3',
            image: BTIProject3,
            title: 'Jakarta Office Complex',
            capacity: '350 kWp',
            return: '11.5%',
            fundingPercent: 100,
            funded: '400,000 IDRX',
            goal: '400,000 IDRX',
            status: 'active',
            badge: { text: 'Active', color: 'bg-green-500' },
            category: 'office',
            impact: '320 tons CO2 saved yearly',
            location: 'Jakarta, Indonesia',
            energyFor: '125 households'
        }
    ];
  
    const filteredProjects = activeTab === 'all' 
        ? projectCards 
        : projectCards.filter(project => project.category === activeTab);
    
    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={headerVariants}
                >
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                        INVESTMENT OPPORTUNITIES
                    </span>
                    <h2 className="text-4xl font-bold mb-4 text-blue-900">
                        High-Yield Solar Projects
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                        Curated solar energy installations offering both environmental impact and competitive financial returns. Each project is thoroughly vetted for technical viability and economic performance.
                    </p>
                </motion.div>
                
                <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <button 
                        onClick={() => setActiveTab('all')}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                            activeTab === 'all' 
                                ? 'bg-blue-900 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }
                        `}
                    >
                        All Projects
                    </button>
                    <button 
                        onClick={() => setActiveTab('commercial')}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                            activeTab === 'commercial' 
                                ? 'bg-blue-900 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }
                        `}
                    >
                        Commercial
                    </button>
                    <button 
                        onClick={() => setActiveTab('resort')}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                            activeTab === 'resort' 
                                ? 'bg-blue-900 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }
                        `}
                    >
                        Resort
                    </button>
                    <button 
                        onClick={() => setActiveTab('office')}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                            activeTab === 'office' 
                                ? 'bg-blue-900 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }
                        `}
                    >
                        Office
                    </button>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {filteredProjects.map((project) => (
                        <motion.div 
                            key={project.id}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-56">
                                <Image
                                    src={project.image}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={project.title}
                                    // className="transition-transform duration-700 hover:scale-110"
                                />
                                <div className={`absolute top-4 right-4 ${project.badge.color} text-black text-sm font-semibold px-3 py-1 rounded-full shadow-md`}>
                                    {project.badge.text}
                                </div>
                                
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <p className="text-white text-opacity-90 text-sm">{project.location}</p>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                                        <Sun size={12} className="mr-1" /> Solar PV
                                    </span>
                                    {/* <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                                        <Users size={12} className="mr-1" /> Powers {project.energyFor}
                                    </span> */}
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4 mb-5">
                                    <div className="flex flex-col">
                                        <span className="text-gray-500 text-sm">Capacity</span>
                                        <div className="flex items-center mt-1">
                                            <Zap size={16} className="text-yellow-500 mr-2" />
                                            <span className="font-semibold">{project.capacity}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <span className="text-gray-500 text-sm">Annual Return</span>
                                        <div className="flex items-center mt-1">
                                            <BarChart3 size={16} className="text-green-500 mr-2" />
                                            <span className="font-semibold text-green-600">{project.return}</span>
                                        </div>
                                    </div>
                                    
                                    {/* <div className="flex flex-col">
                                        <span className="text-gray-500 text-sm">CO₂ Offset</span>
                                        <div className="flex items-center mt-1">
                                            <Thermometer size={16} className="text-blue-500 mr-2" />
                                            <span className="font-semibold">{project.impact}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <span className="text-gray-500 text-sm">Time Horizon</span>
                                        <div className="flex items-center mt-1">
                                            <Clock size={16} className="text-blue-500 mr-2" />
                                            <span className="font-semibold">10 Years</span>
                                        </div>
                                    </div> */}
                                </div>
                                
                                {project.status === 'funding' ? (
                                    <>
                                        <div className="relative h-2 bg-gray-200 rounded-full mb-2 overflow-hidden">
                                            <motion.div
                                                className="h-2 bg-yellow-500 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${project.fundingPercent}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                        </div>
                                        
                                        <div className="flex justify-between text-sm mb-5">
                                            <span className="text-gray-600">Funded: <span className="font-semibold">{project.funded}</span></span>
                                            <span className="text-gray-600">Goal: <span className="font-semibold">{project.goal}</span></span>
                                        </div>
                                        
                                        <motion.a
                                            href={`#${project.id}`}
                                            className="block cursor-pointer text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-3 rounded-lg transition duration-300"
                                            whileHover={buttonHover}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Secure Your Investment
                                        </motion.a>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center justify-center p-3 bg-green-100 rounded-lg mb-5">
                                            <CheckCircle size={16} className="text-green-600 mr-2" />
                                            <span className="text-green-800 font-medium">Currently Generating Returns</span>
                                        </div>
                                        
                                        <motion.a
                                            href={`#${project.id}`}
                                            className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-lg transition duration-300"
                                            whileHover={buttonHover}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            View Performance Data
                                        </motion.a>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="text-lg text-gray-700 mb-8">
                        <span className="inline-flex items-center">
                            <Award size={18} className="text-yellow-500 mr-2" />
                            <span className="font-medium">BTIFund offers exclusive early access to premium solar projects with limited investment slots.</span>
                        </span>
                    </p>
                    
                    <motion.a
                        href="/projects"
                        className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition duration-300 shadow-lg"
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Explore Our Full Project Portfolio <ArrowRight size={18} className="ml-2" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
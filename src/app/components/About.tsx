import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Sun, Shield, LineChart, Users } from 'lucide-react';
import BTITeam from "../../../public/img/bti-team.webp"

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const statsVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.6, delay: 0.3 }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    const statItems = [
        { icon: <Sun className="mb-2 text-yellow-300" />, value: "10GW+", label: "Solar Projects Funded" },
        { icon: <Users className="mb-2 text-blue-300" />, value: "50K+", label: "Global Investors" },
        { icon: <LineChart className="mb-2 text-green-300" />, value: "8-12%", label: "Average Annual Return" }
    ];

    return (
        <section id="about" className="py-20 bg-blue-900 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    <div>
                        <motion.h2 
                            className="text-4xl font-bold mb-6 relative"
                            variants={itemVariants}
                        >
                            Revolutionizing Clean Energy Investment
                            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-500"></span>
                        </motion.h2>
                        
                        <motion.p 
                            className="mb-5 text-lg"
                            variants={itemVariants}
                        >
                            BTIFund is pioneering the democratization of renewable energy investment through blockchain technology. Our platform eliminates traditional barriers, offering unprecedented transparency and efficiency in the solar energy marketplace.
                        </motion.p>
                        
                        <motion.p 
                            className="mb-8 text-lg"
                            variants={itemVariants}
                        >
                            We're accelerating the global shift to sustainable energy by directly connecting investors with high-potential solar projects. This creates a powerful ecosystem where financial returns and environmental impact coexist harmoniously.
                        </motion.p>
                        
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
                            variants={itemVariants}
                        >
                            <motion.div 
                                className="bg-blue-800 rounded-lg p-5 border-l-4 border-yellow-500 hover:transform hover:scale-105 transition duration-300"
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="flex items-start mb-3">
                                    <Shield className="mr-3 text-yellow-400" />
                                    <h4 className="font-bold text-lg">Blockchain Security</h4>
                                </div>
                                <p className="text-blue-100">
                                    Military-grade encryption and immutable smart contracts ensure your investments are protected and transparent.
                                </p>
                            </motion.div>
                            
                            <motion.div 
                                className="bg-blue-800 rounded-lg p-5 border-l-4 border-yellow-500 hover:transform hover:scale-105 transition duration-300"
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="flex items-start mb-3">
                                    <Sun className="mr-3 text-yellow-400" />
                                    <h4 className="font-bold text-lg">Real Impact</h4>
                                </div>
                                <p className="text-blue-100">
                                    Every dollar invested directly finances solar projects that reduce carbon emissions and foster sustainable communities.
                                </p>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-center"
                            variants={itemVariants}
                        >
                            <a 
                                href="#how-it-works" 
                                className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition duration-300"
                            >
                                Discover how BTIFund works
                                <ChevronRight className="ml-1 h-5 w-5" />
                            </a>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        className="relative"
                        variants={fadeIn}
                    >
                        <motion.div
                            className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500 rounded-full opacity-20"
                            animate={{ 
                                scale: [1, 1.2, 1],
                            }}
                            transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse" 
                            }}
                        />
                        <motion.div 
                            className="rounded-lg overflow-hidden shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={BTITeam}
                                width={500}
                                height={400}
                                alt="BTI Team working on renewable energy solutions"
                                className="rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
                
                {/* Stats Section */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                    variants={statsVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {statItems.map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="bg-blue-800 bg-opacity-50 rounded-lg p-6 text-center"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex justify-center">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold mb-1 text-yellow-400">{stat.value}</h3>
                            <p className="text-blue-100">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
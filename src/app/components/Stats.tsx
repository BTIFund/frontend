import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function StatsSection () {
    const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionId = section.id;
                
                if (sectionTop < window.innerHeight * 0.75) {
                    setIsVisible(prev => ({ ...prev, [sectionId]: true }));
                }
            });
        };
        
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
  
    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.section 
            className="bg-yellow-500 py-12"
            initial="hidden"
            animate={isVisible["stats"] ? "visible" : "hidden"}
            variants={fadeIn}
            id="stats"
        >
            <div className="container mx-auto px-4">
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                    variants={staggerChildren}
                >
                    <motion.div 
                        className="flex flex-col items-center text-center p-4 hover:transform hover:scale-105 transition duration-300"
                        variants={fadeIn}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-5xl font-bold mb-2">75+</div>
                        <div className="text-gray-800 font-medium">Active Solar Projects</div>
                    </motion.div>
                    <motion.div 
                        className="flex flex-col items-center text-center p-4 hover:transform hover:scale-105 transition duration-300"
                        variants={fadeIn}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-5xl font-bold mb-2">3.1 MW</div>
                        <div className="text-gray-800 font-medium">Clean Energy Produced</div>
                    </motion.div>
                    <motion.div 
                        className="flex flex-col items-center text-center p-4 hover:transform hover:scale-105 transition duration-300"
                        variants={fadeIn}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-5xl font-bold mb-2">12K+</div>
                        <div className="text-gray-800 font-medium">Global Investors</div>
                    </motion.div>
                    <motion.div 
                        className="flex flex-col items-center text-center p-4 hover:transform hover:scale-105 transition duration-300"
                        variants={fadeIn}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-5xl font-bold mb-2">3.3K+</div>
                        <div className="text-gray-800 font-medium">Tons CO₂ Offset Annually</div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HowItWorksSection() {
    const [activeTab, setActiveTab] = useState<string>("investors");
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
        handleScroll(); // Initial check on mount
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.section 
            id="how-it-works" 
            className="py-20 bg-gray-50"
            initial="hidden"
            animate={isVisible["how-it-works"] ? "visible" : "hidden"}
            variants={fadeIn}
        >
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-12"
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-bold mb-4">How BTIFund Works</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                        Our revolutionary platform connects solar developers with global investors through 
                        a secure, transparent blockchain ecosystem that benefits everyone involved.
                    </p>
                </motion.div>

                <motion.div 
                    className="flex justify-center mb-12"
                    variants={fadeIn}
                >
                    <div className="inline-flex rounded-md border border-gray-300 overflow-hidden">
                        <motion.button
                            onClick={() => setActiveTab("investors")}
                            className={`px-8 py-4 font-medium text-lg ${
                            activeTab === "investors"
                                ? "bg-yellow-500 text-white"
                                : "bg-white text-gray-700"
                            }`}
                            // whileHover={{ backgroundColor: activeTab === "investors" ? "#eab308" : "#f9fafb" }}
                            // whileHover={{
                            //     backgroundColor: activeTab === "investors" ? "#d97706" : "#f3f4f6", // Darker yellow for active, light gray for inactive
                            //     color: activeTab === "investors" ? "#ffffff" : "#374151", // White text for active, dark gray for inactive
                            // }}
                            transition={{ duration: 0.2 }}
                        >
                            For Investors
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab("developers")}
                            className={`px-8 py-4 font-medium text-lg ${
                            activeTab === "developers"
                                ? "bg-yellow-500 text-white"
                                : "bg-white text-gray-700"
                            }`}
                            // whileHover={{ backgroundColor: activeTab === "developers" ? "#eab308" : "#f9fafb" }}
                            // whileHover={{
                            //     backgroundColor: activeTab === "developers" ? "#d97706" : "#f3f4f6", // Darker yellow for active, light gray for inactive
                            //     color: activeTab === "developers" ? "#ffffff" : "#374151", // White text for active, dark gray for inactive
                            // }}
                            transition={{ duration: 0.2 }}
                        >
                            For Developers
                        </motion.button>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {activeTab === "investors" && (
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            key="investors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative flex flex-col items-center text-center p-6">
                                <motion.div 
                                    className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 z-10 text-xl font-bold"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    1
                                </motion.div>
                                <div className="hidden md:block absolute top-8 left-1/2 h-1 w-full bg-yellow-200"></div>
                                <h3 className="text-2xl font-semibold mb-3">Discover Projects</h3>
                                <p className="text-gray-700">
                                    Browse our curated portfolio of vetted solar projects across premier locations, 
                                    with complete transparency on technical specifications, risk profiles, and projected returns.
                                </p>
                            </div>

                            <div className="relative flex flex-col items-center text-center p-6">
                                <motion.div 
                                    className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 z-10 text-xl font-bold"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    2
                                </motion.div>
                                <div className="hidden md:block absolute top-8 left-1/2 h-1 w-full bg-yellow-200"></div>
                                <h3 className="text-2xl font-semibold mb-3">Secure Your Investment</h3>
                                <p className="text-gray-700">
                                    Use IDRX tokens to purchase shares in your selected projects through our secure blockchain platform, 
                                    with instant confirmation and digital ownership certificates.
                                </p>
                            </div>

                            <div className="relative flex flex-col items-center text-center p-6">
                                <motion.div 
                                    className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 z-10 text-xl font-bold"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    3
                                </motion.div>
                                <h3 className="text-2xl font-semibold mb-3">Earn Passive Income</h3>
                                <p className="text-gray-700">
                                    Watch your investment grow with monthly returns based on actual energy production, 
                                    automatically distributed to your wallet with detailed performance analytics.
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "developers" && (
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            key="developers"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative flex flex-col items-center text-center p-6">
                                <motion.div 
                                    className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 z-10 text-xl font-bold"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    1
                                </motion.div>
                                <div className="hidden md:block absolute top-8 left-1/2 h-1 w-full bg-yellow-200"></div>
                                <h3 className="text-2xl font-semibold mb-3">Submit Your Project</h3>
                                <p className="text-gray-700">
                                    Register your solar development with our expert team who will assess viability, 
                                    verify technical specifications, and prepare professional investment materials.
                                </p>
                            </div>

                            <div className="relative flex flex-col items-center text-center p-6">
                                <motion.div 
                                    className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 z-10 text-xl font-bold"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    2
                                </motion.div>
                                <div className="hidden md:block absolute top-8 left-1/2 h-1 w-full bg-yellow-200"></div>
                                <h3 className="text-2xl font-semibold mb-3">Secure Funding</h3>
                                <p className="text-gray-700">
                                    Access our global network of investors to efficiently secure capital without traditional 
                                    banking hurdles, typically closing funding rounds 60% faster than conventional methods.
                                </p>
                            </div>

                            <div className="relative flex flex-col items-center text-center p-6">
                                <motion.div 
                                    className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 z-10 text-xl font-bold"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    3
                                </motion.div>
                                <h3 className="text-2xl font-semibold mb-3">
                                    Deploy & Distribute
                                </h3>
                                <p className="text-gray-700">
                                    Build your solar installation with our technical support, then manage returns to investors 
                                    automatically through our smart contract system with minimal administrative overhead.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    )
}
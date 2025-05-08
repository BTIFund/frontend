import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BarChart3, Globe, Leaf, Shield, Wallet, Zap } from "lucide-react";

export default function FeatureSection() {
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
            id="features" 
            className="py-20 bg-white"
            initial="hidden"
            animate={isVisible["features"] ? "visible" : "hidden"}
            variants={fadeIn}
        >
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-bold mb-4">Why BTIFund Leads Solar Investment</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                        Our blockchain-powered ecosystem redefines how solar projects are funded, 
                        making clean energy investment accessible, transparent, and profitable for everyone.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerChildren}
                >
                    <motion.div 
                        className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
                        variants={fadeIn}
                        whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <Wallet className="text-yellow-600" size={28} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            Smart Tokenized Investment
                        </h3>
                        <p className="text-gray-700">
                            Our IDRX tokens enable fractional ownership of premium solar assets, 
                            providing liquidity and accessibility with investments starting from just $100.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
                        variants={fadeIn}
                        whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <BarChart3 className="text-yellow-600" size={28} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Predictable Returns</h3>
                        <p className="text-gray-700">
                            Earn up to 12% annual returns paid monthly, backed by real energy production 
                            with transparent performance metrics and automated distributions.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
                        variants={fadeIn}
                        whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <Leaf className="text-yellow-600" size={28} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            Verified Impact
                        </h3>
                        <p className="text-gray-700">
                            Track your environmental contribution in real-time with our impact dashboard, 
                            showing exact CO₂ reduction metrics and renewable energy generation.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
                        variants={fadeIn}
                        whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <Shield className="text-yellow-600" size={28} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            Bank-Grade Security
                        </h3>
                        <p className="text-gray-700">
                            Industry-leading security protocols protect your investment with multi-signature wallets, 
                            regular audits, and immutable blockchain records for complete peace of mind.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
                        variants={fadeIn}
                        whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <Globe className="text-yellow-600" size={28} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Global Portfolio</h3>
                        <p className="text-gray-700">
                            Diversify across curated solar projects spanning multiple continents, managed by our team of 
                            renewable energy experts with over 50 years of combined experience.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
                        variants={fadeIn}
                        whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <Zap className="text-yellow-600" size={28} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            Effortless Process
                        </h3>
                        <p className="text-gray-700">
                            Our intuitive platform makes solar investing simple - create an account in minutes, explore projects, 
                            and start earning with just a few clicks, all supported by our concierge service.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}
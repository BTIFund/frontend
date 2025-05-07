import Image from "next/image";
import BTIHero from "../../../public/img/bti-hero.jpeg";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center relative min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0c2340" }}
        id="hero"
    >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-white"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Transform Your Portfolio with Sustainable Solar Investments
                    </h1>
                    <p className="text-xl mb-8">
                        Join the vanguard of renewable energy financing with BTIFund. Our blockchain-powered platform lets you invest in premium solar projects, earn competitive returns up to 12%, and make a measurable environmental impact with every investment.
                    </p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <a
                            href="#dapp"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md text-center transition duration-300 transform hover:scale-105"
                        >
                            Start Investing Now
                        </a>
                        <a
                            href="#how-it-works"
                            className="border border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-6 py-3 rounded-md text-center transition duration-300 transform hover:scale-105"
                        >
                            Discover How It Works
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex justify-center"
                >
                    <div className="relative rounded-lg shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-40 z-10"></div>
                        <Image
                            src={BTIHero}
                            width={600}
                            height={400}
                            alt="Solar Panel Installation on a Modern Building"
                            className="rounded-lg"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
        >
            <div className="flex flex-col items-center text-white">
                <span className="text-sm mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                    <motion.div 
                        className="w-1 h-2 bg-white rounded-full"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                </div>
            </div>
        </motion.div>
    </motion.section>
  );
}
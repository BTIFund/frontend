"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
    question: string;
    answer: string;
    isOpen: boolean;
}

export default function ContactFAQ() {
    const [faqs, setFaqs] = useState<FaqItem[]>([
        {
            question: "What makes SolarCoin unique in the green investment space?",
            answer: "SolarCoin combines blockchain technology with solar energy investments, offering transparent, fractional ownership of solar projects. Our platform allows investors to track real-time energy production and environmental impact while earning sustainable returns.",
            isOpen: false,
        },
        {
            question: "How quickly can I start seeing returns on my investment?",
            answer: "Most investors begin receiving returns within the first month of investment. Our solar projects typically generate consistent monthly returns, with performance metrics visible through your dashboard in real-time.",
            isOpen: false,
        },
        {
            question: "What environmental impact can I track with my investment?",
            answer: "Through our advanced monitoring system, you can track your personal contribution to CO2 reduction, kilowatt-hours generated, and equivalent trees planted. Each investment directly supports the expansion of renewable energy infrastructure.",
            isOpen: false,
        },
        {
            question: "Is there a mobile app to manage my investments?",
            answer: "Yes, our mobile app is available for both iOS and Android devices. It provides real-time monitoring, investment management, and instant notifications about your solar assets' performance.",
            isOpen: false,
        },
        {
            question: "What happens if I need to withdraw my investment?",
            answer: "We offer flexible liquidity options. You can sell your SolarCoins on our secondary market at any time, or schedule a managed withdrawal with a 30-day notice period for larger investments.",
            isOpen: false,
        },
    ]);
    
    const toggleFaq = (index: number) => {
        setFaqs(
            faqs.map((faq, i) =>
                i === index ? { ...faq, isOpen: !faq.isOpen } : faq
            )
        );
    };

    return (
        <div className="bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Common Questions About SolarCoin
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Explore our frequently asked questions to learn more about sustainable investing with SolarCoin
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex justify-between items-center w-full p-5 text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="text-lg font-medium text-gray-800">
                                    {faq.question}
                                </span>
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: faq.isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown className="h-5 w-5 text-blue-500" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {faq.isOpen && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="p-5 bg-blue-50 border-t border-gray-100">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#contact-form"
                        className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 decoration-blue-200 hover:decoration-blue-600 transition-all duration-200"
                    >
                        Still have questions? Reach out to our team
                    </a>
                </div>
            </div>
        </div>
    );
}
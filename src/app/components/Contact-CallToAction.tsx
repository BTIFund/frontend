import { ArrowRight, Sun, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactCallToAction() {
    return (
        <div className="py-24 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Start Your Solar Investment Journey Today
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Join our community of forward-thinking investors who are 
                            earning while contributing to a sustainable future.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                                <Sun className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Sustainable Returns</h3>
                                <p className="text-gray-600">Generate consistent returns while supporting clean energy initiatives</p>
                            </div>

                            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Growth Potential</h3>
                                <p className="text-gray-600">Benefit from the rapidly expanding solar energy market</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
                                Start Investing
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
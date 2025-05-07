import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ContactMap () {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Our Location
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Visit our headquarters to learn more about our solar energy
                        projects and blockchain technology.
                    </p>
                </div>

                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                    {/* This would be replaced with an actual map integration */}
                    <Image
                        src="/api/placeholder/1200/600"
                        alt="SolarCoin Office Location"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                SolarCoin Headquarters
                            </h3>
                            <p className="text-gray-600 mb-4">
                                123 Solar Street, Green City, EC 12345
                            </p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                            >
                                Get Directions
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
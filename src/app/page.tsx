"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Sun,
  Zap,
  Wallet,
  Users,
  ArrowRight,
  Clock,
  Leaf,
  CheckCircle,
} from "lucide-react";
import BTILogo from "../../public/img/bti-logo.png";
import BTITeam from "../../public/img/bti-team.webp";
import BTIHero from "../../public/img/bti-hero.jpeg";
import BTIProject1 from "../../public/img/bti-project-1.webp";
import BTIProject2 from "../../public/img/bti-project-2.webp";
import BTIProject3 from "../../public/img/bti-project-3.webp";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("investors");

  return (
    <div className="flex flex-col min-h-screen text-black">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center relative min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0c2340" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                BTIFund: Invest in Solar Energy, Earn Sustainable Returns
              </h1>
              <p className="text-xl mb-8">
                Join the decentralized revolution in renewable energy funding.
                Invest in solar projects with IDRX tokens and earn consistent
                returns while contributing to a greener future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#dapp"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md text-center transition duration-300"
                >
                  Start Investing
                </a>
                <a
                  href="#how-it-works"
                  className="border border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-6 py-3 rounded-md text-center transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={BTIHero}
                width={600}
                height={400}
                alt="Solar Panel Installation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-yellow-500 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold mb-2">75+</div>
              <div className="text-gray-800">Active Projects</div>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold mb-2">3.1 MW</div>
              <div className="text-gray-800">Total Capacity</div>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold mb-2">12K+</div>
              <div className="text-gray-800">Users Worldwide</div>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold mb-2">3.3K+</div>
              <div className="text-gray-800">Tons CO₂ Reduced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose BTIFund?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our blockchain-powered platform makes solar investment accessible,
              transparent, and profitable for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Wallet className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Tokenized Investment
              </h3>
              <p className="text-gray-700">
                Invest in solar projects with IDRX tokens, providing liquidity
                and fractional ownership of renewable energy assets.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consistent Returns</h3>
              <p className="text-gray-700">
                Earn up to 12% annual returns from solar energy production, with
                monthly distributions directly to your wallet.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Leaf className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Environmental Impact
              </h3>
              <p className="text-gray-700">
                Every investment directly contributes to reducing carbon
                emissions and increasing renewable energy capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How BTIFund Works</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our platform connects solar developers with investors through a
              transparent blockchain ecosystem.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md border border-gray-300 overflow-hidden">
              <button
                onClick={() => setActiveTab("investors")}
                className={`px-6 py-3 font-medium ${
                  activeTab === "investors"
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                For Investors
              </button>
              <button
                onClick={() => setActiveTab("developers")}
                className={`px-6 py-3 font-medium ${
                  activeTab === "developers"
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                For Developers
              </button>
            </div>
          </div>

          {activeTab === "investors" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 z-10">
                  1
                </div>
                <div className="hidden md:block absolute top-6 left-1/2 h-0.5 w-full bg-yellow-200"></div>
                <h3 className="text-xl font-semibold mb-3">Browse Projects</h3>
                <p className="text-gray-700">
                  Explore vetted solar projects across various locations with
                  detailed information on expected returns.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center p-6">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 z-10">
                  2
                </div>
                <div className="hidden md:block absolute top-6 left-1/2 h-0.5 w-full bg-yellow-200"></div>
                <h3 className="text-xl font-semibold mb-3">Invest with IDRX</h3>
                <p className="text-gray-700">
                  Use IDRX tokens to invest in your chosen projects through our
                  secure smart contract.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center p-6">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 z-10">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Collect Returns</h3>
                <p className="text-gray-700">
                  Receive monthly returns based on actual energy production
                  directly to your wallet.
                </p>
              </div>
            </div>
          )}

          {activeTab === "developers" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 z-10">
                  1
                </div>
                <div className="hidden md:block absolute top-6 left-1/2 h-0.5 w-full bg-yellow-200"></div>
                <h3 className="text-xl font-semibold mb-3">Submit Project</h3>
                <p className="text-gray-700">
                  Register your solar development project with technical
                  specifications and funding requirements.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center p-6">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 z-10">
                  2
                </div>
                <div className="hidden md:block absolute top-6 left-1/2 h-0.5 w-full bg-yellow-200"></div>
                <h3 className="text-xl font-semibold mb-3">Get Funded</h3>
                <p className="text-gray-700">
                  Receive crowdfunding through our platform once your project
                  reaches its funding goal.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center p-6">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 z-10">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Build & Share Returns
                </h3>
                <p className="text-gray-700">
                  Build your solar installation and distribute returns to
                  investors through smart contracts.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Solar Projects</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Discover our selection of high-impact solar installations ready
              for investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <Image
                  src={BTIProject1}
                  layout="fill"
                  objectFit="cover"
                  alt="Solar Project"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black text-sm font-semibold px-2 py-1 rounded">
                  Funding: 70%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Surabaya Commercial Rooftop
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Zap size={16} className="mr-2" /> 250 kWp Capacity
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock size={16} className="mr-2" /> 12% Annual Return
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-4">
                  <div
                    className="h-2 bg-yellow-500 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span>Funded: 175,000 IDRX</span>
                  <span>Goal: 250,000 IDRX</span>
                </div>
                <a
                  href="#project1"
                  className="block text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-md transition duration-300"
                >
                  Invest Now
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <Image
                  src={BTIProject2}
                  layout="fill"
                  objectFit="cover"
                  alt="Solar Project"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black text-sm font-semibold px-2 py-1 rounded">
                  Funding: 45%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Bali Resort Solar Farm
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Zap size={16} className="mr-2" /> 500 kWp Capacity
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock size={16} className="mr-2" /> 10% Annual Return
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-4">
                  <div
                    className="h-2 bg-yellow-500 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span>Funded: 225,000 IDRX</span>
                  <span>Goal: 500,000 IDRX</span>
                </div>
                <a
                  href="#project2"
                  className="block text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-md transition duration-300"
                >
                  Invest Now
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <Image
                  src={BTIProject3}
                  layout="fill"
                  objectFit="cover"
                  alt="Solar Project"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded">
                  Active
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Jakarta Office Complex
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Zap size={16} className="mr-2" /> 350 kWp Capacity
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock size={16} className="mr-2" /> 11.5% Annual Return
                </div>
                <div className="flex items-center justify-center p-2 bg-gray-100 rounded-md mb-4">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-700">Successfully Funded</span>
                </div>
                <a
                  href="#project3"
                  className="block text-center bg-gray-200 text-gray-500 font-semibold px-4 py-2 rounded-md cursor-not-allowed"
                >
                  Fully Funded
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#all-projects"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition duration-300"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About BTIFund</h2>
              <p className="mb-4">
                BTIFund is a revolutionary blockchain-based platform that
                democratizes investment in renewable energy. By using smart
                contracts on the blockchain, we create a transparent and
                efficient marketplace for solar energy funding.
              </p>
              <p className="mb-6">
                Our mission is to accelerate the transition to clean energy by
                connecting investors directly with solar developers, removing
                traditional barriers to entry and creating a win-win solution
                for people and the planet.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-800 rounded-lg p-4 flex-1">
                  <h4 className="font-semibold mb-2">Transparency</h4>
                  <p className="text-sm">
                    All transactions and returns are recorded on the blockchain
                    and visible to all participants.
                  </p>
                </div>
                <div className="bg-blue-800 rounded-lg p-4 flex-1">
                  <h4 className="font-semibold mb-2">Security</h4>
                  <p className="text-sm">
                    Smart contracts ensure that funds are only released when
                    conditions are met.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={BTITeam}
                width={500}
                height={400}
                alt="BTI Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Invest in a Greener Future?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of investors who are already earning returns while
            making a positive environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#dapp"
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
            >
              Launch App
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-6 py-3 rounded-md transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

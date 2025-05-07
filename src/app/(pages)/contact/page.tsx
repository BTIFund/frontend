"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";

// Define TypeScript interfaces
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // FAQ state
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: "How can I invest in SolarCoin?",
      answer:
        "You can invest in SolarCoin through our platform by creating an account and following the investment process. We offer various investment tiers to accommodate different investor profiles.",
      isOpen: false,
    },
    {
      question: "What is the minimum investment amount?",
      answer:
        "The minimum investment in SolarCoin projects is 100 coins, equivalent to approximately $50 USD, making solar energy investment accessible to a wide range of investors.",
      isOpen: false,
    },
    {
      question: "How are returns calculated and distributed?",
      answer:
        "Returns are calculated based on the energy production of the solar projects you've invested in. Distributions are made monthly to your SolarCoin wallet and can be withdrawn or reinvested at any time.",
      isOpen: false,
    },
    {
      question: "Is my investment in SolarCoin secure?",
      answer:
        "Yes, all investments are secured through blockchain technology. Each investment is tied to physical solar assets, and all transactions are transparent and immutable on our blockchain.",
      isOpen: false,
    },
    {
      question: "How can I track the performance of my investments?",
      answer:
        "Our dashboard provides real-time monitoring of your investments, including energy production, carbon offset, and financial returns. You can access detailed analytics and reports at any time.",
      isOpen: false,
    },
  ]);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This would be replaced with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      setSubmitStatus({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle FAQ item
  const toggleFaq = (index: number) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      <Head>
        <title>Contact Us | SolarCoin</title>
        <meta
          name="description"
          content="Get in touch with the SolarCoin team for any questions about solar energy investment or blockchain technology."
        />
      </Head>

      {/* Hero Section */}
      <div className="pt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-900/90 max-w-2xl mx-auto">
            Have questions about solar energy investment or our blockchain
            technology? We're here to help.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 mt-1">
                      123 Solar Street
                      <br />
                      Green City, EC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mt-1">
                      +1 (555) 123-4567
                      <br />
                      Mon-Fri: 9am - 5pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mt-1">
                      info@solarcoin.com
                      <br />
                      support@solarcoin.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Live Chat
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Available 24/7
                      <br />
                      via our web app
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#twitter"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300"
                  >
                    <svg
                      className="h-5 w-5 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#linkedin"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300"
                  >
                    <svg
                      className="h-5 w-5 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#instagram"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300"
                  >
                    <svg
                      className="h-5 w-5 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>

              {submitStatus ? (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    submitStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Investment Opportunity">
                      Investment Opportunity
                    </option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Media Inquiry">Media Inquiry</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Let us know how we can help you..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
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

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about SolarCoin and our solar
            energy investment platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {faq.isOpen ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {faq.isOpen && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Can't find the answer you're looking for? Feel free to{" "}
            <a
              href="#contact-form"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Invest in Solar Energy?
          </h2>
          <p className="text-xl text-gray-900/90 max-w-2xl mx-auto mb-8">
            Join thousands of investors who are making a positive impact on the
            environment while earning returns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#signup"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
            >
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-gray-500 text-gray-900 font-medium rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

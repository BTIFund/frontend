import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubmitStatus({
                success: true,
                message: "Thank you for your message. We'll get back to you soon!",
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch {
            setSubmitStatus({
                success: false,
                message: "There was an error sending your message. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const formControls = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-2"
        >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Let&39;s Connect
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Fill out the form below and we&39;ll get back to you shortly.
                    </p>
                </motion.div>

                {submitStatus && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg mb-6 ${submitStatus.success
                                ? "bg-green-50 text-green-700 border border-green-200"
                                : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                    >
                        {submitStatus.message}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={formControls}
                        initial="initial"
                        animate="animate"
                    >
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-2"
                        variants={formControls}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.1 }}
                    >
                        <label className="text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
                        >
                            <option value="">Select a subject</option>
                            <option value="Investment Opportunity">Investment Opportunity</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Partnership">Partnership</option>
                            <option value="General Inquiry">General Inquiry</option>
                        </select>
                    </motion.div>

                    <motion.div
                        className="space-y-2"
                        variants={formControls}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.2 }}
                    >
                        <label className="text-sm font-medium text-gray-700">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors resize-none"
                            placeholder="How can we help you today?"
                        ></textarea>
                    </motion.div>

                    <motion.div
                        className="flex justify-end"
                        variants={formControls}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Message
                                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </motion.div>
                </form>
            </div>
        </motion.div>
    );
}
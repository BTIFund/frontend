"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import ContactCallToAction from "@/app/components/Contact-CallToAction";
import ContactFAQ from "@/app/components/Contact-FAQ";
import ContactForm from "@/app/components/Contact-Form";
import ContactInfo from "@/app/components/Contact-Info";
import ContactHero from "@/app/components/Contact-Hero";
import ContactMap from "@/app/components/Contact-Map";

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="bg-gray-100 min-h-screen text-gray-900">
      <Head>
        <title>Contact Us | SolarCoin</title>
        <meta
          name="description"
          content="Get in touch with the SolarCoin team for any questions about solar energy investment or blockchain technology."
        />
      </Head>

      <ContactHero />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ContactInfo />
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ContactMap />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ContactFAQ />
        <ContactCallToAction />
      </motion.div>
    </main>
  );
}

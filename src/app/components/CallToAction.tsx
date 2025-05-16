import { motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-400 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-900">
            Transform Your Portfolio, Transform Our Planet
          </h2>
          
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto text-blue-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Join the growing community of forward-thinking investors who are funding tomorrow&#39;s clean energy infrastructure while securing competitive financial returns today.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="/dashboard"
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-md transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              Launch Investment Platform
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-4 rounded-md transition duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.a>
          </motion.div>
          
          <motion.p
            className="text-sm mt-6 text-blue-900 opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Regulated by international financial authorities. Investments starting from just $100.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-9xl mb-4 text-[#7dd3fc]">404</h1>
        <h2 className="text-4xl mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#7dd3fc] text-black px-8 py-3 rounded-lg hover:bg-[#7dd3fc]/90 transition-all font-medium"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

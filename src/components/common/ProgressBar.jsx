import { motion } from 'framer-motion';

const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="bg-indigo-600 h-2.5 rounded-full"
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
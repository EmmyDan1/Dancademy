import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import FeaturedCourses from '../components/sections/FeaturedCourses';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedCourses />
      <Testimonials />
    </motion.div>
  );
};

export default Home;
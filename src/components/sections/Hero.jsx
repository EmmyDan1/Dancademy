import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Learn New Skills Online With Dancademy
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 text-indigo-100"
            >
              Access 5000+ online courses from 200+ leading instructors and
              universities.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button size="lg" className="w-full bg-yellow-primary sm:w-auto">
                Browse Courses
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Students learning"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block"
              >
                <div className="text-indigo-600 font-bold text-xl">5000+</div>
                <div className="text-gray-600">Online Courses</div>
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block"
              >
                <div className="text-indigo-600 font-bold text-xl">200+</div>
                <div className="text-gray-600">Expert Instructors</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { motion } from 'framer-motion';
import CourseCard from '../common/CourseCard';

const courses = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    description:
      'Learn advanced React patterns to build scalable and maintainable applications.',
    category: 'Programming',
    price: '$99',
    duration: '8 weeks',
    lessons: 32,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    instructor: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: 2,
    title: 'UI/UX Design Fundamentals',
    description:
      'Master the principles of user interface and experience design with practical projects.',
    category: 'Design',
    price: '$79',
    duration: '6 weeks',
    lessons: 24,
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    instructor: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  },
  {
    id: 3,
    title: 'Digital Marketing Masterclass',
    description:
      'Learn how to create effective digital marketing campaigns that drive results.',
    category: 'Business',
    price: '$89',
    duration: '5 weeks',
    lessons: 20,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    instructor: {
      name: 'Emily Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  },
];

const FeaturedCourses = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular courses that will help you grow your skills
            and career.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={item}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:border-[#e8db84] hover:text-[#e8db84] transition-colors font-medium">
            View All Courses
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
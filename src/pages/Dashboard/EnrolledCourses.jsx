import { motion } from 'framer-motion';
import ProgressBar from '../../components/common/ProgressBar';
import Button from '../../components/common/Button';

const enrolledCourses = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    progress: 65,
    lastAccessed: '2 days ago',
    instructor: 'Sarah Johnson',
  },
  {
    id: 2,
    title: 'UI/UX Design Fundamentals',
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    progress: 30,
    lastAccessed: '1 week ago',
    instructor: 'Michael Chen',
  },
];

const EnrolledCourses = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Your Courses</h2>
        <Button variant="outline">View All</Button>
      </div>

      <div className="space-y-6">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-full md:w-32 h-24 rounded-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-900">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Instructor: {course.instructor}
              </p>
              <div className="mb-2">
                <ProgressBar progress={course.progress} />
                <span className="text-xs text-gray-500">
                  {course.progress}% complete
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Last accessed: {course.lastAccessed}
              </p>
            </div>
            <div className="flex md:flex-col justify-end gap-2">
              <Button variant="outline" size="sm">
                Continue
              </Button>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EnrolledCourses;
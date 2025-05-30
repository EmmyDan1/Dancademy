import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const CourseCard = ({ course, showProgress = false, progress = 0 }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative pb-[56.25%] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
          {course.category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800 line-clamp-2">
            {course.title}
          </h3>
          <span className="text-indigo-600 font-semibold">{course.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-600">{course.instructor.name}</span>
          </div>
          <div className="text-sm text-gray-500">
            {course.duration} • {course.lessons} lessons
          </div>
        </div>
        {showProgress && (
          <div className="mt-4">
            <ProgressBar progress={progress} />
            <div className="text-xs text-gray-500 mt-1">
              {progress}% complete
            </div>
          </div>
        )}
        <Link
          to={`/courses/${course.id}`}
          className="block mt-4 w-full text-center py-2 bg-blue-900 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          {showProgress ? 'Continue' : 'View Course'}
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;
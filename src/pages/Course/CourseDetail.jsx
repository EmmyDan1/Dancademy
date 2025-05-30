import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';

const courses = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    description:
      'This comprehensive course will take you from intermediate React developer to advanced practitioner. You\'ll learn about compound components, render props, higher-order components, hooks patterns, and performance optimization techniques.',
    longDescription: `
      <p>In this course, you'll dive deep into advanced React patterns that will help you write more maintainable, flexible, and performant React applications. We'll start with the fundamentals of component composition and gradually move to more complex patterns used by professional React developers.</p>
      <p><strong>What you'll learn:</strong></p>
      <ul>
        <li>Compound component patterns for flexible APIs</li>
        <li>Render props and higher-order components</li>
        <li>Custom hooks patterns and best practices</li>
        <li>Performance optimization techniques</li>
        <li>Context API patterns for state management</li>
        <li>Advanced TypeScript with React</li>
      </ul>
      <p>By the end of this course, you'll be able to architect React applications with confidence, knowing which patterns to apply in different scenarios.</p>
    `,
    category: 'Programming',
    price: '$99',
    duration: '8 weeks',
    lessons: 32,
    level: 'Advanced',
    students: 1245,
    rating: 4.8,
    reviews: 328,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Senior Frontend Engineer with 8+ years of experience building React applications at scale. Previously worked at Facebook and Airbnb. Open source contributor and React conference speaker.',
    },
    syllabus: [
      {
        week: 1,
        title: 'Component Composition Fundamentals',
        lessons: [
          'Introduction to Component Patterns',
          'Controlled vs Uncontrolled Components',
          'Component Inheritance vs Composition',
        ],
      },
      {
        week: 2,
        title: 'Compound Components',
        lessons: [
          'Understanding Compound Components',
          'Flexible Component APIs',
          'Context API with Compound Components',
        ],
      },
      {
        week: 3,
        title: 'Render Props Pattern',
        lessons: [
          'What are Render Props?',
          'Building Flexible Components',
          'Render Props vs Hooks',
        ],
      },
      {
        week: 4,
        title: 'Higher-Order Components',
        lessons: [
          'Understanding HOCs',
          'Common HOC Patterns',
          'HOCs in Modern React',
        ],
      },
      {
        week: 5,
        title: 'Advanced Hooks Patterns',
        lessons: [
          'Custom Hook Patterns',
          'State Management with Hooks',
          'Performance Considerations',
        ],
      },
      {
        week: 6,
        title: 'Performance Optimization',
        lessons: [
          'React.memo and useMemo',
          'useCallback Pattern',
          'Profiling React Apps',
        ],
      },
      {
        week: 7,
        title: 'TypeScript with React',
        lessons: [
          'TypeScript Fundamentals',
          'Typing Component Props',
          'Advanced Type Patterns',
        ],
      },
      {
        week: 8,
        title: 'Final Project',
        lessons: [
          'Project Architecture',
          'Implementing Patterns',
          'Code Review',
        ],
      },
    ],
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {course.rating} ({course.reviews} reviews)
                </span>
                <span>{course.students} students</span>
                <span>{course.level} level</span>
                <span>{course.duration}</span>
                <span>{course.lessons} lessons</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="400"
                  src={course.videoPreview}
                  title="Course Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                About This Course
              </h2>
              <div
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: course.longDescription }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Course Syllabus
              </h2>
              <div className="space-y-4">
                {course.syllabus.map((week) => (
                  <div
                    key={week.week}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                      <h3 className="font-medium text-gray-800">
                        Week {week.week}: {week.title}
                      </h3>
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="px-4 py-2 bg-white">
                      <ul className="list-disc pl-5 space-y-1">
                        {week.lessons.map((lesson, index) => (
                          <li key={index} className="text-gray-600">
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md sticky top-4"
            >
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {course.price}
                </div>
                <Button size="lg" className="w-full">
                  Enroll Now
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    This course includes:
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {course.lessons} hours on-demand video
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {course.duration} of content
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Downloadable resources
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Certificate of completion
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Share this course:
                  </h3>
                  <div className="flex space-x-3">
                    <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Instructor</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {course.instructor.name}
              </h3>
              <p className="text-gray-600 mb-4">{course.instructor.bio}</p>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  View Profile
                </button>
                <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseDetail;
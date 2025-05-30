import { useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../../components/common/CourseCard';

const categories = [
  'All',
  'Programming',
  'Design',
  'Business',
  'Marketing',
  'Photography',
];

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
  {
    id: 4,
    title: 'Python for Data Science',
    description:
      'Learn Python programming and data analysis with real-world datasets.',
    category: 'Programming',
    price: '$109',
    duration: '10 weeks',
    lessons: 40,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    instructor: {
      name: 'David Kim',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  },
  {
    id: 5,
    title: 'Mobile App Design with Figma',
    description:
      'Design beautiful mobile apps from scratch using Figma and design systems.',
    category: 'Design',
    price: '$69',
    duration: '4 weeks',
    lessons: 16,
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    instructor: {
      name: 'Lisa Wong',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
  },
  {
    id: 6,
    title: 'Entrepreneurship 101',
    description:
      'Learn the fundamentals of starting and growing your own business.',
    category: 'Business',
    price: '$59',
    duration: '3 weeks',
    lessons: 12,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    instructor: {
      name: 'Robert Taylor',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
  },
];

const CoursesList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-[#e8db84] mb-6">All Courses</h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-[#e8db84] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No courses found matching your criteria
            </h3>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CoursesList;
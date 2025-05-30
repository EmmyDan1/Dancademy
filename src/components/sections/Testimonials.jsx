import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Alex Rodriguez',
    role: 'Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    content:
      'The courses on LearnHub transformed my career. I went from knowing basic HTML to landing a job as a React developer in just 6 months!',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'UX Designer',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    content:
      'The instructors are top-notch and the curriculum is well-structured. I was able to apply what I learned immediately to my design projects.',
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Marketing Manager',
    avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
    content:
      'The digital marketing course gave me practical skills that helped me double our company\'s online engagement in just 3 months.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community of learners who have transformed their careers
            with our courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
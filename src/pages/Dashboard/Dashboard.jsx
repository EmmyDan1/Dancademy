import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import EnrolledCourses from "./EnrolledCourses";
import ProfileSummary from "./ProfileSummary";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold space-x-2">
            <span className="text-blue-900">Welcome back,</span>
            <span className="text-[#e8db84]">{user?.name || "Demo user"}!</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Continue your learning journey or discover new courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <EnrolledCourses />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <ProfileSummary />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;

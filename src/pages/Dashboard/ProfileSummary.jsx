import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

import Button from "../../components/common/Button";

const ProfileSummary = () => {
  const { user } = useAuth();

  const stats = [
    { label: "Courses Enrolled", value: 5 },
    { label: "Courses Completed", value: 2 },
    { label: "Certificates", value: 1 },
    { label: "Learning Hours", value: 24 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt={user?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold text-gray-900">{user?.name}</h3>
        <p className="text-sm text-gray-600">{user?.email}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-50 p-3 rounded-lg text-center"
          >
            <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
            <p className="text-xs text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <Button className="w-full">Edit Profile</Button>
        <Button variant="outline" className="w-full">
          Account Settings
        </Button>
      </div>
    </motion.div>
  );
};

export default ProfileSummary;

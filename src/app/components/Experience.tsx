import { motion } from "framer-motion";

const experience = [
  // Example data, replace with your real experience
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "2023 - Present",
    description: "Worked on full-stack web development using React, Node.js, and MongoDB."
  },
  {
    role: "Intern",
    company: "Another Company",
    period: "2022 - 2023",
    description: "Assisted in building REST APIs and frontend features."
  }
];

const Experience = () => (
  <section id="experience" className="py-20 bg-white dark:bg-black">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">Experience</h2>
    </div>
    <div className="max-w-3xl mx-auto px-6 space-y-8">
      {experience.map((exp, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.03 }}
          className="bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-md p-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role} @ {exp.company}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
          <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "National Institute of Technology, Silchar",
    period: "2022 - Present",
    description: "Relevant coursework: Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks.",
    score: "CGPA: 7.83/10"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Sarada Junior College, Vijayawada",
    period: "2019 - 2021",
    description: "Physics, Chemistry, Mathematics",
    score: "Percentage: 94.8%"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Kennedy High School, Nunna",
    period: "2016 - 2019",
    description: "General Curriculum",
    score: "GPA: 10/10"
  }
];

const Education = () => (
  <section id="education" className="py-20 bg-white dark:bg-black">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">Education</h2>
    </div>
    <div className="max-w-3xl mx-auto px-6 space-y-8">
      {education.map((edu, idx) => (
        <div key={idx} className="bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{edu.institution} | {edu.period}</p>
          <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
          {edu.score && (
            <p className="text-gray-700 dark:text-gray-300 font-semibold mt-1">{edu.score}</p>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Education;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Database, BarChart3, Clock, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: string;
  color: string;
  image: string;
  features: string[];
  curriculum: string[];
  projects: string[];
  price: string;
}

const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs: Program[] = [
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Master the art of protecting digital assets and systems from cyber threats',
      duration: '6 months',
      level: 'Intermediate',
      icon: 'shield',
      color: 'from-red-500 to-pink-500',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      price: '$2,999',
      features: [
        'Ethical Hacking & Penetration Testing',
        'Network Security & Firewall Management',
        'Incident Response & Forensics',
        'Security Compliance & Risk Assessment'
      ],
      curriculum: [
        'Introduction to Cybersecurity',
        'Network Security Fundamentals',
        'Ethical Hacking Techniques',
        'Digital Forensics',
        'Security Risk Management',
        'Compliance and Governance'
      ],
      projects: [
        'Vulnerability Assessment Tool',
        'Network Intrusion Detection System',
        'Security Audit Report',
        'Incident Response Plan'
      ]
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      description: 'Build end-to-end web applications using modern technologies',
      duration: '8 months',
      level: 'Beginner to Advanced',
      icon: 'code',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      price: '$3,499',
      features: [
        'React.js & Node.js Development',
        'Database Design & Management',
        'RESTful API Development',
        'Cloud Deployment & DevOps'
      ],
      curriculum: [
        'HTML, CSS, JavaScript Fundamentals',
        'React.js Frontend Development',
        'Node.js Backend Development',
        'Database Design (SQL & NoSQL)',
        'API Development & Integration',
        'Cloud Deployment & DevOps'
      ],
      projects: [
        'E-commerce Platform',
        'Social Media Dashboard',
        'Task Management System',
        'Real-time Chat Application'
      ]
    },
    {
      id: 'datascience',
      title: 'Data Science',
      description: 'Extract insights from data using machine learning and statistical analysis',
      duration: '7 months',
      level: 'Intermediate',
      icon: 'database',
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      price: '$3,299',
      features: [
        'Python & R Programming',
        'Machine Learning Algorithms',
        'Data Visualization & Storytelling',
        'Big Data Technologies'
      ],
      curriculum: [
        'Python Programming for Data Science',
        'Statistics and Probability',
        'Data Cleaning and Preprocessing',
        'Machine Learning Algorithms',
        'Data Visualization',
        'Big Data and Cloud Computing'
      ],
      projects: [
        'Predictive Analytics Model',
        'Customer Segmentation Analysis',
        'Recommendation System',
        'Time Series Forecasting'
      ]
    },
    {
      id: 'dataanalysis',
      title: 'Data Analysis',
      description: 'Transform raw data into actionable business insights',
      duration: '5 months',
      level: 'Beginner',
      icon: 'chart',
      color: 'from-green-500 to-teal-500',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      price: '$2,499',
      features: [
        'Excel & SQL Mastery',
        'Statistical Analysis & Modeling',
        'Business Intelligence Tools',
        'Data Visualization & Reporting'
      ],
      curriculum: [
        'Excel Advanced Functions',
        'SQL Database Querying',
        'Statistical Analysis',
        'Power BI & Tableau',
        'Business Intelligence',
        'Data Storytelling'
      ],
      projects: [
        'Sales Performance Dashboard',
        'Market Research Analysis',
        'Financial Reporting System',
        'Customer Behavior Analysis'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      shield: Shield,
      code: Code,
      database: Database,
      chart: BarChart3
    };
    return icons[iconName as keyof typeof icons] || Code;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive internship programs designed to launch your career in tech
            </p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const IconComponent = getIcon(program.icon);
              
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    rotateX: 1,
                  }}
                  className="group relative bg-slate-800/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-500"
                  style={{
                    transform: 'perspective(1000px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Program Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {program.level}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Program Header */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                      <div className="text-2xl font-bold text-cyan-400">{program.price}</div>
                    </div>

                    <p className="text-gray-300 mb-6">{program.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-cyan-400" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {program.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProgram(program.id)}
                        className="flex-1 py-3 px-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        View Details
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 py-3 px-4 bg-gradient-to-r ${program.color} text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const program = programs.find(p => p.id === selectedProgram);
              if (!program) return null;
              
              const IconComponent = getIcon(program.icon);
              
              return (
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">{program.title}</h2>
                        <p className="text-gray-400">{program.duration} • {program.level}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProgram(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Curriculum</h3>
                      <ul className="space-y-2 mb-6">
                        {program.curriculum.map((item, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
                      <ul className="space-y-2 mb-6">
                        {program.projects.map((project, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-slate-700">
                    <div className="text-3xl font-bold text-cyan-400">{program.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-3 bg-gradient-to-r ${program.color} text-white rounded-xl font-semibold flex items-center space-x-2`}
                    >
                      <span>Enroll Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Programs;
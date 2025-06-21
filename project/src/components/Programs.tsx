import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Database, BarChart3, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import type { Program } from '../types';

const Programs: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const programs: Program[] = [
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Master the art of protecting digital assets and systems from cyber threats',
      duration: '6 months',
      level: 'Intermediate',
      icon: 'shield',
      color: 'from-red-500 to-pink-500',
      features: [
        'Ethical Hacking & Penetration Testing',
        'Network Security & Firewall Management',
        'Incident Response & Forensics',
        'Security Compliance & Risk Assessment'
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
      features: [
        'React.js & Node.js Development',
        'Database Design & Management',
        'RESTful API Development',
        'Cloud Deployment & DevOps'
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
      features: [
        'Python & R Programming',
        'Machine Learning Algorithms',
        'Data Visualization & Storytelling',
        'Big Data Technologies'
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
      features: [
        'Excel & SQL Mastery',
        'Statistical Analysis & Modeling',
        'Business Intelligence Tools',
        'Data Visualization & Reporting'
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
    <section id="programs" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive internship programs designed to launch your career in tech
            </p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const IconComponent = getIcon(program.icon);
              
              return (
                <motion.div
                  key={program.id}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: hoveredCard === program.id ? 5 : 0,
                    rotateX: hoveredCard === program.id ? 2 : 0,
                  }}
                  onHoverStart={() => setHoveredCard(program.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative"
                  style={{
                    transform: 'perspective(1000px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition-all duration-500 h-full">
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {program.duration}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {program.level}
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                      <p className="text-gray-300 mb-4">{program.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-cyan-400" />
                        What You'll Learn
                      </h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center text-gray-300"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 px-6 bg-gradient-to-r ${program.color} text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl`}
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <p className="text-gray-300 mb-6">
              Not sure which program is right for you?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
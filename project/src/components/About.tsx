import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Zap } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Industry-Focused',
      description: 'Curriculum designed with industry leaders to meet current market demands',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from professionals with 10+ years of experience in tech',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Certified Programs',
      description: 'Earn recognized certifications that boost your career prospects',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Hands-on Learning',
      description: 'Build real projects and gain practical experience',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
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
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Inlighn Tech</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering the next generation of tech professionals through innovative 
              internship programs and hands-on learning experiences.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div
              variants={fadeInLeft}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Bridging the Gap Between Education and Industry
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Inlighn Tech, we understand that the technology landscape is evolving 
                rapidly. Our mission is to prepare students and young professionals with 
                the skills, knowledge, and real-world experience needed to thrive in 
                today's competitive tech industry.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our comprehensive internship programs combine theoretical knowledge with 
                practical application, ensuring our graduates are job-ready from day one.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - 3D Card */}
            <motion.div
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative transform-gpu">
                <motion.div
                  animate={{
                    rotateY: [0, 5, 0, -5, 0],
                    rotateX: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-600"
                  style={{
                    transform: 'perspective(1000px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Our Vision</h4>
                    <p className="text-gray-300">
                      To be the leading provider of tech education and career development, 
                      creating a bridge between academic learning and industry requirements.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                }}
                className="bg-slate-700/50 backdrop-blur-lg rounded-xl p-8 border border-slate-600 hover:border-cyan-400 transition-all duration-300"
                style={{
                  transform: 'perspective(1000px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
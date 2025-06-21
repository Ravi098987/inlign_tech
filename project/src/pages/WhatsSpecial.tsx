import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Calendar, Users, Award, Clock, ArrowRight, CheckCircle, Gift, Target, Zap } from 'lucide-react';

const WhatsSpecial: React.FC = () => {
  const [activeTab, setActiveTab] = useState('testimonials');

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Full Stack Developer at Google',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      text: 'Inlighn Tech transformed my career. The hands-on projects and mentorship were incredible.',
      rating: 5,
      program: 'Full Stack Development'
    },
    {
      name: 'Sarah Chen',
      role: 'Cybersecurity Analyst at Microsoft',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      text: 'The cybersecurity program gave me real-world skills that I use every day in my job.',
      rating: 5,
      program: 'Cybersecurity'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Data Scientist at Amazon',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      text: 'The data science curriculum is cutting-edge and the instructors are industry experts.',
      rating: 5,
      program: 'Data Science'
    }
  ];

  const internsOfMonth = [
    {
      name: 'Emma Thompson',
      program: 'Full Stack Development',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      achievement: 'Built an innovative e-commerce platform with AI recommendations',
      month: 'December 2024'
    },
    {
      name: 'David Kim',
      program: 'Cybersecurity',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      achievement: 'Discovered critical vulnerabilities in a major web application',
      month: 'November 2024'
    },
    {
      name: 'Lisa Wang',
      program: 'Data Science',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      achievement: 'Created a predictive model with 95% accuracy for customer behavior',
      month: 'October 2024'
    }
  ];

  const projects = [
    {
      title: 'AI-Powered Healthcare Platform',
      student: 'John Doe',
      program: 'Full Stack Development',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      description: 'A comprehensive healthcare management system with AI diagnostics',
      tech: ['React', 'Node.js', 'TensorFlow', 'MongoDB']
    },
    {
      title: 'Network Security Scanner',
      student: 'Jane Smith',
      program: 'Cybersecurity',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      description: 'Advanced network vulnerability scanner with real-time monitoring',
      tech: ['Python', 'Nmap', 'Wireshark', 'Docker']
    },
    {
      title: 'Financial Fraud Detection',
      student: 'Mike Johnson',
      program: 'Data Science',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      description: 'Machine learning model to detect fraudulent transactions',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter']
    }
  ];

  const timeline = [
    {
      phase: 'Application',
      duration: '1 week',
      description: 'Submit application with portfolio and motivation letter',
      icon: Target
    },
    {
      phase: 'Technical Assessment',
      duration: '2 weeks',
      description: 'Complete coding challenges and technical interviews',
      icon: CheckCircle
    },
    {
      phase: 'Final Interview',
      duration: '1 week',
      description: 'Meet with program directors and industry mentors',
      icon: Users
    },
    {
      phase: 'Program Start',
      duration: '5-8 months',
      description: 'Begin your intensive learning journey',
      icon: Zap
    }
  ];

  const perks = [
    {
      title: 'Industry Mentorship',
      description: '1-on-1 guidance from senior professionals',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Job Placement Support',
      description: '98% job placement rate within 6 months',
      icon: Trophy,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Certification',
      description: 'Industry-recognized certificates',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Flexible Learning',
      description: 'Part-time and full-time options available',
      icon: Clock,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Project Portfolio',
      description: 'Build 4-6 real-world projects',
      icon: Gift,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Lifetime Access',
      description: 'Access to course materials forever',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const tabs = [
    { id: 'testimonials', label: 'Testimonials', icon: Star },
    { id: 'interns', label: 'Interns of the Month', icon: Trophy },
    { id: 'projects', label: 'Student Projects', icon: Award },
    { id: 'process', label: 'Selection Process', icon: Target }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What Makes Us <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Special</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover why thousands of students choose Inlighn Tech to launch their tech careers
            </p>
          </motion.div>

          {/* Perks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition-all duration-300"
                style={{
                  transform: 'perspective(1000px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${perk.color} rounded-xl flex items-center justify-center mb-6`}>
                  <perk.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{perk.title}</h3>
                <p className="text-gray-300">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-slate-700/50 rounded-2xl p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-slate-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'testimonials' && (
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600"
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        <p className="text-cyan-400 text-sm">{testimonial.program}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.text}"</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'interns' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">Interns of the Month Challenge</h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Every month, we recognize outstanding interns who go above and beyond in their learning journey
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {internsOfMonth.map((intern, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 relative overflow-hidden"
                    >
                      <div className="absolute top-4 right-4">
                        <Trophy className="w-8 h-8 text-yellow-400" />
                      </div>
                      <div className="text-center mb-6">
                        <img
                          src={intern.image}
                          alt={intern.name}
                          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-white">{intern.name}</h3>
                        <p className="text-cyan-400">{intern.program}</p>
                        <p className="text-gray-400 text-sm">{intern.month}</p>
                      </div>
                      <p className="text-gray-300 text-center">{intern.achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">Our Interns' Projects</h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Real projects built by our students that solve real-world problems
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-700/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-600"
                    >
                      <div className="relative h-48">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-cyan-400 text-sm mb-2">by {project.student} • {project.program}</p>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-slate-600 text-gray-300 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">How to Participate?</h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Our selection process is designed to identify passionate learners ready to commit to their growth
                  </p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                    {timeline.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative flex items-center mb-12"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mr-8 z-10">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1 bg-slate-700/50 rounded-2xl p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white">{step.phase}</h3>
                            <span className="text-cyan-400 font-medium">{step.duration}</span>
                          </div>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Rules and Requirements */}
                <div className="mt-16 grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-700/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Requirements</h3>
                    <ul className="space-y-3">
                      {[
                        'Basic programming knowledge (any language)',
                        'Strong motivation to learn and grow',
                        'Commitment to complete the program',
                        'Available for 20-40 hours per week',
                        'Good communication skills'
                      ].map((requirement, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-700/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Selection Criteria</h3>
                    <ul className="space-y-3">
                      {[
                        'Technical aptitude and problem-solving skills',
                        'Passion for technology and learning',
                        'Portfolio quality and creativity',
                        'Communication and teamwork abilities',
                        'Commitment and dedication level'
                      ].map((criteria, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                          {criteria}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold flex items-center space-x-2 mx-auto"
                  >
                    <span>Start Your Application</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhatsSpecial;
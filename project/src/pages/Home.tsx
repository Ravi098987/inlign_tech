import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Shield, Code, Database, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        {/* 3D Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
                x: [0, Math.sin(i) * 20, 0],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
              className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30"
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + (i % 3) * 25}%`,
                transform: `perspective(1000px) rotateX(${i * 15}deg) rotateY(${i * 20}deg)`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12 text-cyan-400" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
              Launch Your
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Tech Career
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Master cutting-edge technologies with our immersive internship programs in 
              <span className="text-cyan-400"> Cybersecurity</span>, 
              <span className="text-blue-400"> Full Stack Development</span>, 
              <span className="text-purple-400"> Data Science</span>, and 
              <span className="text-green-400"> Data Analysis</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/programs">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                    rotateX: 5,
                    rotateY: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold flex items-center space-x-3 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                  style={{ transform: 'perspective(1000px)' }}
                >
                  <span className="text-lg">Explore Programs</span>
                  <ArrowRight size={24} />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 rounded-2xl font-semibold flex items-center space-x-3 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                style={{ transform: 'perspective(1000px)' }}
              >
                <Play size={24} />
                <span className="text-lg">Watch Demo</span>
              </motion.button>
            </div>

            {/* Enhanced Stats with 3D Effect */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { number: '1000+', label: 'Students Trained', icon: '👨‍🎓' },
                { number: '98%', label: 'Job Placement', icon: '💼' },
                { number: '4', label: 'Tech Domains', icon: '🚀' },
                { number: '100+', label: 'Industry Partners', icon: '🤝' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                    rotateX: 5,
                    z: 50
                  }}
                  className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition-all duration-500 shadow-xl hover:shadow-2xl"
                  style={{ 
                    transform: 'perspective(1000px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center relative">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Programs Preview */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive internship programs designed to launch your career in tech
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Cybersecurity',
                icon: Shield,
                color: 'from-red-500 to-pink-500',
                image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
                duration: '6 months'
              },
              {
                title: 'Full Stack Development',
                icon: Code,
                color: 'from-blue-500 to-cyan-500',
                image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
                duration: '8 months'
              },
              {
                title: 'Data Science',
                icon: Database,
                color: 'from-purple-500 to-indigo-500',
                image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
                duration: '7 months'
              },
              {
                title: 'Data Analysis',
                icon: BarChart3,
                color: 'from-green-500 to-teal-500',
                image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
                duration: '5 months'
              }
            ].map((program, index) => (
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
                className="group relative bg-slate-700/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-600 hover:border-cyan-400 transition-all duration-500"
                style={{ 
                  transform: 'perspective(1000px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{program.duration}</p>
                  <Link to="/programs">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 px-4 bg-gradient-to-r ${program.color} text-white rounded-xl font-semibold flex items-center justify-center space-x-2`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View All Programs
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
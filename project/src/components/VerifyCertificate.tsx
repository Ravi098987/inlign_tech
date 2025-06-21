import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Award, Calendar, User, FileText, CheckCircle, XCircle, X } from 'lucide-react';
import { fadeInUp, scaleIn } from '../utils/animations';

const VerifyCertificate: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificateId, setCertificateId] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock certificate data
  const mockCertificates = {
    'INTECH2024001': {
      id: 'INTECH2024001',
      studentName: 'John Doe',
      program: 'Full Stack Development',
      issueDate: '2024-01-15',
      certificateNumber: 'INTECH2024001',
      grade: 'A+',
      duration: '8 months',
      instructor: 'Sarah Johnson',
      valid: true
    },
    'INTECH2024002': {
      id: 'INTECH2024002',
      studentName: 'Jane Smith',
      program: 'Cybersecurity',
      issueDate: '2024-02-20',
      certificateNumber: 'INTECH2024002',
      grade: 'A',
      duration: '6 months',
      instructor: 'Michael Chen',
      valid: true
    }
  };

  const handleSearch = async () => {
    if (!certificateId.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const result = mockCertificates[certificateId as keyof typeof mockCertificates];
      setSearchResult(result || { valid: false });
      setIsLoading(false);
    }, 1500);
  };

  const resetSearch = () => {
    setCertificateId('');
    setSearchResult(null);
  };

  return (
    <section id="verify" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Verify <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Certificate</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Authenticate the legitimacy of certificates issued by Inlighn Tech
            </p>
          </motion.div>

          {/* Search Interface */}
          <motion.div
            variants={scaleIn}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="certificate-id" className="block text-sm font-medium text-gray-300 mb-2">
                    Certificate ID
                  </label>
                  <input
                    type="text"
                    id="certificate-id"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                    placeholder="Enter certificate ID (e.g., INTECH2024001)"
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSearch}
                    disabled={isLoading || !certificateId.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Search className="w-5 h-5" />
                    )}
                    <span>{isLoading ? 'Searching...' : 'Verify'}</span>
                  </motion.button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 pt-6 border-t border-slate-600">
                <p className="text-gray-400 text-sm mb-3">Try these sample IDs:</p>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(mockCertificates).map((id) => (
                    <button
                      key={id}
                      onClick={() => setCertificateId(id)}
                      className="px-3 py-1 bg-slate-600 text-gray-300 rounded-lg text-sm hover:bg-slate-500 transition-colors"
                    >
                      {id}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search Results */}
          {searchResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              {searchResult.valid ? (
                <div className="bg-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-green-500/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                      <h3 className="text-2xl font-bold text-white">Certificate Verified</h3>
                    </div>
                    <button
                      onClick={resetSearch}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Student Name</p>
                          <p className="text-white font-semibold">{searchResult.studentName}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Program</p>
                          <p className="text-white font-semibold">{searchResult.program}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Issue Date</p>
                          <p className="text-white font-semibold">{new Date(searchResult.issueDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Certificate Number</p>
                          <p className="text-white font-semibold">{searchResult.certificateNumber}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Grade</p>
                          <p className="text-white font-semibold">{searchResult.grade}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Instructor</p>
                          <p className="text-white font-semibold">{searchResult.instructor}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-600">
                    <div className="flex items-center justify-between">
                      <p className="text-green-400 font-semibold">✓ This certificate is authentic and valid</p>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <XCircle className="w-8 h-8 text-red-400" />
                      <h3 className="text-2xl font-bold text-white">Certificate Not Found</h3>
                    </div>
                    <button
                      onClick={resetSearch}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <p className="text-gray-300 mb-6">
                    The certificate ID "{certificateId}" could not be found in our database. 
                    Please check the ID and try again.
                  </p>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-red-400 text-sm">
                      ⚠️ If you believe this is an error, please contact our support team with the certificate details.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VerifyCertificate;
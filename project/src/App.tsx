import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import VerifyCertificate from './pages/VerifyCertificate';
import Contact from './pages/Contact';
import WhatsSpecial from './pages/WhatsSpecial';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-900">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/verify" element={<VerifyCertificate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/whats-special" element={<WhatsSpecial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        
        <Footer />
        <Chatbot />
      </div>
    </AuthProvider>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomDetail from './components/RoomDetail';
import { NotFound } from './components';
import QRGenerator from './components/QRGenerator';

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-2xl max-w-sm sm:max-w-md w-full animate-fade-in">
      <div className="text-4xl sm:text-6xl mb-4">🏫</div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        Selamat Datang
      </h1>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Sistem Inventaris Digital<br/>Sekolah Regina Pacis Jakarta
      </p>
      <p className="text-xs sm:text-sm text-gray-500">
        Scan QR Code untuk melihat detail kelas
      </p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<RoomDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/qrgenerator' element={<QRGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
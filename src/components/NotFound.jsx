import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-2xl max-w-sm sm:max-w-md w-full animate-fade-in">
        <div className="text-4xl sm:text-6xl mb-4">❌</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Maaf, halaman yang Anda cari tidak tersedia.
        </p>
        <Link 
          to="/"
          className="inline-block bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:bg-green-600 transition-colors duration-300 text-sm sm:text-base"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
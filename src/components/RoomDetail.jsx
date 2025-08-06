import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { roomsData } from '../data';
import { InfoCard, AssetItem, MapModal } from './index';
import Logo from '../assets/logo.png';

export function GalleryWithCarousel({ images = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide setiap 3 detik
  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">📷</div>
          <p className="text-gray-500">Tidak ada gambar tersedia</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
          >
            ❯
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const RoomDetail = () => {
  const { roomId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ambil data kelas berdasarkan roomId
  const roomInfo = roomsData[roomId];

  // Update document title dinamis
  useEffect(() => {
    if (roomInfo) {
      document.title = `${roomInfo.name} - Regina Pacis Jakarta`;
    } else {
      document.title = `Kelas Tidak Ditemukan - Regina Pacis Jakarta`;
    }

    // Cleanup: reset title saat component unmount
    return () => {
      document.title = 'Sekolah Regina Pacis Jakarta';
    };
  }, [roomInfo]);

  // Jika kelas tidak ditemukan
  if (!roomInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-2xl animate-fade-in max-w-sm sm:max-w-md w-full">
          <div className="text-4xl sm:text-6xl mb-4">❌</div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Kelas Tidak Ditemukan
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Kelas "{roomId}" tidak tersedia dalam sistem
          </p>
        </div>
      </div>
    );
  }

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Ambil gambar dari data roomInfo, jika tidak ada gunakan fallback
  const carouselImages = roomInfo.images || [
    {
      src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: `Gambar ${roomInfo.name} - View 1`
    },
    {
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: `Gambar ${roomInfo.name} - View 2`
    },
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: `Gambar ${roomInfo.name} - View 3`
    }
  ];

  return (
    <div className="min-h-screen bg-white p-2 sm:p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 via-violet-600 to-pink-500 text-white p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 relative z-10">
            <div className="flex-shrink-0">
              <img src={Logo} alt="Logo Sekolah" className='w-28 h-28 object-contain'/>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl lg:text-3xl">📚</span>
                <span>{roomInfo.name}</span>
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl opacity-90">
                {roomInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Room Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <InfoCard icon="📊" title="Informasi Umum">
              <p className='mb-1'>
                <span className='font-medium'>Nama Ruang:</span> {roomInfo.nameClass}
              </p>
              <p className="mb-1">
                <span className="font-medium">Kapasitas:</span> {roomInfo.capacity}
              </p>
              <p className="mb-1">
                <span className="font-medium">Luas Ruang:</span> {roomInfo.size}
              </p>
            </InfoCard>

            <InfoCard icon="🏢" title="Lokasi & Akses">
              <p className="mb-1">
                <span className="font-medium">Gedung:</span> {roomInfo.building}
              </p>
              <p className="mb-1">
                <span className="font-medium">Lantai:</span> {roomInfo.floor}
              </p>
              <p className="mb-1">
                <span className="font-medium">Kode Ruang:</span> {roomInfo.roomNumber}
              </p>
            </InfoCard>
          </div>

          {/* Gallery Carousel Section */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">📸</span>
              <span>Galeri Ruangan</span>
            </h2>
            <div className="max-w-5xl mx-auto">
              <GalleryWithCarousel images={carouselImages} />
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">🗺️</span>
              <span>Denah Ruangan</span>
            </h2>
            <div 
              className="bg-gray-50 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 text-center cursor-pointer hover:border-green-500 hover:scale-102 transition-all duration-300 hover:shadow-lg"
              onClick={openModal}
            >
              <div className="relative w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl shadow-inner overflow-hidden">
                <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center">
                  {roomInfo.mapImage ? (
                    <img 
                      src={roomInfo.mapImage} 
                      alt={`Denah ${roomInfo.name}`}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  ) : (
                    <div className="text-center px-4">
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-4">🗺️</div>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700">
                        Denah {roomInfo.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                        Klik untuk melihat detail
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 italic mt-3 sm:mt-4">
                Klik untuk melihat denah detail dengan keterangan lengkap
              </p>
            </div>
          </div>

          {/* Assets Section */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">📦</span>
              <span>Inventaris Ruangan</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {roomInfo.assets.map((asset, index) => (
                <AssetItem 
                  key={index}
                  icon={asset.icon}
                  name={asset.name}
                  count={asset.count}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 sm:p-6 text-center text-gray-600 text-xs sm:text-sm">
          <p className="mb-1 sm:mb-2">
            © 2025 Regina Pacis Jakarta | HRGA - Inventory
          </p>
        </div>
      </div>

      {/* Modal */}
      <MapModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        legendItems={roomInfo.legendItems}
        mapImage={roomInfo.mapImage}
      />
    </div>
  );
};


export default RoomDetail;

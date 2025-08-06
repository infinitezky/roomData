import React, { useEffect } from 'react';

const MapModal = ({ isOpen, onClose, legendItems, mapImage }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4 animate-fade-in">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-slide-in">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 sm:p-6 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl">🗺️</span>
            <span className="hidden sm:inline">Detail Denah Ruangan</span>
            <span className="sm:hidden">Denah Ruangan</span>
          </h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 flex-shrink-0"
          >
            <span className="text-xl sm:text-2xl">×</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Map Image */}
          <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl shadow-inner mb-6 sm:mb-8 overflow-hidden">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center p-4">
              {mapImage ? (
                <img 
                  src={mapImage} 
                  alt="Denah Ruangan"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              ) : (
                <div className="text-center px-4">
                  <div className="text-4xl sm:text-6xl md:text-8xl mb-2 sm:mb-4">🗺️</div>
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
                    Denah Detail Ruangan
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
                    Gambar denah akan ditampilkan di sini
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-green-500">
  <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6">
    Keterangan Denah
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
    {legendItems.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl border hover:border-green-500 hover:translate-x-1 sm:hover:translate-x-2 transition-all duration-300 hover:shadow-md"
      >
        <div 
          className="text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-sm flex-shrink-0"
          style={{ 
            backgroundColor: item.color || '#22c55e',
            border: `2px solid ${item.outline || '#374151'}`,
            color: item.textColor || '#000000'
          }}
        >
          {item.number}
        </div>
        <div className="font-medium text-gray-800 text-sm sm:text-base">
          {item.name}
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
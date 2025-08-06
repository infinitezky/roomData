import React from 'react';

const AssetItem = ({ icon, name, count }) => {
  // Cek apakah icon adalah path SVG atau emoji
  const isSvg = icon && (icon.startsWith('/') || icon.startsWith('http')) && icon.includes('.svg');

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 text-center hover:border-green-500 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 hover:shadow-lg group">
      <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center items-center">
        {isSvg ? (
          <div className="relative">
            <img 
              src={icon} 
              alt={name} 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
              onError={(e) => {
                // Fallback ke emoji default jika SVG gagal dimuat
                console.warn(`Failed to load SVG: ${icon}`);
                e.target.style.display = 'none';
                const fallbackSpan = e.target.nextElementSibling;
                if (fallbackSpan) {
                  fallbackSpan.style.display = 'block';
                }
              }}
              onLoad={(e) => {
                // Sembunyikan fallback emoji jika SVG berhasil dimuat
                const fallbackSpan = e.target.nextElementSibling;
                if (fallbackSpan) {
                  fallbackSpan.style.display = 'none';
                }
              }}
            />
            {/* Fallback emoji jika SVG gagal dimuat */}
            <span 
              className="text-2xl sm:text-3xl md:text-4xl"
              style={{ display: 'none' }}
            >
              📦
            </span>
          </div>
        ) : (
          // Tampilkan emoji langsung jika bukan SVG
          <span className="block">{icon || '📦'}</span>
        )}
      </div>
      
      <div className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm md:text-base leading-tight">
        {name}
      </div>
      
      <div className="text-gray-600 text-xs sm:text-sm">{count}</div>
    </div>
  );
};

export default AssetItem;
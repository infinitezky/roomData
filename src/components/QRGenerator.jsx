import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { roomsData } from '../data';

const QRGenerator = () => {
  const [qrCodes, setQrCodes] = useState({});
  const [loading, setLoading] = useState(true);
  
  const baseUrl = 'https://room-data-one.vercel.app/'; // Ganti dengan domain Anda

  useEffect(() => {
    const generateQRCodes = async () => {
      const codes = {};
      
      for (const roomId in roomsData) {
        const url = `${baseUrl}/kelas/${roomId}`;
        try {
          const qrDataUrl = await QRCode.toDataURL(url, {
            width: 200,
            margin: 2,
            color: {
              dark: '#000000',
              light: '#FFFFFF'
            }
          });
          codes[roomId] = qrDataUrl;
        } catch (error) {
          console.error(`Error generating QR for ${roomId}:`, error);
        }
      }
      
      setQrCodes(codes);
      setLoading(false);
    };

    generateQRCodes();
  }, []);

  const downloadQR = (roomId, qrDataUrl) => {
    const link = document.createElement('a');
    link.download = `QR-${roomsData[roomId].name}.png`;
    link.href = qrDataUrl;
    link.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
        <div className="text-white text-2xl">Generating QR Codes...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            🏫 QR Code Generator - Inventaris Kelas
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(qrCodes).map(([roomId, qrDataUrl]) => (
              <div 
                key={roomId}
                className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {roomsData[roomId].name}
                </h3>
                
                <div className="mb-4">
                  <img 
                    src={qrDataUrl} 
                    alt={`QR Code ${roomsData[roomId].name}`}
                    className="mx-auto rounded-lg shadow-md"
                  />
                </div>
                
                <div className="text-sm text-gray-600 mb-4 break-all">
                  {baseUrl}/kelas/{roomId}
                </div>
                
                <button
                  onClick={() => downloadQR(roomId, qrDataUrl)}
                  className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors duration-300 font-medium"
                >
                  📥 Download QR
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">💡 Cara Penggunaan:</p>
            <p>1. Download QR Code sesuai kelas</p>
            <p>2. Print dan tempel di pintu kelas</p>
            <p>3. Scan QR Code untuk melihat detail inventaris</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default QRGenerator;

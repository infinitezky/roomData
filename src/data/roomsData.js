export const roomsData = {
  "030301": {
    name: "Kelas VIII B",
    location: "Lantai 3 - Gedung SMP",
    capacity: "30 siswa",
    size: "8m x 6m",
    nameClass: "Kelas VIII B",
    subject: "Semua mapel",
    building: "SMP",
    floor: "3",
    roomNumber: "R03-03-01",
    access: "Tangga utama",
    
    // field images untuk carousel
    images: [
      {
        src: "/images/rooms/7a/kelas-7a-view1.jpeg",
        alt: "Tampak depan Kelas St. Cecilia"
      },
      {
        src: "/images/rooms/7a/kelas-7a-view2.jpeg", 
        alt: "Suasana belajar di Kelas St. Cecilia"
      },
      {
        src: "/images/rooms/7a/kelas-7a-view3.jpeg",
        alt: "Fasilitas AC dan proyektor Kelas St. Cecilia"
      },
      {
        src: "/images/rooms/7a/kelas-7a-view4.jpeg",
        alt: "Bagian belakang Kelas St. Cecilia"
      }
    ],
    
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit"},
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit"},
      { icon: "/icons/speaker.svg", name: "Speaker", count: "3 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit"},
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit"},
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit"},
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit"},
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit"},
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit"},
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit"},
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set"},
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit"},
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit"},
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit"}
    ],
    mapImage: "/maps/r030202.jpg",
    legendItems: [
      { number: 1, name: "Pintu Masuk", color: "#fffff"},
      { number: 2, name: "Speaker", color: "#7ba9e1", textColor: "#fffff"},
      { number: 3, name: "CCTV", color: "#fffff"},
      { number: 4, name: "Papan Data Informasi", color: "#d7d7d7"},
      { number: 5, name: "Lemari", color: "#ff8c8e"},
      { number: 6, name: "Bendera", color: "#8a2d3b", textColor: "#fffff"},
      { number: 7, name: "Tempat Sampah", color: "#379e90", textColor: "#fffff"},
      { number: 8, name: "Papan Tulis", color: "#641b2e", textColor: "#fffff"},
      { number: 9, name: "Layar Proyektor", color: "#fed2e2"},
      { number: 10, name: "Ornamen Negara", color: "#be5b50", textColor: "#fffff"},
      { number: 11, name: "Kursi Guru", color: "#ffc000"},
      { number: 12, name: "Meja Guru", color: "#fbdb93"},
      { number: 13, name: "Proyektor", color: "#ff7979"},
      { number: 14, name: "IP Camera", color: "#fdff85"},
      { number: 15, name: "Router", color: "#f4f4f4"},
      { number: 16, name: "Kursi & Meja Siswa", color: "#89a3fe"},
      { number: 17, name: "AC", color: "#e9ecff"},
      { number: 18, name: "Jendela", color: "#fffff"},
      { number: 19, name: "Salib", color: "#414258", textColor: "#fffff"},
      { number: 20, name: "Loker", color: "#ffff7f"},
      { number: 21, name: "Blackboard", color: "#fffff"},
      { number: 22, name: "Jam Dinding", color: "#2c9df5", textColor: "#fffff"}
    ]
  },
  
  "7b": {
    name: "Kelas 7B",
    location: "Lantai 2 - Gedung Utama",
    capacity: "30 siswa",
    size: "8m x 6m",
    nameClass: "7B",
    subject: "Semua mapel",
    building: "Utama",
    floor: "2",
    roomNumber: "201",
    access: "Tangga utama",
    
    // Images untuk kelas 7B
    images: [
      {
        src: "/images/rooms/7b/kelas-7b-view1.jpg",
        alt: "Tampak depan Kelas 7B"
      },
      {
        src: "/images/rooms/7b/kelas-7b-view2.jpg",
        alt: "Suasana kelas 7B saat pembelajaran"
      },
      {
        src: "/images/rooms/7b/kelas-7b-view3.jpg",
        alt: "Area belakang Kelas 7B"
      }
    ],
    
    assets: [
      { icon: "/icons/chair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/desk.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "4 unit" },
      { icon: "/icons/ac.svg", name: "AC", count: "2 unit" },
    ],
    mapImage: "/images/maps/7b-map.jpg",
    legendItems: [
      { number: 1, name: "Pintu Masuk", color: "bg-red-500" },
      { number: 2, name: "Jam Dinding" },
    ]
  },
  
  // Contoh kelas dengan gambar dari URL eksternal
  "tk-a": {
    name: "TK A",
    location: "Lantai 1 - Gedung TK",
    capacity: "20 anak",
    size: "6m x 8m",
    nameClass: "TK A",
    subject: "Pembelajaran Anak Usia Dini",
    building: "TK",
    floor: "1",
    roomNumber: "TK.01",
    access: "Pintu utama gedung TK",
    
    // Menggunakan gambar dari URL eksternal (sementara)
    images: [
      {
        src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        alt: "Area bermain TK A"
      },
      {
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        alt: "Area belajar TK A"
      },
      {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        alt: "Mainan edukatif TK A"
      }
    ],
    
    assets: [
      { icon: "/icons/chair-small.svg", name: "Kursi Anak", count: "20 unit" },
      { icon: "/icons/desk-small.svg", name: "Meja Anak", count: "20 unit" },
      { icon: "/icons/toys.svg", name: "Mainan Edukatif", count: "15 set" },
      { icon: "/icons/books.svg", name: "Buku Cerita", count: "50 buku" },
      { icon: "/icons/art-supplies.svg", name: "Alat Gambar", count: "20 set" },
    ],
    mapImage: "/images/maps/tk-a-map.jpg",
    legendItems: [
      { number: 1, name: "Pintu Masuk", color: "bg-red-500" },
      { number: 2, name: "Area Bermain", color: "bg-blue-500" },
      { number: 3, name: "Area Belajar", color: "bg-green-500" },
    ]
  },
  
  // Contoh kelas tanpa gambar (akan menggunakan fallback)
  "8a": {
    name: "Kelas 8A",
    location: "Lantai 2 - Gedung SMP",
    capacity: "32 siswa",
    size: "8m x 7m",
    nameClass: "8A",
    subject: "Semua mapel",
    building: "SMP",
    floor: "2",
    roomNumber: "R02.02.01",
    access: "Tangga utama",
    
    // Tidak ada images - akan menggunakan fallback
    // images: undefined,
    
    assets: [
      { icon: "/icons/table.svg", name: "Kursi Siswa", count: "32 unit" },
      { icon: "/icons/desk.svg", name: "Meja Siswa", count: "32 unit" },
      { icon: "/icons/whiteboard.svg", name: "Whiteboard", count: "1 unit" },
      { icon: "/icons/ac.svg", name: "AC", count: "2 unit" },
    ],
    mapImage: "/images/maps/8a-map.jpg",
    legendItems: [
      { number: 1, name: "Pintu Masuk", color: "bg-red-500" },
      { number: 2, name: "Whiteboard", color: "bg-gray-500" },
    ]
  }

};


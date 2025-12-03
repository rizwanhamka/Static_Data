// db.js

// DATA READ-ONLY (Static)
export const db = {
  gallery: [
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/771796",
    "https://via.placeholder.com/600/24f355",
    "https://via.placeholder.com/600/d32776",
  ],
  pemberitahuan: [
    // Hanya ambil 3 nanti di logic
    "https://via.placeholder.com/150/92c952",
    "https://via.placeholder.com/150/771796",
    "https://via.placeholder.com/150/24f355",
    "https://via.placeholder.com/150/f66b97",
  ],
  berita: [
    {
      id: 1,
      image: "https://via.placeholder.com/400",
      title: "Lomba Coding Nasional",
      description: "Lomba coding untuk mahasiswa seluruh Indonesia.",
      date: "2023-10-25",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400",
      title: "Update Sistem Kampus",
      description: "Sistem akademik akan maintenance minggu depan.",
      date: "2023-11-02",
    },
  ],
  kepengurusan: [
    {
      nama: "Budi Santoso",
      nip: "198001012000031001",
      peran: "Kepala Lab",
      email: "budi@univ.ac.id",
      foto: "https://i.pravatar.cc/150?u=budi",
    },
    {
      nama: "Siti Aminah",
      nip: "198502022005012005",
      peran: "Sekretaris",
      email: "siti@univ.ac.id",
      foto: "https://i.pravatar.cc/150?u=siti",
    },
  ],

  // DATA WRITE (Bisa nambah)
  feedback: [],
  users: [],
};

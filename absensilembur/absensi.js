// Data Absensi (JSON)
const attendanceData = [
    { pertemuan: 1, tanggal: "01 Nov 2024", waktu: "08:00 - 16:00", status: "Hadir" },
    { pertemuan: 2, tanggal: "02 Nov 2024", waktu: "08:00 - 16:00", status: "Tidak Hadir" },
    { pertemuan: 3, tanggal: "03 Nov 2024", waktu: "08:00 - 16:00", status: "Hadir" },
  ];
  
  // Fungsi Menampilkan Data ke Tabel
  const renderTable = () => {
    const tableBody = document.getElementById("attendance-table");
    let hadirCount = 0;
  
    attendanceData.forEach((data) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.pertemuan}</td>
        <td>${data.tanggal}</td>
        <td>${data.waktu}</td>
        <td>${data.status}</td>
      `;
      if (data.status === "Hadir") hadirCount++;
      tableBody.appendChild(row);
    });
  
    document.getElementById("total-hadir").textContent = hadirCount;
  };
  
  // Event Listener untuk Pop-Up
  document.getElementById("absen-btn").addEventListener("click", () => {
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");
  });
  
  // Tutup Pop-Up
  document.getElementById("close-popup").addEventListener("click", () => {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
  });
  
  // Jalankan Fungsi
  renderTable();
// Data Statistik Personal (Simulasi)
const statistics = {
    totalHadirBulanIni: 18,
    totalIzin: 2,
    rataRataDurasi: 7.5,
  };
  
  // Render Statistik
  const renderStatistics = () => {
    document.getElementById("total-bulan-ini").textContent = statistics.totalHadirBulanIni;
    document.getElementById("total-izin").textContent = statistics.totalIzin;
    document.getElementById("rata-rata-durasi").textContent = `${statistics.rataRataDurasi} jam`;
  };
  
  // Export Data (Simulasi)
  document.getElementById("export-data").addEventListener("click", () => {
    alert("Riwayat absensi akan diunduh dalam format Excel atau PDF.");
  });
  
  // Formulir Koreksi Absensi
  document.getElementById("koreksi-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const alasan = document.getElementById("koreksi-alasan").value;
    const tanggal = document.getElementById("tanggal-koreksi").value;
    const bukti = document.getElementById("lampiran-bukti").files[0]?.name || "Tidak ada bukti";
  
    const koreksiItem = document.createElement("li");
    koreksiItem.classList.add("status-item");
    koreksiItem.textContent = `[Sedang Diproses] ${tanggal}: ${alasan} (Bukti: ${bukti})`;
  
    document.getElementById("koreksi-status").appendChild(koreksiItem);
  
    alert("Permintaan koreksi berhasil diajukan!");
    document.getElementById("koreksi-form").reset();
  });
  
  // Jalankan Fungsi Statistik
  renderStatistics();
    
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("logbookForm");
    const downloadPDFButton = document.getElementById("downloadPDF");
  
    // Event listener untuk submit form
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Logbook berhasil dikirim!");
      form.reset();
    });
  
    // Event listener untuk unduh PDF
    downloadPDFButton.addEventListener("click", () => {
      const date = document.getElementById("date").value;
      const task = document.getElementById("task").value;
      const startTime = document.getElementById("start-time").value;
      const endTime = document.getElementById("end-time").value;
      const notes = document.getElementById("notes").value;
  
      if (!date || !task || !startTime || !endTime) {
        alert("Harap lengkapi semua bidang yang wajib diisi!");
        return;
      }
  
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF();
      pdf.setFont("helvetica");
      pdf.setFontSize(12);
  
      pdf.text("Logbook Harian", 105, 20, { align: "center" });
      pdf.text(`Tanggal: ${date}`, 10, 30);
      pdf.text(`Deskripsi Tugas: ${task}`, 10, 40);
      pdf.text(`Waktu Mulai: ${startTime}`, 10, 50);
      pdf.text(`Waktu Selesai: ${endTime}`, 10, 60);
      pdf.text(`Catatan Tambahan: ${notes}`, 10, 70);
  
      pdf.save(`Logbook_${date}.pdf`);
    });
  });
  
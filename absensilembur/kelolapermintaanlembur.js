document.addEventListener('DOMContentLoaded', () => {
  const addEmployeeButton = document.querySelector('.tambah-pegawai');
  addEmployeeButton.addEventListener('click', () => {
    alert('Fitur Tambah Pegawai belum tersedia!');
  });

  const editButtons = document.querySelectorAll('.btn.edit');
  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      alert('Edit fitur sedang dikembangkan.');
    });
  });

  const deleteButtons = document.querySelectorAll('.btn.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin menghapus pegawai ini?')) {
        alert('Data telah dihapus.');
      }
    });
  });

  const koreksiButtons = document.querySelectorAll('.btn.koreksi');
  koreksiButtons.forEach((button) => {
    button.addEventListener('click', () => {
      alert('Fitur Koreksi Absensi belum tersedia!');
    });
  });

  const logoutButton = document.getElementById('logout');
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Yakin ingin logout?')) {
      alert('Anda telah logout.');
      window.location.href = '#'; // Redirect sesuai kebutuhan
    }
  });
});
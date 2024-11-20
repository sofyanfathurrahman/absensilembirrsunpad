// Dropdown Menu Toggle
const userDropdown = document.getElementById('userDropdown');
const dropdownMenu = document.getElementById('dropdownMenu');

userDropdown.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', (event) => {
  if (!userDropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = 'none';
  }
});
// Tombol Setujui
document.querySelectorAll('.approve-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        const statusCell = row.querySelector('.status-pending');
        statusCell.textContent = 'Disetujui';
        statusCell.classList.remove('status-pending');
        statusCell.classList.add('status-approved');
    });
});

// Tombol Tolak
document.querySelectorAll('.reject-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        const statusCell = row.querySelector('.status-pending');
        statusCell.textContent = 'Ditolak';
        statusCell.classList.remove('status-pending');
        statusCell.classList.add('status-rejected');
    });
});

// Tombol Tanda Tangan
document.querySelectorAll('.sign-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('signModal').style.display = 'flex';
    });
});

// Tombol Tutup Modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('signModal').style.display = 'none';
});

// Konfirmasi Tanda Tangan
document.querySelector('.confirm-sign').addEventListener('click', () => {
    const signature = document.getElementById('signature').value;
    if (signature) {
        alert('Tanda tangan berhasil!');
        document.getElementById('signModal').style.display = 'none';
    } else {
        alert('Harap masukkan tanda tangan!');
    }
});
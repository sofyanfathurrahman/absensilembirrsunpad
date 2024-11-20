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
const ctx = document.getElementById('attendanceChart').getContext('2d');

// Membuat grafik batang dengan Chart.js
const attendanceChart = new Chart(ctx, {
    type: 'bar', // Jenis grafik (bar chart)
    data: {
        labels: ['Perawat', 'Laboratorium', 'Administrasi', 'Apoteker'], // Label unit
        datasets: [{
            label: 'Persentase Kehadiran (%)',
            data: [98, 85, 75, 92], // Data kehadiran per unit
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)', // Warna batang
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)', // Warna border
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1 // Lebar border
        }]
    },
    options: {
        responsive: true, // Grafik responsif
        maintainAspectRatio: false, // Tidak memaksa aspek rasio
        scales: {
            y: {
                beginAtZero: true, // Mulai dari 0
                max: 100 // Maksimum 100
            }
        },
        plugins: {
            legend: {
                position: 'top', // Posisi legend
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        console.log(context); // Debug data tooltip
                        return '${context.raw}% Kehadiran'; // Gunakan context.raw di Chart.js 3.x+
                    }
                }
            }
        }
    }
});
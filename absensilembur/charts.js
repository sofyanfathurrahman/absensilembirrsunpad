// Attendance Chart Data
const ctxAttendance = document.getElementById('attendanceChart').getContext('2d');
const attendanceChart = new Chart(ctxAttendance, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'], // Per Minggu
    datasets: [
      {
        label: 'Bulan 1',
        data: [20, 18, 22, 21, 25, 23],
        borderColor: '#52CCB6',
        backgroundColor: 'rgba(82, 204, 182, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Bulan 2',
        data: [25, 24, 23, 22, 26, 27],
        borderColor: '#FFA500',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Bulan 3',
        data: [23, 20, 21, 24, 26, 28],
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grafik Absensi',
      },
    },
  },
});

// Overtime Chart Data
const ctxOvertime = document.getElementById('overtimeChart').getContext('2d');
const overtimeChart = new Chart(ctxOvertime, {
  type: 'bar',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'], // Per Minggu
    datasets: [
      {
        label: 'Lembur (Jam)',
        data: [5, 7, 6, 4, 8, 9],
        backgroundColor: '#52CCB6',
        borderColor: '#52CCB6',
        borderWidth: 1,
      },
      {
        label: 'Kinerja Kerja (%)',
        data: [80, 85, 88, 82, 90, 92],
        backgroundColor: '#FFA500',
        borderColor: '#FFA500',
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grafik Lembur/Kinerja Kerja',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

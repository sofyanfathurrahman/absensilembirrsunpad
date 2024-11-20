// Tambahkan Event Listener setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    // Tambahkan interaktivitas untuk tombol hapus
    const deleteButtons = document.querySelectorAll(".button.delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const confirmDelete = confirm("Apakah Anda yakin ingin menghapus data ini?");
            if (confirmDelete) {
                alert("Data berhasil dihapus!");
                // Logika penghapusan data di backend dapat ditambahkan di sini
                button.closest("tr").remove(); // Menghapus baris tabel
            }
        });
    });

    // Tambahkan interaktivitas untuk tombol koreksi
    const correctionButtons = document.querySelectorAll(".button.correction");
    correctionButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Fitur koreksi akan segera tersedia.");
            // Logika tambahan bisa ditambahkan di sini
        });
    });

    // Tambahkan efek animasi pada sidebar
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebarLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        });
    });
    
    // Tambahkan fitur dinamis untuk menambah data pegawai
    const addEmployeeButton = document.querySelector(".button");
    addEmployeeButton.addEventListener("click", () => {
        const employeeTable = document.querySelector("#data-pegawai tbody");
        const newRow = `
            <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>jane.doe@example.com</td>
                <td>Pegawai</td>
                <td>
                    <button class="button edit"><i class="fas fa-edit"></i> Edit</button>
                    <button class="button delete"><i class="fas fa-trash"></i> Hapus</button>
                </td>
            </tr>
        `;
        employeeTable.innerHTML += newRow;
        alert("Data pegawai baru berhasil ditambahkan!");
    });

    // Tambahkan animasi pada tombol logout
    const logoutButton = document.querySelector(".logout");
    logoutButton.addEventListener("click", () => {
        const confirmLogout = confirm("Apakah Anda yakin ingin keluar?");
        if (confirmLogout) {
            alert("Anda telah logout.");
            // Logika logout dapat ditambahkan di sini
            window.location.href = "login.html"; // Redirect ke halaman login (ubah sesuai kebutuhan)
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebarLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Logout Confirmation
    document.querySelector(".logout").addEventListener("click", () => {
        if (confirm("Apakah Anda yakin ingin keluar?")) {
            alert("Logout berhasil!");
            window.location.href = "login.html"; // Sesuaikan halaman login
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Filter Tanggal
    const filterButton = document.querySelector(".button");
    const filterDateInput = document.querySelector("#filter-date");

    filterButton.addEventListener("click", () => {
        const selectedDate = filterDateInput.value;
        if (selectedDate) {
            alert(`Menampilkan data untuk tanggal: ${selectedDate}`);
            // Logika untuk memfilter data di tabel
        } else {
            alert("Pilih tanggal terlebih dahulu.");
        }
    });
});
// Open modal for editing
function openModal(button) {
    const row = button.closest("tr");
    const cells = row.querySelectorAll("td");
    
    // Populate modal fields
    document.getElementById("edit-name").value = cells[1].innerText;
    document.getElementById("edit-date").value = cells[2].innerText;
    document.getElementById("edit-in-time").value = cells[3].innerText;
    document.getElementById("edit-out-time").value = cells[4].innerText;
    document.getElementById("edit-status").value = cells[5].innerText;

    // Show modal
    document.getElementById("modal").style.display = "block";
}

// Close modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Save changes and update table
function saveChanges() {
    const name = document.getElementById("edit-name").value;
    const date = document.getElementById("edit-date").value;
    const inTime = document.getElementById("edit-in-time").value;
    const outTime = document.getElementById("edit-out-time").value;
    const status = document.getElementById("edit-status").value;

    // Find and update the row in the table
    const rows = document.querySelectorAll("#absensi-data tr");
    rows.forEach(row => {
        if (row.cells[1].innerText === name && row.cells[2].innerText === date) {
            row.cells[3].innerText = inTime;
            row.cells[4].innerText = outTime;
            row.cells[5].innerText = status;
        }
    });

    // Close modal
    closeModal();
}

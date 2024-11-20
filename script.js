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

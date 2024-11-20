// Toggle Notification Popup
function toggleNotification() {
    const notificationPopup = document.querySelector(".notification-popup");
    notificationPopup.style.display =
      notificationPopup.style.display === "block" ? "none" : "block";
  }
  
  // Show Notification Detail
  function showNotificationDetail(detail) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    popupText.innerText = detail;
    popup.style.display = "block";
  }
  
  // Close Popup
  function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  
  // Toggle User Menu
  function toggleUserMenu() {
    const userMenu = document.querySelector(".user-menu");
    userMenu.style.display = userMenu.style.display === "block" ? "none" : "block";
  }
  
  // Logout Action
  function logout() {
    alert("Anda telah keluar.");
    // Redirect to login page (if necessary)
  }
  

  
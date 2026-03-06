let isDarkMode = false;

let savedMode = localStorage.getItem("darkMode");

if(savedMode !== null){
    isDarkMode =(savedMode==="true");

}

let toggleBtn = document.getElementById("toggleBtn");

// Hàm áp dụng chế độ lên trang
function applyMode() {
  if (isDarkMode) {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
    toggleBtn.textContent = "Chuyển sang Light Mode";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    toggleBtn.textContent = "Chuyển sang Dark Mode";
  }

  // Lưu chế độ vào localStorage
  localStorage.setItem("darkMode", isDarkMode);
}

// Áp dụng chế độ ban đầu khi load trang
applyMode();

// Khi click nút
toggleBtn.addEventListener("click", function() {
  // Đảo ngược chế độ
  isDarkMode = !isDarkMode;

  // Áp dụng thay đổi
  applyMode();

  console.log("Chế độ hiện tại:", isDarkMode ? "Dark" : "Light");
});
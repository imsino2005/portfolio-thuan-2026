let button = document.getElementById("doiMau");

button.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgreen";
    console.log("bạn vừa click vào button");
});

let tuoi = 14;
let buttonTuoi = document.getElementById("kiemtratuoi");
let ketqua =  document.getElementById("ketqua");

buttonTuoi.addEventListener("click", function() {
    if (tuoi >= 18) {
        ketqua.textContent = "Bạn đủ tuổi để xem phim";
        ketqua.style.color = "green";
        ketqua.style.backgroundColor = "#e8f5e9";
    } else if (tuoi >= 13 && tuoi < 18){
        ketqua.textContent = "Đủ tuổi xem phim nhưng đi cùng người lớn nhé";
        ketqua.style.color = "orange";
        ketqua.style.backgroundColor = "#fff3e0"; 
    }
    else{
        ketqua.textContent = "Bạn chưa đủ tuổi để xem phim";
        ketqua.style.color = "red";
        ketqua.style.backgroundColor = "#ffebee";
    }
});

let SoLanClick = 0;
let buttonDoiMau = document.getElementById("doimau");

buttonDoiMau.addEventListener("click", function() {
    SoLanClick = SoLanClick + 1;
    if (SoLanClick <= 3) {
        document.body.style.backgroundColor = "lightblue";
        console.log("Lần đầu tiên thành xanh nhạt");
    } else if (SoLanClick > 3 && SoLanClick <= 6) {
        document.body.style.backgroundColor = "lightcoral";
        console.log("Lần thứ 4-6 thành đỏ nhạt");
    } else{
        document.body.style.backgroundColor = "yellow";
        console.log("Lần thứ 7 thành vàng");
    }
});

let isDarkMode = false;
let buttonToggle = document.getElementById("togglemode");
let clickCountDisplay = document.getElementById("clickCount");
let SoLanClickToggle = 0;

buttonToggle.addEventListener("click", function() {     
    SoLanClickToggle++;
    clickCountDisplay.textContent = "Số lần chuyển đổi mode : " + SoLanClickToggle;
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        console.log("Chế độ tối đã được bật");
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        console.log("Chế độ sáng đã được bật");
    }
    alert("Bạn đã chuyển đổi chế độ " + (isDarkMode ? "tối" : "sáng") + "!");
});

let kyNang = ["HTML", "CSS", "Flexbox"];

let danhsach= document.getElementById("kyNangList");


function hienThiKyNang() {
    danhsach.innerHTML = ""; // xoá nd cũ
    kyNang.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item;
        danhsach.appendChild(li);
    });
}

let buttonThemKyNang = document.getElementById("themkyNang");
let input = document.getElementById("kyNangInput");
buttonThemKyNang.addEventListener("click", function() {
    let kyNangMoi = input.value.trim();  // Lấy giá trị từ input và loại bỏ khoảng trắng
    if (kyNangMoi !== "") {  // Kiểm tra nếu không rỗng
        kyNang.push(kyNangMoi); // Thêm kỹ năng mới vào mảng=
        input.value = ""; // Xóa nội dung trong input sau khi thêm
        hienThiKyNang(); // Cập nhật lại danh sách hiển thị 
        console.log("Kỹ năng mới đã được thêm: " + kyNangMoi);
    } else {
        alert("Vui lòng nhập một kỹ năng trước khi thêm.");
    }

});
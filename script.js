let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let buttonDangNhap = document.getElementById("dangNhapBtn");
let thongBao = document.getElementById("thongBao");
let thanhCong = document.getElementById("thanhCong");
let form = document.getElementById("dangNhapForm");
let buttonDangXuat = document.getElementById("dangXuatBtn");


const USERNAME_DUNG ="admin";
const PASSWORD_DUNG ="123";
let daDangNhap = false;

buttonDangNhap.addEventListener("click", function() {
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    if(username=== "" || password === ""){
        thongBao.textContent="Vui long nhap du tk mk";
        thongBao.style.color = "red";
        return;
    }

    if (username === USERNAME_DUNG && password === PASSWORD_DUNG) {
        thongBao.style.color = "green";
        daDangNhap= true;
        form.style.display= "none";
        thanhCong.style.display="block";
    } else{
        thongBao.textContent="tk or mk sai";
        thongBao.style.color="red";
    }

        usernameInput.value="";
        passwordInput.value="";
     });

     buttonDangXuat.addEventListener("click", function(){
        daDangNhap = false;
        form.style.display= "block";
        thanhCong.style.display="none";
        console.log("da dang xuat");
     });
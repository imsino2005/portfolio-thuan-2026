let usernameInput=document.getElementById("username");
let passwordInput=document.getElementById("password");
let buttonDangNhap=document.getElementById("dangNhapBtn");
let thongBao=document.getElementById("thongBao");
let thanhCong=document.getElementById("thanhCong");
let form=document.getElementById("dangNhapForm");

const USERNAME_DUNG= "admin";
const PASSWORD_DUNG= "123456";

buttonDangNhap.addEventListener("click", function(event){
    let username=usernameInput.value.trim();
    let password=passwordInput.value.trim();

    if(username === "" && password === ""){
        thongBao.textContent="Vui lòng nhập tên đăng nhập và mật khẩu.";
        thongBao.style.color="red";
        return;
    }
    
    if(username === USERNAME_DUNG && password === PASSWORD_DUNG){
        thongBao.textContent="Đăng nhập thành công!";
        thongBao.style.color="green";
        
        form.style.display="none";
        thanhCong.style.display="block";
    } else {
        thongBao.textContent="Tên đăng nhập hoặc mật khẩu không đúng.";
        thongBao.style.color="red";
    }

    usernameInput.value="";
    passwordInput.value="";
});


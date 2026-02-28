let inputTen = document.getElementById("ten");
let buttonGui = document.getElementById("gui");
let loiChao = document.getElementById("loiChao");

buttonGui.addEventListener("click", function() {
    let ten= inputTen.value.trim();
    
if (ten === "") {
    loiChao.textContent = "Vui lòng nhập tên của bạn.";
    loiChao.style.color = "red";
} else{
    loiChao.textContent = "Xin chào, " + ten + "!";
    loiChao.style.color = "green";
    inputTen.value="";
}
});
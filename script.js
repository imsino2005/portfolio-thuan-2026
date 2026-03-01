let kyNang =["HTML","CSS","Flexbox"];

let saved= localStorage.getItem("kyNang");
if(saved){
    kyNang=JSON.parse(saved);
}

let danhSach = document.getElementById("kyNangList");
let input = document.getElementById("kyNangInput");
let buttonThem = document.getElementById("themKyNang");

function hienThiKyNang(){
    danhSach.innerHTML = "";
    kyNang.forEach(function(item){
    let li = document.createElement("li");
    li.textContent = item;
    danhSach.appendChild(li);  

    li.addEventListener("click", function(){
        kyNang = kyNang.filter(ky => ky !== item);
        localStorage.setItem("kyNang", JSON.stringify(kyNang));
        hienThiKyNang();
        console.log("Đã xoá: " + item)
        });
    });
}

hienThiKyNang();
buttonThem.addEventListener("click", function(){
    let kyNangMoi = input.value.trim();
    if (kyNangMoi !== "") {
        kyNang.push(kyNangMoi);
        localStorage.setItem("kyNang", JSON.stringify(kyNang));
        hienThiKyNang();
        console.log("Đã thêm: " + kyNangMoi);
        input.value = "";
    } else {
        alert("Vui lòng nhập kỹ năng!");
    }
});
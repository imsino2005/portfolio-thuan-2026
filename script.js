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
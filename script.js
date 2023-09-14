let avatar = document.getElementsByClassName("avatar");
let faces = Array.from(avatar);
let frame = document.querySelector(".frame");
let blurElement = document.querySelector(".blur");
let background = document.querySelector(".background");
let nameOk = document.querySelector(".name");
let information = document.querySelector(".information");
let infor = document.querySelector(".infor");


nameOk.innerText = "Welcome To B8,";

console.log(blurElement)
faces.map(function(face, index) {
    blurElement.style.height = "100%";
    background.style.width = "100%";
    background.style.top = "0";
    background.style.left = "0";

    face.onmouseover = function(event) {
        frame.style.opacity = "1";
        frame.style.transition = "1s";
        frame.style.width = "700px";
        blurElement.style.height = "200%";
        information.style["color"] = "white";

        if (face.classList.contains("thinh")) {
            background.style.width = "8000px";
            background.style.height = "auto";
            background.style.top = "-2530px";
            background.style.left = "-2030px";
            nameOk.innerText = "Thịnh?";
            infor.innerText = "HẠNG 1 B8";
        }

        if (face.classList.contains("vinh")) {
            background.style.width = "8000px";
            background.style.height = "auto";
            background.style.top = "-2030px";
            background.style.left = "-2480px";
            nameOk.innerText = "Vinh Phan";
            infor.innerText = "lớp phó kỉ luật sắp hết nhiệm kì";
        }

        if (face.classList.contains("cong")) {
            background.style.width = "8000px";
            background.style.height = "auto";
            background.style.top = "-2330px";
            background.style.left = "-4740px";
            nameOk.innerText = "Kong";
            infor.innerText = 
            `youngzboisitinh...
            
            "chàng trai hài hước con tìm đầy vết xước"`;
        }

        if (face.classList.contains("quang")) {
            background.style.width = "8000px";
            background.style.height = "auto";
            background.style.top = "-2240px";
            background.style.left = "-4410px";
            nameOk.innerText = "Wang";
            infor.innerText = "tôi bị ngu.";
        }

        if (face.classList.contains("dat")) {
            background.style.width = "8000px";
            background.style.height = "auto";
            background.style.top = "-2590px";
            background.style.left = "-3810px";
            nameOk.innerText = "Đạt09";
            infor.innerText = "thằng này hơi trẻ trâu";
        }

        if (face.classList.contains("huy")) {
            background.style.width = "8000px";
            background.style.height = "auto";
            background.style.top = "-2500px";
            background.style.left = "-22px";
            nameOk.innerText = "Chó";
            infor.innerText = `gâu gâu gâu
            
            "ching chong ding dong"`;
        }

        if (face.classList.contains("thanh")) {
            background.style.width = "8000px";
            background.style.height = "auto";
            background.style.top = "-2480px";
            background.style.left = "-892px";
            nameOk.innerText = "Thành Draw";
            infor.innerText = "hot boy mái ngố";
        }
    }
    face.onmouseout  = function(event) {
        frame.style.opacity = "0";
        frame.style.transition = "0.3s";
        frame.style.width = "0px";
        blurElement.style.height = "100%";
        background.style.width = "100%";
        background.style.top = "0";
        background.style.left = "0";
        nameOk.innerText = "Welcome To B8,";
        information.style["color"] = "black";
        infor.innerText = "";
    }
})
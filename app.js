const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

// setInterval(function () { console.log(new Date()) }, 1000);

setInterval(function () {
    const d = new Date();
    const h = d.getHours() % 12;
    const m = d.getMinutes();
    const s = d.getSeconds();
    // console.log(h + " " + " " + m + " " + s);
    hour.style.transform = "translate(259.5px, 259.5px) rotate(" + (h * 30 + 270) + "deg)";
    min.style.transform = "translate(260.5px, 260.5px) rotate(" + (m * 6 + 270) + "deg)";
    sec.style.transform = "translate(261.25px, 261.25px) rotate(" + (s * 6 + 270) + "deg)";
    // console.log(d);
}, 1000);
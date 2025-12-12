let c = 3;
let count = document.getElementById("count");

let interval = setInterval(() => {
    c--;
    if (c > 0) {
        count.textContent = c;
    } else {
        clearInterval(interval);
        count.style.display = "none";

        document.getElementById("gift").classList.remove("hidden");
        document.getElementById("msg").classList.remove("hidden");
    }
}, 1000);

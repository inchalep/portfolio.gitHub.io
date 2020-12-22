// ====================== Toggel menubar =====================================

let toggle = document.querySelector(".toggle");
let menuList = document.querySelector(".menu");
toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    menuList.classList.toggle("active");
    console.log("clicked")
});

// ====================== Text Animation =====================================

let textArr = ["Web Designer.", "Dreamer.", "Web Developer"];
let index = 0;
let count = 0;
let textWord = "";
let textChar = "";

(function textAnim() {
    if (count === textArr.length) {
        count = 0;
    }
    textWord = textArr[count];
    textChar = textWord.slice(0, ++index);
    document.querySelector(".words").textContent = textChar;
    if (textChar.length === textWord.length) {
        count++;
        index = 0;
    }
    setTimeout(textAnim, 300)
})();


// ==========================Scroll to top ================================

let scrollBtn = document.querySelector("#scroll_btn");

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollBtn.style.display = "block";
    }
    else {
        scrollBtn.style.display = "none";
    }
});
scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth"
    });
});
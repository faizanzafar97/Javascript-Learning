let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function () {

    let left_count = 20 - inp.value.length;
    span.textContent = left_count;

    if (left_count < 0) {
        span.style.color = "red";
        inp.style.borderColor = "red";
    } else if (left_count <= 5) {
        span.style.color = "orange";
        inp.style.borderColor = "orange";
    } else {
        span.style.color = "#667eea";
        inp.style.borderColor = "#667eea";
    }

});
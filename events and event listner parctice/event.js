let button = document.querySelector("#input");
let file = document.querySelector("#file");

button.addEventListener("click", function () {
    file.click();
});

file.addEventListener("change", function (dets) {

    button.textContent = dets.target.files[0].name;

});
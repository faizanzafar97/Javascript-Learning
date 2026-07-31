let button = document.querySelector("#input");
let file = document.querySelector("#file");

button.addEventListener("click", function () {
    file.click();
});

file.addEventListener("change", function (dets) {

    const file =dets.target.files[0];
    if (file){  button.textContent = file?.name;}
   
});
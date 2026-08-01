let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#card-container");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = inputs[0].value;
    img.classList.add("profile-pic");

    let h2 = document.createElement("h2");
    h2.textContent = inputs[1].value;
    h2.classList.add("name");

    let h4 = document.createElement("h4");
    h4.textContent = inputs[2].value;
    h4.classList.add("occupation");

    let p = document.createElement("p");
    p.textContent = inputs[3].value;
    p.classList.add("description");

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(h4);
    card.appendChild(p);

    // Optional: remove previous card
    main.innerHTML = "";

    main.appendChild(card);

    form.reset();
});
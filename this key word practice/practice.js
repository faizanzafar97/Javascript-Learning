
let form = document.querySelector("#userForm");

let username = document.querySelector("#nameInput");
let role = document.querySelector("#roleInput");
let bio = document.querySelector("#bioInput");
let pic_url = document.querySelector("#photoInput");

const usermanger = {

    users: [
        {
            id: 1,
            username: "John Doe",
            role: "Frontend Developer",
            bio: "Loves building beautiful UIs and learning new technologies.",
            photo: "https://i.pravatar.cc/150?img=11"
        }
    ],

    init: function () {

        form.addEventListener(
            "submit",
            this.submitform.bind(this)
        );

        this.renderUI();
    },

    submitform: function (e) {

        e.preventDefault();

        this.adduser();

        this.renderUI();
    },

    adduser: function () {

        const newUser = {

            id: Date.now(),

            username: username.value,

            role: role.value,

            bio: bio.value,

            photo: pic_url.value
        };

        this.users.push(newUser);

        form.reset();
    },

    renderUI: function () {

        const container =
            document.querySelector("#cardsContainer");

        container.innerHTML = "";

        this.users.forEach((user) => {

            // Create card
            const card =
                document.createElement("div");

            card.className = "user-card";


            // Create image
            const img =
                document.createElement("img");

            img.src = user.photo;

            img.alt = user.username;


            // Create name
            const name =
                document.createElement("h3");

            name.textContent = user.username;


            // Create role
            const role =
                document.createElement("p");

            role.className = "role";

            role.textContent = user.role;


            // Create bio
            const bio =
                document.createElement("p");

            bio.className = "bio";

            bio.textContent = user.bio;


            // Create remove button
            const removeBtn =
                document.createElement("button");

            removeBtn.textContent = "Remove User";

            removeBtn.className = "remove-btn";


            // Remove button click
            removeBtn.addEventListener("click", () => {

                this.removeuser(user.id);

            });


            // Add elements to card
            card.appendChild(img);

            card.appendChild(name);

            card.appendChild(role);

            card.appendChild(bio);

            card.appendChild(removeBtn);


            // Add card to container
            container.appendChild(card);
        });
    },


    removeuser: function (id) {

        this.users = this.users.filter(function (user) {

            return user.id !== id;

        });

        this.renderUI();
    }
};


usermanger.init();


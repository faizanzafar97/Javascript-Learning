let container = document.querySelector("#card-container");

let refreshBtn = document.querySelector("#refreshBtn");


// ========================================
// FETCH USERS FUNCTION
// ========================================

function getUsers() {

    // Remove old cards
    container.innerHTML = "";


    // Show loading message
    let loading = document.createElement("p");

    loading.className =
        "text-white text-xl";

    loading.textContent =
        "Loading users...";

    container.appendChild(loading);


    // Fetch API
    fetch("https://randomuser.me/api/?results=10")

        .then((raw) => raw.json())

        .then((data) => {

            // Remove loading message
            container.innerHTML = "";


            // Loop through users
            data.results.forEach((user) => {


                // ========================================
                // MAIN CARD
                // ========================================

                let card = document.createElement("div");

                card.className =
                    "w-80 bg-gray-900 rounded-2xl shadow-2xl " +
                    "overflow-hidden border border-gray-800";


                // ========================================
                // COVER
                // ========================================

                let cover = document.createElement("div");

                cover.className =
                    "h-24 bg-gradient-to-r from-blue-600 to-purple-700";

                card.appendChild(cover);


                // ========================================
                // IMAGE CONTAINER
                // ========================================

                let imageContainer = document.createElement("div");

                imageContainer.className =
                    "flex justify-center";


                // ========================================
                // PROFILE IMAGE
                // ========================================

                let image = document.createElement("img");

                image.src = user.picture.large;

                image.alt =
                    user.name.first + " " + user.name.last;

                image.className =
                    "w-24 h-24 rounded-full border-4 " +
                    "border-gray-900 object-cover -mt-12";

                imageContainer.appendChild(image);

                card.appendChild(imageContainer);


                // ========================================
                // USER INFORMATION
                // ========================================

                let userInfo = document.createElement("div");

                userInfo.className =
                    "text-center px-6 pb-6";


                // ========================================
                // NAME
                // ========================================

                let name = document.createElement("h2");

                name.className =
                    "text-2xl font-bold text-white mt-3";

                name.textContent =
                    user.name.first + " " + user.name.last;

                userInfo.appendChild(name);


                // ========================================
                // USERNAME
                // ========================================

                let username = document.createElement("p");

                username.className =
                    "text-gray-400";

                username.textContent =
                    "@" + user.login.username;

                userInfo.appendChild(username);


                // ========================================
                // COUNTRY
                // ========================================

                let country = document.createElement("p");

                country.className =
                    "text-blue-400 font-semibold mt-2";

                country.textContent =
                    user.location.country;

                userInfo.appendChild(country);


                // ========================================
                // EMAIL
                // ========================================

                let email = document.createElement("p");

                email.className =
                    "text-gray-400 text-sm mt-3 " +
                    "leading-relaxed break-all";

                email.textContent =
                    user.email;

                userInfo.appendChild(email);


                // ========================================
                // BUTTON CONTAINER
                // ========================================

                let buttons = document.createElement("div");

                buttons.className =
                    "flex gap-3 mt-5";


                // ========================================
                // FOLLOW BUTTON
                // ========================================

                let followBtn = document.createElement("button");

                followBtn.className =
                    "flex-1 bg-blue-600 text-white py-2 " +
                    "rounded-lg hover:bg-blue-700 " +
                    "transition duration-300";

                followBtn.textContent =
                    "Follow";


                // ========================================
                // MESSAGE BUTTON
                // ========================================

                let messageBtn = document.createElement("button");

                messageBtn.className =
                    "flex-1 border border-gray-700 " +
                    "text-gray-300 py-2 rounded-lg " +
                    "hover:bg-gray-800 transition duration-300";

                messageBtn.textContent =
                    "Message";


                // ========================================
                // ADD BUTTONS
                // ========================================

                buttons.appendChild(followBtn);

                buttons.appendChild(messageBtn);

                userInfo.appendChild(buttons);


                // ========================================
                // ADD USER INFO TO CARD
                // ========================================

                card.appendChild(userInfo);


                // ========================================
                // ADD CARD TO CONTAINER
                // ========================================

                container.appendChild(card);

            });

        })

        .catch((error) => {

            // Remove loading
            container.innerHTML = "";


            // Error message
            let errorMessage = document.createElement("p");

            errorMessage.className =
                "text-red-500 text-xl";

            errorMessage.textContent =
                "Failed to load users. Please try again.";

            container.appendChild(errorMessage);

            console.log("Error:", error);

        });
}


// ========================================
// INITIAL LOAD
// ========================================

getUsers();


// ========================================
// REFRESH BUTTON
// ========================================

refreshBtn.addEventListener("click", () => {

    getUsers();

});
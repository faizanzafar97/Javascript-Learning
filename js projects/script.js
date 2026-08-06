
        const users = [
            {
                name: "Faizan Zafar",
                pic:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500", 
                bio: "Silent chaos in a loud world 🖤 | not for everyone",
            },
            {
                name: "Ayesha Khan",
                pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
                bio: "Trust Allah's plan. Everything happens for a reason. 🤍",
            },
            {
                name: "Fatima Noor",
                pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
                bio: "Kind heart, peaceful soul, endless duas. 🌙",
            },
            {
                name: "Zain Ahmed",
                pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
                bio: "Less talk, more action. 💯",
            },
            {
                name: "Muhammad Ali",
                pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
                bio: "Faith, family, and hard work. ❤️",
            },
            {
                name: "Abdullah Sheikh",
                pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500",
                bio: "Alhamdulillah for everything. 🤲",
            },
            {
                name: "Hafsa Malik",
                pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
                bio: "Finding beauty in simplicity. 🌸",
            },
            {
                name: "Maryam Siddiqui",
                pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500",
                bio: "Dream big, pray more, smile always. 😊",
            }
        ];

        function showusers(arr) {
            // Grab the container by its ID
            const container = document.getElementById("card-container");
            
            // Clear the container first (useful if you plan on adding real search functionality later)
            container.innerHTML = ""; 

            arr.forEach((user) => {
                const card = document.createElement("div");
                card.className = "card";

                const img = document.createElement("img");
                img.className = "bg-img";
                img.src = user.pic;
                img.alt = user.name;

                const blurredLayer = document.createElement("div");
                blurredLayer.className = "blurred-layer";
                blurredLayer.style.backgroundImage = `url(${user.pic})`;

                const content = document.createElement("div");
                content.className = "content";

                const heading = document.createElement("h3");
                heading.textContent = user.name;

                const paragraph = document.createElement("p");
                paragraph.textContent = user.bio;

                // Assemble the HTML
                content.appendChild(heading);
                content.appendChild(paragraph);

                card.appendChild(img);
                card.appendChild(blurredLayer);
                card.appendChild(content);

                // Append card to the main container
                container.appendChild(card);
            });
        }

        // Initialize the function on page load
        showusers(users);

     let input = document.querySelector("#search-input");

input.addEventListener("input", function() {
    // 1. Get the typed value and make it lowercase
    let searchValue = input.value.toLowerCase();

    let newuser = users.filter((user) => {
        // 2. Make the user's name lowercase and see if it includes the search value
        return user.name.toLowerCase().includes(searchValue); 
    });
    
    // 3. Show the filtered users! 
    // (Note: I removed the .innerHTML = "" line here because your 
    // showusers() function already does that automatically!)
    showusers(newuser);
});

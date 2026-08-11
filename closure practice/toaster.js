function createToaster(config) {
    return function(str){
        let div = document.createElement("div");
        div.textContent = str;
        
        // Changed from the long Tailwind string to our beautiful custom CSS class
        div.className = "toast";
        
        document.querySelector(".parent").appendChild(div);
        
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});

// Test it out!
toaster("Download done");

setTimeout(()=>{
 toaster("hi faizan");
},2000)
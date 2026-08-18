let images= document.querySelectorAll("img");

const observer= new IntersectionObserver(
    function(entries,observer){
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                const img =entry.target;
                img.src=img.dataset.src;
                img.classList.add("loaded");
                observer.unobserve(entry);
            }
        });
    },{
        root : null,
        threshold: 0.3
    }
);

images.forEach((img)=>{
    observer.observe(img);
})
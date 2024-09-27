var contEl =document.querySelector(".container")

contEl.addEventListener("mousemove", (event) => {
    const rectanglelocation =contEl.getBoundingClientRect();
    const inside = event.clientX - rectanglelocation.left;

    if(inside < rectanglelocation.width/2){
        var redcolor = gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, inside);
        gsap.to(contEl, {
            backgroundColor :`rgba(${redcolor}, 0,0)`,
            ease: Power4,
        })
    }
    else{
        var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width, 0, 255, inside);
        gsap.to(contEl, {
            backgroundColor :`rgba(0, 0,${bluecolor})`,
            ease: Power4,
        })
    }
})
contEl.addEventListener("mouseleave", (event) => {
    gsap.to(contEl, {
        backgroundColor:"white"
    })
})
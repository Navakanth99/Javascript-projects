window.addEventListener("mousemove", function(detail){
   var rect =this.document.querySelector(".rect"); 
   var val = gsap.utils.mapRange(0, window.innerWidth, 100, window.innerWidth-100, detail.clientX)
    gsap.to('.rect', {
       left : val,
       ease:Power3
   })
})
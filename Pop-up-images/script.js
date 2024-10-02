const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector(".rect").addEventListener("mousemove",
    throttleFunction((details) => {

   var div = document.createElement("div");    //to create element tag
   div.classList.add("imagediv");               // adding class to div
   div.style.left =details.clientX+ 'px';
   div.style.top =details.clientY+'px'


   var img =document.createElement("img");
   img.setAttribute("src", "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" )
   div.appendChild(img);
   document.body.appendChild(div);             //adding this tag on screen
     
   gsap.to(img, {
    y: "0",
    ease : Power2,
    duration: .5
   });

   gsap.to(img, {
    y: "100%",
    delay: .5,
    ease : Power2,
    duration: .5
   })

   setTimeout(function() {
    div.remove();
   }, 2000)
       
    }, 400));
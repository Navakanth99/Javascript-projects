const containerEle = document.querySelector(".container");

const careers = ["Youtuber", "Web Developer", "Editor", "Memer", "Content Creater"];

let careerIndex =0;
let characterIndex=0;
updateText();

function updateText(){
    characterIndex++;
    containerEle.innerHTML =`
    <h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1> 
    `;
    
    if(characterIndex == careers[careerIndex].length){
        careerIndex++;
        characterIndex=0;
    }
    if(careerIndex === careers.length){
        careerIndex=0;
    }
    setTimeout(updateText, 400)
}

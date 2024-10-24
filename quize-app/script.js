const questions = [
    {
        'que' : 'Which of the following is a markup language?',
        'a' :'HTML',
        'b' :'CSS',
        'c' : 'JavaScript',
        'd' : 'PHP',
        'correct':'a'

    },

    {
        'que' : 'What does HTML stand for?',
        'a' :'Hyper Text Markup Language',
        'b' :'Home Tool Markup Language',
        'c' : 'Hyperlinks and Text Markup Language',
        'd' : 'none',
        'correct':'a'

    },
    {
        'que' : 'What does CSS stand for?',
        'a' :'Creative Style Sheets',
        'b' :'Cascading Style Sheets',
        'c' : 'Computer Style Sheets',
        'd' : 'Custom Style Sheets',
        'correct':'b'

    },
    {
        'que' : 'Which HTML tag is used to create a hyperlink?',
        'a' :'{a}',
        'b' :'{link}',
        'c' : '{h1}',
        'd' : '{p}',
        'correct':'a'

    },
    {
        'que' : 'What is Git used for in web development?',
        'a' :'Managing server configuration',
        'b' :'Handling front-end styling',
        'c' : 'Version control and collaboration on code',
        'd' : 'Database management',
        'correct':'c'

    }

]

let index=0;
let total = questions.length;
let right =0;
let wrong =0;
const queBox = document.getElementById("queBox");
const OptionInputs =document.querySelectorAll(".options")

const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data =questions[index]
    queBox.innerHTML =`${index+1}) ${data.que}`;
    OptionInputs[0].nextElementSibling.innerText =data.a;
    OptionInputs[1].nextElementSibling.innerText =data.b;
    OptionInputs[2].nextElementSibling.innerText =data.c;
    OptionInputs[3].nextElementSibling.innerText =data.d;
}

const submitQuiz = () => {
    const data =questions[index];
    let ans = getAnswer()
    if(ans === data.correct){
      right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
   OptionInputs.forEach(
    (input) => {
        if(input.checked){
            // console.log(input.value)
            answer= input.value;
        }
    }
   )
   return answer
}

const reset = () => {
    OptionInputs.forEach(
        (input) =>{
            input.checked =false
        }
    )
}


const endQuiz = () => {
    document.getElementById("box").innerHTML= `<h3> Thank you for playing the quiz <h3>
    <h2> ${right} / ${total} are correct<h2>`
}
loadQuestion();


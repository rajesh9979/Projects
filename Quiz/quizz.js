const questions = [
    {
        question:"Which is the largest animal in the world",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraff",correct:false}
        ]
    },
    {
        question:"Which is the smallest continent in the world",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false}
        ]
    },
    {
        question:"What is the largest internal organ in the human body?",
        answers:[
            {text:"Lungs",correct:false},
            {text:"Heart",correct:true},
            {text:"Kidneys",correct:false},
            {text:"liver",correct:true}
        ]
        

    },
    {
        question:"What is the atomic number of Hydrogen",
        answers:[
            {text:"1",correct:true},
            {text:"6",correct:true},
            {text:"2",correct:false},
            {text:"14",correct:false}
        ]
    },
    { 
        question:"Which of the following is not a Japanese dish",
        answers:[
            {text:"Sushi",correct:false},
            {text:"Ramen",correct:true},
            {text:"Babi guling",correct:true},
            {text:"Udon",correct:false}
        ]
    }
];
const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");


let currentQuestionIndex=0;
let score =0;


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
        }
    }   
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button=>{
        if (button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.Disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }

}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz(); 
document.getElementsByClassName("next-btn")




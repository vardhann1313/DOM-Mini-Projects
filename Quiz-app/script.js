// Questions ------------------------------------------------------
const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which is the smallest country in the world ?",
        answers: [
            {text: "Vatican city", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false}
        ]
    },
    {
        question: "Which is the largest desert in the world ?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true}
        ]
    },
    {
        question: "Which is the smallest continent in the world ?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false}
        ]
    }
];
// -------------------------------------------------------------

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const NextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;


// Starting quiz after start quiz button is pressed -------------
function startQuiz(){
    document.querySelector(".startQuiz").style.display = "none";
    document.querySelector(".quiz").style.display = "block";

    currentQuestionIndex = 0;
    score = 0;
    NextButton.innerHTML = "Next";
    showQuestion();
}
// --------------------------------------------------------------

// Showing questions and answers --------------------------------
function showQuestion(){
    // Cleaning section for displaying next question answers -- 
    resetState();
    // Questions -----
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Answers -----
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}
// ---------------------------------------------------------------

// Cleaning function ---------------------------------------------
function resetState(){
    NextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// --------------------------------------------------------------

// selected answer feature --------------------------------------
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    NextButton.style.display = "block";
}
// --------------------------------------------------------------

// function to procced to next question -------------------------
NextButton.addEventListener("click", ()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    
});
// --------------------------------------------------------------

// Showing score -------------------------------------------------
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;

    document.querySelector(".startQuiz").style.display = "block";
    NextButton.style.display = "none";
}
// ---------------------------------------------------------------
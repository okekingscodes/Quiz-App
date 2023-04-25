const questions = [
    {
        question: "Which version of HTML begins with !Doctype tag?",
        answers: [
            { text: "HTML3", correct: false},
            { text: "HTML5", correct: true},
            { text: "HTML1", correct: false},
            { text: "HTML10", correct: false},
        ]
    },
    {
        question: "CSS3 have the following in common:",
        answers: [
            { text: "Selector, Property and Value", correct: true},
            { text: "Tags, Element and Value", correct: false},
            { text: "Value, Property and File", correct: false},
            { text: "Display, Version and Property", correct: false},
        ]
    },
    {
        question: " ___ and ___ as the common code blocks in HTML5?",
        answers: [
            { text: "Property and Value", correct: false},
            { text: "head and bottom", correct: false},
            { text: "Tags and Element", correct: true},
            { text: "<html> and </html>", correct: false},
        ]
    },
    {
        question: "To insert image in a webpage, we use...?",
        answers: [
            { text: "img tage", correct: true},
            { text: "url() tag", correct: false},
            { text: "src tag", correct: false},
            { text: "photo tag", correct: false},
        ]
    },
    {
        question: "JavaScript files are save with the extension...",
        answers: [
            { text: ".script", correct: false},
            { text: "dot.js", correct: false},
            { text: ".javascript", correct: false},
            { text: ".js", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
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

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

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
        button.Disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Congratulations! <br> You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore()
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})
startQuiz(); 
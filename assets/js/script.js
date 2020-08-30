var currentQuestion = 0;
var currentAnswers = 0;
var endQuiz = false;
var timerOn = false;
var startButton = document.querySelector("#startBtn");
var questionDiv = document.querySelector("#question");
var pageContainer = document.querySelector("#container");
var startPage = document.querySelector("#start");
var questions = [{
    question: "What color is the sky?",
    answers: ["Red", "blue", "green", "purple"],
    correctAnswer: 1
},
{
    question: "What color is the sea?",
    answers: ["Blue", "red", "green", "purple"],
    correctAnswer: 1
},
{
    question: "What color is grass?",
    answers: ["Red", "blue", "green", "purple"],
    correctAnswer: 1
},
{
    question: "What color is a ruby?",
    answers: ["Red", "blue", "green", "purple"],
    correctAnswer: 1
},
{
    question: "What color are grapes?",
    answers: ["Red", "blue", "green", "purple"],
    correctAnswer: 1
}];

function displayFirstQuestion() {
    var question = questions[currentQuestion];
    var answersOl = document.createElement("ol");
    var number = 30;

    // Display question
    var questionHeading = document.createElement("h3");
    questionHeading.textContent = question.question;
    questionDiv.appendChild(questionHeading);
    
    // Display answers
    for (var i = 0; i < question.answers.length; i++) {
        var answerLi = document.createElement("li");
        
        answerLi.textContent = question.answers[i];
        answerLi.setAttribute("user-answer", question.answers[i]);
    
        answersOl.appendChild(answerLi);
        questionDiv.appendChild(answersOl);
    }
    // Once you click the start button, remove the start page
    startPage.remove();

    // and start the timer for the quiz
    if (timerOn = false) {
        var timerId = setInterval(function(){
            number--;
            var numberSpan = document.querySelector("#number");
            numberSpan.textContent = number;
            if (number <= 0) {
                clearInterval(timerId);
                console.log("Timer Stopped");
            }
        }, 1000);
    }
    

    // If gone thru all the questions, end quiz
    if (currentQuestion < 5){
        currentQuestion++;
    } else {
        endQuiz = true;
        // end quiz here
        console.log(endQuiz);
    }
    
}

function displayCurrentQuestion() {
    
    
    var question = questions[currentQuestion];

    // Display question
    var questionHeading = document.getAttribute("h3");
    console.log(questionHeading);
    questionHeading.textContent = question.question;
    questionDiv.appendChild(questionHeading);
}


// Adding event listeners
startButton.addEventListener("click", function() {
    displayFirstQuestion();
    timerOn = true;
});
questionDiv.addEventListener("click", function(event) {
    console.log(event.target.getAttribute("user-answer"));
    if ((endQuiz == false) && (currentQuestion < 5)) {
        displayFirstQuestion();
    }
    else {
        questionDiv.remove();
        // enter name to record quiz score
        var title = document.createElement("h3");
        var nameInput = document.querySelector("input[name='your-name']").nodeValue;
        //title.textContent = "Please enter your initials: ";
        pageContainer.appendChild(title);
    }
});



// Once I begin the quiz, I want to generate my quiz questions and answers


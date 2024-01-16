const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
let userScore = 0;

document.addEventListener('DOMContentLoaded', displayQuestion);

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Display question
    questionElement.textContent = currentQuestion.question;

    // Display options
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = option;
        listItem.onclick = () => checkAnswer(index);
        optionsElement.appendChild(listItem);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (currentQuestion.options[selectedIndex] === currentQuestion.correctAnswer) {
        userScore++;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>Quiz Completed!</h1>
                           <p>Your Score: ${userScore} out of ${quizQuestions.length}</p>`;
}

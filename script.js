
/* json questions store*/ 
const questions = [
    {
      question: 'What does JavaScript stand for?',
      options: ['Java SuperText', 'Just Style Sheets', 'Java Syntax', 'JavaScript'],
      correctAnswer: 'JavaScript',
    },
    {
      question: 'Which keyword is used to declare a variable in JavaScript?',
      options: ['var', 'int', 'string', 'float'],
      correctAnswer: 'var',
    },
    {
      question: 'What is the result of the expression: 2 + "2"?',
      options: ['22', '4', 'NaN', 'Error'],
      correctAnswer: '22',
    },
    {
      question: 'Which of the following is a JavaScript data type?',
      options: ['string', 'boolean', 'array', 'all of the above'],
      correctAnswer: 'all of the above',
    },
    {
      question: 'What is an example of a JavaScript framework or library?',
      options: ['Python', 'React', 'HTML', 'CSS'],
      correctAnswer: 'React',
    },
    {
      question: 'What is the purpose of the `for` loop in JavaScript?',
      options: ['Defining a function', 'Creating an array', 'Iterating over data', 'Styling web pages'],
      correctAnswer: 'Iterating over data',
    },
    {
      question: 'Which method is used to add an element to the end of an array in JavaScript?',
      options: ['append()', 'push()', 'add()', 'insert()'],
      correctAnswer: 'push()',
    },
    {
      question: 'What is the JavaScript operator for equality?',
      options: ['==', '===', '!=', '!=='],
      correctAnswer: '===',
    },
    {
      question: 'Which JavaScript method is used to remove the last element from an array?',
      options: ['pop()', 'remove()', 'delete()', 'splice()'],
      correctAnswer: 'pop()',
    },
    {
      question: 'What does the `document.getElementById()` function do in JavaScript?',
      options: ['Finds an HTML element by class', 'Finds an HTML element by tag name', 'Finds an HTML element by ID', 'None of the above'],
      correctAnswer: 'Finds an HTML element by ID',
    },
  ];
  
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const nextButton = document.getElementById('next-button');
const scoreText = document.getElementById('score-text');
const leaderboardList = document.getElementById('leaderboard-list');

function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;

        optionsList.innerHTML = '';
        currentQuestion.options.forEach((option) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            li.appendChild(button);
            optionsList.appendChild(li);
        });
    } else {
        // All questions are answered
        showFinalScore();
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    nextButton.disabled = true;
    loadNextQuestion();
}

function showFinalScore() {
    questionText.textContent = 'Quiz Finished';
    optionsList.innerHTML = '';
    nextButton.style.display = 'none';
    scoreText.textContent = `Your Score: ${score}`;
    leaderboardList.innerHTML = `<li>Your Score: ${score}</li>`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadNextQuestion();
    nextButton.disabled = true;
});

loadNextQuestion();

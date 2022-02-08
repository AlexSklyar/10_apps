const quizData = [
    {
        question: 'How old is Alex?',
        a: '22 y.o.',
        b: '87 y.o.',
        c: '24 y.o.',
        d: '42 y.o.',
        correct: 'b'
    }, {
        question: 'What is the name of Alex\'s mother?',
        a: 'Natalia',
        b: 'Lena',
        c: 'Oxana',
        d: 'Vera',
        correct: 'a'
    }, {
        question: 'What is Alex\'s favorite ice cream?',
        a: 'Vanilla',
        b: 'Blueberry',
        c: 'Strawberry',
        d: 'Lemon',
        correct: 'a'
    }, {
        question: 'What is Erika\'s favorite place in the Dnipro?',
        a: 'Churchill',
        b: 'One Gogi',
        c: 'Puzata Hata',
        d: 'Soho',
        correct: 'b'
    }
    , {
        question: 'What color are Alex\'s eyes?',
        a: 'Red',
        b: 'Rainbow',
        c: 'Green',
        d: 'Blue',
        correct: 'c'
    }
]
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz')
let currentQuiz = 0;
let score = 0;
loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
    
     let answer = undefined;
    answersEls.forEach((answersEl) => {
            if (answersEl.checked) {
            answer = answersEl.id;
        }
    });
    return answer;
}
function deselectAnswers() {
   answersEls.forEach((answersEl) => {
       answersEl.checked = false;
    }); 
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
    if (answer === quizData[currentQuiz].correct) {
    score++
    }
    currentQuiz++
    currentQuiz<quizData.length? loadQuiz(): quiz.innerHTML = `<h2>You are the best! Your scores - ${score}/${quizData.length}</h2> <button onclick="location.reload()">Try again</button>`
    }
})
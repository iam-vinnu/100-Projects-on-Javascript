const quizQuestions = [
    {
        question: 'Who is the father of computer ?',
        ans1: 'Newton',
        ans2: 'Charlse Babbage',
        ans3: 'fakir mohon',
        ans4: 'Modi',
        rightAns: 'Charlse Babbage'
    },
    {
        question: 'Who is our Prime minster ? ',
        ans1: 'amit shah',
        ans2: 'Charlse Babbage',
        ans3: 'fakir mohon',
        ans4: 'Modi',
        rightAns: 'Modi'
    },
    {
        question: 'Who is our home minister ?',
        ans1: 'Newton',
        ans2: 'Amit Sah',
        ans3: 'fakir mohon',
        ans4: 'Modi',
        rightAns: 'Amit Sah'
    },
    {
        question: 'Who is the father Javascript ?',
        ans1: 'Newton',
        ans2: 'Charlse Babbage',
        ans3: 'Jhili Kandeii',
        ans4: 'Modi',
        rightAns: 'Charlse Babbage'
    }
]
console.log(quizQuestions);

let currentQuestion = 0;
let score = 0;

const container = document.querySelector('.container');
const questionText = document.querySelector('#question');
const optionOne = document.querySelector('#text_option_a');
const optionTwo = document.querySelector('#text_option_b');
const optionThree = document.querySelector('#text_option_c');
const optionFour = document.querySelector('#text_option_d');
const submit = document.querySelector('button')
const afterText = document.createElement('p');
const nextQuestion = () => {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        questionText.textContent = quizQuestions[currentQuestion].question;
        optionOne.textContent = quizQuestions[currentQuestion].ans1
        optionTwo.textContent = quizQuestions[currentQuestion].ans2
        optionThree.textContent = quizQuestions[currentQuestion].ans3
        optionFour.textContent = quizQuestions[currentQuestion].ans4
        checkedAns.checked = false;
    }else{
        container.style.display = 'none';
        afterText.classList.add('afterText');
        afterText.textContent = 'Game Over'
        document.body.appendChild(afterText);
       alert(`You scored ${score} out of 4`);
    }
}

questionText.textContent = quizQuestions[currentQuestion].question;
optionOne.textContent = quizQuestions[currentQuestion].ans1
optionTwo.textContent = quizQuestions[currentQuestion].ans2
optionThree.textContent = quizQuestions[currentQuestion].ans3
optionFour.textContent = quizQuestions[currentQuestion].ans4


submit.addEventListener('click', () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    //  console.log(checkedAns.nextElementSibling.textContent);
    if (checkedAns === null) {
        alert('Please select an answer')
    } else {
        if (checkedAns.nextElementSibling.textContent === quizQuestions[currentQuestion].rightAns) {
            score++;
        }
        nextQuestion();
    }
})
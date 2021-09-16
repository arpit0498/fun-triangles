const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-button');

const output = document.querySelector('#output');

const correctAnswer=["90","right angled"];

function calculateScore(){
    let score = 0;
    let index=0;
    const formResults =new FormData(quizForm);
    for(let value of formResults.values()){
        if(value=== correctAnswer[index]){
            score++;
        }
        index++;
    }


output.innerText ="your score is  " + score;
}

submitAnswerBtn.addEventListener('click', calculateScore);
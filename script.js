var num1 = Math.ceil(Math.random() * 10);
var num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById('Question');

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`

const correctA = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"))

if (!score) {
    score = 0;
}
let scoreEl = document.getElementById('score');
scoreEl.innerText = `score: ${score}`;
function SubmitAnswer() {
    var input = document.getElementById('answer');

    const userAnswer = input.value;
    if (userAnswer == correctA) {
        score++;
        UpdateLocalStorage();
    }
    else {
        score--;
        UpdateLocalStorage();
    }

    if (score == 0) {
        window.alert('GAME OVER');
    }

}


function UpdateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

//Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner 
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//Randomise the background of the quiz for each questiion

//Possible - Personality Traits
// 15 -21- You Need Help
// 10 - 15 - Good Soul
// 5- 10 - Meh 
// 5 - Are You Even Real


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions(index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}


function loadNextQuestion() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if (!selectedOption) {
        alert('PROSIM ODGOVORI!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()


    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

    //once finished clear checked
    selectedOption.checked = false;
    //If quiz is on the final question
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Končaj';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if (currentQuestion == totalQuestions) {
        container.style.display = 'none';
        var randomResult = Math.floor(Math.random() * 2);

        if (randomResult == 0) {

            document.getElementsByClassName("result")[0].style.backgroundImage = "url('voda.jpeg')"

            result.innerHTML =
                `<h1 class="final-score">Ø</h1>
         <div class="summary">
         <p>Vaša metoda ni delovala. Parazit, v resnici mistični skarabej, vas je vsesal vase. Reši vas lahko le še eno. Pod vami se nahaja Komora prerojenja. Obstajajo štiri prerojenja (vsako prispeva ena od ploskev piramide: ČŠŽ, Redempcija, Insomnia in Atomik. Spustite se in doživeli boste prerojenje v skladu z vašo Potjo.</p>
            <h1>Zaznamuje vas pretočnost in sočnost.
            <br>POSLANI STE BILI NA POT SPUŽEV IN DELFINOV 🐟🐬🐡
            <br>Prosimo, nadaljujte v levi smeri 
            </h1>
        </div>
        <button class="restart">Ponovi kviz</button>
         `;

        }

        else {

            document.getElementsByClassName("result")[0].style.backgroundImage = "url('ogn.jpeg')"

            result.innerHTML =
            `<h1 class="final-score">Ø</h1>
         <div class="summary">
          <p>Vaša metoda ni delovala. Parazit, v resnici mistični skarabej, vas je vsesal vase. Reši vas lahko le še eno. Pod vami se nahaja Komora prerojenja. Obstajajo štiri prerojenja (vsako prispeva ena od ploskev piramide: ČŠŽ, Redempcija, Insomnia in Atomik. Spustite se in doživeli boste prerojenje v skladu z vašo Potjo.</p>
            <h1>Zaznamuje vas plazmatska kristalgija in energija.
            <br>POSLANI STE BILI NA POT ŽARENJA IN ŽARJENJA 🔥💥☄️
            <br>Prosimo, nadaljujte v desni smeri
            </h1>
        </div>
        <button class="restart">Ponovi kviz</button>
         `;
        }

        return;
    }
    generateQuestions(currentQuestion);
}

function lastScreen () {}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if (e.target.matches('button')) {
        //reset array index and score
        currentQuestion = 0;
        score = [];
        //Reload quiz to the start
        location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);



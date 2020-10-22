const quiz = [
  {
    question: 'ほし はいくつ？',
    answers: ['4つ', '5つ', '6つ', '7つ'],
    correct: '5つ',
  },
  {
    question: 'くるま は何台？',
    answers: ['0だい', '1だい', '2だい', '3だい'],
    correct: '3だい'
  },
  {
    question: 'パトカー は何台？',
    answers: ['0だい', '1だい', '2だい', '3だい'],
    correct: '1だい'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandle = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
      window.alert('せいかい！');
      score++;
    } else {
      window.alert('おしい!');
    }
    quizIndex++;

    if(quizIndex < quizLength){
      setupQuiz();
    } else {
      window.alert('おわり！' + quizLength + '問中' + score + '問せいかい！')
    }
};

let handleIndex = 0;
while(handleIndex < buttonLength){
  button[handleIndex].addEventListener('click', (e) => {
    clickHandle(e);
  });
  handleIndex++;
}




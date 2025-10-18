function checkAnswer(){
  const correctAnswer = '4'
  userAnswer = document.querySelector('input[name="quiz"]:checked').value
  const feedback = document.getElementById("feedback")
  if (userAnswer === correctAnswer){
    feedback.textContent = "Correct! Well done."
  }
  else if (correctAnswer =! userAnswer){
    feedback.textContent = " That's incorrect. Try again!"
  }
}

const submitAnswer = document.getElementById("submit-answer")
submitAnswer.addEventListener(('click'),function (){
  checkAnswer()
})
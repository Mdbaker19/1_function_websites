//we define answers for eight ball
const answers = ["It is certain", "Yes", "No", "Try again", "Fate has decided", "Not likely",
"Absolutely", "You will make it happen", "I am sorry, no", "Very likely", "Who cares"];

window.onload =function() {
  const eight = document.getElementById("eight");
  const answer = document.getElementById("answer");
  const eightball = document.getElementById("button1");
  const question = document.getElementById("question");

  eightball.addEventListener("click", function() {
     if (question.value.length < 1){
         alert("enter a question");
     } else {
         eight.innerText = "";
         question.text = "";//does not clear the text box
         var num = Math.floor(Math.random() * Math.floor(answers.length));
         answer.innerText = answers[num];
     }
  });
};
(function() {
  var correctAnswers = 0;
  console.log(correctAnswers);
  var userName = prompt("Hi There, What is your name?");

  document.getElementById("introduction").textContent = "Welcome to my guessing game! " + userName + ". Good luck.";

  var els = [
    document.getElementById('answerOne'),
    document.getElementById('answerTwo'),
    document.getElementById('answerThree'),
    document.getElementById('answerFour'),
  ];

  var questions = [
    'What is my last name?',
    'What is my favorite animal?',
    'Where do I work?',
    'What is my favorite number?',
  ];

  var answers = [
    'hulsey',
    'dogs',
    'the gottman institute',
    6
  ];

  var correctImage = [
    document.getElementById('image1').innerHTML="<img src='http://pix.iemoji.com/images/emoji/apple/ios-9/256/deeper-brown-thumbs-up-sign.png' border='0'/></a>",
    document.getElementById('image2').innerHTML="<img src='http://pix.iemoji.com/images/emoji/apple/ios-9/256/deeper-brown-thumbs-up-sign.png' border='0'/></a>",
    document.getElementById('image3').innerHTML="<img src='http://pix.iemoji.com/images/emoji/apple/ios-9/256/deeper-brown-thumbs-up-sign.png' border='0'/></a>",
    document.getElementById('image4').innerHTML="<img src='http://pix.iemoji.com/images/emoji/apple/ios-9/256/deeper-brown-thumbs-up-sign.png' border='0'/></a>",
  ];


function game(question, answer, element) {
  var counter = 2;
  var userInput = prompt(question).toLowerCase();

  if (isNaN(parseInt(userInput)) === false) {
    userInput = parseInt(userInput);
  }

  if (typeof answer === 'number') {
    while (userInput !== answer) {
      if (counter === 0) {
        break;
      }

      if(isNaN(userInput)) {
        userInput = parseInt(prompt('Try guessing a number.\n you have ' + counter + " guesses left."));
        counter--;
      } else if (userInput > answer) {
        userInput = parseInt(prompt('Too high! Guess again.\n You have ' + counter + " guesses left."));
        counter--;
      } else {
        userInput = parseInt(prompt('Too low! Guess again.\n You have ' + counter + " guesses left."));
        counter--;
      }
    }

    if (counter > 0) {
      correctAnswers++;
      correctImage++;
      els[i].className="correct";
      element.textContent = 'Congrats! You got the right answer: ' + answer;
    } else {
      els[i].className="incorrect";
      element.textContent = 'Incorrect! ' + answer + ', was the wrong answer';
    }
  } else {
    if (userInput === answer) {
      correctAnswers++;

      element.textContent = 'Congrats! That is the right answer: ' + answer.charAt(0).toUpperCase() + answer.slice(1);
      els[i].className="correct";
      console.log(answers);
    } else {
      element.textContent = 'Sorry, ' + answer.charAt(0).toUpperCase() + answer.slice(1) + " was the right answer";
      els[i].className="incorrect";
      console.log(answers);
    }
  }
  document.getElementById('info').textContent = 'You currently have answered ' + correctAnswers + ' question(s) correct.';
}

  for(var i = 0; i < questions.length; i++) {
    game(questions[i], answers[i], els[i], correctImage[1]);
  }
})()

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
    document.getElementById('image1'),
    document.getElementById('image2'),
    document.getElementById('image3'),
    document.getElementById('image4'),
  ];


function game(question, answer, element, image) {
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
      image.innerHTML="<img src='http://pix.iemoji.com/images/emoji/apple/ios-9/256/deeper-brown-thumbs-up-sign.png' border='0'/></a>";
      element.className = "correct";
      element.textContent = 'Congrats! You got the right answer: ' + answer;
    } else {
      document.getElementById('image4').innerHTML="<img src='http://1.bp.blogspot.com/-7y6Zov44bCg/U5hYv1g2dPI/AAAAAAAAIwc/iLTnoALe7Ms/s1600/thumb-down-emoticon.png' border='0'/></a>";
      element.className="incorrect";
      element.textContent = 'Incorrect! ' + answer + ', was the wrong answer';
    }
  } else {
    if (userInput === answer) {
      correctAnswers++;
      image.innerHTML="<img src='http://pix.iemoji.com/images/emoji/apple/ios-9/256/deeper-brown-thumbs-up-sign.png' border='0'/></a>";
      element.textContent = 'Congrats! That is the right answer: ' + answer.charAt(0).toUpperCase() + answer.slice(1);
      element.className = "correct";
      console.log(answers);
    } else {
      image.innerHTML="<img src='http://1.bp.blogspot.com/-7y6Zov44bCg/U5hYv1g2dPI/AAAAAAAAIwc/iLTnoALe7Ms/s1600/thumb-down-emoticon.png' border='0'/></a>";
      element.textContent = 'Sorry, ' + answer.charAt(0).toUpperCase() + answer.slice(1) + " was the right answer";
      element.className = "incorrect";
      console.log(answers);
    }
  }
  document.getElementById('info').textContent = 'You currently have answered ' + correctAnswers + ' question(s) correct.';
}

  for(var i = 0; i < questions.length; i++) {
    game(questions[i], answers[i], els[i], correctImage[i])
  }
})()

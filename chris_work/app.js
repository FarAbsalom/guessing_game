(function() {
  var correctAnswers = 0;
  console.log(correctAnswers);
  var userName = prompt("WTF is your name, mate?");

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
    'harnois',
    'hyacinth macaw',
    'code fellows',
    6
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
      element.textContent = 'Congrats! You got the right answer: ' + answer;
    } else {
      element.textContent = 'Incorrect! ' + answer + ', was the wrong answer';
    }
  } else {
    if (userInput === answer) {
      correctAnswers++;
      element.textContent = 'Congrats! That is the right answer: ' + answer.charAt(0).toUpperCase() + answer.slice(1);
    } else {
      element.textContent = 'Sorry, ' + answer.charAt(0).toUpperCase() + answer.slice(1) + " was the right answer";
    }
  }
}

  for(var i = 0; i < questions.length; i++) {
    game(questions[i], answers[i], els[i]);
  }
})()

//
//   if (userInput.toLowerCase() === answers) {
//     el.textContent = "Congrats, " + guestName + ", you're right!";
//   } else if (parseInt(userInput) && isNaN(userInput) === false) {
//     var counter = 0;
//     while (counter <= 2) {
//       if (userInput === 6) {
//         el.textContent = "You win!...Nothing!";
//         break;
//       } else if (userInput < 6) {
//         el.textContent = "Wrong. Try something higher, " + guestName + ".";
//         counter++;
//         userInput=parseInt(prompt(questions));
//       } else if (userInput > 6) {
//         el.textContent = "Wrong. Try something lower, " + guestName + ".";
//         counter++;
//         userInput=parseInt(prompt(questions));
//       }
//     // } else if (question === questions[4]) {
//     // for(var j = 0; j < answers[4].length; j++) {
//     //   if (userInput.toLowerCase() === answers[4][j]) {
//     //   el.textContent = "you win!...Nothing!";
//     //   userInput=parseInt(prompt(questions));
//     //   break;
//     // } else {
//     //   el.textContent = "Wrong. Wrong. Wrong."
//     //   counter++;
//     // }
//   }
//   } else {
//     el.textContent = "Is that the best you could come up with, " + guestName + "?";
//   }
// }
//
// for(var i = 0; i < questions.length; i++) {
//   game(questions[i], answers[i], els[i]);
// }
//
// // var guestName = prompt("WTF is your name, mate?");
// // alert("Good to meet you, " + guestName);
// // console.log("User entered: " + guestName);
// //
// // var guestAnswer = prompt("Why are you here, " + guestName + "?");
// // alert(guestAnswer + ": ORLY? Is that the best you could come up with?");
// // console.log("User entered: " + guestAnswer);
// //
// // var counterRight = 0;
// // var counterWrong = 0;
// // var quest1 = prompt("What is my last name?").toLowerCase();
// //
// // if(quest1 === "harnois") {
// //   console.log("User entered: " + quest1);
// //   alert("Congrats, " + guestName + ", you're right! it's Harnois.")
// //   counterRight++;
// //   console.log("counterRight = " + counterRight);
// // } else {
// //   console.log("User entered: " + quest1);
// //   alert("WRONG, SO. WRONG. DAMNIT " + guestName + "It's actually Harnois.");
// //   counterWrong++;
// //   console.log("counterWrong = " + counterWrong);;
// // }
// //
// // var quest2 = prompt("What is my favorite animal?").toLowerCase();
// // if(quest2 === "hyacinth macaw") {
// //   console.log("User entered: " + quest2);
// //   alert("Correct. You know me well, " + guestName);
// //   counterRight++;
// //   console.log("counterRight = " + counterRight);
// // } else {
// //   console.log("User entered: " + quest2);
// //   alert("False. This one is tricky, " + guestName + ". Hyacinth Macaw is the answer.");
// //   counterWrong++;
// //   console.log("counterWrong = " + counterWrong);;
// // }
// //
// // var quest3 = prompt("Where do I work?").toLowerCase();
// // if(quest3 === "code fellows") {
// //   console.log("User entered: " + quest3);
// //   alert("How could you not know that, " + guestName + "?");
// //   counterRight++;
// //   console.log("counterRight = " + counterRight);
// // } else {
// //   console.log("User entered: " + quest3);
// //   alert("Seriously? You don't know, " + guestName + "? It's actually Code Fellows.");
// //   counterWrong++;
// //   console.log("counterWrong = " + counterWrong);;
// // }
// //
// // var counterNum = 0;
// // var userGuess = parseInt(prompt("Guess my fave number:"));
// // console.log("User entered: " + userGuess);
// //
// // while(counterNum < 2) {
// //   if(userGuess === 6) {
// //     alert("You win!...nothing!");
// //     counterRight++
// //     alert("You guessed " + counterRight + "questions correctly!");
// //     alert("You guessed " + counterWrong + "questions incorrectly!");
// //     break;
// //   } else if (userGuess < 6) {
// //     alert("Wrong. Try something higher, " + guestName + ".");
// //
// //     counterWrong++;
// //     counterNum++;
// //
// //     console.log("counterWrong = " + counterWrong);
// //     console.log("counterNum = " + counterNum);
// //     var userGuess = parseInt(prompt("Guess my fave number:"));
// //   } else if (userGuess > 6) {
// //     alert("Wrong. Try something lower, " + guestName + ".");
// //
// //     counterWrong++;
// //     counterNum++;
// //
// //     console.log("counterWrong = " + counterWrong);
// //     console.log("counterNum = " + counterNum);
// //
// //     var userGuess = parseInt(prompt("Guess my fave number:"));
// //   }
// // }
// //
// // alert("Wrong again. Game over, " + guestName + ". Correct answers: " + counterRight
// // + " Incorrect answer: " + counterWrong);
// //
// // console.log("counterWrong = " + counterWrong);
// // console.log("counterNum = " + counterNum);

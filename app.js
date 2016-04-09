var guestName = prompt("WTF is your name, mate?");
alert("Good to meet you, " + guestName);
console.log("User entered: " + guestName);

var guestAnswer = prompt("Why are you here, " + guestName + "?");
alert(guestAnswer + ": ORLY? Is that the best you could come up with?");
console.log("User entered: " + guestAnswer);

var counterRight = 0;
var counterWrong = 0;
var quest1 = prompt("What is my last name?").toLowerCase();

if(quest1 === "harnois") {
  console.log("User entered: " + quest1);
  alert("Congrats, " + guestName + ", you're right! it's Harnois.")
  counterRight++;
  console.log("counterRight = " + counterRight);
} else {
  console.log("User entered: " + quest1);
  alert("WRONG, SO. WRONG. DAMNIT " + guestName + "It's actually Harnois.");
  counterWrong++;
  console.log("counterWrong = " + counterWrong);;
}

var quest2 = prompt("What is my favorite animal?").toLowerCase();
if(quest2 === "hyacinth macaw") {
  console.log("User entered: " + quest2);
  alert("Correct. You know me well, " + guestName);
  counterRight++;
  console.log("counterRight = " + counterRight);
} else {
  console.log("User entered: " + quest2);
  alert("False. This one is tricky, " + guestName + ". Hyacinth Macaw is the answer.");
  counterWrong++;
  console.log("counterWrong = " + counterWrong);;
}

var quest3 = prompt("Where do I work?").toLowerCase();
if(quest3 === "code fellows") {
  console.log("User entered: " + quest3);
  alert("How could you not know that, " + guestName + "?");
  counterRight++;
  console.log("counterRight = " + counterRight);
} else {
  console.log("User entered: " + quest3);
  alert("Seriously? You don't know, " + guestName + "? It's actually Code Fellows.");
  counterWrong++;
  console.log("counterWrong = " + counterWrong);;
}

var counterNum = 0;
var userGuess = parseInt(prompt("Guess my fave number:"));
console.log("User entered: " + userGuess);

while(counterNum < 2) {
  if(userGuess === 6) {
    alert("You win!...nothing!");
    counterRight++
    alert("You guessed " + counterRight + "questions correctly!");
    alert("You guessed " + counterWrong + "questions incorrectly!");
    break;
  } else if (userGuess < 6) {
    alert("Wrong. Try something higher, " + guestName + ".");

    counterWrong++;
    counterNum++;

    console.log("counterWrong = " + counterWrong);
    console.log("counterNum = " + counterNum);
    var userGuess = parseInt(prompt("Guess my fave number:"));
  } else if (userGuess > 6) {
    alert("Wrong. Try something lower, " + guestName + ".");

    counterWrong++;
    counterNum++;

    console.log("counterWrong = " + counterWrong);
    console.log("counterNum = " + counterNum);

    var userGuess = parseInt(prompt("Guess my fave number:"));
  }
}

alert("Wrong again. Game over, " + guestName + ". Correct answers: " + counterRight
+ " Incorrect answer: " + counterWrong);

console.log("counterWrong = " + counterWrong);
console.log("counterNum = " + counterNum);

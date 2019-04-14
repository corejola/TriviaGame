//MOBILE SUIT GUNDAM TRIVIA GAME

/*  1) Start Screen
        1.1) Start Game button initiates the game - function
        1.2) clear the score board
            Total correct answer = 0
            Total incorrect answer = 0
            Total Unanswered = 0

    2) Question 1
        2.1) set interval timer ~45s (45000ms) decrement
        2.2) create HTML element for question 1 and display in the DOM
        2.2) create HTML elements for mulitple choice
            var array for multiple Choice
            for loop across array for buttons
        2.3 if click event is !== correct answer,
            clear timer
            Update HTML to dislay incorrect answer & gif
            total incorrect answer++
            move to Question 2
        2.4 if timer === 0
            clear timer
            Update HTML to dislay incorrect answer & gif
            total unanswer++
            move to Question 2
        2.5 if click event === correct answer
            clear timer
            update HTML to dislay correct answer & gif
            total correct answer++
            move to question 2
    3) Questions 2 ~ 10
        similar to psuedo code 2)
        Final question excecutes Recap/Reults
    4) Recap/Results
        Display Recap/Results HTML Text "Here's how you faired..."
        Display Total Correct answers
        Display Total Incorrect answers
        Display Total Unanswered
        Start Over button - restarts the game calls on psuedo code 1)
*/

var totalCorrect = 0;
var totalIncorrect = 0;
var totalUnanswered = 0;
var time = 45;
var intervalId;
var question = ["Who?", "What?", "Where?" + "When?" + "Why?"]

function gameStart() {
    totalCorrect = 0;
    totalIncorrect = 0;
    totalUnanswered = 0;

    var gameStartButton = $('<button>' + "Game Start" + '</button>')
    gameStartButton.attr("class", "btn btn-primary btn-lg");
    $('#gameStart').html(gameStartButton);

}

function questionOne() {

    var multipleChoice = ["A", "B", "C", "D"]
    $('#gameStart').empty(); //clears screen
    intervalId = setInterval(decrement, 1000);
    //
    var questionDiv = $('<h3>' + question[0] + "</h3>")
    $('#question').html(questionDiv);

    for (var i = 0; i < multipleChoice.length; i++) {
        var multipleChoiceButtons = $('<br><button>' + multipleChoice[i] + '</button>');
        $('#multipleChoice').append(multipleChoiceButtons);
    }

}

function decrement() {
    time--;
    $("#timer").html("<h2>" + time + "</h2>");
    if (time === 0) {
        clearInterval(intervalId);
        alert("Time Up!");
    }
}

$('#gameStart').on("click", function (event) {
    console.log("button works")
    questionOne();
});

gameStart()
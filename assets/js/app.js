//UNIVERSAL CENTURY MOBILE SUIT GUNDAMTRIVIA GAME
/*  1) Start Screen
        1.1) Start Game button initiates the game - function
        1.2) clear the score board
            Total correct answer = 0
            Total incorrect answer = 0
            Total Unanswered = 0
    2) Question 1
        2.1) set interval timer ~45s decrement 1000s
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
//Global variables
var totalCorrect = 0;
var totalIncorrect = 0;
var totalUnanswered = 0;
//test time 10s, game time 30s
var time = 10;
var intervalId;
var question = {
    questionOne: "Who is the Red Commet?",
    questionTwo: "What was the flag ship of the Neo Zeon during the 2nd Neo Zeon War?",
    questionThree: "What incident resulted in the creation of the Titans",
    questionFour: "What year did the One Year War start?",
    questionFive: "Which was the last Gundam Amuro Ray piloted?",
    questionSix: "Where did the majority of the Zeon fleet retreat to after the One Year War?"
}
var multipleChoice = {
    answerOne: ["Anaval Gato", "Johnny Ridden", "Char Aznable", "Garma Zabi"],
    answerTwo: ["Gwadan", "Rewloola", "Musai", "Musaka"],
    answerThree: ["Operation British", "Axis Shock", "Gryps War", "Operation Stardust"],
    answerFour: ["0079", "0086", "0087", "0093"],
    answerFive: ["RX-78-2", "RX-178", "RX-0", "RX-93"],
    answerSix: ["Luna 2", "A Boa Qu", "Axis", "Side 3"]
}

function gameStart() {
    totalCorrect = 0;
    totalIncorrect = 0;
    totalUnanswered = 0;

    var gameStartButton = $('<button>' + "LAUNCH!" + '</button>');
    gameStartButton.attr("class", "d-flex justify-content-center");
    $('#gameStart').html(gameStartButton);

    $('#gameStart').on("click", function (event) {
        // console.log("button works")
        questionOne();
    });
}

function questionOne() {
    clearInterval(intervalId)
    //question specific variables
    var correctAnswer = multipleChoice.answerOne[2];

    //clears screen
    $('#gameStart').empty();
    $('#correct').empty();
    $('#incorrect').empty();
    $('#unanswered').empty();
    $('#timer').html("<h2>" + "Time Remaining: " + "</h2>");

    totalCorrect = 0;
    totalIncorrect = 0;
    totalUnanswered = 0;
    time = 10;

    //set timer
    // see decrement function
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        $("#timer").html("<h2>" + "Time Remaining: " + time + "s" + "</h2>");
        time--;
        if (time === -1) {
            clearInterval(intervalId);
            totalUnanswered++;
            timesUp();
            setTimeout(function () { questionTwo(); }, 2000)
            console.log("total unanswered: " + totalUnanswered);
        }
    }

    //set question
    var questionDiv = $('<h3>' + question.questionOne + "</h3>")
    $('#question').html(questionDiv);

    //set multiple choice buttons
    $('#mulitpleChoice').empty();
    for (var i = 0; i < multipleChoice.answerOne.length; i++) {
        var multipleChoiceButtons = $('<button>' + multipleChoice.answerOne[i] + '</button>');
        multipleChoiceButtons.attr({
            "class": "choice d-flex justify-content-center",
            "data-random": multipleChoice.answerOne[i]
        });
        $('#multipleChoice').append(multipleChoiceButtons);
    }

    //question parameters
    $('.choice').on("click", function (event) {
        var selection = $(this).attr("data-random")
        console.log(selection);
        //incorrect
        if (selection !== correctAnswer) {
            clearInterval(intervalId);
            totalIncorrect++;
            wrongAnswer();
            console.log("total incorrect so far: " + totalIncorrect)
            setTimeout(function () { questionTwo() }, 2000)
        }
        //correct answer is [2]
        else {
            clearInterval(intervalId);
            totalCorrect++;
            rightAnswer();
            console.log("total correct so far: " + totalCorrect)
            setTimeout(function () { questionTwo() }, 2000)
        }
    });
}

//following questions will follow the same methodology as questionOne
function questionTwo() {
    var correctAnswer = multipleChoice.answerTwo[1];
    time = 10;
    $('#gameStart').empty();
    $('#timer').html("<h2>" + "Time Remaining: " + "</h2>");
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        $("#timer").html("<h2>" + "Time Remaining: " + time + "s" + "</h2>");
        time--;
        if (time === -1) {
            clearInterval(intervalId);
            totalUnanswered++;
            timesUp();
            setTimeout(function () { questionThree(); }, 2000)
            console.log("total unanswered: " + totalUnanswered);
        }
    }
    var questionDiv = $('<h3>' + question.questionTwo + "</h3>")
    $('#question').html(questionDiv);

    for (var i = 0; i < multipleChoice.answerTwo.length; i++) {
        var multipleChoiceButtons = $('<button>' + multipleChoice.answerTwo[i] + '</button>');
        multipleChoiceButtons.attr({
            "class": "choice d-flex justify-content-center",
            "data-random": multipleChoice.answerTwo[i]
        });
        $('#multipleChoice').append(multipleChoiceButtons);
    }

    $('.choice').on("click", function (event) {
        var selection = $(this).attr("data-random")
        console.log(selection);
        if (selection !== correctAnswer) {
            clearInterval(intervalId);
            totalIncorrect++;
            wrongAnswer();
            console.log("total incorrect so far: " + totalIncorrect)
            setTimeout(function () { questionThree() }, 2000)
        }
        else {
            clearInterval(intervalId);
            totalCorrect++;
            rightAnswer();
            console.log("total correct so far: " + totalCorrect)
            setTimeout(function () { questionThree() }, 2000)
        }
    });
}

function questionThree() {
    var correctAnswer = multipleChoice.answerThree[3];
    time = 10;
    $('#gameStart').empty();
    $('#timer').html("<h2>" + "Time Remaining: " + "</h2>");
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        $("#timer").html("<h2>" + "Time Remaining: " + time + "s" + "</h2>");
        time--;
        if (time === -1) {
            clearInterval(intervalId);
            totalUnanswered++;
            timesUp();
            setTimeout(function () { questionFour(); }, 2000)
            console.log("total unanswered: " + totalUnanswered);
        }
    }
    var questionDiv = $('<h3>' + question.questionThree + "</h3>")
    $('#question').html(questionDiv);

    for (var i = 0; i < multipleChoice.answerThree.length; i++) {
        var multipleChoiceButtons = $('<button>' + multipleChoice.answerThree[i] + '</button>');
        multipleChoiceButtons.attr({
            "class": "choice d-flex justify-content-center",
            "data-random": multipleChoice.answerThree[i]
        });
        $('#multipleChoice').append(multipleChoiceButtons);
    }

    $('.choice').on("click", function (event) {
        var selection = $(this).attr("data-random")
        console.log(selection);

        if (selection !== correctAnswer) {
            clearInterval(intervalId);
            totalIncorrect++;
            wrongAnswer();
            console.log("total incorrect so far: " + totalIncorrect)
            setTimeout(function () { questionFour() }, 2000)
        }
        else {
            clearInterval(intervalId);
            totalCorrect++;
            rightAnswer();
            console.log("total correct so far: " + totalCorrect)
            setTimeout(function () { questionFour() }, 2000)
        }
    });
}

function questionFour() {
    var correctAnswer = multipleChoice.answerFour[0];
    time = 10;
    $('#gameStart').empty();
    $('#timer').html("<h2>" + "Time Remaining: " + "</h2>");
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        $("#timer").html("<h2>" + "Time Remaining: " + time + "s" + "</h2>");
        time--;
        if (time === -1) {
            clearInterval(intervalId);
            totalUnanswered++;
            timesUp();
            setTimeout(function () { questionFive(); }, 2000)
            console.log("total unanswered: " + totalUnanswered);
        }
    }
    var questionDiv = $('<h3>' + question.questionFour + "</h3>")
    $('#question').html(questionDiv);

    for (var i = 0; i < multipleChoice.answerFour.length; i++) {
        var multipleChoiceButtons = $('<button>' + multipleChoice.answerFour[i] + '</button>');
        multipleChoiceButtons.attr({
            "class": "choice d-flex justify-content-center",
            "data-random": multipleChoice.answerFour[i]
        });
        $('#multipleChoice').append(multipleChoiceButtons);
    }

    $('.choice').on("click", function (event) {
        var selection = $(this).attr("data-random")
        console.log(selection);

        if (selection !== correctAnswer) {
            clearInterval(intervalId);
            totalIncorrect++;
            wrongAnswer();
            console.log("total incorrect so far: " + totalIncorrect)
            setTimeout(function () { questionFive() }, 2000)
        }
        else {
            clearInterval(intervalId);
            totalCorrect++;
            rightAnswer();
            console.log("total correct so far: " + totalCorrect)
            setTimeout(function () { questionFive() }, 2000)
        }
    });
}

function questionFive() {
    var correctAnswer = multipleChoice.answerFive[3];
    time = 10;
    $('#gameStart').empty();
    $('#timer').html("<h2>" + "Time Remaining: " + "</h2>");
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        $("#timer").html("<h2>" + "Time Remaining: " + time + "s" + "</h2>");
        time--;
        if (time === -1) {
            clearInterval(intervalId);
            totalUnanswered++;
            timesUp();
            setTimeout(function () { questionSix(); }, 2000)
            console.log("total unanswered: " + totalUnanswered);
        }
    }
    var questionDiv = $('<h3>' + question.questionFive + "</h3>")
    $('#question').html(questionDiv);

    for (var i = 0; i < multipleChoice.answerFive.length; i++) {
        var multipleChoiceButtons = $('<button>' + multipleChoice.answerFive[i] + '</button>');
        multipleChoiceButtons.attr({
            "class": "choice d-flex justify-content-center",
            "data-random": multipleChoice.answerFive[i]
        });
        $('#multipleChoice').append(multipleChoiceButtons);
    }

    $('.choice').on("click", function (event) {
        var selection = $(this).attr("data-random")
        console.log(selection);

        if (selection !== correctAnswer) {
            clearInterval(intervalId);
            totalIncorrect++;
            wrongAnswer();
            console.log("total incorrect so far: " + totalIncorrect)
            setTimeout(function () { questionSix() }, 2000)
        }
        else {
            clearInterval(intervalId);
            totalCorrect++;
            rightAnswer();
            console.log("total correct so far: " + totalCorrect)
            setTimeout(function () { questionSix() }, 2000)
        }
    });

}
function questionSix() {
    var correctAnswer = multipleChoice.answerSix[2];
    time = 10;
    $('#gameStart').empty();
    $('#timer').html("<h2>" + "Time Remaining: " + "</h2>");

    intervalId = setInterval(decrement, 1000);
    function decrement() {
        $("#timer").html("<h2>" + "Time Remaining: " + time + "s" + "</h2>");
        time--;
        if (time === -1) {
            clearInterval(intervalId);
            totalUnanswered++;
            timesUp();
            setTimeout(function () { endSummary(); }, 2000)
            console.log("total unanswered: " + totalUnanswered);
        }
    }
    var questionDiv = $('<h3>' + question.questionSix + "</h3>")
    $('#question').html(questionDiv);

    for (var i = 0; i < multipleChoice.answerSix.length; i++) {
        var multipleChoiceButtons = $('<button>' + multipleChoice.answerSix[i] + '</button>');
        multipleChoiceButtons.attr({
            "class": "choice d-flex justify-content-center",
            "data-random": multipleChoice.answerSix[i]
        });
        $('#multipleChoice').append(multipleChoiceButtons);
    }

    $('.choice').on("click", function (event) {
        var selection = $(this).attr("data-random")
        console.log(selection);

        if (selection !== correctAnswer) {
            clearInterval(intervalId);
            totalIncorrect++;
            wrongAnswer();
            console.log("total incorrect so far: " + totalIncorrect)
            setTimeout(function () { endSummary() }, 2000)
        }
        else {
            clearInterval(intervalId);
            totalCorrect++;
            rightAnswer();
            console.log("total correct so far: " + totalCorrect)
            setTimeout(function () { endSummary() }, 2000)
        }
    });
}

function endSummary() {
    $('#timer').empty().html('<h3>' + "GAME OVER" + '</h3>');
    $('#correct').html('<h3>' + "Total Answered Correctly: " + totalCorrect + '</h3>');
    $('#incorrect').html('<h3>' + "Total Answered Incorrectly: " + totalIncorrect + '</h3>');
    $('#unanswered').html('<h3>' + "Total Unanswered: " + totalUnanswered + '</h3>');
    $('#multipleChoice').empty();
    $('#gameStart').empty();

    //resetart button
    var gameRestartButton = $('<button>' + "Try Again?" + '</button>')
    $('#gameStart').html(gameRestartButton);
    $('#gameStart').on("click", function (event) {
        questionOne();
    });
}

function timesUp() {
    $('#timer').empty();
    $('#question').empty();
    $('#multipleChoice').empty();
    $('#gameStart').html('<h2>' + "Times Up!" + '</h2>');
}

function wrongAnswer() {
    $('#timer').empty();
    $('#question').empty();
    $('#multipleChoice').empty();
    $('#gameStart').html('<h2>' + "Wrong Answer!" + '</h2>');
}

function rightAnswer() {
    $('#timer').empty();
    $('#question').empty();
    $('#multipleChoice').empty();
    $('#gameStart').html('<h2>' + "Thats Correct!" + '</h2>');
}

gameStart()
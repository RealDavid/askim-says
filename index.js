var buttonColours = ["blue", "red", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var answer;
var started = false;
var userChosenColour;



$("html").keypress(function (event) {

    // nextSequence();

    if (!started) {
        nextSequence();
        started = true;
    }
});

$("html").click(function (event) {

    // nextSequence();

    if (!started) {
        nextSequence();
        started = true;
    }
});

$(".box").click(function (event) {



    userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    // if (userClickedPattern.length === level) {
    answer = checkAnswer(userClickedPattern.length - 1);

    if (answer) {
        console.log("right");

        if (userClickedPattern.length === gamePattern.length) {

            userClickedPattern = [];
            setTimeout(function () {
                nextSequence()
            }, 1000);

        }

    } else {
        console.log("wrong");

        playSound("wrong");
        $("body").addClass("game-over");

        // reset values
        level = 0;
        $("h1").text("Game Over, Press Any Key to Restart");
        userClickedPattern = [];
        gamePattern = [];
        // started = false;

        setTimeout(function () {
            $("body").removeClass("game-over");
            started = false;
        }, 200);

    }
    // }

    // console.log(userClickedPattern.length);


});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    increaseLevel();

    // console.log(gamePattern);

    playSound(randomChosenColour);

    // $("#" + randomChosenColour).fadeOut(100);
    // $("#" + randomChosenColour).fadeIn(100);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);

}

function checkAnswer(currentLevel) {
    // console.log(gamePattern[currentLevel]);
    // console.log(userClickedPattern[currentLevel]);



    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        return true;
    }

    return false;

    // if (userClickedPattern.length !== gamePattern.length) {
    //     return false;
    // }
    // for (let i = 0; i < userClickedPattern.length; i++) {
    //     if (userClickedPattern[i] !== gamePattern[i]) {
    //         return false;
    //     }
    // }
    // return true;

    // for (var i = 0; i < currentLevel; i++) {
    //     console.log(i);
    //     console.log(currentLevel - 1);
    //     console.log(gamePattern[i]);
    //     console.log(userClickedPattern[i]);
    //     if (gamePattern[i] === userClickedPattern[i] && i === (currentLevel - 1)) {
    //         console.log("right");

    //         userClickedPattern = [];
    //         setTimeout(function () {
    //             nextSequence()
    //         }, 1000);



    //     }

    //     if (gamePattern[i] != userClickedPattern[i]) {
    //         console.log("wrong");
    //     }

    // }


}

function increaseLevel() {

    level++;

    $("h1").text("Level " + level);

}

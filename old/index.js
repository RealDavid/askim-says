var color = ["blue", "red", "yellow", "green"];

// state 2


// $("html").keypress(function (event) {
//     $("h1").text(event.key);
// })

// state 2

$("html").keypress(function (event) {


    $("h1").text("Level 1");

    gameLoop();
});

function gameLoop() {

    // do {

    var randomNumber = Math.floor(Math.random() * 4);

    var colorToPress = color[randomNumber]
    var clicked

    nextButton(colorToPress);

    $(".box").click(function (event) {
        // console.log($(event.currentTarget).hasClass(colorToPress));

        clicked = $(event.currentTarget).hasClass(colorToPress);
        console.log(clicked);

    });

    // console.log(clicked);
    // setTimeout(5000);

    // } while (clicked);



}

function nextButton(color) {

    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
    $("." + color).fadeOut(100);
    $("." + color).fadeIn(100);

    // switch (colorToPress) {
    //     case 0:
    //         var audio = new Audio("sounds/blue.mp3");
    //         audio.play();
    //         // $("div").hasClass("blue").fadeIn();
    //         // $("div").hasClass("blue").fadeOut();
    //         $(".blue").fadeOut();
    //         $(".blue").fadeIn();

    //         break;

    //     case 1:
    //         var audio = new Audio("sounds/red.mp3");
    //         audio.play();
    //         $(".red").fadeOut();
    //         $(".red").fadeIn();
    //         break;

    //     case 2:
    //         var audio = new Audio("sounds/red.mp3");
    //         audio.play();
    //         $(".red").fadeOut();
    //         $(".red").fadeIn();
    //         break;

    //     case 3:
    //         var audio = new Audio("sounds/red.mp3");
    //         audio.play();
    //         $(".red").fadeOut();
    //         $(".red").fadeIn();
    //         break;

    //     default:
    //         break;
    // }

}

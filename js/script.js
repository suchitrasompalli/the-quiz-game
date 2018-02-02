var color_selection = "";
var animal_selection = "";
var food_selection = "";

function restartGame() {
    window.location.reload();
}
/*
 Beach vacation (Blue, Cat, Pie)
 Adventure vacation (Red, Dog, Cookie)
 Exotic vacation (Yellow, Bird, Ice-cream)
 If none of above matches vacation will be based only on color selection.
*/
function getVacationInformation() {
    if ((color_selection === "Blue") && (animal_selection === "Cat") && (food_selection === "Pie")) {
        return "Beach";
    }
    else if ((color_selection === "Red") && (animal_selection === "Dog") && (food_selection === "Cookie")) {
        return "Adventure";
    }
    else if ((color_selection === "Yellow") && (animal_selection === "Bird") && (food_selection === "Ice-cream")) {
        return "Exotic";
    }
    else if (color_selection === "Blue") {
        return "Beach";
    }
    else if (color_selection === "Red") {
        return "Adventure";
    }
    else if (color_selection === "Yellow") {
        return "Exotic";
    }

}

$(document).ready(function(){
    $("input[name='optcolor']").change(function(){
        color_selection = $(this).val();
        //console.log($("input[name='optcolor']:checked").val());
        $("#myCarousel").carousel(1);
    });

    $("input[name='optanimal']").change(function(){
        animal_selection = $(this).val();
        $("#myCarousel").carousel(2);
    });

    $("input[name='optfood']").change(function() {
        food_selection = $(this).val();
        var location = getVacationInformation();
        if (location === "Beach") {
            $("#message").replaceWith("<div class='select text-center'><h1>You will enjoy a <i>Beach</i> vacation!</h1></div>");
            $("#myCarousel").replaceWith("<div class='text-center'><img src='images/beach.jpeg' alt='Beach Scene' class='select' onClick='restartGame()'></img></div>");
        }
        else if (location === "Adventure") {
            $("#message").replaceWith("<div class='select text-center'><h1>You will enjoy an Adventure vacation!</h1></div>");
            $("#myCarousel").replaceWith("<div class='text-center'><img src='images/adventure.jpeg' alt='Adventure Scene' class='select' onClick='restartGame()'></img></div>");
        }
        else {
            $("#message").replaceWith("<div class='select text-center'><h1>You will enjoy an Exotic vacation!</h1></div>");
            $("#myCarousel").replaceWith("<div class='text-center'><img src='images/exoticnew.jpeg' alt='Exotic Scene' class='select' onClick='restartGame()'></img></div>");
        }
    });
});

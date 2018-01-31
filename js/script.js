function restartGame() {
    window.location.reload();
}

$(document).ready(function(){
    $("input[name='optcolor']").change(function(){
        console.log(this);
        $("#myCarousel").carousel(1);
    });

    $("input[name='optanimal']").change(function(){
        console.log(this);
        $("#myCarousel").carousel(2);
    });

    $("input[name='optfood']").change(function(){
        $("#message").replaceWith("<div><h1>You will enjoy a beach vacation.</h1></div>");
        $("#myCarousel").replaceWith("<img src='images/beach.jpeg' alt='Beach Scene' class='select' onClick='restartGame()'></img>");
    });
});

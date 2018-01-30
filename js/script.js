function myFunction() {
    alert("body loaded");
}

$("#select :input").change(function() {

    console.log(this); // points to the clicked input button
});

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
        
        $("#myCarousel").carousel(0);
    });
});

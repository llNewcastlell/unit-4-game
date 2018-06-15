$(document).ready(function () {
    var loss = 0;
    var wins = 0;
    var crystalone;
    var crystaltwo;
    var crystalthree;
    var crystalfour;
    var jewelNum;
    var score = 0;
    var counter = 0;
    // This will rest the game and provide each jewel with a new number
    function startgame() {

        crystalone = Math.floor((Math.random() * 10) + 1);
        $(".card-img-top-1").attr("data-jewel-value", crystalone);

        crystaltwo = Math.floor((Math.random() * 10) + 1);
        $(".card-img-top-2").attr("data-jewel-value", crystaltwo);

        crystalthree = Math.floor((Math.random() * 10) + 1);
        $(".card-img-top-3").attr("data-jewel-value", crystalthree);

        crystalfour = Math.floor((Math.random() * 10) + 1);
        $(".card-img-top-4").attr("data-jewel-value", crystalfour);

        jewelNum = Math.floor((Math.random() * 101) + 19);

        $(".card-text-wins").text("Wins: " + wins);
        $(".card-text-losses").text("Losses: " + loss);
        $(".card-text-score").text("Score: " + jewelNum);
        $(".card-header-total").text("Your Total Score: " + score)
        console.log(crystalone);
        console.log(crystaltwo);
        console.log(crystalthree);
        console.log(crystalfour);

    }



    startgame();
    // console.log("-------------" + jewelNum);

    // generate a number for each jewel
    $("#gems1").on("click", function () {
        var jewelValue = ($(this).attr("data-jewel-value"));
        jewelValue = parseInt(jewelValue);
        counter += jewelValue;
        $(".card-header-total").text("Your Total Score: " + counter);

        jewelLogic();


    })

    $("#gems2").on("click", function () {
        var jewelValue = ($(this).attr("data-jewel-value"));
        jewelValue = parseInt(jewelValue);
        counter += jewelValue;
        $(".card-header-total").text("Your Total Score: " + counter);


        jewelLogic();

    })


    $("#gems3").on("click", function () {
        var jewelValue = ($(this).attr("data-jewel-value"));
        jewelValue = parseInt(jewelValue);
        counter += jewelValue;
        $(".card-header-total").text("Your Total Score: " + counter);


        jewelLogic();

    })


    $("#gems4").on("click", function () {
        var jewelValue = ($(this).attr("data-jewel-value"));
        jewelValue = parseInt(jewelValue);
        counter += jewelValue;
        $(".card-header-total").text("Your Total Score: " + counter);


        jewelLogic();

    })

    console.log("jewel ddddddddd" + jewelNum);

    function jewelLogic() {
        if (counter === jewelNum) {
            wins++;
            $(".card-text-wins").text("Wins: " + wins);
            alert("You win");
            startgame();

        } else if (counter >= jewelNum) {
            loss--;
            $(".card-text-losses").text("Losses: " + loss);
            alert("You lost");
            
            startgame();
        }

    }




    // document.querySelector("#card-text-wins").innerHTML = "Wins: " + wins;




});
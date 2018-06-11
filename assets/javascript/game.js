var jewelNum = "";
$( document ).ready(function() {
    $(".card-body-1").on("click", function(){
        // var jewelNum = "";

        for (var i = 0; i<2; i++){
            var random = Math.floor(Math.random() * 4) +1;
            jewelNum = random + jewelNum;
        }
        console.log("number" + jewelNum);
        // $(".card-text-score").append(""+ jewelNum);
    })

    $(".card-body-2").on("click", function(){
        // var jewelNum = "";

        for (var i = 0; i<2; i++){
            var random = Math.floor(Math.random() * 4) +1;
            jewelNum = random + jewelNum;
        }
        console.log("number" + jewelNum);
        // $(".card-text-score").append(""+ jewelNum);
    })
    
});


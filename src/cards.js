

$(()=>{
    let deck = [{}];
    deck = createDeck();

    let isDeckOut = false;

    $("#deal").on("click",function(){
        if(isDeckOut==false){
            for(let i = 0; i < deck.length;i++){
                const $card = $("<img>").addClass('cards').attr("src",`${deck[i].imgSrc}`);
                $('#cards').append($card);
            }
            $(this).text("Clear")
            $("#shuffle").text("Clear")
            isDeckOut=true
        }else {
            $('.cards').remove()
            $(this).text("Deal")
            $("#shuffle").text("Shuffle")
            isDeckOut=false
        }
    })

    $("#shuffle").on("click",function(){
        
    shuffle(deck);
      if(isDeckOut==false){
        for(let i = 0; i < deck.length;i++){
            const $card = $("<img>").addClass('cards').attr("src",`${deck[i].imgSrc}`);
            $('#cards').append($card);
        }
            $(this).text("Clear")
            $("#deal").text("Clear")
            isDeckOut=true
         }else{
            $('.cards').remove()
            $(this).text("Shuffle")
            $("#deal").text("Deal")
            isDeckOut=false
        }
    })

})
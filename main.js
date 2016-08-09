$(document).ready(function (){
  var playerX = true;

  $( ".toggle" ).click(function() {
    console.log($(this).children().attr('id'));
    if($( this ).children().hasClass('x') || $( this ).children().hasClass('o')){

    } else {
      if(playerX){;
        playerX = !playerX;
        $(this).html('<div class="x">X</div>');
      } else {
        playerX = !playerX;
        $(this).html('<div class="o">O</div>');
      }
    }
  });

});

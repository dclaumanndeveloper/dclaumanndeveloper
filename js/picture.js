$(function(){
    $("#picbox").on({
     mouseenter: function(){
      $(this).attr('src','./images/rodrigo_profile_picture_2.png');
    },
    mouseleave: function(){
      $(this).attr('src','./images/rodrigo_profile_picture.png');
    }
    });
    
  });


$(document).ready(function () {
  var isClicked = false;
  $('#cross').click(function () {
      if(isClicked===false){
        $(this).find('span').eq(0).css({
          "-webkit-transform":"translateY(-50%) rotate(-135deg)",
          "transition":"all 0.5s",
          "top":"50%"
        });
        $(this).find('span').eq(1).css({
          "transition":"all 0.1s",
          "opacity":"0"
        });
        $(this).find('span').eq(2).css({
          "-webkit-transform":"translateY(-50%) rotate(-45deg)",
          "transition":"all 0.5s",
          "top":"50%"
        });
        isClicked=true;
      }else {
        $(this).find('span').eq(0).css({
          "-webkit-transform":"translateY(-25%) rotate(-360deg)",
          "transition":"all 0.8s",
          "top":"25%"
        });
        $(this).find('span').eq(2).css({
          "-webkit-transform":"translateY(-75%) rotate(360deg)",
          "transition":"all 0.8s",
          "top":"75%"
        });
        $(this).find('span').eq(1).css({
          "transition":"all 0.9s",
          "opacity":"1"
        });
        isClicked=false;
      }
  })
});

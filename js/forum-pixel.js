
$(function(){
  $(window).resize(function() {
    adjust();
  });
  adjust();

  function adjust() {
    if($(window).width()<420){
      $("h4").css("font-size","18px");
      $(".belong-mobile").html($(".belong").html());
      $(".belong-mobile").css("display","block");
      $(".belong").css("display","none");
      $(".forum-info-pic ").css("width","128px");
      $(".forum-info-pic ").css("height","128px");
    }
  }
  
  $('.mdl-layout__content').on('scroll', function () {
    if($(".mdl-layout__content").scrollTop()>80){
      // $(".block-header").css("opacity","0");
      // $(".block-info").css("opacity","0");    
      // $(".forum-header").css("background","#398bb6");
      // $(".block-info-box").css("background","#398bb6"); 
      // $(".block-name").show();
      $(".header-bar").css("background","#398bb6");
    }
    else{
      // $(".block-header").css("opacity","1");
      // // $(".block-info ").css("opacity","1");
      // $(".block-info-box").css("background","#fff");
      // $(".forum-header").css("background","transparent");
      // $(".block-name").hide();
      $(".header-bar").css("background","transparent");
    }
  });
  var clickedFlag = false;
  $("#fixed-btn-add").click(function () {
    if(!clickedFlag){      
      $("#fixed-btn-create").addClass("fixed-btn-create");
      $("#fixed-btn-msg").addClass("fixed-btn-msg");
      $("#fixed-btn-toTop").addClass("fixed-btn-toTop");
      $("#fixed-btn-add").addClass("fixed-btn-add");
      clickedFlag = true;
    }else {   
      $("#fixed-btn-create").removeClass("fixed-btn-create");
      $("#fixed-btn-msg").removeClass("fixed-btn-msg");
      $("#fixed-btn-toTop").removeClass("fixed-btn-toTop");
      $("#fixed-btn-add").removeClass("fixed-btn-add");
      clickedFlag = false;

    }
  });
  if($(window).width()<420){
    $(".fixed-btn-box").css("display","bolck");
    $(".userInfo").addClass("hide");
    $(".side-pannel").css("width","100%");
  }else{
    $(".fixed-btn-box").css("display","none");
  }
})
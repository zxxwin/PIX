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
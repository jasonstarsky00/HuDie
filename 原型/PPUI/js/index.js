$(document).ready(function(){
    //    展示拥有模板
       $("#down-pull").click(function(){
           var status = $(this).attr("data-status");
           if(status=="hide"){
                $("#alinks").show();
                $(".hottemplatebox").css("height",(parseInt($("#alinks").height())+20)+"px")
                $("#down-pull").attr("data-status","show").attr("src","../images/up-pull.png");
           }else{
                $("#alinks").hide();
                $(".hottemplatebox").css("height","20px")
                $("#down-pull").attr("data-status","hide").attr("src","../images/down-pull.png");
           }
       })
   })

//    $(".imghover").hover(function(){
//        $(this).css("display","none")
//        $(this).next().css("display","block")
//    },function(){

//     $(this).css("display","block")
//    })
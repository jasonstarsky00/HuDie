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



//鼠标移入事件
$(".imgright").mouseover(function(){
    //移动的距离
    var id = $(this).attr("data-imgid");
    var height = $("#imgshow"+id).height()-400;
    //移动总毫秒时间
    var time = height/10;
    if(height>0){
        $("#imgshow"+id).stop().animate({top:'-'+height+'px'},time*50);
    }
   
 });


$(".imgleft").mouseover(function(){
    //移动的距离
    var id = $(this).attr("data-imgid");
    var top = Math.abs(parseInt($("#imgshow"+id).css("top")))
    //移动总毫秒时间
    var time = top/10;
    $("#imgshow"+id).stop().animate({top:'0px'},time*50);
});
//鼠标移出事件
$(".imgright").mouseout(function(){
    var id = $(this).attr("data-imgid");
    $("#imgshow"+id).stop()
});
$(".imgleft").mouseout(function(){
    var id = $(this).attr("data-imgid");
    $("#imgshow"+id).stop()
});
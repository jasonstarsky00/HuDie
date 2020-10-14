$(function(){
    $("#showmoretypes").click(function(){
        var more_height = $("#more").height();
        var morebox_height = $("#morebox").height();
        var status = $(this).attr("data-status")
        if(parseInt(status)==1){
            $("#more").show();
            $("#morebox").stop().animate({height:(more_height+morebox_height)+'px'},500)
            $(this).text("收起");
            $(this).css({"background-image":'url(../images/up-pull.png)',"background-position-y":"1px"});
            $(this).attr("data-status","2");
        }else{
            $("#morebox").stop().animate({height:'72px'},500)
            $("#more").hide();
            $(this).text("展开")
            $(this).css({"background-image":'url(../images/down-pull.png)',"background-position-y":"4px"});
            $(this).attr("data-status","1");
        }
    })
})
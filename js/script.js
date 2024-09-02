$(function(){
    $(".item").append("<div>");
    $("div").each(function(){
        $(this).html("<p>"+ $(this).parent().children("img").attr("alt")+"</p>");
    });
});
/*マウスオーバー*/
$(".item").hover(function(){

    $(this).children("div").stop().fadeIn(300);

    $(this).children("div").children("p").stop().animate({"top":0},300);
},function(){

    $(this).children("div").stop().fadeOut(300);

    $(this).children("div").children("p").stop().animate({"top":"10px"},300);
});
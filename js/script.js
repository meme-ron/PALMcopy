 $(function(){
    console.log('Hello!');
    // $(".item").append("<div>");
    // $("div").each(function(){
    //     $(this).html("<p>"+ $(this).parent().children("img").attr("alt")+"</p>");
    // });
    // $('div .item.test').click(function() {
    //     console.log('クリックされました！');
    // })

    // 正しいコード
    // Append a new div to each element with the class 'item'
    $(".item").append("<div>");

    // Iterate over each div inside '.item'
    $(".item div").each(function(){
        // Find the image within the parent of this div
        const imgAlt = $(this).parent().find("img").attr("alt");
        
        // If the image exists and has an alt attribute, set the content of the div
        if (imgAlt) {
            $(this).html("<p>" + imgAlt + "</p>");
        }
    });

    // Add a click event listener to '.item .test' elements inside divs
    $('div .item.test').click(function() {
        console.log('クリックされました！');
    });

    /*マウスオーバー*/
    $(".item").hover(function(){
        console.log("hover")
        $(this).children("div").stop().fadeIn(300);
        $(this).children("div").children("p").stop().animate({"top":0},300);
    },function(){
        $(this).children("div").stop().fadeOut(300);
        $(this).children("div").children("p").stop().animate({"top":"10px"},300);
    });
});


$(function(){

    var $ul=$("#ul_nav");
    $ul.on("click","li" ,function(){
        console.log(11111);
        var $li=$(this);
        console.log($li);
        //if($li.is(":not(.active)")){
        //    console.log(1111);
        $li.addClass("active");
        $li.siblings().removeClass("active");
        //}
        console.log(location.pathname);

    });

    $.ajax({
        url:"header.html",
        type:"get",
        success: function(html) {
            //console.log(html);
            $(html).replaceAll("#header");
            $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
        }
    })
})

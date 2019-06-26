$(function () {
    var $menu=$("#menu");
    var $a=$menu.children("a");
    //console.log($a);
    $a.on("mouseenter", function () {
        //console.log($(this));
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
    })
})
$(function(){
    var $ul=$("#ul_imgs");
    console.log($ul);
    var $btnLeft=$("#btn-left");
    var $btnRight=$("#btn-right");
    var moved=0;
    var $li=$ul.children();
    //console.log($li.length);
    if($li.length<=4){
        $btnRight.addClass("disabled");

    }
    //console.log($li);
    var timer;
    timer=setInterval(function(){
        moved++;
        $ul.css("margin-left",-230*moved);
        if(moved==($li.length-5)){
            moved=0;
        }
    },2000);
    $ul.mouseleave(function(){
        timer=setInterval(function(){
            moved++;
            $ul.css("margin-left",-230*moved);
            if(moved==($li.length-5)){
                moved=0;
            }
        },2000);
    }).mouseenter(function () {
        clearInterval(timer);
    });
    $btnLeft.click(function(){
        clearInterval(timer);
        if($(this).is(":not(.disabled)")){
            moved--;
            $ul.css("margin-left",230*moved);
            $btnRight.removeClass("disabled");
            if(moved==-($li.length-5)){
                $(this).addClass("disabled");
                alert("已经是最后一张啦！");
            }
        }
    })
    $btnRight.click(function(){
        clearInterval(timer);
        if($(this).is(":not(.disabled)")){
            moved++;
            $ul.css("margin-left",230*moved);
            $btnLeft.removeClass("disabled");
            if(moved==0){
                $(this).addClass("disabled");
                alert("已经是第一张啦！");
            }

        }
    });



});
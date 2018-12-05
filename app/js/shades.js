//初始化定位
$('.shades').children('li').each(function(){
    $(this).css('left',$(this).index()*202);
})
//鼠标移入
$('.shades').on('mouseenter','li',function(){
    $('.shades').children('li').each(function(){
        $(this).stop();
    })
    //获取当前元素前面所有的元素
    $(this).prevAll().each(function(){
        //给触碰元素前面所有的元素重新定位
        $(this).animate({left: $(this).index()*36})
        //console.log($(this).index())
    })
    //获取当前元素后面所有的元素
    $(this).nextAll().each(function(){
        //给触碰元素后面所有的元素重新定位
        $(this).animate({left:($(this).index()-1)*36+707})
    })
    //给触碰的元素重新定位
    $(this).animate({left:$(this).index()*36})
   
})//鼠标移出
$('.shades').on('mouseleave',function(){

    $(this).children('li').each(function(){
        $(this).stop();
        $(this).animate({left:$(this).index()*202})
    })
   
})

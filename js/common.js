$(function(){
    $('.hdr').load('./inc/header.html',function(){
        var wd = $(window).width();
        if(wd > 1024){
            $('.navRight').find('i').last().mouseover(function(){
                $('.navBoxWrap').css({
                    height : 'min(2rem,80px)'
                });
            });
            $('.navBoxWrap').mouseleave(function(){
                $('.navBoxWrap').css({
                    height : 0
                });
            });
        }else if(wd > 420 && wd <= 1024){
            $('.navRight').find('i').last().click(function(){
                $('.navBoxWrap').animate({
                    width : '20%'
                },500,function(){
                    $('.navBoxWrap nav>h4').css({
                        opacity:'1',
                        transition: 'opacity 0.8s'
                    })
                });
            });
            $('.navBox>.btn>i').click(function(){
                $('.navBoxWrap nav>h4').css({
                    opacity:'0',
                    transition: 'none'
                });
                $('.navBoxWrap').animate({
                    width : '0%'
                },500,);
            })
        }else{
            $('.navRight').find('i').last().click(function(){
                $('.navBoxWrap').animate({
                    width : '35%'
                },500,function(){
                    $('.navBoxWrap nav>h4').css({
                        opacity:'1',
                        transition: 'opacity 0.8s'
                    })
                });
                $('.navBox>.btn>i').click(function(){
                    $('.navBoxWrap nav>h4').css({
                        opacity:'0',
                        transition: 'none'
                    });
                    $('.navBoxWrap').animate({
                        width : '0%'
                    },500,);
                })
            });
        }
    });
    $('.ftr').load('./inc/footer.html');
});
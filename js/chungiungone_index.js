$(function(){
    var ann = $('main .title>h2>span').text();
            var num = 0;
            var t = 0;
            
            for(var u = 0; u<12; u++){
                setTimeout(tt,u*1000);
            }

            function tt(tt){
                t++;
                num = ann[t-1]
                console.log(num);
                $('main .title>h2>span').eq(t-1).css('opacity','1');
            };
            // 내가 정해준 시간동안 한번 실행
            // setInterval
            // 내가 정해준 시간동안 반복 실행

    $(window).scroll(function(){
        var srl = $(window).scrollTop();
        console.log(srl);
        if(srl>=600){
            $('.cnt01 .images').css('opacity','1');
        }
        if(srl>=1200){
            $('.cnt01 article:first').find('.images').animate({
                marginLeft: '0%'
            },700,function(){
                $('.cnt01  article:first').find('h3').css({
                   height : 'min(2rem,80px)'
                });
            });
        }
        if(srl>=1900){
            $('.cnt01 article:last').find('.images').animate({
                marginRight: '0%'
            },700,function(){
                $('.cnt01  article:last').find('h3').css({
                   height : 'min(2rem,80px)'
                });
            });
        }
    })

    var img = $('.artImg>.images');
    var txt = $('.artTxt>.texts');

    $('.cnt03 .btn').click(function(){
        img.find('li:first').fadeOut(0,function(){
            $(this).appendTo(img);
            $(this).fadeIn(500);
        });
        txt.find('li:first').fadeOut(0,function(){
            $(this).appendTo(txt);
            $(this).fadeIn(500);
        });
    });
});
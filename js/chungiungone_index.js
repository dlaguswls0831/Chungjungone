$(function(){
    var ann = $('main .title>h2>span').text();
            var num = 0;
            var t = 0;
            
            for(var u = 0; u<12; u++){
                setTimeout(tt,u*500);
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
        if(srl>=1300){
            $('.cnt01 article').eq(0).find('h3').css('opacity','1');
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
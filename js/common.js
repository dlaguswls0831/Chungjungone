$(function(){
    $('.hdr').load('../inc/header.html',function(){
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
    });
    $('.ftr').load('../inc/footer.html');
});
$(function(){

    $('.more').addClass('hidden');

    var trigger = $('.trigger')
    trigger.on('click', function(){
        $(this).parent().toggleClass('view');
    })

   
    
    if (window.matchMedia('(max-width:700px)').matches) {
        $('#navTrigger').css('display', 'block');
    }

    $('a[href^="#link_"]').on('click', function(){
        var target = $($(this).attr('href'));
        var point = target.offset().top - 50;

        $('html, body').animate({scrollTop : point}, 600)

        return(false)
    })

    $('#pageNav a').on('click', function(){
        $(this).parents().removeClass('view');
    })

});
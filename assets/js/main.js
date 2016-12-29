$(document).ready(function() {
    $('.ui.accordion').accordion();
    $('a[data-toggle="popup"]').each(function() {
        $(this).popup({
            popup: $(this).attr('data-content'),
            position: $(this).attr('data-position'),
            on: 'click'
        })
    });

    $('a[data-toggle="slide"]').on('click', function(e) {    
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 60
        }, 900, 'swing');

        $('.ui.sidebar').sidebar('hide');
    });

    $('#toggle').click(function() {
        $('.ui.sidebar').sidebar('toggle');
    });

    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });

    $('#see-pendants, #dropdown-pendant').on('click', function(e){
        e.preventDefault();
        hideMain();
        $('#pendants').show();
    });

    $('#dropdown-earrings, #see-earrings').on('click', function(e){
        e.preventDefault();
        hideMain();
        $('#earrings').show();
    });

    function showCollection(Name) {
        $('.ui.rasied.card').css('visiblity', 'visible');
        TweenMax.staggerFromTo(Name, .5, 
            {x:-800, opacity:0},
            {x:0, autoAlpha:1, visibility:'visible'}, .1);
    }
    $('#home-button, #home-logo').on('click', function(e){
        e.preventDefault();
        if ($('.main-landing').is(':visible') == false){
            if ($('#pendants').is(':visible')){
                hideAndShow($('#pendants'), showHome());
            }
            else if ($('#earrings').is(':visible')) {
                hideAndShow($('#earrings'), showHome());
            }
     }
    });
    function hideMain(ShowMeAfter) {
        TweenMax.to($('.main-landing'), .5, 
            {x:+800, autoAlpha: 0, display:'none', onComplete:showCollection($('.ui.raised.card'))});
    }
    function hideAndShow(HideThis, ShowThis){
        HideThis.hide();
        ShowThis();
    }
    function showHome(){
        TweenMax.to($('.main-landing'), .5, 
            {x:0, autoAlpha: 1, display:'block'});
    }
});

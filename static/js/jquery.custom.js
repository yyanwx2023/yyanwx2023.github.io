
(function($){ //create closure so we can safely use $ as alias for jQuery

    $(document).ready(function(){

        "use strict";

        /*-----------------------------------------------------------------------------------*/
        /*  Superfish Menu
        /*-----------------------------------------------------------------------------------*/
        // initialise plugin
        var example = $('.sf-menu').superfish({
            //add options here if required
            delay:       100,
            speed:       'fast',
            autoArrows:  false  
        }); 
        
        /*-----------------------------------------------------------------------------------*/
        /*  bxSlider
        /*-----------------------------------------------------------------------------------*/

        $(window).load(function() {
            // executes when complete page is fully loaded, including all frames, objects and images
            $(".custom-share").fadeIn('1000'); 
            $(".bottom-right").fadeIn('1000'); 
        });

        var abcElements = document.querySelectorAll('.home .section-links');

        // Set their ids
        for (var i = 0; i < abcElements.length; i++)
            abcElements[i].id = 'block-' + i;


        var menuElements = document.querySelectorAll('.scroll-menu li a');

        // Set their ids
        for (var i = 0; i < menuElements.length; i++)
            menuElements[i].href = '#block-' + i;

        /*-----------------------------------------------------------------------------------*/
        /*  Back to Top
        /*-----------------------------------------------------------------------------------*/
        $(function () {
            // fade in #back-top
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').css('visibility','visible');
                } else {
                    $('#back-top').css('visibility','hidden');
                }
            });

            // scroll body to 0px on click
            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        });      
        
        /*-----------------------------------------------------------------------------------*/
        /*  Misc.
        /*-----------------------------------------------------------------------------------*/       
        
        /*-----------------------------------------------------------------------------------*/
        /*  Mobile Menu & Search
        /*-----------------------------------------------------------------------------------*/

        /* Mobile Search */
        $('.search-icon > .fa-search').click(function(){

            $('.header-search').slideDown('fast', function() {});
            $('.search-icon > .fa-search').toggleClass('active');
            $('.search-icon > .fa-close').toggleClass('active');

        });

        $('.search-icon > .fa-close').click(function(){

            $('.header-search').slideUp('fast', function() {});
            $('.search-icon > .fa-search').toggleClass('active');
            $('.search-icon > .fa-close').toggleClass('active');   

        });     

    });    

})(jQuery);

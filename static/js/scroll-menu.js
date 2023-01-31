$(document).ready(function() {
    /*
        $('a[href*=#]').bind('click', function(e) {
                e.preventDefault(); // prevent hard jump, the default behavior

                var target = $(this).attr("href"); // Set the target as variable

                // perform animated scrolling by getting top-position of target-element and set it as scroll target
                $('html, body').stop().animate({
                        scrollTop: $(target).offset().top
                }, 600, function() {
                        location.hash = target; //attach the hash (#jumptarget) to the pageurl
                });

                return false;
        });
        */

    $('a[href*=#]:not([href=#])').click(function() 
    {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) 
    {
      
      var target = $(this.hash),
      headerHeight = $("#wpadminbar").height() + 20; // Get fixed header height
            
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              
      if (target.length) 
      {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 500);
        return false;
      }
    }
    });

});

$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // Show/hide menu on scroll
        //if (scrollDistance >= 850) {
        //      $('nav').fadeIn("fast");
        //} else {
        //      $('nav').fadeOut("fast");
        //}
    
        // Assign active class to nav links while scolling
        $('.section-links').each(function(i) {
                if ($(this).position().top <= scrollDistance) {
                        $('.main-nav a.active').removeClass('active');
                        $('.main-nav a').eq(i).addClass('active');
                }
        });
}).scroll();
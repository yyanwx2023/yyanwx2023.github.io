
(function($){ //create closure so we can safely use $ as alias for jQuery

    $(document).ready(function(){

        "use strict";

        $(".icon-wechat .weixin").click(function() {
            $('.icon-wechat .footer-qrcode').toggle();
        });

        $(window).load(function() {
         // executes when complete page is fully loaded, including all frames, objects and images
          $(".custom-share").fadeIn('1000'); 
          $(".bottom-chat").fadeIn('3000'); 
        });
                
        //$('.sales-counter .counter').countTo();             

    });

})(jQuery);
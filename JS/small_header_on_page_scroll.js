$(window).scroll(function(){

        // Variables
        var $body = $("body");
        var windowScrollTop = $(window).scrollTop();
        var secondRowOffset = $(".body-container .row-fluid-wrapper:nth-child(1)").offset();

        if(secondRowOffset && windowScrollTop > secondRowOffset.top){
            $body.addClass("small-header");
        }
        else {
            $body.removeClass("small-header");
        }
    });

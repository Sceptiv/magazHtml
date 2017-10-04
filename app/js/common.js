$(function() {

    $(document).scroll(function () {
        if ($(document).scrollTop() > $('.menu').height() + 10) {
            $('.head').css({
                'background-color': 'rgba(0, 0, 0, 0.9)',
                'height': '56px',
                'top': '-10px',
                'box-shadow': '2px 0 10px #30c1ff',
                'z-index': '99'
            });
            $('#navbarNav').css({'top': '41px'});
        }
        else {
            $('.head').css({
                'background-color': 'rgba(0, 0, 0, 0.3)',
                'height': '70px',
                'top': '0',
                'box-shadow': 'none'
            });
            $('#navbarNav').css({'top': '55px'});
        }
    });
    $(document).ready(function(){
        $('a[href^="#"]').on('click', function(){

            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
                $('html').animate({scrollTop: destination}, 1000);
            return false;
        });


	});

    var link = $('.navbar a');
    var section = $('section');
    var documentEl = $(document);


    documentEl.on('scroll', function() {
        var currentScrollPos = documentEl.scrollTop();

        section.each(function(){
            var self = $(this);
            if(self.offset().top < (currentScrollPos + 10) && (currentScrollPos + 10) < (self.offset().top + self.outerHeight())){
                var targetClass = '.' + self.attr('class') + "-marker";
                link.removeClass('active');
                $(targetClass).addClass('active');
            }

            // console.log(targetClass)
        });
    });

});
(function () {
    $(window).scroll(function () {
        var $nav = $('.tc-header');
        var navFixedClass = ".tc-header--fixed";

        
        if ($(window).scrollTop() > 100){
            $nav.addClass(navFixedClass);
        }
        else {
            $nav.removeClass(navFixedClass);
        }

    });

    $('.tc-search-button').on('click',(function(){
        $('.tc-search').toggleClass('tc-search--expanded');
    }));
})();
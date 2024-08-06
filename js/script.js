// window scroll
$(window).on("scroll", function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {    
        $("body").addClass("fixed-header");
        } else {
            $("body").removeClass("fixed-header");
            }
})

// document ready
$(document).ready(function() {
    // Typing animation
    new Typed('#type-it', {
        strings: ['Designer ', 'Developer', 'Full Stack Developer'],
        typeSpeed: 100,
        loop: true
    });
});







window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});



 
$(window).scroll(function () {

    alert("scroll");
    var scrollTop = $(this).scrollTop();
 
    $('.headerbg').css({
        opacity: function () {
            var elementHeight = $(this).height(),
                opacity = scrollTop / 500;
            return opacity;
        }
    });

});


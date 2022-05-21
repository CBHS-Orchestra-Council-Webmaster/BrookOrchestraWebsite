window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});


$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    $('.logo').css({
        opacity: function () {
            var elementHeight = $(this).height(),
                opacity = ((elementHeight - scrollTop) / (elementHeight + 50));
            return opacity;
        }
    });

    $('.headerbg').css({
        opacity: function () {
            var elementHeight = $(this).height(),
                opacity = scrollTop / 500;
            return opacity;
        }
    });
});


const appear = document.querySelector('.appear');
const cb = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            entry.unobserve(entry.target);

        }
    });
}
const io = new IntersectionObserver(cb);
io.observe(appear);

const appear2 = document.querySelector('.appear2');
const cb2 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            entry.unobserve(entry.target);

        }
    });
}
const io2 = new IntersectionObserver(cb2);
io2.observe(appear2);
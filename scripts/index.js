$.getJSON("https://api.countapi.xyz/hit/cbhsorchestra.org/visits", function (response) {
    $("#visits").text(response.value);
});

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

const appear3 = document.querySelector('.appear3');
const cb3 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            entry.unobserve(entry.target);

        }
    });
}
const io3 = new IntersectionObserver(cb);
io3.observe(appear3);

let slideIndex = 1;
showSlides(slideIndex);

//next and prev
function plusSlides(n) {
    showSlides(slideIndex += n);
}


//current img
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}



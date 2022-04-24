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
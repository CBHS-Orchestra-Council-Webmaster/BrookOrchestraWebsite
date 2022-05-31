/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector('.menu-btn').classList.toggle("open");

}

//closing dropfown if user clicks outside
window.onclick = function (event) {

    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var menuBtn = document.querySelector('.menu-btn');

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');

            }


            if (menuBtn.classList.contains('open')) {
                menuBtn.classList.remove('open');
            }
        }
    }
}

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();


    $('.headerbg').css({
        opacity: function () {
            var elementHeight = $(this).height(),
                opacity = scrollTop / 500;
            return opacity;
        }
    });
});


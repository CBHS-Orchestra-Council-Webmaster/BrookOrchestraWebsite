window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});



var pclicked = true;
var sclicked = true;
var c1clicked = true;
var c2clicked = true;

function pshow() {

    if (pclicked) {
        document.getElementById("philPic").style.display = 'block';
        pclicked = false;


        document.getElementById("ghost1").style.display = 'none';

    }
    else {

        document.getElementById("philPic").style.display = 'none';
        pclicked = true;

        if (!sclicked) {
            document.getElementById("ghost1").style.display = 'block';

        }


    }


}


function sshow() {

    if (sclicked) {
        document.getElementById("symphPic").style.display = 'block';
        sclicked = false;
        if (pclicked) {
            document.getElementById("ghost1").style.display = 'block';

        }
        // document.getElementById("philPic").style.display = 'block';

        var scrollDiv = document.getElementById("symphPic").offsetTop;
        window.scrollTo({
            top: scrollDiv,
            behavior: 'smooth'
        });
    }
    else {
        document.getElementById("symphPic").style.display = 'none';
        sclicked = true;
        // document.getElementById("philPic").style.display = 'none';
        // pclicked = true;

        if (pclicked) {
            document.getElementById("ghost1").style.display = 'none';

        }
    }


}




function c2show() {

    if (c2clicked) {
        document.getElementById("ch2Pic").style.display = 'block';
        c2clicked = false;

        document.getElementById("ghost2").style.display = 'none';


    }
    else {
        document.getElementById("ch2Pic").style.display = 'none';
        c2clicked = true;


        if (!c1clicked) {
            document.getElementById("ghost2").style.display = 'block';

        }
    }


}

function c1show() {

    if (c1clicked) {
        document.getElementById("ch1Pic").style.display = 'block';
        c1clicked = false;
        if (c2clicked) {
            document.getElementById("ghost2").style.display = 'block';

        }

        var scrollDiv = document.getElementById("ch1Pic").offsetTop;
        window.scrollTo({
            top: scrollDiv,
            behavior: 'smooth'
        });
    }
    else {
        document.getElementById("ch1Pic").style.display = 'none';
        c1clicked = true;

        if (c2clicked) {
            document.getElementById("ghost2").style.display = 'none';

        }

    }


}





// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             document.querySelectorAll(".item")[0].classList.add("inview");
//             document.querySelectorAll(".item")[1].classList.add("inview");
//             document.querySelectorAll(".item")[2].classList.add("inview");
//             document.querySelectorAll(".item")[3].classList.add("inview");
//             document.querySelectorAll(".item")[4].classList.add("inview");
//         }
//     })
// })
// observer.observe(document.querySelector(".cont"));

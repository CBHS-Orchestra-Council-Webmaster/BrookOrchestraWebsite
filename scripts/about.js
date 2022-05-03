var pclicked = true;
var sclicked = true;
var c1clicked = true;
var c2clicked = true;

function pshow() {

    if (pclicked) {
        document.getElementById("philPic").style.display = 'block';
        pclicked = false;
    }
    else {
        document.getElementById("philPic").style.display = 'none';
        pclicked = true;
        document.getElementById("symphPic").style.display = 'none';
        sclicked = true;
    }


}


function sshow() {

    if (sclicked) {
        document.getElementById("symphPic").style.display = 'block';
        sclicked = false;
        document.getElementById("philPic").style.display = 'block';
        pclicked = false;
        var scrollDiv = document.getElementById("symphPic").offsetTop;
        window.scrollTo({
            top: scrollDiv,
            behavior: 'smooth'
        });
    }
    else {
        document.getElementById("symphPic").style.display = 'none';
        sclicked = true;
        document.getElementById("philPic").style.display = 'none';
        pclicked = true;
    }


}




function c2show() {

    if (c2clicked) {
        document.getElementById("ch2Pic").style.display = 'block';
        c2clicked = false;

    }
    else {
        document.getElementById("ch2Pic").style.display = 'none';
        c2clicked = true;
        document.getElementById("ch1Pic").style.display = 'none';
        c1clicked = true;
    }


}

function c1show() {

    if (c1clicked) {
        document.getElementById("ch1Pic").style.display = 'block';
        c1clicked = false;
        document.getElementById("ch2Pic").style.display = 'block';
        c2clicked = false;
        var scrollDiv = document.getElementById("ch1Pic").offsetTop;
        window.scrollTo({
            top: scrollDiv,
            behavior: 'smooth'
        });
    }
    else {
        document.getElementById("ch1Pic").style.display = 'none';
        c1clicked = true;
        document.getElementById("ch2Pic").style.display = 'none';
        c2clicked = true;
    }


}



const appear = document.querySelector('.appear');
const cb = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
        } else {
            entry.target.classList.remove('inview');
        }
    });
}
const io = new IntersectionObserver(cb);
io.observe(appear);


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

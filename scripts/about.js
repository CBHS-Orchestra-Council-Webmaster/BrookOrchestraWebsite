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
    }


}


function sshow() {

    if (sclicked) {
        document.getElementById("symphPic").style.display = 'block';
        sclicked = false;
        document.getElementById("philPic").style.display = 'block';
        pclicked = false;
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
    }


}

function c1show() {

    if (c1clicked) {
        document.getElementById("ch1Pic").style.display = 'block';
        c1clicked = false;
        document.getElementById("ch2Pic").style.display = 'block';
        c2clicked = false;
    }
    else {
        document.getElementById("ch1Pic").style.display = 'none';
        c1clicked = true;
        document.getElementById("ch2Pic").style.display = 'none';
        c2clicked = true;
    }


}








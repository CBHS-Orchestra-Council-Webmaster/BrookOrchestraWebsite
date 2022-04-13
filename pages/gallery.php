<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/gallery.css">
    <link rel="stylesheet" href="../styles/navBar.css">
    <script src="../scripts/navBar.js"></script>
    <script src="../scripts/gallery.js"></script>
    <title>Gallery</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">



</head>

<body>
    <div class="tab">
        <a class="title" href="../pages/index.html">Clear Brook High School Orchestra</a>
        <span class="icons">
            <img src="../images/share_preclick.png" class="share">
            <span class=="dropdown">
                <img onclick="myFunction()" src="../images/menu.png" class="menu dropbtn">

                <div id="myDropdown" class="dropdown-content">
                    <a href="../pages/about.html" class="button">About Us</a>

                    <a href="../pages/calendar.html" class="button">Calendar</a>

                    <a href="../pages/contact.html" class="button">Contact</a>


                    <a href="../pages/news.html" class="button">News</a>

                    <a href="../pages/gallery.html" class="button">Gallery</a>

                    <a href="../pages/support.html" class="button">Support Us</a>

                </div>


            </span>

        </span>


    </div>

    <div class="container">
        <h1>Photo Gallery</h1>
    </div>


    <!-- <div id  = "gallery">
   
      <img src="../images/HomePage/img1.png" alt="">
      <img src="../images/HomePage/img2.png" alt="">
      <img src="../images/HomePage/img3.png" alt="">
      <img src="../images/HomePage/img4.png" alt="">
      <img src="../images/HomePage/img5.png" alt="">
      <img src="../images/HomePage/img6.png" alt="">
      <img src="../images/HomePage/img7.png" alt="">
      <img src="../images/HomePage/img8.png" alt="">
      <img src="../images/Orchestras/chmb1.png" alt="">
      <img src="../images/Orchestras/chmb2.png" alt="">
      <img src="../images/Orchestras/symph.png" alt="">
      <img src="../images/Orchestras/phil.png" alt="">

    </div> -->

    <div class="gallery"><?php
                            // (B) GET LIST OF IMAGE FILES FROM GALLERY FOLDER
                            $images = glob("../images/WebsiteGallery/*.{jpeg,JPEG,jpg,gif,png,bmp,webp}", GLOB_BRACE);
                            // print_r($images);

                            // (C) OUTPUT IMAGES 
                            foreach ($images as $i) {
                                printf("<img src='../images/WebsiteGallery/%s'/>", basename($i));
                            };

                            ?></div>
</body>

<footer>
    <div> ©2022 by Clear Brook High School Orchestra</div>
</footer>

</html>

<!-- (A) CSS & JS -->
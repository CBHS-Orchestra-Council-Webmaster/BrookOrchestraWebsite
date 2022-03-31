<!-- (A) CSS & JS -->
<link href="gallery.css" rel="stylesheet">
<script src="gallery.js"></script>

<div class="gallery"><?php
                        // (B) GET LIST OF IMAGE FILES FROM GALLERY FOLDER
                        $dir = __DIR__ . DIRECTORY_SEPARATOR . "gallery" . DIRECTORY_SEPARATOR;
                        $images = glob("$dir*.{jpg,jpeg,gif,png,bmp,webp}", GLOB_BRACE);

                        // (C) OUTPUT IMAGES 
                        foreach ($images as $i) {
                            printf("<img src='../images/gallery'/>", basename($i));
                        }
                        ?></div>
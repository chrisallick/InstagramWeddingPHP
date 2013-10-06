<?php
    require_once "./md.php";

    $detect = new Mobile_Detect;
    if ( $detect->isMobile() ) {
        include "./mobile.php";
    } else {
        include "./desktop.php";
    }
?>
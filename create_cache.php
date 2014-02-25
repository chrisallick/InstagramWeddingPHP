<?php
	//echo getcwd();
	
	include "./token.php";

	$pics = array();

	$next_url = "https://api.instagram.com/v1/tags/craigandbeegetmarried/media/recent?access_token=" . $token;

	$contents = "var pics = [";

    while( $next_url != "" ) {
		$json = file_get_contents($next_url);
		$json = json_decode($json, TRUE);

	    foreach( $json["data"] as $data ) {
            $url = $data["images"]["low_resolution"]["url"];
            $contents .= "\"" . $url . "\",<br/>";
	    }

		if( array_key_exists('next_url', $json["pagination"]) ) {
    		$next_url = $json["pagination"]["next_url"];
		} else {
			$next_url = "";
		}
    }

    $contents .= "];";

	$file = '/js/cache.js';

	file_put_contents($file, $contents);
?>
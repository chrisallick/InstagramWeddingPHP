<?php
	include "./token.php";

	$pics = array();

	$next_url = "https://api.instagram.com/v1/tags/craigandbeegetmarried/media/recent?access_token=" . $token;
	$json = file_get_contents($next_url);
	$json = json_decode($json, TRUE);

	foreach( $json["data"] as $data ) {
		$url = $data["images"]["low_resolution"]["url"];
		array_push( $pics, $url );
	}

	echo json_encode($pics);
?>
<?
	include "./token.php";

	$pics = array();

	$json = file_get_contents('https://api.instagram.com/v1/tags/craigandbeegetmarried/media/recent?access_token=' . $token);
	$json = json_decode($json, TRUE);

	$next_url = $json["pagination"]["next_url"];
	foreach( $json["data"] as $data ) {
		$url = $data["images"]["low_resolution"]["url"];
		array_push( $pics, $url );
	}

	$json = file_get_contents( $next_url );
	$json = json_decode($json, TRUE);

	$next_url = $json["pagination"]["next_url"];
	foreach( $json["data"] as $data ) {
		$url = $data["images"]["low_resolution"]["url"];
		array_push( $pics, $url );
	}

	$json = file_get_contents( $next_url );
	$json = json_decode($json, TRUE);

	$next_url = $json["pagination"]["next_url"];
	foreach( $json["data"] as $data ) {
		$url = $data["images"]["low_resolution"]["url"];
		array_push( $pics, $url );
	}

	echo json_encode($pics);
?>
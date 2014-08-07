$(document).ready(function() {
	$("#change").click(function(){	
		if (document.getElementById("change").src == "images/NFLShield.png") {
			document.getElementById("change").src = "images/SF.png";
		} else {
			document.getElementById("change").src = "images/NFLShield.png";
		}
	});

	$('#sportsNav').click(function() {
		$('#sportsMenu').toggle();
		// console.log("Hi");
	});
});
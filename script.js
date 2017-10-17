//GOAL:
// From users point of view
// 1. user types in city
// 2. user clicks submit
// 3. picture appears

// from computers point of view
// 1. listen for button to be clicked
// 2. grab text
// 3. show image

$(document).ready(function(){


// listens for button to be clicked/user clicks submit
$("input[type='submit']").click(showPicture);
	
	function showPicture(evt){
		evt.preventDefault()
		var city= $("#city-type").val()

//user types in city
// grab text
// show image
	if (city =="nyc"|| city == "New York" || city == "New York City" ){
		$("body").attr("class", "nyc");
	}

	else if (city =="San Francisco" || city == "SF" || city == "Bay Area"){
		$("body").attr("class", "sf");
	}

	else if (city =="Los Angeles" || city == "LA" || city == "LAX"){
		$("body").attr("class", "la");
	}

	else if (city == "Austin" || city == "ATX"){
		$("body").attr("class", "austin");
	}

	else { (city == "Sydney" || city == "SYD")
		$("body").attr("class", "sydney");
	}



}



	





	});

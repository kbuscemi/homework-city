// GOAL:
//for each city selected - show corresponding pic




$(document).ready(function(){

var cities= ["NYC", "SF", "LA", "ATX", "SYD"];

cities.forEach(function(element, index){
	console.log(element);
	$("select").append("<option>"+element+"</option")
});

// when user selects a variable - show the picture
$("select").change(showPicture);
	
	function showPicture(evt){
		evt.preventDefault()
		var city = $("select").val()

// show different possible outcomes
if (city == "NYC"){
	$("body").attr("class", "nyc");
}

else if (city == "SF"){
	$("body").attr("class","sf");
}

else if (city == "LA"){
	$("body").attr("class","la");
}

else if (city == "ATX"){
	$("body").attr("class","austin");
}

else { 
	$("body").attr("class","sydney");
}

}



});
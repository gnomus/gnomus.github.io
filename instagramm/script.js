function changeSrc (img) {
	var imgid = Math.floor(Math.random()*5) + 1
	img.attr("src", "img/" + imgid+".jpg")
	
	//img.fadeTo(200,0.30, function() {
	//	img.attr("src", "img/" + imgid+".jpg")
	//}).fadeTo(200,1);
	
	console.log("X")
}

var parentdiv =  $("#background");
for (var i = 0; i < 39; i++) {
	for (var j = 0; j < 22; j++)
	{
		var img = $("<img>");
		img.attr("src", "img/white.jpg")
		img.css({
			"top": 50*j,
			"left": 50*i
		});
		parentdiv.append(img);
		setTimeout(function(img) {
			return function() {
				setInterval(function() {
					 changeSrc(img);
				}, 1000);
			};
		}(img), Math.random()*1000);
	}
} 
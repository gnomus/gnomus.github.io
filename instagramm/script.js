function changeSrc (img) {
	var that = img;
	var imgid = Math.floor(Math.random()*5) + 1
	that.attr("src", "img/" + imgid+".jpg")
	console.log("fuu")
}

var parentdiv =  $("#background");
for (var i = 0; i < 16; i++) {
	for (var j = 0; j < 9; j++)
	{
		var img = $("<img>");
		img.attr("src", "img/1.jpg")
		parentdiv.append(img);
		setInterval(function(img) {
			return function() {changeSrc(img);};
		}(img), 1000);
	}
} 
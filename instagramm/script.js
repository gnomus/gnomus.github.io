function changeSrc (img) {
	var imgid = Math.floor(Math.random()*5) + 1
	img.attr("src", "img/" + imgid+".jpg")
}

var uploaddiv =  $(".content.uploads");
for (var i = 0; i < 24; i++) {
	for (var j = 0; j < 16; j++)
	{
		var img = $("<img>");
		img.attr("src", "img/white.jpg")
		img.css({
			"top": 50*j,
			"left": 50*i
		});
		uploaddiv.append(img);
		setTimeout(function(img) {
			return function() {
				setInterval(function() {
					 changeSrc(img);
				}, 400);
			};
		}(img), Math.random()*400);
	}
}

function changeLike (img) {
  if (img.attr("src") == "img/l1.jpg")
    img.attr("src", "img/l2.jpg")
  else
    img.attr("src", "img/l1.jpg")
}

var likediv =  $(".content.likes");
for (var i = 0; i < 24; i++) {
	for (var j = 0; j < 16; j++)
	{
		var img = $("<img>");
    var imgid = Math.round(Math.random())+1
		img.attr("src", "img/l"+ imgid +".jpg")
		img.css({
			"top": 50*j,
			"left": 50*i
		});
		likediv.append(img);
		setTimeout(function(img) {
			return function() {
				setInterval(function() {
					 changeLike(img);
				}, 400);
			};
		}(img), Math.random()*400);
	}
}
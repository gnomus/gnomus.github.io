function changeSrc (img) {
	var imgid = Math.floor(Math.random()*500);
	img.attr("src", "img/selfie/" + imgid+".jpg")
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
				}, 1000);
			};
		}(img), Math.random()*2000);
	}
}

var tag = "love"
function changeTag (img) {
	var imgid = Math.floor(Math.random()*500);
	img.attr("src", "img/" + tag + "/" + imgid+".jpg")
}

function setTag (newTag) {
  tag = newTag;
  imgs = $(".content.tags img");
  imgs.attr("src", "img/white.jpg");
}

$("#click-love").click(function() {
  setTag("love");
  $("#click-love").addClass("selected");
  $("#click-me").removeClass("selected");
  $("#click-follow").removeClass("selected");
})


$("#click-me").click(function() {
  setTag("me");
    $("#click-love").removeClass("selected");
  $("#click-me").addClass("selected");
  $("#click-follow").removeClass("selected");
})


$("#click-follow").click(function() {
  setTag("follow");
  $("#click-love").removeClass("selected");
  $("#click-me").removeClass("selected");
  $("#click-follow").addClass("selected");
})

var tagdiv =  $(".content.tags");
for (var i = 0; i < 24; i++) {
	for (var j = 0; j < 16; j++)
	{
		var img = $("<img>");
		img.attr("src", "img/white.jpg")
		img.css({
			"top": 50*j,
			"left": 50*i
		});
		tagdiv.append(img);
		setTimeout(function(img) {
			return function() {
				setInterval(function() {
					 changeTag(img);
				}, 1000);
			};
		}(img), Math.random()*2000);
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
				}, 1000);
			};
		}(img), Math.random()*2000);
	}
}

$("#noupload").click(function() {
  $("#noupload-text").toggle(1000);
})

$("#yesupload").click(function() {
  $(".yesupload-show").toggle(1000);
})
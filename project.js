function bir() {
	document.getElementById('backimage').style.backgroundImage = "url('photos/backbooks1.jpg')";
	document.getElementById('bir').style.opacity = 1;
	document.getElementById('iki').style.opacity = 0.5;
	document.getElementById('uc').style.opacity = 0.5;
	document.getElementById('bashliq1').innerHTML = "DOWNLOAD FREE EBOOKS";
}
function iki() {
	document.getElementById('backimage').style.backgroundImage = "url('photos/backbooks2.jpg')";
	document.getElementById('iki').style.opacity = 1;
	document.getElementById('bir').style.opacity = 0.5;
	document.getElementById('uc').style.opacity = 0.5;
	document.getElementById('bashliq1').innerHTML = "DO YOU WANT TO READ?";
}
function uc() {
	document.getElementById('backimage').style.backgroundImage = "url('photos/backbooks3.jpg')";
	document.getElementById('uc').style.opacity = 1;
	document.getElementById('bir').style.opacity = 0.5;
	document.getElementById('iki').style.opacity = 0.5;
	document.getElementById('bashliq1').innerHTML = "ENJOY FREE BOOKS";
}

$(function () {

	$("#searchbutton").click(function () {
		$("#searchinput").fadeToggle(250);
	});

	$("#menu").click(function () {
		$(".menuitem2").fadeToggle(250);
		$("#ikon").toggleClass("fas fa-bars");
		$("#ikon").toggleClass("fas fa-times");
	});

	$(".button").click(function () {
		$(".categories").slideToggle(500);
	});

	$(".form").slideDown(500);
	$(".form1").slideDown(500);
});

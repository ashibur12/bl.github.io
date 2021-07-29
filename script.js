
//menu
var menu = $(".menu");
$(window).resize(function(){
	$(".menu-toggle").removeClass("active");
	if($(window).innerWidth() > 600){
		menu.show();
	} else {
		menu.hide();
	}
});
$(".menu-toggle").click(function(){
	$(this).toggleClass("active");
	menu.slideToggle();
})
$(".open-submenu").click(function(){
	$(this).toggleClass("active");
	$(this).next("ul").slideToggle();
	$(this).children(".arrow").toggleClass("down up");
});
//menu




//slider
setInterval(function(){
	if(document.getElementsByClassName("item")[0].classList.contains("active")){
		document.getElementsByClassName("item")[1].classList.add("active");
		document.getElementsByClassName("item")[0].classList.remove("active");
}else if(document.getElementsByClassName("item")[1].classList.contains("active")){
		document.getElementsByClassName("item")[2].classList.add("active");
		document.getElementsByClassName("item")[1].classList.remove("active");
}else	if(document.getElementsByClassName("item")[2].classList.contains("active")){
		document.getElementsByClassName("item")[0].classList.add("active");
		document.getElementsByClassName("item")[2].classList.remove("active");
	}
},2000);
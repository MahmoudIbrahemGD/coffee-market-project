/*card animation*/
$("#card1").mouseenter(function () {
	$("#card1").animate({height:"500px",width:"320px"});
});
$("#card1").mouseleave(function () {
	$("#card1").animate({height:"450px",width:"300px"});
});

$("#card2").mouseenter(function () {
	$("#card2").animate({height:"500px",width:"320px"});
});
$("#card2").mouseleave(function () {
	$("#card2").animate({height:"450px",width:"300px"});
});

$("#card3").mouseenter(function () {
	$("#card3").animate({height:"500px",width:"320px"});
});
$("#card3").mouseleave(function () {
	$("#card3").animate({height:"450px",width:"300px"});
});
/*link animation*/
$(".nav-link").hover(function(){
  $(this).css("color", "#98774f");
  }, function(){
  $(this).css("color", "white");
});
/*button animation*/
$(".btn1").mouseenter(function () {
	$(this).animate({height:"45px",width:"160px"});
});
$(".btn1").mouseleave(function () {
	$(this).animate({height:"40px",width:"136px"});
});

$(".btn2").mouseenter(function () {
	$(this).animate({height:"52px",width:"180px"});
});
$(".btn2").mouseleave(function () {
	$(this).animate({height:"47px",width:"150px"});
});

$(".btn3").mouseenter(function () {
	$(this).animate({height:"43px",width:"120px"});
});
$(".btn3").mouseleave(function () {
	$(this).animate({height:"38px",width:"99px"});
});

$(".btn4").mouseenter(function () {
	$(this).animate({height:"42px",width:"180px"});
});
$(".btn4").mouseleave(function () {
	$(this).animate({height:"38px",width:"150px"});
});
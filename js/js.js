
function container1(){
		$("#container1 .swiper-slide").on("click",function(){
			$(this).addClass("active").siblings().removeClass("active");
		});
}
function container3(){
	$(".fold").on("touchstart",function(){
			if($(".zhezhao").css("z-index")==-1){
				$(".zhezhao").css({"z-index":5});
				$(".fold .iconfont").html("&#xe64e");
				$(".nav").slideDown();
			}else{
				$(".zhezhao").animate({"z-index":-1},200);
				$(".fold .iconfont").html("&#xe64a");
				$(".nav").slideUp();
			}
	})
	$(".nav ul li").on("touchstart",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
}
function container6(){
	var a=0;
	$("#container6").ready(function(){
		$("#container6 .iconfont").on("touchstart",function(){
			var index=$(this).index(".iconfont");
			if(a==0){
				$($(".iconfont")[index]).html("&#xe625");
				a=1;
			}else{
				$($(".iconfont")[index]).html("&#xe61f");
				a=0;
			}
			$($("#container6 ol")[index]).children().toggle();
	})
})
}
function container9(){
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false
	});
}



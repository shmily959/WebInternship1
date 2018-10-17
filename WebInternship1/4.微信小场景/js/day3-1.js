$(function(){
	var nowpage=0;
	//当前页数
	var width=window.innerWidth;
	var height=window.innerHeight;
	//获取屏幕宽高
	
	$(".content").width(width);
	$(".content").height(4*height);
	
	$(".page").width(width);
	$(".page").height(height);
	//不是Jquery自带，是引入的插件
	//手指触屏滑动的事件
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
//			滑动分页功能
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage<0){
				nowpage=0;
			}else if(nowpage>3){
				nowpage=3;
			}
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				if(nowpage==1){
					$(".page2-Farm").fadeIn(2000,function(){
						$(".page2-IT").fadeIn(2000)
					})
				}
				if(nowpage==2){
					$(".page3-Title1").fadeIn(2000);
					$(".page3-Title2").fadeIn(3000);
					$(".page3-bus").animate({left:"-100%"},{duration:2000})
					$(".page3-Avatar").animate({right:"50%"},{duration:3000,complete:function(){
						$(".page3-bus").fadeOut("slow");
						$(".page3-BusStation").fadeOut("slow");
						$(".page3-Title1").fadeOut("slow");
						$(".page3-Avatar").fadeOut("slow");
						$(".page3-Title2").fadeOut("slow",function(){
							$(".page3-TWall").fadeIn("slow");
							$(".page3-TAvatar").fadeIn("slow",function(){
									$(".page3-TSpace").animate({width:"30%"},{duration:400,complete:function(){
										$(".page3-TWhere").animate({width:"55%"},{duration:400})
									}})
							});
						});
					}
					})
				}
			}})
		}
	});
	//animate({要做的动画效果}，{duration：动画时长，conplete：动画执行完要做的事})
	$(".page1-Building").fadeIn(400,function(){
		$(".page1-Flight").animate({width:"70%"},{duration:2000})
	});
	
	$(".page4-lightoff").click(function(){
		$(this).attr("src","img/lightOn.png");
		$(".page4-lightoffBg").fadeOut("slow");
		$(".page4-cornerTitle").fadeOut("slow");
		$(".page4-clickGuide").fadeOut("slow",function(){
			$(".page4-lightonBg").fadeIn("slow");
			$(".page4-you").fadeIn("slow");
		});
	})
	//音乐播放和停止
	$(".musicBtn").click(function(){
		var music=$("#music")[0];
		//document.getElementById("#music")
		if(music.paused){
			music.play();
			$(this).attr("src","img/musicBtn.png");
		}else{
			music.pause();
			$(this).attr("src","img/musicBtnOff.png");
		}
	})
})
//$(document).ready(function(){})
//等文档完成之后再执行JS代码,2段代码功能一样
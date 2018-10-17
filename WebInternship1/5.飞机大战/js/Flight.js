var Flight=(function(){
//	匿名自执行函数
	class Flight{
		constructor(){
			this.width=66;
			this.height=80;
			this.imgSrc="img/self.gif";
			this.left=100;
			this.top=400;
			this.flightElement=null;
		}
		init(){
			this.flightElement=$("<img/>");
			this.flightElement.attr("src",this.imgSrc);
			this.flightElement.css({
				width:this.width+"px",
				height:this.height+"px",
				position:"absolute",
				top:this.top+"px",
				left:this.left+"px"
			});
//			在地图里面增加战机
			Map.addRole(this.flightElement);
		}
		move(x,y){
//			鼠标移动改变飞机定位
//			判断if else保证飞机不飞出去
			if(x<this.width/2){
				x=this.width/2;
			}
			if(x>Map.width-this.width/2){
				x=Map.width-this.width/2;
			}
			if(y<this.height/2){
				y=this.height/2
			}
			if(y>Map.height-this.height/2){
				y=Map.height-this.height/2
			}
			var _that=this;
			this.flightElement.css({
				left:x-_that.width/2+"px",
				top:y-_that.height/2+"px"
			});
			this.left=x;
			this.top=y;
		}
	}
	
	//创建战机对象
	return new Flight();
})();

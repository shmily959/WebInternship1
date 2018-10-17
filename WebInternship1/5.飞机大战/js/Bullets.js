class Bullets{
	constructor(){
		this.width=6;
		this.height=14;
		this.imgSrc="img/bullet.png";
		this.bulletsElement=null;
		this.speed=-3;
		this.isAlive=true;
		this.top=Flight.top-50;
		this.left=Flight.left;
	}
	
	init(){
		this.bulletsElement=$("<img/>");
		this.bulletsElement.attr("src",this.imgSrc);
		this.bulletsElement.css({
			width:this.width+"px",
			height:this.height+"px",
			position:"absolute",
			top:this.top+"px",
			left:this.left+"px"
		});
//			在地图里面增加子弹
		Map.addRole(this.bulletsElement);
	}
	
	move(){
		this.top=this.top+this.speed;
//		上部超出时就销毁
		if(this.top<0){
			this.isAlive=false;
		}
		
		this.bulletsElement.css({
			top:this.top+"px"
		})
	}
}

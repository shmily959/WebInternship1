class Enemy{
	constructor(width,height,imgSrc,speed){
		this.width=width;
		this.height=height;
		this.imgSrc=imgSrc;
		this.speed=speed;
		this.left=Math.random()*Map.width-this.width;
//		保证飞机也只在背景内
		this.top=0;
		this.isAlive=true;
		this.enemyElement=null;
//		[0,1)
	}
	
	init(){
		this.enemyElement=$("<img/>");
		this.enemyElement.attr("src",this.imgSrc);
		if(this.left<0){
			this.left=0;
		}
		this.enemyElement.css({
			width:this.width+"px",
			height:this.height+"px",
			position:"absolute",
			top:this.top+"px",
			left:this.left+"px"
		});
//			在地图里面增加敌方战机
		Map.addRole(this.enemyElement);
	}
	
	move(){
		this.top=this.top+this.speed;
//		超出底部时销毁
		if(this.top>Map.height){
			this.isAlive=false;
		}
		
		this.enemyElement.css({
			top:this.top+"px"
		})
	}
}

//工厂模式创建敌方战机
function createEnemy(type){
	var enemy;
	switch(type){
		case "small":enemy=new Enemy(34,24,"img/small_fly.png",6);break;
		case "middle":enemy=new Enemy(46,60,"img/mid_fly.png",3);break;
		case "big":enemy=new Enemy(110,164,"img/big_fly.png",1);break;
	}
	enemy.init();
	return enemy;
}

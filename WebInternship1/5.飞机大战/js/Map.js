var Map=(function(){
//	定义一个类，类里面也是有属性有方法
//class是ES6新增的
	class Map{
		constructor(){
			//属性都写在constructor里面
			this.width=320;
			this.height=568;
			//	起始页面元素
			this.startElement=null;
			this.startElementImg="img/start_bg.png";
//			游戏背景
			this.gameBg=null;
			this.gameBgImg="img/bg.png";
		}
		
		init(){
			//地图的初始化
			//创建一个元素
			//this指向game对象;
		this.startElement=$("<div></div>");
//		css设置样式
		this.startElement.css({
			width:this.width+"px",
			height:this.height+"px",
			margin:"20px auto",
			background:"url("+this.startElementImg+")"
		});
//		创建游戏背景
		this.gameBg=$("<div></div>");
		this.gameBg.css({
			width:this.width+"px",
			height:this.height+"px",
			margin:"20px auto",
			background:"url("+this.gameBgImg+")",
//			飞机子弹都是根据这个div来定位的
			position:"relative",
			display:"none"
		})
//		append加在元素节点的最后
		$("body").append(this.startElement);
		$("body").append(this.gameBg);
//		地图初始化的同时要将里面的元素初始化
		Flight.init();
		}
		
		addRole(role){
			//在地图里增加一个角色
			this.gameBg.append(role);
		}
		
	}
	
//	创建一个Map对象
	return new Map();
})()

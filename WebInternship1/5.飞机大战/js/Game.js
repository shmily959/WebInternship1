var Game={
//	width:640,属性
//	register:function(){
//		
//	}方法
	bulletsArr:[],//定义存放子弹的数组
	enemiesArr:[],//定义存放飞机的数组
	init:function(){
		//初始化
		Map.init();
		this.registerEventListener();
	},
//	绑定事件
	registerEventListener:function(){
		var _that=this;
		Map.startElement.click(function(){
//			隐藏开始图片
			$(this).hide();
//			游戏开始
			_that.play();
//			显示背景图片
			Map.gameBg.show();
		})
//		鼠标移动事件
		Map.gameBg.mousemove(function(e){
//			e事件源元素
//			console.log(1);
//pageX鼠标距离浏览器左边的距离
			var x=e.pageX-Map.gameBg.offset().left;
			var y=e.pageY-Map.gameBg.offset().top;
			Flight.move(x,y);
		})
	},
	play:function(){
		console.log("game start");
		var _that=this;
		var count=0;
		this.timer=setInterval(function(){		
			_that.checkRole();
			_that.create(count);
//			让所有的子弹对象都move();
			for(var i=_that.bulletsArr.length-1;i>=0;i--){
				if(_that.bulletsArr[i].isAlive){
					_that.bulletsArr[i].move();
				}else{
//					清除元素本身
					_that.bulletsArr[i].bulletsElement.remove();
//					在数组中清除掉该元素
					_that.bulletsArr.splice(i,1);
				}
			}
			
			for(var j=_that.enemiesArr.length-1;j>=0;j--){
				if(_that.enemiesArr[j].isAlive){
					_that.enemiesArr[j].move();
				}else{
//					清除元素本身
					_that.enemiesArr[j].enemyElement.remove();
//					在数组中清除掉该元素
					_that.enemiesArr.splice(j,1);
				}
			}
			
			
			count++;
		},1000/60)
	},
	create:function(count){
		if(count % 50 === 0) // 小敌机
			this.enemiesArr.push(createEnemy("small"));
		if(count % 100 === 0) // 中敌机
			this.enemiesArr.push(createEnemy("middle"));
		if(count % 200 === 0) // 中敌机
			this.enemiesArr.push(createEnemy("big"));
		if(count % 10 === 0) {
			// 创建子弹
			let bullet = new Bullets();
			// 初始化当前创建的子弹对象
			bullet.init();
			// 添加到数组中
			this.bulletsArr.push(bullet);
		}
	},
	check(role1,role2){
//		碰撞检测,返回true或false
//		下面都是没有碰撞的时候
//		取反就是碰撞到了的时候
		return !(role1.left > role2.left + role2.width
				|| role2.left > role1.left + role1.width
				|| role1.top > role2.top + role2.height
				|| role2.top > role1.top + role1.height);
	},
	checkRole(){
//		循环遍历检测子弹和敌方飞机是否碰撞
//此处还可以优化,比如不同飞机的血量不同,给飞机对象加上一个HP属性,每次碰撞后Hp-1,当hp==0的时候才消失
//也可以再加一个得分的属性,击败大飞机500分，小飞机100分等等
		for (let i = this.enemiesArr.length - 1; i >= 0; i--) {
			let enemy = this.enemiesArr[i];
			for (let j = this.bulletsArr.length - 1; j >= 0; j--) {
				let bullet = this.bulletsArr[j];
				if (this.check(enemy, bullet)) {
					// 移除DOM元素
					enemy.enemyElement.remove();
					bullet.bulletsElement.remove();
					// 从数组中删除元素
					this.enemiesArr.splice(i, 1);
					this.bulletsArr.splice(j, 1);
					break;
				}
			}
		}
		// 敌机与战机的碰撞检测
		for (let i = this.enemiesArr.length - 1; i >= 0; i--) {
			if (this.check(this.enemiesArr[i], Flight)) {
				alert("you lose")
				// 碰撞，游戏结束
				clearInterval(this.timer);
				break;
			}
		}
	}
}

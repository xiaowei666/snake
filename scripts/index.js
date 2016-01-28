window.onload=function(){
var zhanchang=document.getElementById('zhanchang');
var kaishi = document.getElementsByClassName('kaishi');
var again = document.getElementsByClassName('again');
var start = document.getElementsByClassName('start');
var SNAKEROW=20;
var RIGHT=39,LEFT=37,UP=38,DOWN=40;
var defaultDirection=RIGHT;
for(var i=0;i<SNAKEROW;i++){
  for(var j=0;j<SNAKEROW;j++){
  var ge=document.createElement('div');
  ge.setAttribute('class','block');
  ge.setAttribute('id',i+'+'+j);
  ge.style.width=(600-SNAKEROW)/SNAKEROW+'px';
  ge.style.height=(600-SNAKEROW)/SNAKEROW+'px';
  zhanchang.appendChild(ge);
  }
}
var tishi = function(shumu){
    start[0].style.marginTop = '0px';
    start[0].innerHTML = shumu;
}
again[0].onclick = function(){
    location.reload();
}
var snake=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
  for(var i=0;i<snake.length;i++){
    document.getElementById(snake[i].x+'+'+snake[i].y).style.background='url(./images/ti.png)';
    document.getElementById(snake[i].x+'+'+snake[i].y).style.backgroundSize='cover';
  }
var isiInSnake=function(aa,bb){
    for(var i=0;i<snake.length;i++){
        if(snake[i].x==aa&&snake[i].y==bb){
            return true;
        }
    }
    return false;
};
var dropfood=function(){
   var 
   x=Math.floor(Math.random()*SNAKEROW),
   y=Math.floor(Math.random()*SNAKEROW);
   if(snake.length==100){var shumu = '恭喜获得胜利';tishi(shumu);return;}
   while(isiInSnake(x,y)){
      x=Math.floor(Math.random()*SNAKEROW),
      y=Math.floor(Math.random()*SNAKEROW);
   }
   document.getElementById(x+'+'+y).style.background='url(./images/qiu.png)';
   document.getElementById(x+'+'+y).style.backgroundSize='cover';
   return {x:x,y:y};
};
var food=dropfood();
var zou=function(){
  var last=snake.length-1,newHead,weiba;
      if(defaultDirection==RIGHT){
          newHead={x:snake[last].x , y:snake[last].y+1};
      }
      if(defaultDirection==LEFT){
          newHead={x:snake[last].x , y:snake[last].y-1};
      }
      if(defaultDirection==DOWN){
        newHead={x:snake[last].x+1, y:snake[last].y};
      }
      if(defaultDirection==UP){
          newHead={x:snake[last].x-1, y:snake[last].y};
      }
      if(newHead.x>SNAKEROW||newHead.x<0||newHead.y>SNAKEROW||newHead.y<0){
         var shumu='撞到了墙壁';
         tishi(shumu);
          return null;
      }
      if(isiInSnake(newHead.x,newHead.y)){
          var shumu ='咬到自己了';
          tishi(shumu);
          return null;
      } 
      if(newHead.x==food.x&&newHead.y==food.y){
       snake.push(newHead);                                                                                                                                                       
       document.getElementById(food.x+'+'+food.y).style.backgroundColor='url(./images/qiu.png)';
       food=dropfood();
        return ;
      } 
      weiba=snake.shift(); 
      snake.push(newHead);                                                                                                                                                       
      document.getElementById(weiba.x+'+'+weiba.y).style.background='rgba(223, 214, 214, 0)';
      document.getElementById(newHead.x+'+'+newHead.y).style.background='url(./images/ti.png)';
      document.getElementById(newHead.x+'+'+newHead.y).style.backgroundSize='cover';
    };
 document.onkeydown=function(e){
  e.preventDefault();
      var dds=e.keyCode;
      if(Math.abs(dds-defaultDirection)!==2){
          defaultDirection=dds;
      }
  };
  var fadong = function(){
    var zouqi=setInterval(zou,150);
  }
  kaishi[0].onclick = function(){
    start[0].style.marginTop = '-1000px';
    setTimeout(fadong,1000)
  }
  

};
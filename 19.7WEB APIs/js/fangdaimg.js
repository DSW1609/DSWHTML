var commodity = document.querySelector('.commodity');
var mask = document.querySelector('.mask');
var bigimg = document.querySelector('.bigimg');
var bigbgimg = document.querySelector('.bigbgimg');
commodity.addEventListener('mouseover', function(){
  mask.style.display = "block";
  bigimg.style.display = "block";
})
commodity.addEventListener('mouseout', function(){
  mask.style.display = "none";
  bigimg.style.display = "none";
})
commodity.addEventListener('mousemove',function(e){
    //先计算出鼠标在盒子内的坐标
    var X = e.pageX - this.offsetLeft;
    var Y = e.pageY - this.offsetTop;
    //获得宽高 offsetWidth/Height
    //得到可移动的距离maskX/Y
    var maskX = X - mask.offsetWidth / 2
    var maskY = Y - mask.offsetHeight / 2
    //限制mask移动距离
    var xzmaskX = commodity.offsetWidth - mask.offsetWidth;
    var xzmaskY = commodity.offsetHeight - mask.offsetHeight;
    //加入判定条件，设置mask可移动区间
    if(maskX <= 0){
      maskX = 0
    }else if(maskX >= xzmaskX){
      maskX = xzmaskX;
    }
    if(maskY <= 0){
      maskY = 0
    }else if(maskY >= xzmaskY){
      maskY = xzmaskY;
    }
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';

    //计算右侧大图片对应的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
    //大图片的最大移动距离
    var bigMax = bigbgimg.offsetWidth - bigimg.offsetWidth;
    //大图片的移动距离 X /Y
    var bigX = maskX * bigMax / xzmaskX;
    var bigY = maskY * bigMax / xzmaskY;
    console.log(bigX,bigY);
    bigbgimg.style.left = -bigX + 'px';
    bigbgimg.style.top = -bigY + 'px';
})

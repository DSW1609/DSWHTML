// 添加鼠标移入显示箭头事件
var peace = document.querySelector('.peacediv');
var leftjt = document.querySelector('.leftjt');
var rightjt = document.querySelector('.rightjt');
peace.addEventListener('mouseenter',function(){
  leftjt.style.display = 'block';
  rightjt.style.display = 'block';
  // 鼠标移入同时清除定时器
  clearInterval(timer);
  timer = null;
});
peace.addEventListener('mouseleave',function(){
  leftjt.style.display = 'none';
  rightjt.style.display = 'none';
  // 鼠标移出重新启用定时器，图片继续自动滚动
  timer = setInterval(function(){
    // 手动调用右侧箭头的点击事件
    rightjt.click();
  },2000);
});
// 点击底部小圆点切换图片事件
var ul = document.querySelector('.peacediv').querySelector('ul');
var ulli = ul.querySelectorAll('li');
var olli = document.querySelector('ol').querySelectorAll('li');
for (var i = 0; i < olli.length; i++) {
  olli[i].addEventListener('click',function() {
    // 先清除所有li的class
    for (var i = 0; i < olli.length; i++) {
      olli[i].className = '';
    }
    // 点击谁把className添加到谁
    this.className = 'dian';
    var index = this.getAttribute("data-index");
    // 把index值赋给num,circle，使底部小圆圈指示位置和图片位置对应
    num = circle = index;
    relax(ul,-500*index);
  })
}
// 点击右侧箭头无缝滚动事件
// 首先利用节点操作克隆第一个li放到ul的最后
var firstli = ul.children[0].cloneNode(true);
ul.appendChild(firstli);
var num = 0;
var circle = 0;
// 右侧箭头点击事件
// 使用节流阀控制动画播放完后再切换下一张
var flag = true;
rightjt.addEventListener('click',function() {
  if(flag){
    flag = false;
    if(num == 3){
      ul.style.left = 0;
      num = 0;
    }
    num++;
    relax(ul,-500 * num,function(){
      // 通过回调函数，动画播放完后恢复点击
      flag = true;
    });
    // 点击右侧箭头，使下面小圆圈一起变化
    circle++;
    // 如果与olli的长度一致，说明到最后一个点了，就把变量复原即从头开始
    // if (circle == olli.length) {
    //   circle = 0;
    // }
    // 更改为三目运算符
    circle = circle == olli.length ? 0 : circle;
    // 调用更改类名函数
    circleChange();
  }
});

// 左侧箭头点击事件
leftjt.addEventListener('click',function() {
  if(flag){
    flag = false;
    if(num == 0){
      num = ulli.length;
      ul.style.left = -num * 500 + 'px';
    }
    num--;
    relax(ul,-500 * num,function(){
      flag = true;
    });
    // 点击右侧箭头，使下面小圆圈一起变化
    circle--;
    // 如果小于0，而说明到最后一张图片了，需要把值改为3
    // if (circle < 0) {
    //   circle = olli.length - 1;
    // } // 使用三目运算符来写
    circle = circle < 0 ? olli.length - 1 : circle;
    // 调用更改类名函数
    circleChange();
  }
})
// 封装更改类名函数
function circleChange(){
  // 首先清除全部li的类名
  for (var i = 0; i < olli.length; i++) {
    olli[i].className = '';
  }
  // 把当前li的类名设为dian，即变成小白点
  olli[circle].className = 'dian';
}
// 添加自动播放的定时器
var timer = setInterval(function(){
  // 手动调用右侧箭头的点击事件
  rightjt.click();
},2000);

// 导航栏跟随鼠标移动事件
var nav = document.querySelector('.nav');
var navli = nav.querySelectorAll('li');
var small = document.querySelector('.small');
for (var i = 0; i < navli.length; i++) {
  // 鼠标移到那个li就把small的left改为这个li的offsetLeft值
  navli[i].addEventListener('mouseenter',function() {
    relax(small,this.offsetLeft-5);
  })
  // 鼠标离开就把small的left改为默认的值
  nav.addEventListener('mouseleave',function() {
    relax(small,11);
  })
}

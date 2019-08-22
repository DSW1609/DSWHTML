// 缓动动画函数封装 obj 目标对象 target 目标位置
// 1.让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。
// 2.核心算法：(目标值 - 现在的位置) / 10 作为每次移动的距离 步长
// 3.停止的条件是：让当前盒子位置等于目标位置就停止定时器
function relax(obj, target, callback){
  // 先清除以前的定时器，只保留一个定时器执行，防止多次点击发生冲突
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    // 步长值写到定时器的里面
    // 把步长值改为整数 不要出现小数问题
    var step = (target - obj.offsetLeft) / 10;
    // 如果步长值大于0，向上取整，否则向下取整
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if(obj.offsetLeft == target){
      // 停止动画，本质是停止定时器
      clearInterval(obj.timer);
      // 回调函数写到定时器结束里面
      // 如果有callback参数传进来就调用
      // if (callback) {
      //   callback();
      // }
      // 高级写法
      callback && callback();
    }
    obj.style.left = obj.offsetLeft + step + 'px';
  },15);
}
// 例
// btn.addEventListener('click',function() {
//   relax(span, 800, function(){
//     alert('Hello!')
//   })
// })

var lis = document.querySelector('.tabtop').querySelectorAll('li');
var items = document.querySelector('.tabbody').querySelectorAll('.tabitem');
for (var i = 0; i < lis.length; i++) {
  // 首先清除所有的xxk类名
  lis[i].onclick = function() {
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = '';
    }
    // 点击谁就把谁加上xxk类名
    this.className = 'xxk';
    // 接下来读取li的自定义属性index的值判断当前点击了哪一个tap
    var index = this.getAttribute('index');
    // 首先隐藏所有的tabitem，
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    // 显示当前点击的选项卡对应的内容
    items[index].style.display = "block";
  }
  }

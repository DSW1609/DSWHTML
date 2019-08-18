var move = document.querySelector('.move');
document.addEventListener('mousemove',function(e) {
  var x = e.pageX;
  var y = e.pageY;
  move.style.left = x - 50 + 'px';
  move.style.top = y - 50 + 'px';
})

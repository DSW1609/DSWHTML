var bg = document.querySelectorAll('img');
// for (var i = 0; i < bg.length; i++) {
//   bg[i].addEventListener('load',function() {
//     if(this.alt % 2 == 0){
//       this.style.left = 300 + 'px';
//     }else{
//       this.style.right = 300 + 'px';
//     }
//   })
// }
document.addEventListener('scroll',function(){
  if(pageYOffset > 0){
    bg[0].style.opacity = '1';
    bg[1].style.opacity = '1';
    bg[0].style.left = 300 + 'px';
    bg[1].style.right = 300 + 'px';
  }if(pageYOffset > 300){
    bg[2].style.opacity = '1';
    bg[3].style.opacity = '1';
    bg[2].style.left = 300 + 'px';
    bg[3].style.right = 300 + 'px';
  }
  else{
    bg[2].style.opacity = '0';
    bg[3].style.opacity = '0';
    bg[2].style.left = 50 + 'px';
    bg[3].style.right = 50 + 'px';
  }
  if(pageYOffset > 600){
    bg[4].style.opacity = '1';
    bg[5].style.opacity = '1';
    bg[4].style.left = 300 + 'px';
    bg[5].style.right = 300 + 'px';
  }else{
    bg[4].style.opacity = '0';
    bg[5].style.opacity = '0';
    bg[4].style.left = 50 + 'px';
    bg[5].style.right = 50 + 'px';
}
})

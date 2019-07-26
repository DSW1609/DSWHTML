var headas = document.getElementById('head').querySelectorAll('li');
var headbodys = document.querySelectorAll('.headbody');
for (var i = 0; i < headas.length; i++) {
  headas[i].onmouseover = function(){
    for (var i = 0; i < headbodys.length; i++) {
      headbodys[i].style.display = "none";
    }
    headbodys[this.id].style.display = "block";
  }
}

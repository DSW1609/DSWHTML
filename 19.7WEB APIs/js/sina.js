var navitems = document.querySelectorAll('.navitem');
var navbodys = document.querySelectorAll('.navitembody');
for (var i = 0; i < navitems.length; i++) {
  navitems[i].onmouseenter = function() {
    this.style.height = "300px";
    var index = this.getAttribute('data-index');
    navbodys[index].style.height = "270px";
  }
  navitems[i].onmouseleave = function() {
    this.style.height = "30px";
    var index = this.getAttribute('data-index');
    navbodys[index].style.height = "0px";
  }
}

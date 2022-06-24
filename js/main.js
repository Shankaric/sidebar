// sidebar toggle button
function toggleSidebar() {
    var x = document.querySelector("#sidebar");
    var y = document.querySelector(".home-section");
    if(x.classList.contains('active')) {
      x.classList.remove('active');
      y.classList.remove('minihome');
      return;
    }
   x.setAttribute('style', '-webkit-transition:0.2s;');
    x.classList.add('active');
    y.classList.add('minihome');
  }
  
  // window resize sidebar
  $(window).bind("resize", function () {
    console.log($(this).width())
    if ($(this).width() < 992) {
        $('.sidebar').addClass('active');
        $('.home-section').addClass('minihome');
    } else {
        $('.sidebar').removeClass('active');
        $('.home-section').removeClass('minihome');
    }
  }).trigger('resize');
  
    
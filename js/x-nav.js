//$('.nav-link').on('click', function() {
//  $('.active-link').removeClass('active-link');
//  $(this).addClass('active-link');
//});


window.onscroll = () =>{
  const nav = document.querySelector('#add-shadow');
  if(this.scrollY <= 40) nav.className = '';
  else nav.className = 'add-shadow';
};

window.onscroll = () =>{
  const nav = document.querySelector('#nav-bg');
  if(this.scrollY <= 50) nav.className = '';
  else nav.className = 'nav-bg';
};
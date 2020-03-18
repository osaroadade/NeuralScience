//nav scroll start

  window.onscroll = () =>{
    const header = document.querySelector('#add-shadow');
    if(this.scrollY <= 40) nav.className = '';
    else nav.className = 'add-shadow';
  };
  
  window.onscroll = () =>{
    const nav = document.querySelector('#nav-bg');
    if(this.scrollY <= 50) nav.className = '';
    else nav.className = 'nav-bg';
  };

//nav scroll end
// Header Scrolling Function
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementsByClassName("header")[0].className = "header header-scrolled";
    } else {
      document.getElementsByClassName("header")[0].className = "header";
    }
  }
  window.onscroll = function() {scrollFunction()};
  
  // Navigation active link
  const navItems = document.getElementsByClassName('nav-item'),
        navLinks = document.querySelectorAll('.nav-link')
  
  function toggleactive() {
      let itemClass = this.parentNode.className
  
      for(i=0 ; i < navItems.length ; i++){
          navItems[i].className = 'nav-item'
      }
      if(itemClass === 'nav-item'){
          this.parentNode.className = 'nav-item show'
      }
  }
  navLinks.forEach((el) => {
      el.addEventListener('click', toggleactive)
  })
  
  // Program Schedule
  const tracksContent = document.getElementsByClassName('tracks_content'),
        tracksHeader = document.querySelectorAll('.tracks_header')
  
  function toggletracks() {
      let itemClass = this.parentNode.className
  
      for(i=0 ; i < tracksContent.length ; i++){
          tracksContent[i].className = 'tracks_content tracks_close'
      }
      if(itemClass === 'tracks_content tracks_close'){
          this.parentNode.className = 'tracks_content tracks_open'
          document.getElementsByClassName('callforpaper-container')[0].scrollIntoView();
      }
  }
  tracksHeader.forEach((el) => {
      el.addEventListener('click', toggletracks)
  })
  
  // mobile navibar toggle
  const navButtonTog = document.getElementById('mobile-nav-toggle'),
      navButton = document.getElementById('nav-button-sym'),
      navMobLinks = document.querySelectorAll('.nav-mobile-link'),
      navShow = document.getElementById('mobile-nav'),
      navBackground = document.getElementById('mobile-body-overlay');
  
  function toggleNav() {
      if(navShow.className === 'mobile-nav'){
          navButton.className = 'uil uil-unlock';
          navShow.className = 'mobile-nav toggle-show';
          navBackground.className = 'toggle-show';
      }
      else{
          navButton.className = 'uil uil-lock';
          navShow.className = 'mobile-nav';
          navBackground.className = 'toggle-off';
      }
  
  }
  function togglemob() {
      navButton.className = 'uil uil-lock';
      navShow.className = 'mobile-nav';
      navBackground.className = 'toggle-off';
  }
  navBackground.addEventListener('click', togglemob);
  navMobLinks.forEach((el) => {
      el.addEventListener('click', togglemob)
  })
  navButtonTog.addEventListener('click', toggleNav);
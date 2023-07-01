window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav'); 
  
    if (window.scrollY > 0) { 
      nav.style.backgroundColor = 'black'; 
    } else {
      nav.style.backgroundColor = 'transparent'; 
    }
  });
const enterBtn = document.getElementById('enter');
const carElem = document.getElementById('primary-carousel');
const myWork = document.getElementById('myWork');
const other = document.getElementById('other')


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var options = {
    // 'dist':-100,
    // 'shift':-50,
    // 'padding':150,
    'fullWidth':true,
    'indicators':true,
  }
  let instances = M.Carousel.init(elems,options);

  // carElem.style.height = (window.innerHeight-64) + 'px';

});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  const options = {
    'accordion':false,
  }
  var instances = M.Collapsible.init(elems, options);
});

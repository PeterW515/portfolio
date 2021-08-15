const enterBtn = document.getElementById('enter');
const carElem = document.getElementById('infoAboutMe');
const myWork = document.getElementById('myWork');
const other = document.getElementById('other')


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.parallax');
//   var instances = M.Parallax.init(elems);
// });

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
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});


enterBtn.addEventListener('click', function () {
  const carInstance = M.Carousel.getInstance(carElem);
  carInstance.set(1);

  document.getElementById('myWork').classList.remove('hide');
  document.getElementById('other').classList.add('hide');
})

// carElem.addEventListener('click', function() {
//   const carInstance = M.Carousel.getInstance(carElem);

//   while (carInstance.pressed || carInstance.dragged){
//     myWork.classList.add('hide');
//     other.classList.add('hide');
//   };
//   console.log(carInstance.center);

//   // console.log(carInstance.center);
//   // setTimeout(() => {
//   //   console.log(carInstance.center);
//   // },10000);
// })

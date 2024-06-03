//main
setTimeout(function() {
  document.querySelector('#header .aside').classList.add('show');
}, 1000);

window.addEventListener('scroll', function(){
  console.log( window.scrollY )
});

const herder = document.querySelector(".typing-demo");

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 2330) {
    herder.classList.add("show");
   } else {
    herder.classList.remove("show");
   }
});
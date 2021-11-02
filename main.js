"use strict";
// ローディング画面
window.onload = function() {
  setTimeout(() => {
    const loading = document.querySelector('.loader');

    const spans = document.querySelectorAll('.ryohey');
    spans.forEach(span => {
      span.classList.add('show');
    });
    loading.classList.add('hidden');

  },3000);
};








const hamburger = document.querySelector(".hamburger");
const innerLine = document.querySelectorAll(".inner_line");
const nav =  document.querySelector('.nav');
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  menuOpen();
});
nav.addEventListener('click' , () => {
  menuOpen();
})

function menuOpen() {
  hamburger.classList.toggle("menu-open");
  menu.classList.toggle("show");
}



const reduces = function(el, issei) {
  const h1 = document.querySelector(el);
  const IS = h1.innerHTML;
  
  const h1Array = IS.trim().split('');
  const result = h1Array.reduce(function(accu, curr) { 
    console.log(accu, curr);
    return `${accu}<span class=${issei}>${curr}</span>`;
    
    
  },'');
  
  
  
  console.log(result);
  h1.innerHTML=result;
  
}
reduces('h1',"ryohey");
reduces('.loader_text',"kuua");


// const loading = document.querySelector('p');
// const loadings =loading.innerHTML;
const scrollImgs = document.querySelectorAll('.scroll_img');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview');
      // observer.unobserve();
    } else {
      entry.target.classList.remove('inview');
    }

  });

}
const options = {
  rootMargin:'0px 0px -200px 0px',
}
const io = new IntersectionObserver(cb, options);
// io.observe('.scroll_img');
scrollImgs.forEach(scrollImg => {
  io.observe(scrollImg);
});





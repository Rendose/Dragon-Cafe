var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register(){
  x.style.left='-400px';
  y.style.left='50px';
  z.style.left='110px';
}
function login(){
  x.style.left='50px';
  y.style.left='450px';
  z.style.left='0px';
}

var modal = document.getElementById('login-form');
window.onclick = function(event){
  if (event.target == modal){
    modal.style,display ="none";
  }
}

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
  search.classList.remove('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});
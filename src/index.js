import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faFacebook, faReddit, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery';
import './index.css';
import App from './App';


library.add(fas, faTwitter, faFontAwesome, faFacebook, faReddit, faSquareInstagram, faCircleQuestion)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Changing nav section onclick
$(function(){
  $(document).on('click', '.nav-red', function(){
      $('.nav-red').removeClass("active");
      $(this).addClass("active");
  });
});

const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-item .nav-link");
window.onscroll = () => {
  var current = "";
  var homepage = document.getElementById("home");

  if(typeof(homepage) != undefined && homepage != null)
  {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.scrollHeight;
      const scrollTop = section.scrollTop;
      
      if (window.scrollY + sectionTop/7 >= sectionTop) {
        current = section.getAttribute("id"); }
    });
  }
  else
  {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.scrollHeight;
      const scrollTop = section.scrollTop;
      
      if ( window.scrollY + sectionTop/3 >= sectionTop) {
        current = section.getAttribute("id"); }
    });
  }
  navItems.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};
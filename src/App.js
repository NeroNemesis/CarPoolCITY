import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./Home";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const navItems = document.querySelectorAll(".nav-red");
    window.onscroll = () => {
      var current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.id }
      });
  
      navItems.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    };
  });
  return (
    <div>
      <Navbar/>
      <div className="flex-container mb-5">
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

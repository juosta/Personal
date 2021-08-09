import { TypeWriter } from './components/hero-text.js'
import {renderParticles} from './components/particle.js'
import { randomizeProp } from './components/randomizeProp.js'
import {fillPorgress, skills} from './components/progress-bar/progress-bar.js'
import {skillsData} from './data/skillsData.js'
import {Projects} from './components/Projects.js'
import {projectsData} from './data/projectsData.js'

// changing hero text
const txtElement = document.querySelector('#hero-text');
const words = JSON.parse(txtElement.getAttribute('data-words'));
const wait = txtElement.getAttribute('data-wait');

new TypeWriter(txtElement, words, wait);
renderParticles("#particles");

//random size for hobbies and traits
const elm=document.querySelectorAll(".property");
randomizeProp(elm);


//progress bars
skills("#progressCol1","#progressCol2", skillsData);
document.addEventListener("scroll", () => fillPorgress(skillsData));


//projectss
const projects = new Projects('#projects', projectsData);


//header
//back to top button
const header = document.getElementById('header');

const mybutton = document.getElementById("topbtn");
mybutton.addEventListener("click", topFunction);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
    header.style.position = "fixed";
    header.classList.add("fixHead");
  } else {
    mybutton.style.display = "none";
    header.style.position = "absolute";
    header.classList.remove("fixHead");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


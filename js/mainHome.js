import { printLetterByLetter } from './components/hero-text.js'
import {renderParticles} from './components/particle.js'
import { randomizeProp } from './components/randomizeProp.js'
import {fillPorgress, skills} from './components/progress-bar/progress-bar.js'
import {skillsData} from './data/skillsData.js'
import {Projects} from './components/Projects.js'
import {projectsData} from './data/projectsData.js'

// changing hero text
printLetterByLetter("hero-text", "a Developer", 100);
renderParticles("#particles");

//random size for hobbies and traits
const elm=document.querySelectorAll(".property");
randomizeProp(elm);


//progress bars
skills("#progressCol1","#progressCol2", skillsData);
document.addEventListener("scroll", () => fillPorgress(skillsData));


//projectss
const projects = new Projects('#projects', projectsData);



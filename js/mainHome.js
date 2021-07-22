import { printLetterByLetter } from './components/hero-text.js'
import { randomizeProp } from './components/randomizeProp.js'

// changing hero text
printLetterByLetter("hero-text", "a Developer", 100);

//random size for hobbies and traits
const elm=document.querySelectorAll(".property");
randomizeProp(elm);
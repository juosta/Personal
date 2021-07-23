class Projects{
    constructor(selector, data){
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        
        this.activeFilterIndex = 0;
        this.init();
    }
    init() {
        if (!this.isValidSelector()) {
            console.error('ERROR: not valid selector');
            return false;
        }

        if (!this.isValidData()) {
            console.error('ERROR: not valid Data');
            return false;
        }
        
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: couldnt find element for given selector');
            return false;
        }
        this.DOM = DOM;
        
        this.render();
        this.addEvents();
        this.DOM.querySelector('.cat').classList.add("selected");
        const images = this.DOM.querySelectorAll(".card");
        images.forEach((image)=> {
            image.classList.add("visible")
        })
    }
    
    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('ERROR: selector must be a string');
            return false;
        }
        
        if (this.selector === '') {
            console.warn('ERROR: selector must not be empty');
            return false;
        }
        
        return true;
    }
    
    isValidData() {
        if (typeof this.data !== 'object' ||
            Array.isArray(this.data)) {
                console.warn('ERROR: data must be type of object');
                return false;
            }

            if (this.data.list === undefined ||
                !Array.isArray(this.data.list)) {
                    console.warn('ERROR: data list must be type of array');
                    return false;
                }
                if (this.data.categories === undefined ||
                    !Array.isArray(this.data.categories)) {
            console.warn('ERROR: data list must be type of array');
            return false;
        }

        if (this.data.list.length === 0) {
            console.warn('ERROR: data list must be not empty');
            return false;
        }
        
        return true;
    }
        render() {
        let HTML = `<div class="row center">
        <div class="col-12 work-menu">`;

        for (const item of this.data.categories) {
            HTML += `<div class="work-m-b"><div class="js-${item}-menu-btn work-menu-button">${item}</div></div>`;
        }
        HTML += `</div></div>`;
        
        HTML += `<div class="row ">`;
        for (const item of this.data.list) {
            HTML += `<div class="col-12 col-lg-4 img-row"><img src="${this.data.imgPath + item.img}" alt="${item.name}" class="work-img ${item.categories}">
            <div class="imageOverlay"></div>
            <h3 class="workTitle">${item.title}</h>
            <h4 class="workSubtitle">${item.subtitle}</h4>
            
            </div>`;
        }
        HTML += `</div>`;
        
        this.DOM.insertAdjacentHTML("beforeend", HTML);
        
    }
}
export { Projects }

//     render() {
//         let HTML = `<div class="row center">
//         <div class="col-12 work-menu">`;

//         for (const item of this.data.categories) {
//             HTML += `<div class="work-m-b"><div class="js-${item}-menu-btn work-menu-button">${item}</div></div>`;
//         }
//         HTML += `</div></div>`;
        
//         HTML += `<div class="row ">`;
//         for (const item of this.data.list) {
//             HTML += `<div class="col-12 col-lg-4 img-row"><img src="${this.data.imgPath + item.img}" alt="${item.name}" class="work-img ${item.categories}">
//             <div class="imageOverlay"></div>
//             <h3 class="workTitle">${item.title}</h>
//             <h4 class="workSubtitle">${item.subtitle}</h4>
            
//             </div>`;
//         }
//         HTML += `</div>`;
        
//         this.DOM.insertAdjacentHTML("beforeend", HTML);
        
//     }

//     addEvents() {
//         const filterItems = this.DOM.querySelectorAll('.work-menu-button');
//         const images = this.DOM.querySelectorAll(".work-img");
//         filterItems.forEach((item, index)=>{
//             item.addEventListener('click', () => {
//                 filterItems[this.activeFilterIndex].classList.remove('selected');
//                 item.classList.add('selected');
//             this.activeFilterIndex = index;
//             const filter= this.data.categories[index].toLowerCase();
//             for (const image of images) {
//                 if(filter.toLowerCase() === "all"){
//                     images.forEach((item)=>{
//                         item.classList.add("visible");
//                     })
//                     break;
//                 }
//                 if(image.classList.contains(filter)){
//                     image.classList.add("visible");
//                 } else {
//                     image.classList.remove("visible");
//                 }
//             }
//         })
//     });
// } 

// }

// // export { OurWork }
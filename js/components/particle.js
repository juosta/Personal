function renderParticles(selector){
    const DOM = document.querySelector(selector);
    let HTML='';
    const code = `<div class="circle-container">
                    <div class="circle"></div>
                </div>`;
    for (let i = 1; i <= 100; i++){
        HTML+= code;
    }
    DOM.insertAdjacentHTML("beforeend", HTML);
}

export {renderParticles}
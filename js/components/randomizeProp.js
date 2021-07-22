function randomizeProp(elm){
    const fmin = 14;
    const fmax = 30;
    elm.forEach(element => {
        let size = Math.floor(Math.random() * (fmax - fmin) + fmin);
        element.style.fontSize = `${size}px`;

    });
}

export {randomizeProp}
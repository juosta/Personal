const TypeWriter = function(txtElement, words, wait = 500) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}


TypeWriter.prototype.type = function() {

    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];
    
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = this.txt;

    let typeSpeed = 200;

    if (this.isDeleting) {
        typeSpeed /= 3;
    }

    if (!this.isDeleting &&
        this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
    }else if (this.isDeleting &&
        this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 200;
    }

    setTimeout(() => this.type(), typeSpeed)
}

export {TypeWriter}
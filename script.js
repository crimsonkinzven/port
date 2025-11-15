let highestZ = 1 ;

class Paper{

    holdingPaper = false;

    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;


    init(paper) {

     paper.addEventListener('mousedown' , (d) => {
        
        this.holdingPaper = true ;

        paper.style.zIndex = highestZ;
        highestZ+= 1;

        if ( d.button === 0) {
            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;

            console.log (this.prevMouseX);
            console.log (this.prevMouseY); 
        }
    })

    document.addEventListener('mousemove' , (d) => {
       
        this.mouseX = d.clientX;
        this.mouseY = d.clientY;

        this.velocityX = this.mouseX - this.prevMouseX;
        this.velocityY = this.mouseY - this.prevMouseY;

        if (this.holdingPaper) {

            this.currentPaperX += this.velocityX;
            this.currentPaperY += this.velocityY;

            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;

            paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
        }

    })

    window.addEventListener('mouseup' , (d) => {
        console.log('mouse is released');
        this.holdingPaper = false;
    })

    }
}

const papers=Array.from(document.querySelectorAll('.paper'));

papers.forEach( paper => {
    const p = new Paper();
    p.init(paper);
})
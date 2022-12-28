class Swiper {
    constructor() {
        this.inicialY = null;
        this.inicialX = null;

        document.addEventListener('touchstart', (event) => this.startTouch(event));
        document.addEventListener('touchmove', (event) => this.moveTouch(event));

        this.events = {
            swipeUp: new Event('swipeUp'),
            swipeDown: new Event('swipeDown'),
            swipeLeft: new Event('swipeLeft'),
            swipeRight: new Event('swipeRight'),
        }
    }

    startTouch(event) {
        event.preventDefault();

        this.inicialX = event.touches[0].clientX;
        this.inicialY = event.touches[0].clientY;
    }

    moveTouch(event) {
        if (!this.inicialX || !this.inicialY) return;

        const currentX = event.touches[0].clientX;
        const currentY = event.touches[0].clientY;

        const diffX = this.initialX - currentX;
        const diffY = this.inicialY - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            //jestesmy w osi X
            if (diffX > 0){
                //w lewo
                document.dispatchEvent(this.events.swipeLeft);
            } else {
                //w prawo
                document.dispatchEvent(this.events.swipeRight);
            }   
        } else {
            //jesteśmy w osi Y
            if (diffY > 0){
                // w góre
                document.dispatchEvent(this.events.swipeUp);
            } else {
                // w dół
                document.dispatchEvent(this.events.swipeDown);
            }
        }

        this.inicialX = null;
        this.inicialY = null;
    }
}

new Swiper();
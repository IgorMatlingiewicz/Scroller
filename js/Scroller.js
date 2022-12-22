class Scroller {
    constructor(rootSelector) {
        const rootElement = document.querySelector(rootSelector);
        this.sections = document.querySelectorAll('section');
        const sectionsArray = [...this.sections]
        
        const currentSectionIndex = sectionsArray.findIndex((element) => {
            return this.isScrolledIntoView(element)
        });
        
        this.currentSectionIndex = Math.max(currentSectionIndex, 0)

        this.isThrottled = false;
    }

    isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.Top;
        const elemBottom = Math.floor(rect.bottom);

        const isVissible = (elemTop >= 0) && (elemBottom <= window.innerHeight)

        return isVissible;
    }

    listenScroll = (event) => {
        if (this.isThrottled) return;
        this.isThrottled = true;

        setTimeout(() => {
            this.isThrottled = false
        }, 1000);
        
        const direction = event.wheelDelta < 0 ? 1 : -1;

        this.scroll(direction)
    }

    scroll = (direction) => {
        if (direction === 1) {
            const isLastSection = this.currentSectionIndex === this.sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const isFirstSectiom = this.currentSectionIndex === 0;
            if (isFirstSectiom) return;
        }

        this.currentSectionIndex += direction; 
        
        this.scrollToCurrenSection();
    }

    scrollToCurrenSection = () => {
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: "smooth",
            block: 'start',
        })
    }
}
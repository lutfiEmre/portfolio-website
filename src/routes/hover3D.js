class Hover3D {
    constructor(id) {
        this.id = id;
        this.xOffset = 7;
        this.yOffset = 7;
        this.attack = 0.05;
        this.release = 0.5;
        this.perspective = 500;
        this.create();
    }

    create() {
        document.querySelectorAll(this.id).forEach(element => {
            const updateElementSize = () => {
                const rectTransform = element.getBoundingClientRect();
                element.rectTransform = rectTransform;
            };

            const perspective = "perspective(" + this.perspective + "px) ";
            element.style.setProperty("transform-style", "preserve-3d");

            element.addEventListener("mouseenter", e => {
                element.style.setProperty("transition", "transform " + this.attack + "s");
            });

            element.addEventListener("mousemove", e => {
                updateElementSize();
                let rectTransform = element.rectTransform;

                let dy = e.clientY - rectTransform.top;
                let dx = e.clientX - rectTransform.left;
                let xRot = this.map(dx, 0, rectTransform.width, -this.xOffset, this.xOffset);
                let yRot = this.map(dy, 0, rectTransform.height, this.yOffset, -this.yOffset);
                let propXRot = "rotateX(" + yRot + "deg) ";
                let propYRot = "rotateY(" + xRot + "deg)";

                element.style.setProperty("transform", perspective + propXRot + propYRot);
            });

            element.addEventListener("mouseleave", e => {
                element.style.setProperty("transition", "transform " + this.release + "s");
                element.style.setProperty("transform", perspective + "rotateX(0deg) rotateY(0deg)");
            });

            updateElementSize();
            window.addEventListener("resize", updateElementSize);
        });
    }

    // Processing map() function
    map(value, istart, istop, ostart, ostop) {
        return ostart + ((ostop - ostart) * (value - istart)) / (istop - istart);
    }
}

export default Hover3D;

window.addEventListener("wheel", (event) => {
    // console.log(event.wheelDeltaY)
    const side = event.wheelDeltaY;
    if (side > 0) {
        gsap.to("#wheel", {
            transform: "translateX(-200%)",
            duration: 4,
            repeat: -1,
            ease: "none"
        })
        gsap.to("#wheel svg", {
            rotate: 180
        })
    } else {
        gsap.to("#wheel", {
            transform: "translateX(0%)",
            duration: 4,
            repeat: -1,
            ease: "none"
        })
        gsap.to("#wheel svg", {
            rotate: 0
        })
    }
})
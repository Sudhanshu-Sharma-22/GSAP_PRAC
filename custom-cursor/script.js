window.addEventListener("mousemove", (event) => {
    gsap.to("#cursor", {
        x: event.x,
        y: event.y,
        duration: 0.6,
        // ease: "bounce.out"
    })
})

const canvasDiv = document.querySelector("#canvas")
const cursor = document.querySelector("#cursor")

canvasDiv.addEventListener("mouseenter", () => {
    cursor.innerHTML = "View More"
    gsap.to("#cursor", {
        scale: 4,
        backgroundColor: "yellow"
    })
})

canvasDiv.addEventListener("mouseleave", () => {
    cursor.innerHTML = ""
    gsap.to("#cursor", {
        scale: 1,
        backgroundColor: "white"
    })
})
const timeline = gsap.timeline();

timeline.to("#hamburgerFull", {
    right: "0%",
    duration: 1,
    delay: 1
})

timeline.from("#hamburgerFull h4", {
    stagger: 0.2,
    duration: 0.6,
    opacity: 0,
    x: 150
})

timeline.from("#hamburgerFull svg", {
    opacity: 0
})

timeline.pause();

const menu = document.querySelector("#nav svg")
const cross = document.querySelector("#hamburger svg")

menu.addEventListener("click", () => {
    timeline.play();
})

cross.addEventListener("click", () => {
    timeline.reverse();
})
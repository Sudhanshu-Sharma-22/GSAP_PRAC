gsap.to(".box", {
    x: 1000,
    duration: 2,
    delay: 1,
    borderRadius: "50%",
    rotate: 720,
    y: 300,
    backgroundColor: "green",
    repeat: -1,
    yoyo: true
})

gsap.from(".box2", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 180,
    backgroundColor: "blue",
    y: 100
})

const timeline = gsap.timeline();

timeline.from("h1", {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: -10,
    stagger: 0.5
})
gsap.from("h2", {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: -20
})
gsap.from("h3", {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: -30
})




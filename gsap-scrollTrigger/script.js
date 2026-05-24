// const timeline = gsap.timeline();

// timeline.from(".page1 .box", {
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1,
//     rotate: 180,
//     scale: 0
// })
// timeline.from(".page2 .box", {
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1,
//     rotate: 180,
//     scale: 0
// })
// timeline.from(".page3 .box", {
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1,
//     rotate: 180,
//     scale: 0
// })

gsap.from(".page1 .box", {
    backgroundColor: "blue",
    duration: 2,
    rotate: 180,
    scale: 0,
    scrollTrigger: {
        trigger: ".page1 .box",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
})
gsap.from(".page2 .box", {
    backgroundColor: "blue",
    duration: 2,
    rotate: 180,
    scale: 0,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        scrub: 1,
        end: "top 30%"
    }
})
gsap.from(".page3 .box", {
    backgroundColor: "blue",
    duration: 2,
    rotate: 180,
    scale: 0,
    scrollTrigger: {
        trigger: ".page3 .box",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
})

gsap.to(".page4 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: ".page4",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        pin: true,
        scrub: 2,
        scroller: "body"
    }
})
const timeline = gsap.timeline();

timeline.from("#topbar h1", {
    opacity: 0,
    y: -20,
    duration: 0.1
})

timeline.from("nav h4, nav button", {
    opacity: 0,
    stagger: 0.2,
    duration: 0.2
})

timeline.from("#infoDiv h1, #infoDiv p, #infoDiv button", {
    opacity: 0,
    x: -20,
    duration: 0.3,
    stagger: 0.1
}, "-=0.3")

timeline.from("#infoImg", {
    x: 20,
    opacity: 0,
    duration: 0.3
}, "-=0.5")

timeline.from("#partners img", {
    opacity: 0,
    y: -100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#partners img",
        start: "top 70%",
        scrub: 2,
        end: "top 40%"
    },

})

const timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#services",
        scroller: "body",
        start: "top 70%",
        scrub: 2,
        end: "top 40%"
    }
});


timeline2.from("#servicesTitle h2", {
    x: -100,
    opacity: 0,
    duration: 0.5,
})

timeline2.from("#serviceOptions .row1.left", {
    opacity: 0,
    x: -50,
    duration: 0.5
}, "1stRow")
timeline2.from("#serviceOptions .row1.right", {
    opacity: 0,
    x: 50,
    duration: 0.5
}, "1stRow")
timeline2.from("#serviceOptions .row2.left", {
    opacity: 0,
    x: -50,
    duration: 0.5
}, "2ndRow")
timeline2.from("#serviceOptions .row2.right", {
    opacity: 0,
    x: 50,
    duration: 0.5
}, "2ndRow")
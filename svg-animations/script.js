let initialPath = `M 10 100 Q 500 100 990 100`
let finalPath = `M 10 100 Q 500 100 990 100`

let string = document.querySelector("#string")

string.addEventListener("mouseenter", () => {
    string.addEventListener("mousemove", (dets) => {
        finalPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
        gsap.to("svg path", {
            attr: {
                d: finalPath
            }
        })
    })
})

string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: {
            d: initialPath
        },
        ease: "elastic.out",
        duration: 1
    })
})


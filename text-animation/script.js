

function textBreaker() {
    const header = document.querySelector("#main h1").textContent;

    const splittedHeader = header.split("");

    let wordContainer = "";

    let arrIndex = splittedHeader.length;

    splittedHeader.forEach((letter, index) => {
        if (index < (arrIndex / 2)) {
            wordContainer += `<span class="starter">${letter}</span>`
        } else {
            wordContainer += `<span class="ender">${letter}</span>`
        }
    })
    document.querySelector("#main h1").innerHTML = wordContainer;
}

textBreaker();

gsap.from("h1 .starter", {
    opacity: 0,
    y: 40,
    stagger: 0.3,
    delay: 1,
    duration: 1
})

gsap.from("h1 .ender", {
    opacity: 0,
    y: 40,
    stagger: -0.3,
    delay: 1,
    duration: 1
})
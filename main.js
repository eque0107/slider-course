const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearActiveClassec()

        slide.classList.add("active")
    })
}

function clearActiveClassec(){
    slides.forEach((slide) => {
        slide.classList.remove("active")
    }) 
}
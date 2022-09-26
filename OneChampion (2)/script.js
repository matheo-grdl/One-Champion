const imag = document.getElementById("image-header-logo")
var TL1 = gsap.timeline();
TL1.from(imag, { duration: 1.5, x: -500, opacity: 0 });


//now we can control it!
var groupea = document.getElementById("groupeA")
var tween = gsap.fromTo(groupea, { opacity: 0, y: 1000, display: none }, { opacity: 1, duration: 1, y: 0, display: block });

function DisplayGr(nb) {
    switch (nb) {
        case "a":
            groupea.style.display = "block";
            const tl = gsap.timeline({ defaults: { duration: 1 } })
            tl
                .from(groupea, { opacity: 0, duration: 1, ease: "power2" })
            break;
    }

}
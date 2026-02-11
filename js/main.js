AOS.init({
    duration: 800,
    once: true
});

new SimpleLightbox({elements: ".galerie a"});

function mobileMenu() {
    var x = document.getElementsByTagName("nav")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }

}
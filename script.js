document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");

    function revealElements() {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("fade-in");
            } else {
                reveals[i].classList.remove("fade-in");
            }
        }
    }

    window.addEventListener("scroll", revealElements);
    revealElements(); // Initial call
});

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const backgrounds = ["#f2f2f2", "#e6f7ff", "#f2e6ff", "#e6f2ff"]; // Define different background colors

    let index = 0;

    function changeBackground() {
        body.style.backgroundColor = backgrounds[index];
        index = (index + 1) % backgrounds.length;
    }

    setInterval(changeBackground, 5000); // Change background every 5 seconds
});

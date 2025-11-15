// Simple JS just to show interaction
// Updates the year in the footer for accessibility and accuracy.
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

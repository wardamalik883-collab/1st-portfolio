const hamburg = document.querySelector(".hamburg");
const dropdown = document.querySelector(".dropdown");
const cancel = document.querySelector(".cancle");

// Show dropdown
hamburg.addEventListener("click", () => {
    dropdown.classList.add("active");
});

// Hide dropdown
cancel.addEventListener("click", () => {
    dropdown.classList.remove("active");
});

// Hide dropdown on link click
dropdown.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        dropdown.classList.remove("active");
    });
});

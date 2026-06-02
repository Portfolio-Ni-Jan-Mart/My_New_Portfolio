function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

document.getElementById("themeToggle").onclick = function() {
    document.body.classList.toggle("dark");
};

// ==========================
// CV MODAL SCRIPT
// ==========================

const cvModalBox = document.getElementById("cvModalBox");
const openCvModal = document.getElementById("openCvModal");
const closeCvModal = document.getElementById("closeCvModal");

openCvModal.addEventListener("click", () => {
    cvModalBox.classList.add("active");
});

closeCvModal.addEventListener("click", () => {
    cvModalBox.classList.remove("active");
});

window.addEventListener("click", (e) => {
    if (e.target === cvModalBox) {
        cvModalBox.classList.remove("active");
    }
});


// ==========================
// PREV & NEXT BUTTON
// ==========================

const carousel = document.querySelector('.certificate-carousel');

document.querySelector('.next').onclick = () => {
    carousel.scrollBy({
        left: 400,
        behavior: 'smooth'
    });
};

document.querySelector('.prev').onclick = () => {
    carousel.scrollBy({
        left: -400,
        behavior: 'smooth'
    });
};



// ==========================
// contacts
// ==========================

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const recaptcha = grecaptcha.getResponse();

    if (recaptcha.length === 0) {
        status.style.color = "orange";
        status.textContent = "Please verify that you are not a robot.";
        return;
    }

    const data = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            status.style.color = "#00ff88";
            status.textContent = "Message sent successfully!";

            form.reset();
            grecaptcha.reset();

        } else {

            status.style.color = "red";
            status.textContent = "Failed to send message.";

        }

    } catch (error) {

        status.style.color = "red";
        status.textContent = "Network error.";

    }

});
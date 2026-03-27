document.addEventListener("DOMContentLoaded", () => {
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const nav = document.getElementById("navbar");

    if (bar) {
        bar.addEventListener("click", () => nav.classList.add("active"));
    }

    if (close) {
        close.addEventListener("click", () => nav.classList.remove("active"));
    }

    // Booking form
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function(e){
            e.preventDefault();

            let name = document.querySelector("input[placeholder='Your Name']").value;
            let phone = document.querySelector("input[placeholder='Phone Number']").value;
            let email = document.querySelector("input[placeholder='Email Address']").value;
            let eventType = document.querySelector("select").value;
            let date = document.querySelector("input[type='date']").value;
            let message = document.querySelector("textarea").value;

            let whatsappNumber = "94787837277";
            let text = `New Booking Request:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nEvent: ${eventType}\nDate: ${date}\nMessage: ${message}`;

            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
            alert("Booking Submitted! WhatsApp window opened.");
            this.reset();
        });
    }

    // Contact form
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
            form.reset();
        });
    }
});
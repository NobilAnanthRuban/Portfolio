document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_7s3b3uj", "template_9t40338", this)
        .then(function () {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Failed to send message: " + error.text);
        });
  });

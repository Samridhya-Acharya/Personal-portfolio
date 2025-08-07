// Typing effect
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Quote of the day
const quotes = [
  "Creativity is intelligence having fun.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Simplicity is the soul of efficiency.",
  "In the middle of difficulty lies opportunity.",
  "First, solve the problem. Then, write the code."
];
document.getElementById("daily-quote").textContent =
  `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

// EmailJS
(function () {
  emailjs.init("YOUR_USER_ID"); // Replace with your public key
})();
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      document.getElementById("form-status").textContent = "✅ Message sent successfully!";
      this.reset();
    }, (err) => {
      document.getElementById("form-status").textContent = "❌ Failed to send. Try again.";
      console.error(err);
    });
});

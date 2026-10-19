
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen); 
  });
}


const roles = document.querySelectorAll(".role");
if (roles.length) {
  let current = 0;
  roles[0].classList.add("active");
  setInterval(() => {
    roles[current].classList.remove("active");
    current = (current + 1) % roles.length; // 
    roles[current].classList.add("active");
  }, 2500);
}


const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible")); 
}


const form = document.getElementById("contact-form");
if (form) {
  const message = document.getElementById("form-message");
  const rules = {
    name: (v) => v.trim().length >= 2 || "Please enter your name.",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Please enter a valid email address.",
    subject: (v) => v.trim().length >= 3 || "Please add a short subject.",
    message: (v) => v.trim().length >= 10 || "Your message should be at least 10 characters."
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    let allValid = true;
    for (const field in rules) {
      const result = rules[field](form.elements[field].value);
      document.getElementById(field + "-error").textContent = result === true ? "" : result;
      if (result !== true) allValid = false;
    }
    message.className = "form-message show " + (allValid ? "success" : "error");
    message.textContent = allValid
      ? "Your details look good, but this form is a frontend demonstration and has not sent anything. Use the email or social links instead."
      : "Please fix the highlighted fields and try again.";
  });
}

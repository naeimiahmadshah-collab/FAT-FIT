document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  const calcBtn = document.getElementById("calc-btn");
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const resultDiv = document.getElementById("bmi-result");

  if (calcBtn && heightInput && weightInput && resultDiv) {
    calcBtn.addEventListener("click", () => {
      const height = parseFloat(heightInput.value) / 100;
      const weight = parseFloat(weightInput.value);

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.style.color = "#ff3333";
        resultDiv.textContent = "Bitte gültige Werte für Größe und Gewicht eingeben.";
        return;
      }

      const bmi = (weight / (height * height)).toFixed(1);
      let category = "";
      let color = "#ffffff";

      if (bmi < 18.5) {
        category = "Untergewicht";
        color = "#ffc107";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normalgewicht";
        color = "#4caf50";
      } else if (bmi >= 25 && bmi < 29.9) {
        category = "Übergewicht";
        color = "#ff9800";
      } else {
        category = "Adipositas";
        color = "#f44336";
      }

      resultDiv.style.color = color;
      resultDiv.innerHTML = `Dein BMI ist: <strong>${bmi}</strong> (${category})`;
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Vielen Dank für deine Nachricht! Wir werden uns in Kürze bei dir melden.");
      contactForm.reset();
    });
  }
});

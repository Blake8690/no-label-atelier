// Mobilmeny
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Stäng meny" : "Öppna meny");
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Tona in sektioner när man scrollar
const revealTargets = document.querySelectorAll(".section h2, .about-text, .product, .member, .contact-form, .quote blockquote");
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => observer.observe(el));

// Kontaktformulär -> öppnar mejlprogrammet (ingen server behövs)
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = encodeURIComponent(`Meddelande från ${data.get("namn")}`);
  const body = encodeURIComponent(`${data.get("meddelande")}\n\n— ${data.get("namn")} (${data.get("epost")})`);
  window.location.href = `mailto:nolabelatelier121@gmail.com?subject=${subject}&body=${body}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

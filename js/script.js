// ===== Mobilmeny =====
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
});

// ===== Stäng nyhetsraden =====
const banner = document.getElementById("banner");
const bannerClose = document.getElementById("banner-close");

if (banner && bannerClose) {
    bannerClose.addEventListener("click", () => banner.remove());
}

// ===== Texten skrivs fram bokstav för bokstav =====
const heroTitle = document.getElementById("hero-title");

if (heroTitle) {
    const lines = ["NO LABEL", "ATELIER"];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursor = '<span class="cursor" aria-hidden="true"></span>';

    if (reduceMotion) {
        heroTitle.innerHTML = lines.join("<br>") + cursor;
    } else {
        // Håll höjden så att sidan inte hoppar medan texten skrivs
        heroTitle.style.minHeight = heroTitle.offsetHeight + "px";
        heroTitle.innerHTML = cursor;

        const fullText = lines.join("\n");
        let i = 0;

        function type() {
            i++;
            const shown = fullText.slice(0, i).replace("\n", "<br>");
            heroTitle.innerHTML = shown + cursor;
            if (i < fullText.length) {
                setTimeout(type, 110);
            }
        }

        setTimeout(type, 500);
    }
}

// ===== Karusell med pilar =====
const carousel = document.getElementById("carousel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

if (carousel && prev && next) {
    const step = () => carousel.querySelector(".product").offsetWidth + 24;

    prev.addEventListener("click", () => {
        carousel.scrollBy({ left: -step(), behavior: "smooth" });
    });

    next.addEventListener("click", () => {
        carousel.scrollBy({ left: step(), behavior: "smooth" });
    });
}

// ===== Tona in när man scrollar =====
const fadeItems = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

fadeItems.forEach((item) => observer.observe(item));

// ===== Kontaktformulär (öppnar mejlprogrammet) =====
const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const subject = encodeURIComponent("Meddelande från " + data.get("namn"));
        const body = encodeURIComponent(
            data.get("meddelande") + "\n\n— " + data.get("namn") + " (" + data.get("epost") + ")"
        );
        window.location.href = "mailto:nolabelatelier121@gmail.com?subject=" + subject + "&body=" + body;
    });
}

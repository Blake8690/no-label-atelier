// ===== Inställningar – ändra här =====
const EPOST = "nolabelatelier121@gmail.com"; // används bara som reserv om Netlify inte svarar
const FRAKT = 59;                            // fraktkostnad i kr (kunden betalar)
const SWISH_NUMMER = "";                     // fyll i när Swish är klart, t.ex. "123 456 78 90"
const STORLEKAR = ["S", "M", "L"];

// Produkterna. Bild: lägg filen i mappen bilder/ och skriv t.ex. "../bilder/plagg-01.jpg"
const PRODUKTER = [
    { id: "plagg-01", namn: "Plagg 01", pris: 350, bild: "" },
    { id: "plagg-02", namn: "Plagg 02", pris: 350, bild: "" },
    { id: "plagg-03", namn: "Plagg 03", pris: 350, bild: "" },
];

// ===== Mobilmeny =====
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    });
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

// ===== Produkter =====
const products = document.getElementById("products");

function imageHtml(produkt) {
    return produkt.bild ? '<img src="' + produkt.bild + '" alt="' + produkt.namn + '">' : "";
}

if (products) {
    products.innerHTML = PRODUKTER.map((p) => `
        <article class="product" data-id="${p.id}">
            <div class="image image-product">${imageHtml(p) || "<span>Produktbild</span>"}</div>
            <div class="product-row">
                <h3>${p.namn}</h3>
                <p class="price">${p.pris} kr</p>
            </div>
            <div class="sizes" aria-label="Storlek">
                ${STORLEKAR.map((s) => `<button type="button" class="size" data-size="${s}" aria-pressed="false">${s}</button>`).join("")}
            </div>
            <button type="button" class="btn btn-full add">Lägg i varukorg</button>
            <p class="size-hint">Välj en storlek först</p>
        </article>
    `).join("");

    products.addEventListener("click", (e) => {
        const card = e.target.closest(".product");
        if (!card) return;

        const sizeBtn = e.target.closest(".size");
        if (sizeBtn) {
            card.querySelectorAll(".size").forEach((b) => b.setAttribute("aria-pressed", b === sizeBtn));
            card.classList.remove("need-size");
        }

        if (e.target.closest(".add")) {
            const chosen = card.querySelector('.size[aria-pressed="true"]');
            if (!chosen) {
                card.classList.add("need-size");
                return;
            }
            addToCart(card.dataset.id, chosen.dataset.size);
            openCart();
        }
    });
}

// ===== Karusell med pilar =====
const prev = document.getElementById("prev");
const next = document.getElementById("next");

if (products && prev && next) {
    const step = () => products.querySelector(".product").offsetWidth + 24;

    prev.addEventListener("click", () => {
        products.scrollBy({ left: -step(), behavior: "smooth" });
    });

    next.addEventListener("click", () => {
        products.scrollBy({ left: step(), behavior: "smooth" });
    });
}

// ===== Varukorg =====
let cart = loadCart();

function loadCart() {
    try {
        const saved = JSON.parse(localStorage.getItem("nla-varukorg")) || [];
        return saved.filter((item) => findProduct(item.id));
    } catch {
        return [];
    }
}

function saveCart() {
    try {
        localStorage.setItem("nla-varukorg", JSON.stringify(cart));
    } catch {
        // Varukorgen fungerar ändå, den sparas bara inte mellan besök
    }
    updateCount();
}

function findProduct(id) {
    return PRODUKTER.find((p) => p.id === id);
}

function addToCart(id, size) {
    const item = cart.find((i) => i.id === id && i.size === size);
    if (item) {
        item.antal++;
    } else {
        cart.push({ id: id, size: size, antal: 1 });
    }
    saveCart();
}

function totals() {
    const delsumma = cart.reduce((sum, i) => sum + findProduct(i.id).pris * i.antal, 0);
    const frakt = cart.length ? FRAKT : 0;
    return { delsumma: delsumma, frakt: frakt, totalt: delsumma + frakt };
}

function updateCount() {
    const count = document.getElementById("cart-count");
    if (count) count.textContent = cart.reduce((sum, i) => sum + i.antal, 0);
}

// Panelen som glider in från höger (skapas här så den finns på båda sidorna)
document.body.insertAdjacentHTML("beforeend", `
    <div class="overlay" id="overlay"></div>
    <aside class="drawer" id="drawer" aria-label="Varukorg" aria-hidden="true">
        <div class="drawer-head">
            <h2 id="drawer-title">Varukorg</h2>
            <button class="drawer-close" id="drawer-close" aria-label="Stäng">×</button>
        </div>
        <div class="drawer-body" id="drawer-body"></div>
    </aside>
`);

const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const drawerBody = document.getElementById("drawer-body");
const drawerTitle = document.getElementById("drawer-title");

function openCart() {
    renderCart();
    drawer.classList.add("open");
    overlay.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    document.getElementById("drawer-close").focus();
}

function closeCart() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
}

document.getElementById("cart-btn").addEventListener("click", openCart);
document.getElementById("drawer-close").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCart();
});

function summaryHtml() {
    const t = totals();
    return `
        <div class="summary">
            <div><span>Delsumma</span><span>${t.delsumma} kr</span></div>
            <div><span>Frakt</span><span>${t.frakt} kr</span></div>
            <div class="total"><span>Totalt</span><span>${t.totalt} kr</span></div>
        </div>
    `;
}

function renderCart() {
    drawerTitle.textContent = "Varukorg";

    if (!cart.length) {
        drawerBody.innerHTML = `
            <p class="empty">Varukorgen är tom.</p>
            <a href="index.html#plaggen" class="btn" data-act="close">Se plaggen</a>
        `;
        return;
    }

    drawerBody.innerHTML = cart.map((item, index) => {
        const p = findProduct(item.id);
        return `
            <div class="cart-item" data-index="${index}">
                <div class="cart-thumb">${imageHtml(p)}</div>
                <div>
                    <p class="cart-name">${p.namn}</p>
                    <p class="cart-meta">Storlek ${item.size}</p>
                    <div class="qty">
                        <button data-act="minus" aria-label="Färre">−</button>
                        <span>${item.antal}</span>
                        <button data-act="plus" aria-label="Fler">+</button>
                    </div>
                </div>
                <div class="cart-price">
                    <span>${p.pris * item.antal} kr</span>
                    <button class="remove" data-act="remove">Ta bort</button>
                </div>
            </div>
        `;
    }).join("") + summaryHtml() + `
        <button class="btn btn-full" data-act="checkout">Till kassan</button>
    `;
}

function renderCheckout() {
    drawerTitle.textContent = "Kassa";
    drawerBody.innerHTML = `
        <button class="back" data-act="back">‹ Tillbaka till varukorgen</button>
        <form class="checkout" id="checkout">
            <input name="namn" placeholder="För- och efternamn" autocomplete="name" required>
            <input name="email" type="email" placeholder="E-post" autocomplete="email" required>
            <input name="telefon" type="tel" placeholder="Mobilnummer (för Swish)" autocomplete="tel" required>
            <input name="adress" placeholder="Gatuadress" autocomplete="street-address" required>
            <div class="field-row">
                <input name="postnummer" placeholder="Postnummer" autocomplete="postal-code" inputmode="numeric" required>
                <input name="ort" placeholder="Ort" autocomplete="address-level2" required>
            </div>
            <textarea name="meddelande" rows="2" placeholder="Meddelande (valfritt)"></textarea>
            ${summaryHtml()}
            <p class="note">Du betalar med Swish. När vi har tagit emot beställningen får du betalningsinformation, och vi skickar plagget när betalningen är klar.</p>
            <details class="terms">
                <summary>Köpvillkor</summary>
                <p><strong>Säljare:</strong> NO LABEL ATELIER UF, ett UF-företag från Stockholm. Kontakt: ${EPOST}.</p>
                <p><strong>Betalning:</strong> Med Swish efter att vi har bekräftat din beställning. Plagget skickas när betalningen är klar.</p>
                <p><strong>Frakt:</strong> ${FRAKT} kr inom Sverige. Vi skickar alla beställningar – det går inte att hämta upp.</p>
                <p><strong>Ångerrätt:</strong> Du har 14 dagars ångerrätt från den dag du tar emot plagget. Mejla oss för att ångra köpet. Plagget ska vara oanvänt och i nyskick. Du står för returfrakten.</p>
                <p><strong>Återbetalning:</strong> Vi betalar tillbaka till ditt Swish-nummer inom 14 dagar efter att du ångrat köpet. Vi får vänta med återbetalningen tills vi har fått tillbaka plagget.</p>
                <p><strong>Reklamation:</strong> Om plagget är felaktigt har du rätt att reklamera enligt konsumentköplagen. Kontakta oss så snart du upptäcker felet.</p>
            </details>
            <label class="check">
                <input type="checkbox" name="villkor" required>
                <span>Jag har läst och godkänner köpvillkoren</span>
            </label>
            <button type="submit" class="btn btn-full">Skicka beställning</button>
        </form>
    `;
    document.getElementById("checkout").addEventListener("submit", submitOrder);
}

function renderDone(orderNr, total, viaMejlprogram) {
    drawerTitle.textContent = "Tack!";

    let payment = "Vi mejlar dig betalningsinformation för Swish så snart vi har bekräftat beställningen.";
    if (SWISH_NUMMER) {
        payment = `Swisha <strong>${total} kr</strong> till <strong>${SWISH_NUMMER}</strong> och skriv <strong>${orderNr}</strong> som meddelande.`;
    }
    if (viaMejlprogram) {
        payment = "Ditt mejlprogram har öppnats med beställningen – tryck på skicka för att slutföra den. " + payment;
    }

    drawerBody.innerHTML = `
        <div class="done">
            <h3>Tack för din beställning!</h3>
            <p>Ordernummer: <strong>${orderNr}</strong></p>
            <p>${payment}</p>
            <button class="btn" data-act="close">Stäng</button>
        </div>
    `;
}

drawerBody.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const act = btn.dataset.act;
    const row = btn.closest(".cart-item");
    const item = row ? cart[Number(row.dataset.index)] : null;

    if (act === "plus") item.antal++;
    if (act === "minus") item.antal--;
    if (act === "remove") item.antal = 0;
    if (item) {
        cart = cart.filter((i) => i.antal > 0);
        saveCart();
        renderCart();
    }

    if (act === "checkout") renderCheckout();
    if (act === "back") renderCart();
    if (act === "close") closeCart();
});

// ===== Skicka till Netlify Forms (beställning och kontaktformulär) =====
// Formulären heter nla-bestallning och nla-kontakt. Netlify hittar dem via de dolda
// formulären i html/index.html. Ordrarna syns i Netlify under Forms och kommer som mejl.
async function sendForm(formName, subject, fields) {
    const body = new URLSearchParams(Object.assign({ "form-name": formName, subject: subject }, fields));
    const res = await fetch("/html/index.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
    });
    if (!res.ok) {
        throw new Error("Kunde inte skicka");
    }
}

// Reserv om tjänsten inte svarar: öppna mejlprogrammet i stället
function openMailApp(subject, fields) {
    const body = Object.keys(fields).map((key) => key + ": " + fields[key]).join("\n");
    window.location.href = "mailto:" + EPOST + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}

async function submitOrder(e) {
    e.preventDefault();
    const form = e.target;
    const button = form.querySelector('button[type="submit"]');
    const data = Object.fromEntries(new FormData(form));
    const t = totals();
    const orderNr = "NLA-" + String(Date.now()).slice(-6);

    const fields = {
        ordernummer: orderNr,
        namn: data.namn,
        email: data.email,
        telefon: data.telefon,
        adress: data.adress + ", " + data.postnummer + " " + data.ort,
        plagg: cart.map((i) => i.antal + " st " + findProduct(i.id).namn + " (" + i.size + ")").join(", "),
        delsumma: t.delsumma + " kr",
        frakt: t.frakt + " kr",
        totalt: t.totalt + " kr",
        meddelande: data.meddelande || "–",
        villkor: "Godkända",
    };
    const subject = "NO LABEL – Ny beställning " + orderNr;

    button.disabled = true;
    button.textContent = "Skickar…";

    let viaMejlprogram = false;
    try {
        await sendForm("nla-bestallning", subject, fields);
    } catch {
        openMailApp(subject, fields);
        viaMejlprogram = true;
    }

    cart = [];
    saveCart();
    renderDone(orderNr, t.totalt, viaMejlprogram);
}

updateCount();

// ===== Flikar (Om oss) =====
const tabs = document.querySelectorAll(".tab");

function showTab(tab) {
    tabs.forEach((t) => {
        const active = t === tab;
        t.setAttribute("aria-selected", active);
        document.getElementById(t.getAttribute("aria-controls")).hidden = !active;
    });
}

tabs.forEach((tab) => tab.addEventListener("click", () => showTab(tab)));

if (location.hash === "#teamet" && document.getElementById("tab-teamet")) {
    showTab(document.getElementById("tab-teamet"));
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

// ===== Kontaktformulär =====
const contactForm = document.getElementById("form");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(contactForm));
        const status = document.getElementById("form-status");
        const button = contactForm.querySelector('button[type="submit"]');
        const subject = "NO LABEL – Meddelande från " + data.namn;
        const fields = { namn: data.namn, email: data.email, meddelande: data.meddelande };

        button.disabled = true;
        try {
            await sendForm("nla-kontakt", subject, fields);
            contactForm.reset();
            status.textContent = "Tack! Vi hör av oss så snart vi kan.";
        } catch {
            openMailApp(subject, fields);
            status.textContent = "Ditt mejlprogram har öppnats – tryck på skicka.";
        }
        button.disabled = false;
    });
}

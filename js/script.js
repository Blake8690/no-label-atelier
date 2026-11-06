// ===== Inställningar – ändra här =====
const EPOST = "nolabelatelier121@gmail.com"; // används bara som reserv om Netlify inte svarar
const FRAKT = 59;                            // fraktkostnad i kr (kunden betalar)
const SWISH_NUMMER = "";                     // fyll i när Swish är klart, t.ex. "123 456 78 90"
const STORLEKAR = ["30×40", "50×70"];       // poster-storlekar i cm

// Produkterna. Bild: lägg filen i mappen bilder/ och skriv t.ex. "../bilder/poster-01.jpg"
const PRODUKTER = [
    { id: "poster-01", namn: "Poster 01", pris: 350, bild: "" },
    { id: "poster-02", namn: "Poster 02", pris: 350, bild: "" },
    { id: "poster-03", namn: "Poster 03", pris: 350, bild: "" },
];

// ===== Texter på svenska och engelska =====
const TEXTER = {
    sv: {
        "page.home": "NO LABEL ATELIER",
        "page.about": "Om oss – NO LABEL ATELIER",
        "lang.switch": "EN",
        "lang.switchLabel": "In English",
        "menu": "Meny",
        "close": "Stäng",
        "prev": "Föregående",
        "next": "Nästa",
        "nav.home": "Hem",
        "nav.about": "Om oss",
        "nav.contact": "Kontakt",
        "banner.new": "NYTT",
        "banner.text": "Första kollektionen släpps snart",
        "banner.ig": "Följ på Instagram →",
        "home.title": "Första kollektionen",
        "home.text": "Vi är ett UF-företag från Stockholm som gör tidlösa posters i små upplagor. Ingen logga – kvaliteten syns ändå.",
        "home.link": "Se posters ›",
        "home.campaign": "Kampanjbild",
        "products.text": "Små upplagor. När de är slut, är de slut.",
        "info1.title": "30×40 och 50×70 cm",
        "info1.text": "Alla posters finns i två storlekar.",
        "info2.title": "Frakt med PostNord",
        "info2.text": "Vi skickar alla beställningar inom Sverige. Frakten läggs till i kassan.",
        "info3.title": "Betala med Swish",
        "info3.text": "Enkelt och tryggt – du swishar när vi har bekräftat din order.",
        "footer.uf": "Ett UF-företag · Stockholm",
        "footer.credit": "Skapad av Blake Joeseph",
        "about.text": "Vi är NO LABEL ATELIER – ett UF-företag från Stockholm som drivs av fyra vänner. Vi gör tidlösa posters i små upplagor, där motivet och kvaliteten får tala – inte loggan.",
        "tab.idea": "Affärsidé",
        "tab.team": "Teamet",
        "idea1.title": "Vad vi gör",
        "idea1.text": "Tidlösa posters i små upplagor – utan synlig logga. Fokus på motiv, papper och tryck.",
        "idea2.title": "För vem",
        "idea2.text": "För dig som väljer kvalitet framför märke. Chosen by those who know the difference.",
        "idea3.title": "Hur",
        "idea3.text": "Vi säljer direkt här på hemsidan. Du betalar med Swish och vi skickar postern hem till dig med PostNord.",
        "role": "Roll",
        "contact.title": "Kontakt",
        "contact.text": "Frågor, beställningar eller samarbeten.",
        "form.name": "Namn",
        "form.email": "E-post",
        "form.message": "Meddelande",
        "form.send": "Skicka",
        "form.thanks": "Tack! Vi hör av oss så snart vi kan.",
        "form.mailApp": "Ditt mejlprogram har öppnats – tryck på skicka.",
        "product.image": "Poster",
        "product.size": "Storlek",
        "product.add": "Lägg i varukorg",
        "product.sizeHint": "Välj en storlek först",
        "cart.title": "Varukorg",
        "cart.empty": "Varukorgen är tom.",
        "cart.browse": "Se posters",
        "cart.size": "Storlek",
        "cart.fewer": "Färre",
        "cart.more": "Fler",
        "cart.remove": "Ta bort",
        "cart.subtotal": "Delsumma",
        "cart.shipping": "Frakt",
        "cart.total": "Totalt",
        "cart.checkout": "Till kassan",
        "checkout.title": "Kassa",
        "checkout.back": "‹ Tillbaka till varukorgen",
        "checkout.name": "För- och efternamn",
        "checkout.email": "E-post",
        "checkout.phone": "Mobilnummer (för Swish)",
        "checkout.address": "Gatuadress",
        "checkout.zip": "Postnummer",
        "checkout.city": "Ort",
        "checkout.message": "Meddelande (valfritt)",
        "checkout.note": "Du betalar med Swish. När vi har tagit emot beställningen får du betalningsinformation, och vi skickar postern med PostNord när betalningen är klar.",
        "checkout.terms": "Köpvillkor",
        "checkout.accept": "Jag har läst och godkänner köpvillkoren",
        "checkout.submit": "Skicka beställning",
        "checkout.sending": "Skickar…",
        "terms": [
            ["Säljare", "NO LABEL ATELIER UF, ett UF-företag från Stockholm. Kontakt: {epost}."],
            ["Betalning", "Med Swish efter att vi har bekräftat din beställning. Postern skickas när betalningen är klar."],
            ["Frakt", "{frakt} kr. Vi skickar med PostNord inom Sverige. Det går inte att hämta upp beställningar."],
            ["Ångerrätt", "Du har 14 dagars ångerrätt från den dag du tar emot postern. Mejla oss för att ångra köpet. Postern ska vara oskadad och i originalskick. Du står för returfrakten."],
            ["Återbetalning", "Vi betalar tillbaka till ditt Swish-nummer inom 3 dagar efter att vi har fått tillbaka postern."],
            ["Reklamation", "Om postern är skadad eller felaktig har du rätt att reklamera enligt konsumentköplagen. Kontakta oss så snart du upptäcker felet."],
        ],
        "done.title": "Tack!",
        "done.heading": "Tack för din beställning!",
        "done.order": "Ordernummer",
        "done.payLater": "Vi mejlar dig betalningsinformation för Swish så snart vi har bekräftat beställningen.",
        "done.paySwish": "Swisha <strong>{total} kr</strong> till <strong>{swish}</strong> och skriv <strong>{order}</strong> som meddelande.",
        "done.mailApp": "Ditt mejlprogram har öppnats med beställningen – tryck på skicka för att slutföra den.",
    },
    en: {
        "page.home": "NO LABEL ATELIER",
        "page.about": "About – NO LABEL ATELIER",
        "lang.switch": "SV",
        "lang.switchLabel": "På svenska",
        "menu": "Menu",
        "close": "Close",
        "prev": "Previous",
        "next": "Next",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.contact": "Contact",
        "banner.new": "NEW",
        "banner.text": "The first collection drops soon",
        "banner.ig": "Follow on Instagram →",
        "home.title": "The first collection",
        "home.text": "We're a student company (UF) from Stockholm making timeless posters in small editions. No logo – the quality speaks for itself.",
        "home.link": "See the posters ›",
        "home.campaign": "Campaign image",
        "products.text": "Small editions. When they're gone, they're gone.",
        "info1.title": "30×40 and 50×70 cm",
        "info1.text": "Every poster comes in two sizes.",
        "info2.title": "Shipping with PostNord",
        "info2.text": "We ship all orders within Sweden. Shipping is added at checkout.",
        "info3.title": "Pay with Swish",
        "info3.text": "Simple and secure – you pay once we've confirmed your order.",
        "footer.uf": "A UF student company · Stockholm",
        "footer.credit": "Created by Blake Joeseph",
        "about.text": "We're NO LABEL ATELIER – a student company (UF) from Stockholm run by four friends. We make timeless posters in small editions, where the motif and the quality speak – not the logo.",
        "tab.idea": "Our idea",
        "tab.team": "The team",
        "idea1.title": "What we do",
        "idea1.text": "Timeless posters in small editions – no visible logo. Focus on motif, paper and print.",
        "idea2.title": "For whom",
        "idea2.text": "For those who choose quality over brand. Chosen by those who know the difference.",
        "idea3.title": "How",
        "idea3.text": "We sell directly on this website. You pay with Swish and we ship the poster to you with PostNord.",
        "role": "Role",
        "contact.title": "Contact",
        "contact.text": "Questions, orders or collaborations.",
        "form.name": "Name",
        "form.email": "Email",
        "form.message": "Message",
        "form.send": "Send",
        "form.thanks": "Thank you! We'll get back to you as soon as we can.",
        "form.mailApp": "Your email app has opened – press send.",
        "product.image": "Poster",
        "product.size": "Size",
        "product.add": "Add to cart",
        "product.sizeHint": "Choose a size first",
        "cart.title": "Cart",
        "cart.empty": "Your cart is empty.",
        "cart.browse": "See the posters",
        "cart.size": "Size",
        "cart.fewer": "Fewer",
        "cart.more": "More",
        "cart.remove": "Remove",
        "cart.subtotal": "Subtotal",
        "cart.shipping": "Shipping",
        "cart.total": "Total",
        "cart.checkout": "Checkout",
        "checkout.title": "Checkout",
        "checkout.back": "‹ Back to cart",
        "checkout.name": "Full name",
        "checkout.email": "Email",
        "checkout.phone": "Mobile number (for Swish)",
        "checkout.address": "Street address",
        "checkout.zip": "Postcode",
        "checkout.city": "City",
        "checkout.message": "Message (optional)",
        "checkout.note": "You pay with Swish. Once we've received your order you'll get payment details, and we ship the poster with PostNord when the payment is done.",
        "checkout.terms": "Terms of purchase",
        "checkout.accept": "I have read and accept the terms of purchase",
        "checkout.submit": "Place order",
        "checkout.sending": "Sending…",
        "terms": [
            ["Seller", "NO LABEL ATELIER UF, a student company from Stockholm. Contact: {epost}."],
            ["Payment", "By Swish once we've confirmed your order. The poster is shipped when the payment is done."],
            ["Shipping", "{frakt} kr. We ship with PostNord within Sweden only. Orders can't be picked up."],
            ["Right of withdrawal", "You have 14 days to change your mind from the day you receive the poster. Email us to cancel the purchase. The poster must be undamaged and in its original condition. You pay for the return shipping."],
            ["Refunds", "We refund to your Swish number within 3 days after we have received the poster back."],
            ["Complaints", "If the poster is damaged or faulty you have the right to make a complaint under the Swedish Consumer Sales Act. Contact us as soon as you notice the fault."],
        ],
        "done.title": "Thank you!",
        "done.heading": "Thank you for your order!",
        "done.order": "Order number",
        "done.payLater": "We'll email you the Swish payment details as soon as we've confirmed your order.",
        "done.paySwish": "Swish <strong>{total} kr</strong> to <strong>{swish}</strong> and write <strong>{order}</strong> as the message.",
        "done.mailApp": "Your email app has opened with the order – press send to complete it.",
    },
};

let lang = loadLang();

function loadLang() {
    try {
        const saved = localStorage.getItem("nla-sprak");
        if (saved === "sv" || saved === "en") return saved;
    } catch {
        // Ingen sparad inställning, använd svenska
    }
    return "sv";
}

function t(key, values) {
    let text = TEXTER[lang][key];
    Object.keys(values || {}).forEach((name) => {
        text = text.replace("{" + name + "}", values[name]);
    });
    return text;
}

function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("page." + document.body.dataset.page);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });

    const langBtn = document.getElementById("lang-btn");
    langBtn.textContent = t("lang.switch");
    langBtn.setAttribute("aria-label", t("lang.switchLabel"));

    renderProducts();
}

document.getElementById("lang-btn").addEventListener("click", () => {
    lang = lang === "sv" ? "en" : "sv";
    try {
        localStorage.setItem("nla-sprak", lang);
    } catch {
        // Språket byts ändå, det sparas bara inte till nästa besök
    }
    applyLang();
});

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

function renderProducts() {
    if (!products) return;

    products.innerHTML = PRODUKTER.map((p) => `
        <article class="product" data-id="${p.id}">
            <div class="image image-product">${imageHtml(p) || "<span>" + t("product.image") + "</span>"}</div>
            <div class="product-row">
                <h3>${p.namn}</h3>
                <p class="price">${p.pris} kr</p>
            </div>
            <div class="sizes" aria-label="${t("product.size")}">
                ${STORLEKAR.map((s) => `<button type="button" class="size" data-size="${s}" aria-pressed="false">${s}</button>`).join("")}
            </div>
            <button type="button" class="btn btn-full add">${t("product.add")}</button>
            <p class="size-hint">${t("product.sizeHint")}</p>
        </article>
    `).join("");
}

if (products) {
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
        return saved.filter((item) => findProduct(item.id) && STORLEKAR.includes(item.size));
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
    <aside class="drawer" id="drawer" aria-hidden="true">
        <div class="drawer-head">
            <h2 id="drawer-title"></h2>
            <button class="drawer-close" id="drawer-close" data-i18n-aria="close">×</button>
        </div>
        <div class="drawer-body" id="drawer-body"></div>
    </aside>
`);

const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const drawerBody = document.getElementById("drawer-body");
const drawerTitle = document.getElementById("drawer-title");

function setDrawerTitle(text) {
    drawerTitle.textContent = text;
    drawer.setAttribute("aria-label", text);
}

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
    const sum = totals();
    return `
        <div class="summary">
            <div><span>${t("cart.subtotal")}</span><span>${sum.delsumma} kr</span></div>
            <div><span>${t("cart.shipping")}</span><span>${sum.frakt} kr</span></div>
            <div class="total"><span>${t("cart.total")}</span><span>${sum.totalt} kr</span></div>
        </div>
    `;
}

function renderCart() {
    setDrawerTitle(t("cart.title"));

    if (!cart.length) {
        drawerBody.innerHTML = `
            <p class="empty">${t("cart.empty")}</p>
            <a href="index.html#posters" class="btn" data-act="close">${t("cart.browse")}</a>
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
                    <p class="cart-meta">${t("cart.size")} ${item.size} cm</p>
                    <div class="qty">
                        <button data-act="minus" aria-label="${t("cart.fewer")}">−</button>
                        <span>${item.antal}</span>
                        <button data-act="plus" aria-label="${t("cart.more")}">+</button>
                    </div>
                </div>
                <div class="cart-price">
                    <span>${p.pris * item.antal} kr</span>
                    <button class="remove" data-act="remove">${t("cart.remove")}</button>
                </div>
            </div>
        `;
    }).join("") + summaryHtml() + `
        <button class="btn btn-full" data-act="checkout">${t("cart.checkout")}</button>
    `;
}

function renderCheckout() {
    setDrawerTitle(t("checkout.title"));
    const terms = t("terms").map(([title, text]) => {
        const filled = text.replace("{epost}", EPOST).replace("{frakt}", FRAKT);
        return `<p><strong>${title}:</strong> ${filled}</p>`;
    }).join("");

    drawerBody.innerHTML = `
        <button class="back" data-act="back">${t("checkout.back")}</button>
        <form class="checkout" id="checkout">
            <input name="namn" placeholder="${t("checkout.name")}" autocomplete="name" required>
            <input name="email" type="email" placeholder="${t("checkout.email")}" autocomplete="email" required>
            <input name="telefon" type="tel" placeholder="${t("checkout.phone")}" autocomplete="tel" required>
            <input name="adress" placeholder="${t("checkout.address")}" autocomplete="street-address" required>
            <div class="field-row">
                <input name="postnummer" placeholder="${t("checkout.zip")}" autocomplete="postal-code" inputmode="numeric" required>
                <input name="ort" placeholder="${t("checkout.city")}" autocomplete="address-level2" required>
            </div>
            <textarea name="meddelande" rows="2" placeholder="${t("checkout.message")}"></textarea>
            ${summaryHtml()}
            <p class="note">${t("checkout.note")}</p>
            <details class="terms">
                <summary>${t("checkout.terms")}</summary>
                ${terms}
            </details>
            <label class="check">
                <input type="checkbox" name="villkor" required>
                <span>${t("checkout.accept")}</span>
            </label>
            <button type="submit" class="btn btn-full">${t("checkout.submit")}</button>
        </form>
    `;
    document.getElementById("checkout").addEventListener("submit", submitOrder);
}

function renderDone(orderNr, total, viaMejlprogram) {
    setDrawerTitle(t("done.title"));

    let payment = t("done.payLater");
    if (SWISH_NUMMER) {
        payment = t("done.paySwish", { total: total, swish: SWISH_NUMMER, order: orderNr });
    }
    if (viaMejlprogram) {
        payment = t("done.mailApp") + " " + payment;
    }

    drawerBody.innerHTML = `
        <div class="done">
            <h3>${t("done.heading")}</h3>
            <p>${t("done.order")}: <strong>${orderNr}</strong></p>
            <p>${payment}</p>
            <button class="btn" data-act="close">${t("close")}</button>
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
    const sum = totals();
    const orderNr = "NLA-" + String(Date.now()).slice(-6);

    // Ordern till er är alltid på svenska; "sprak" visar vilket språk kunden använde
    const fields = {
        ordernummer: orderNr,
        namn: data.namn,
        email: data.email,
        telefon: data.telefon,
        adress: data.adress + ", " + data.postnummer + " " + data.ort,
        posters: cart.map((i) => i.antal + " st " + findProduct(i.id).namn + " (" + i.size + " cm)").join(", "),
        delsumma: sum.delsumma + " kr",
        frakt: sum.frakt + " kr",
        totalt: sum.totalt + " kr",
        meddelande: data.meddelande || "–",
        villkor: "Godkända",
        sprak: lang === "en" ? "Engelska" : "Svenska",
    };
    const subject = "NO LABEL – Ny beställning " + orderNr;

    button.disabled = true;
    button.textContent = t("checkout.sending");

    let viaMejlprogram = false;
    try {
        await sendForm("nla-bestallning", subject, fields);
    } catch {
        openMailApp(subject, fields);
        viaMejlprogram = true;
    }

    cart = [];
    saveCart();
    renderDone(orderNr, sum.totalt, viaMejlprogram);
}

// ===== Flikar (Om oss) =====
const tabs = document.querySelectorAll(".tab");

function showTab(tab) {
    tabs.forEach((other) => {
        const active = other === tab;
        other.setAttribute("aria-selected", active);
        document.getElementById(other.getAttribute("aria-controls")).hidden = !active;
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
        const fields = {
            namn: data.namn,
            email: data.email,
            meddelande: data.meddelande,
            sprak: lang === "en" ? "Engelska" : "Svenska",
        };

        button.disabled = true;
        try {
            await sendForm("nla-kontakt", subject, fields);
            contactForm.reset();
            status.textContent = t("form.thanks");
        } catch {
            openMailApp(subject, fields);
            status.textContent = t("form.mailApp");
        }
        button.disabled = false;
    });
}

// ===== Start =====
applyLang();
updateCount();

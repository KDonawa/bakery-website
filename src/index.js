import header from "./components/header";
import footer from "./components/footer";
import home from "./pages/home";
import about from "./pages/about";
import menu from "./pages/menu";
import contact from "./pages/contact";

let activeBtn = null;
const content = document.createElement("section");

// initial load of home page content
(() => {
    const homeContent = createSection(home());
    content.appendChild(homeContent);
    document.body.append(header, content, footer);

    const homeBtn = document.getElementById("navHomeBtn");
    toggleNavButtonActive(homeBtn);
    homeBtn.addEventListener("click", () => loadPage(homeContent, homeBtn));
})();

// secondary load
(() => {
    const aboutContent = createSection(about());
    const menuContent = createSection(menu());
    const contactContent = createSection(contact());

    const aboutBtn = document.getElementById("navAboutBtn");
    const menuBtn = document.getElementById("navMenuBtn");
    const contactBtn = document.getElementById("navContactBtn");

    aboutBtn.addEventListener("click", () => loadPage(aboutContent, aboutBtn));
    menuBtn.addEventListener("click", () => loadPage(menuContent, menuBtn));
    contactBtn.addEventListener("click", () => loadPage(contactContent, contactBtn));

    document.getElementById("reservationBtn").addEventListener("click", () => loadPage(contactContent, contactBtn));
    document.getElementById("learnMoreBtn").addEventListener("click", () => loadPage(aboutContent, aboutBtn));
    document.getElementById("homeMenuBtn").addEventListener("click", () => loadPage(menuContent, menuBtn));
})();

function loadPage(pageContent, btn) {
    window.scrollTo(0, 0);
    if (activeBtn === btn) return;

    content.textContent = "";
    content.appendChild(pageContent);
    toggleNavButtonActive(btn);
}

function toggleNavButtonActive(btn) {
    if (btn === null) return;

    if (activeBtn !== null) {
        activeBtn.classList.remove("nav-item-active");
    }
    btn.classList.add("nav-item-active");
    activeBtn = btn;
}

function createSection(content) {
    const section = document.createElement("section");
    section.innerHTML = content;
    return section;
}

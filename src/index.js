import "./style.css";
import home from "./pages/home";
import about from "./pages/about";
import menu from "./pages/menu";
import contact from "./pages/contact";

let activeBtn = null;
const container = document.getElementById("content");

const homeBtn = document.getElementById("navHomeBtn");
const aboutBtn = document.getElementById("navAboutBtn");
const menuBtn = document.getElementById("navMenuBtn");
const contactBtn = document.getElementById("navContactBtn");

homeBtn.addEventListener("click", () => load(home, homeBtn));
aboutBtn.addEventListener("click", () => load(about, aboutBtn));
menuBtn.addEventListener("click", () => load(menu, menuBtn));
contactBtn.addEventListener("click", () => load(contact, contactBtn));

function load(fn, btn) {
    window.scrollTo(0, 0);
    if (activeBtn === btn) return;

    fn(container);
    updateNavBar(btn);

    if (btn === homeBtn) {
        document.getElementById("reservationBtn").addEventListener("click", () => load(contact, contactBtn));
        document.getElementById("learnMoreBtn").addEventListener("click", () => load(about, aboutBtn));
        document.getElementById("homeMenuBtn").addEventListener("click", () => load(menu, menuBtn));
    }
}

function updateNavBar(btn) {
    if (activeBtn !== null) {
        activeBtn.classList.remove("nav-item-active");
    }
    btn.classList.add("nav-item-active");
    activeBtn = btn;
}

// initial load of home page
load(home, homeBtn);

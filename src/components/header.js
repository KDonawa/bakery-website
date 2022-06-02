export default (function constructHeader() {
    const header = document.createElement("section");
    header.classList.add("header");
    header.innerHTML = `
        <ul class="nav">
            <img class="brandIcon" src="./assets/icons/cupcake.png" alt="" />
            <li id="navHomeBtn" class="homeBtn nav-item">HOME</li>
            <li id="navAboutBtn" class="aboutBtn nav-item">ABOUT US</li>
            <li id="navMenuBtn" class="menuBtn nav-item">MENU</li>
            <li id="navContactBtn" class="contactBtn nav-item">CONTACT</li>
        </ul>
    `;
    return header;
})();

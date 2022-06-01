function loadAbout(container) {
    container.innerHTML = getAboutPage();
}

function getAboutPage() {
    return `
        <div class="about-banner">
            <h1 class="about-banner-title">ABOUT US</h1>
        </div>

        <section class="about-info">
            <div>
                <p class="info-tagline">about our</p>
                <h2 class="info-header">TRADITION</h2>
            </div>
            <div class="special-divider"></div>
            <p class="info-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, laborum laudantium nostrum culpa, rem
                assumenda temporibus quas tenetur porro dolores voluptatem architecto soluta. Officia nam voluptate
                obcaecati sunt eaque similique. Eos platonem electram et. Mei dictas atomorum voluptatibus eu,
                tollit sanctus usu ut.
            </p>
        </section>
    `;
}

export default loadAbout;

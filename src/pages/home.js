function loadHome(container) {
    container.innerHTML = getHomePage();
}

function getHomePage() {
    return `
        <section class="home-mainPage">
            <div class="home-headline">
                <h1 class="headline-title">Simply Sweet</h1>
                <div class="special-divider"></div>
                <p class="headline-text">
                    Made with care and expertly prepared, our sweets are everything you need to make any day
                    special.
                </p>
                <button id="reservationBtn">MAKE A RESERVATION</button>
            </div>
        </section>

        <div class="spacing"></div>

        <section class="home-banner">
            <div>
                <p class="info-tagline">1995</p>
                <h2 class="info-text">Year of beginning. Lorem ipsum dolor sit amet...</h2>
            </div>
            <div class="special-divider"></div>
            <button id="learnMoreBtn">LEARN MORE</button>
        </section>

        <div class="spacing"></div>

        <section class="home-imageGallery">
            <div class="imageGallery-card" style="background-image: url(../src/assets/images/macaron.jpg)"></div>
            <div
                class="imageGallery-card"
                style="background-image: url(../src/assets/images/falling-donuts.jpg)"
            ></div>
            <div
                class="imageGallery-card card-tall"
                style="background-image: url(../src/assets/images/front-view-chocolate-cake.jpg)"
            ></div>
            <div
                class="imageGallery-card"
                style="background-image: url(../src/assets/images/chocolate-mousse-cups.jpg)"
            ></div>
            <div class="imageGallery-card" style="background-image: url(../src/assets/images/pancakes.jpg)"></div>
            <div class="imageGallery-card" style="background-image: url(../src/assets/images/cookies.jpeg)"></div>
            <div
                class="imageGallery-card"
                style="background-image: url(../src/assets/images/high-angle-chocolate-cake.jpg)"
            ></div>
        </section>

        <div class="spacing"></div>

        <section class="cakeMenu menu">
            <h2 class="menu-title">SIMPLY DELIGHTFUL</h2>
            <div class="special-divider"></div>
            <ul class="menu-items">
                <li class="menu-item">
                    <h3>LOREM</h3>
                    <p>Lorem ipsum dolor sit amet...........................................$22</p>
                </li>
                <li class="menu-item">
                    <h3>VESTIBULUM</h3>
                    <p>Lorem ipsum dolor sit amet...........................................$25</p>
                </li>
                <li class="menu-item">
                    <h3>CURABITUR</h3>
                    <p>Lorem ipsum dolor sit amet...........................................$18</p>
                </li>
                <li class="menu-item">
                    <h3>AENEAN</h3>
                    <p>Lorem ipsum dolor sit amet...........................................$20</p>
                </li>
                <li class="menu-item">
                    <h3>NULLAM</h3>
                    <p>Lorem ipsum dolor sit amet...........................................$22</p>
                </li>
                <li>
                    <button id="homeMenuBtn">MENU</button>
                </li>
            </ul>
        </section>

        <section class="home-testimonial-info">
            <p class="info-tagline">what you've said about us</p>
            <h2 class="info-header">TESTIMONIALS</h2>
            <div class="special-divider"></div>
            <p class="info-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, laborum laudantium nostrum culpa, rem
                assumenda temporibus quas tenetur porro dolores voluptatem architecto soluta. Officia nam voluptate
                obcaecati sunt eaque similique.
            </p>
            <div class="testimonial-author">
                <h3 class="testimonial-author-name">KERRON DONAWA</h3>
                <p class="testimonial-author-profession">Web Developer</p>
            </div>
            <ul class="testimonial-selectors">
                <li class="option-selection option-selected"></li>
                <li class="option-selection"></li>
                <li class="option-selection"></li>
            </ul>
        </section>
    `;
}

export default loadHome;

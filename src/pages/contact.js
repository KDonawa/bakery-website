function loadContact(container) {
    container.innerHTML = getContactPage();
}

function getContactPage() {
    return `
        <div class="contact-banner">
            <h1 class="contact-banner-title">CONTACT US</h1>
        </div>

        <section class="contact-info-1">
            <div>
                <p class="info-tagline">come in</p>
                <h2 class="info-header">OPENING HOURS</h2>
            </div>
            <div class="special-divider"></div>
            <ul class="info-text">
                <li>Monday.............................8:00 AM - 5:00 PM</li>
                <li>Tuesday.............................8:00 AM - 5:00 PM</li>
                <li>Wednesday.........................8:00 AM - 5:00 PM</li>
                <li>Thursday............................8:00 AM - 5:00 PM</li>
                <li>Friday................................8:00 AM - 5:00 PM</li>
                <li>Saturday...........................10:00 AM - 11:00 PM</li>
                <li>Sunday.............................................. Closed</li>
            </ul>
        </section>

        <section class="contact-info-2">
            <div>
                <p class="info-tagline">send a message</p>
                <h2 class="info-header">CONNECT WITH US</h2>
            </div>
            <div class="special-divider"></div>
            <div>
                <p class="info-text">email</p>
                <p class="info-text">simplysweet@email.com</p>
            </div>
            <div>
                <p class="info-text">catering</p>
                <p class="info-text">(123) 456-7890</p>
            </div>
            <div>
                <p class="info-text">office</p>
                <p class="info-text">(987) 654-3210</p>
            </div>
        </section>
    `;
}

export default loadContact;

export default (function constructFooter() {
    const footer = document.createElement("section");
    footer.classList.add("footer");
    footer.innerHTML = `
        <div class="footer-content">
            <img class="brandIcon" src="./assets/icons/cupcake.png" alt="" />
            <p class="footer-slogan">eat what you love</p>
            <p class="footer-brandName">SIMPLY SWEET</p>
            <div class="special-divider"></div>
            <p class="footer-info">
                1995. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet congue elementum.
            </p>
            <ul class="footer-links">
                <li>
                    <a class="link-border" href="https://github.com/KDonawa" target="_blank">
                        <svg
                            class="footer-link"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="rgb(204, 159, 92)"
                            stroke="black"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github"
                        >
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            ></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a class="link-border">
                        <svg
                            class="footer-link"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="rgb(204, 159, 92)"
                            stroke="rgb(204, 159, 92)"
                            stroke-width="0"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-facebook"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        <div class="divider"></div>
        <div class="footer-copyright">
            Copyright ©
            <script>
                document.write(new Date().getFullYear());
            </script>
            KDonawa. All rights reserved.
        </div>
    `;
    return footer;
})();

var navbarscript = document.createElement("script");
navbarscript.src = "js/mobilenavbar.js";

const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<link rel="stylesheet" href="css/style.css" />
<div class="navcontainer">

<img id="erlogo" src="images/Escape & Revitalize Massage.png" alt="Escape & Revitalize Logo">


    <nav class="navbar">
    <div class="toggle-btn" onclick="toggleSidebar(this)">
<span></span>
<span></span>
<span></span>
</div>
        <ul class="navlist">
            <li class="navli"><a href='index.html'>Home</a></li>
            <li class="navli"><a href="services.html">Services</a>
                <ul class="dropdown" aria-label="submenu">
                    <li class="innerdrop"><a href="services.html">Services</a></li>
                    <li class="innerdrop"><a href="upgrades.html">Upgrade Options</a></li>

                </ul>
            </li>
            <li class="navli">About
                <ul class="dropdown" aria-label="submenu">
                    <li class="innerdrop"><a href="contact.html">Contact Us</a></li>
                    <li class="innerdrop"><a href="policy.html">Policies/FAQ</a></li>

                </ul>
            </li>
            <li class="navli"><a href='book.html'>Book Appointment</a></li>
        </ul>
    </nav>
</div>







`;

headerTemplate.appendChild(navbarscript);



class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-nav", Header);

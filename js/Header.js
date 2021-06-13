const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<link rel="stylesheet" href="css/style.css" />

<div class="navcontainer">


<img id="logo" src="images/Escape & Revitalize Massage.png">

<nav class="navbar">
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
      <li class="innerdrop"><a href="policy.html">Massage Policies</a></li>

    </ul>
  </li>
    <li class="navli"><a href='book.html'>Book Appointment</a></li>
  </ul>
</nav>
 </div>
`;

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

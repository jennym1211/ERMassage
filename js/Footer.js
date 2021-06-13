const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<link rel="stylesheet" href="css/style.css" />


<footer>
<div class="foot-grid">
<table id="hoo">

  <tr><th>Hours of Operation:</th></tr>
  <tr><th>Mon & Tues:</th><td>Closed</td></tr>
  <tr><th>Wednesday:</th><td>11am - 8pm</td></tr>
  <tr><th>Thursday:</th><td>11am - 8pm</td></tr>
  <tr><th>Friday:</th><td>1pm - 8pm</td></tr>
  <tr><th>Saturday:</th><td>11am - 8pm</td></tr>
  <tr><th>Sunday:</th><td>1pm - 5pm</td></tr>
  </table>

  <table id="contact">

  <tr><th><i class="fas fa-phone"></i> 817-556-1349</th></tr>
  <tr><td>  Escape & Revitalize Massage</td></tr>
  <tr><td> 3901 Airport Fwy Ste 312</td></tr>
  <tr><td>Bedford, TX, 76021</td></tr>  </table>

</div>
<div id="copyright">
&copy;2021 Escape & Revitalize Massage.
</div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-nav", Footer);

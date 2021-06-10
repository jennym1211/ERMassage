const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<link rel="stylesheet" href="css/style.css" />

<div class="navcontainer">


<img id="logo" src="images/Escape & Revitalize Massage.png">


<div class="navbar">
    <a href='index.html'>Home</a></li>
 
  <div class="dropdown">
    <button class="dropbtn"><a href="services.html">Services</a>
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="upgrades.html">Upgrade Options</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
    


  <div class="dropdown">
  <button class="dropbtn"><a href="about.html">About</a>
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <a href="contact.html">Contact Us</a>
    <a href="policy.html">Massage Policies</a>
    <a href="#">Link 3</a>
  </div>
</div>



  
   <a href='book.html'>Book Appointment</a></li>

 </div>
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

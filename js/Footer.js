const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<link rel="stylesheet" href="css/style.css" />

<footer>

    <div class="foot-grid">
        <table id="hoo">

            <tr>
               <th><u> Hours of Operation</u></th>

            </tr>

            <tr>
                <th>Mon & Tues:</th>
                <td>Closed</td>
            </tr>
            <tr>
                <th>Wednesday:</th>
                <td>11am - 8pm</td>
            </tr>
            <tr>
                <th>Thursday:</th>
                <td>11am - 8pm</td>
            </tr>
            <tr>
                <th>Friday:</th>
                <td>1pm - 8pm</td>
            </tr>
            <tr>
                <th>Saturday:</th>
                <td>11am - 8pm</td>
            </tr>
            <tr>
                <th>Sunday:</th>
                <td>1pm - 5pm</td>
            </tr>
        </table>

        <table id="ftrlinks">

        <tr>
            <th></th>
        </tr>
        <tr>
            <td> <a href="policy.html">Policies/FAQ</a></td>
        </tr>
        <tr>
        <td> <a href="book.html">Book Appointment</a></td>
    </tr>
        <tr>
            <td> <a href="contact.html">Contact Us</a></td>
        </tr>

    </table>



        <table id="contact">

        <tr>
        <th><u>Location</u></th>

     </tr>
            <tr>
                <th><i class="fas fa-phone"></i> 817-556-1349</th>
            </tr>
            <tr>
                <td> Escape & Revitalize Massage</td>
            </tr>
            <tr>
                <td> 3901 Airport Fwy Ste 312</td>
            </tr>
            <tr>
                <td>Bedford, TX, 76021</td>
            </tr>

            <div class="fb-page" data-href="https://www.facebook.com/Escape-Revitalize-Massage-105590788431690" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Escape-Revitalize-Massage-105590788431690" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Escape-Revitalize-Massage-105590788431690">Escape &amp; Revitalize Massage</a></blockquote></div>


        </table>





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

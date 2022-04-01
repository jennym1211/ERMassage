<template>
  <footer>
     <!-- <div
          class="fb-page"
          data-href="https://www.facebook.com/Escape-Revitalize-Massage-105590788431690"
          data-tabs="timeline"
          data-width=""
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/Escape-Revitalize-Massage-105590788431690"
            class="fb-xfbml-parse-ignore"
          >
            <a
              href="https://www.facebook.com/Escape-Revitalize-Massage-105590788431690"
              >Escape &amp; Revitalize Massage</a
            >
          </blockquote>
        </div> -->
    <div class="foot-grid">
     <table id="hoo">
      <thead>
         <u>Hours of Operation</u>
      </thead>
      <tbody>
        <tr
          v-for="item in hoo"
          :key="item.weekday"
        >
          <td>{{ item.weekday}}</td>
          <td>{{ item.hours }}</td>
        </tr>
      </tbody>
      </table>
 <table id="contact">
        <tr>
          <th><u>Location</u></th><br>
        </tr>
         <tr>
           <td>Escape & Revitalize Massage
              3901 Airport Fwy Ste 312
                      Bedford, TX, 76021</td> </tr>
                       <tr>  <td> 817-556-1349</td>
        </tr>
      </table>
      <table id="ftrlinks">
        <tr>
          <th></th>
        </tr>
        <tr>
          <td><router-link to="/Policies">Policies/FAQ</router-link></td>
        </tr>
        <tr>
          <td><router-link to="/Book">Book Appointment</router-link></td>
        </tr>
      </table>
 </div>
   <div id="copyright">&copy;2021 Escape & Revitalize Massage.</div>
  </footer>
</template>
<script>
export default {
  Name: "SiteFooter",
   data () {
      return {
        hoo: [
          {
            weekday: 'Mon & Tues',
            hours: "Closed",
          },
          {
              weekday: 'Wednesday',
            hours: "11am - 8pm ",
          },
          {
            weekday: 'Thursday',
            hours: "11am - 8pm ",
          },
          {
                 weekday: 'Friday',
            hours: "1pm - 8pm ",
          },
          {
               weekday: 'Saturday',
            hours: "11am - 8pm ",
          },
          {
             weekday: 'Sunday',
            hours: "1pm - 5pm ",
          },
        ],
      }
    },
};
</script>
<style scoped>
 @media (max-width:1170px) {
  #copyright { display:none;
    }
 }
 .foot-grid {
    display: grid;
    margin: 2em 2em 2em 2em;
    overflow-x: none;
    grid-gap: 15px;
    padding: 10px;
  }
  footer {
  left: 0;
  right: 0;
  background-color: #57213f;
 bottom: 0;
  overflow: scroll;
}
   .grid-container {
    grid-template-columns: 1fr 3fr;
   overflow-y: scroll;
  }
  #copyright {
  background-color: #381428;
  height: 60px;
  width: 100%;
  overflow: hidden;
  padding: 10px;
  left: 0;
  bottom: 0;
  color: white;
}
</style>
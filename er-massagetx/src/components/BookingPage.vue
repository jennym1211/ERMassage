<template>

<body>
   <div class="wrapper">
        <div id="booking">
            <div id="info">
            <p id="special"> Gift Cards are available now for purchase!
                <br> <br>
      <img v-bind:src="require('../assets/giftcard.png')"  width="100px"/>
            <br>
            <h3>Cancellation Policy </h3>
            Please provide at least 5 hours notice before your appointment that you won't be able to make it.<br>
            I book my last available appointments at @ 7:00 PM (4:00 PM on Sundays) <br>Please, no walk-ins.<br>
            Cancellations made within 5 hours before your appointment time will result in a 50% charge. No call, no
            shows will result in a 100% charge.<br>
            Please refer to <router-link to="/Policies">Policies/FAQ</router-link> for more information.
            <br>
            <a href="https://www.massagebook.com/biz/ERMassage#services" target="_blank"
                rel="noopener noreferrer"><button id="bookbtn"> <i class="fas fa-chevron-circle-right"></i> Book
                    Now!</button></a>
             </div>
        </div>
   </div>

</body>

</template>
<script>
export default {
     Name: "BookingPage",
}
</script>
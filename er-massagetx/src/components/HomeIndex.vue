
<template>
<body>
    <div class="wrapper">
        <div id="intro">
            <h1>Welcome!</h1>
            Welcome to Escape & Revitalize Massage!
            Have a kink in your shoulders that refuses to go away? Or maybe don't get a chance to relax often?
            Life gets busy, tough and unpredictable. You deserve all the time and self care you can dive on in to.
        </div>
        <div id="about">
            <img id="bria" v-bind:src="require('../assets/bria.png')" />

            <p id="abtpara">
                <br>
            <h3>
                Hi! My name is Brianna Jansen, I am the owner and massage therapist for Escape & Revitalize
                Massage.
            </h3>
            Wanting to pursue my passion for helping people, I originally attended Tarleton State University to
            become a
            nurse,
            but I decided to change career paths along the way. With the same goal in mind, in 2018, I got my
            massage
            license and have been practicing since.
            <br> <br>
            I whole-heartedly believe that self-care is a huge MUST in the daily hustle and bustle of everyday life.
            I know I'm new to the massage scene, but let my hands do the talking!
            <br> <br>
            I specialize in deep tissue techniques, myofascial release and therapeutic techniques to bring you a
            completely customized session. And for those that want to relax, don't worry I can do swedish for you
            too.
            Hot towels are included in every massage for no extra charge.
            One massage does not fit all and with all the choices out there,
            I appreciate you choosing Escape & Revitalize Massage.

        </div>
    </div>
</body>

</template>
<script>
export default {

}
</script>
<style scoped>

#intro {
  color: white;
  font-size: 18px;
  line-height: 24px;
  max-width: 100%;
  text-align: center;
  background-color: #8b4c70;
  border-top: #7a3d64 solid 10px;
  border-bottom: #7a3d64 solid 10px;
  padding: 5em;
  margin-bottom: 1em;
}
#abtpara {
  float: right;
  text-align: right;
  padding: 3em;
  margin: 1em;
}
#bria {
  float: left;
  width: 20em;
  margin:
  1em;
}

#about {
  font-size: 16px;
  display: table-cell;
  padding: 2em;
  background-color: #8b4c70;
  margin: 1em;
 border: #7a3d64 solid 10px;
  color: white;
}
</style>
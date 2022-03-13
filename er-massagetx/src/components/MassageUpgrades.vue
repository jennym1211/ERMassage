<template>

<body>
 <div class="wrapper">
    <div class="grid-container">
      <div class="serv">
        <h3>Aromatherapy</h3>
         <img v-bind:src="require('../assets/aroma.jpg')"  width="300px"/>
        <p class="service">The stuff that smells good! But it also has it's purposes. Add this to your session to
          further your relaxation or to get a quick boost.
        <ul class="prices">
          <li> 5$ </li>
        </ul>
        </p>
      </div>
      <div class="serv">
        <h3>Sugar OR Salt Scrub:</h3>
          <img v-bind:src="require('../assets/scrub.jpg')"  width="300px"/>
        <p class="service"> Have some dead skin you want to get rid of or have smoother skin? Have no fear, scrubs are
          here! With two different options. Both do the job the same, the only difference is sugar is more gentle than
          salt.
        <ul class="prices">
          <li> Body Part of Choice: 10$ </li>
          <li>Fullbody Scrub: 30$ </li>
        </ul>
        </p>
      </div>
      <div class="serv">
        <h3>Vibration Therapy</h3>
         <img v-bind:src="require('../assets/hypervolt.jpg')"  width="300px"/>
        <p class="service"> Have some stubborn tension that doesn't want to go away? This modality uses the Hypervolt to
          deliver targeted vibration therapy where you need it most.
        <ul class="prices">
          <li> 10min: 5$ </li>
          <li>30min: 15$ </li>
        </ul>
        </p>
      </div>
      <div class="serv">
        <h3>Hot Stones</h3>
         <img v-bind:src="require('../assets/IMG_1005.jpg')"  width="300px"/>
        <p class="service">
          Feel the heat and your muscles melt like butter with these hot stones. This add on is not only relaxing, but
          therapeutic at the same time!
        <ul class="prices">
          <li> 15$ </li>
        </ul>
        </p>
      </div>
    </div>
  </div>

</body>


</template>

<script>
export default {
     Name: "MassageUpgrades",
}
</script>
<template>
<body>
    <div class="wrapper">
  <div class="grid-container">
    <div class="serv">
      <h3>Deep Tissue & Therapeutic Massage</h3>
       <img v-bind:src="require('../assets/trat3-1.png')"  width="300px"/>
      <p class="service">Deep tissue techniques and therapeutic techniques go hand in hand when you're looking to
        address the issues in your body. Deep tissue is all about getting to the more underlying muscles in the body
        that are probably causing more of the issues and pain you're feeling and you can use therapeutic techniques to
        help accomplish th
      <ul class="prices">
        <li> 60min Massage - 70$</li>
        <li> 90min Massage - 100$</li>
        <li> 120min Massage - 135$</li>
      </ul>
      </p>
    </div>
    <div class="serv">
      <h3>Swedish Massage</h3>
        <img v-bind:src="require('../assets/swedish-massage.png')"  width="300px"/>
      <p class="service">This is what we generally think of when we think of the word massage . It's more of a general
        rub down but it still serves it's purpose, which is to get the body to relax and silence the mind a little bit
        too. This is also good for more surface level pains and clients with really bad fibromyalgia.
      <ul class="prices">
        <li> 30min Massage - 45$</li>
        <li> 60min Massage - 70$</li>
        <li> 90min Massage - 100$</li>
        <li> 120min Massage - 135$</li>
      </ul>
      </p>
    </div>
    <div class="serv"><a href="upgrades.html">
        <h3>Upgrades</h3>
         <img v-bind:src="require('../assets/scrub.jpg')"  width="325px"/>
       <p class="service">
          Upgrades are available for your experience! They include the following:
          <ul class="prices">
            <li> Aromatherapy </li>
            <li> Sugar OR Salt Scrub </li>
            <li> Vibration Therapy </li>
            <li> Hot Stones </li>
          </ul>
          Click to learn more.
        </p>
      </a>
    </div>
  </div>
</div>
</body>
</template>
<script>
export default {
     Name: "MassageServices",
}
</script>
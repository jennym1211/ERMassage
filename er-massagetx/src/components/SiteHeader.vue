<template>
    <header>
  <div class="navcontainer">
 <img id="erlogo" v-bind:src="require('../assets/Escape & Revitalize Massage.png')" alt="Escape & Revitalize Logo" />
 <b-nav>
<ul class="navlist">
            <li class="navli"><router-link to="/">Home</router-link> </li>
            <li class="navli"><router-link to="/Services">Services</router-link>
                <ul class="dropdown" aria-label="submenu">
                    <li class="innerdrop"><router-link to="/Services">Services</router-link></li>
                    <li class="innerdrop"><router-link to="/Upgrades">Upgrade Options</router-link></li>
                </ul>
            </li>
            <li class="navli"> <router-link to="/Policies">Policies/FAQ</router-link></li>
            <li class="navli"><router-link to="/Specials">Specials</router-link></li>
            <li class="navli"><router-link to="/Book">Book Appointment</router-link></li>
        </ul>
 </b-nav>

  </div>
  </header>
</template>
<script>
export default {
    name: "SiteHeader"
}
</script>
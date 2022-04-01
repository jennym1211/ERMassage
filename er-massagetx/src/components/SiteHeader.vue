<template>
<div id="navheader">
<div id="mobilenav">
 <v-app-bar-nav-icon   height="60px" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
       style="background-color:#57213f;"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="mobilenav"
        >
          <v-list-item>
            <v-list-item-title><router-link to="/">Home</router-link> </v-list-item-title>
          </v-list-item>
  <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title><router-link to="/Book">Book Appointment</router-link></v-list-item-title>
          </v-list-item>
  <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title><router-link to="/Services">Services</router-link></v-list-item-title>
          </v-list-item>
  <v-divider></v-divider>
      <v-list-item>
            <v-list-item-title><router-link to="/Specials">Specials</router-link></v-list-item-title>
          </v-list-item>
  <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title><router-link to="/Upgrades">Upgrade Options</router-link></v-list-item-title>
          </v-list-item>
  <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title><router-link to="/Policies">Policies/FAQ</router-link></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
    <v-divider></v-divider>
    <v-list-item>
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
  </v-list-item>
      </v-list>
    </v-navigation-drawer>
</div>
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
  </div>
</template>
<script>
export default {
    name: "SiteHeader",
        data: () => ({
      drawer: false,
      group: null,
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
<style scoped>
   @media (max-width:815px) {
      .navcontainer { display:none; }
  #mobilenav
    {
    background: #57213f;
    color: white;
    transition: all 300ms linear;
    }
      #mobilenav a {
    color: white;
  }
   #mobilenav.active {
    left: 0px;
    color: white;
  }
     #mobilenav .toggle-btn {
    position: absolute;
    background: #57213f;
    padding: 1em;
    left: 200px;
    top: 0px;
  }
  #mobilenav .toggle-btn span {
    display: block;
    width: 30px;
    height: 5px;
    background: white;
    margin: 5px 0px;
    cursor: pointer;
  }
   #mobilenav div.list div.navitem {
    padding: 15px 10px;
    border-bottom: 1px solid #444;
    color: #fcfcfc;
    text-transform: uppercase;
    font-size: 15px;
  }
    }
 @media (min-width:815px) {
      #mobilenav { display:none; }
    }
    .navcontainer
        {
         padding-left: 1em;
        padding-right: 1em;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        position: relative;
        }
</style>
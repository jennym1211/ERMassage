<template>
  <div id="app">
    <SiteHeader/>
    <router-view></router-view>
    <SiteFooter/>
  </div>
</template>
<script>
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';
export default {
  name: 'App',
   metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Escape & Revitalize Massage - Bedford, TX',
      // all titles will be injected into this template
    },
        htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Escape and Revitalize Massage is a small massage establishment located in Bedford, TX. Life gets busy, tough and unpredictable. You deserve all the time and self care you can dive on in to.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  components: {
    SiteFooter,
    SiteHeader
  }
}
</script>
<style>
/* || General styles */
html,
body {
  font-family: Verdana, sans-serif;
  background-image: linear-gradient(#ba676d, #ffd0c8);
  margin: 0px auto;
  padding: 0px auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow-x: hidden;
}
a
{
    padding: 1em;
  line-height: 2em;
  font-size: 15px;
}
hr {
  border: 3px solid #381428;
}
h1 {
  padding: 10px;
  color: white;
}
table td {
    text-align: left;
}
form {
  overflow: hidden;
}
label {
  padding-right: 24px;
}
/* || Wrappers and Containers || */
#special
{
  background-color: #57213f;
  margin: 30px;
  padding: 50px;
  border-radius: 10px;
  width: 50%;
  text-align: center;
}
.wrapper {
  max-width: 100%;
  margin: 0px auto;
  padding: 0px auto;
  overflow: auto;
  max-width: 100%;
}
/* || UL and LI styles */
#hoo,
#contact {
  color: white;
  list-style-type: none;
}
.fb-page
{
  float: right;
width: 340px;
margin-right: 0px auto;
margin-top: 10px;
vertical-align: top;
}
.foot-grid {
  display: grid;
  grid-template-columns: 21.875em 21.875em 21.875em 21.875em;
  margin: 4em 4em 4em 4em;
  overflow-x: none;
  grid-gap: 5em;
    padding-left: 1em;
  padding-right: 1em;
  padding: 2em;
}
.foot-grid > table {
  color: white;
}
#ftrlinks {
  text-align: left;
 padding: 1em;
}
#ftrlinks a {
  text-decoration: none;
  color: white;
  font-size: 20px;
}
@media screen and (min-width: 600px) {
  /* || Navbar */
 .navcontainer {
    background-color: #57213f;
    max-width: 100%;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    padding-left: 1em;
    padding-right: 1em;
  }
 .navbar {
    left: 0;
    right: 0;
    top: 0;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    background-color: #57213f;
    height: 60px;
  }
 .navlist {
    background: #57213f;
    list-style: none;
    margin: 0;
    padding-left: 0;
    width: 100%;
  }
 .navli {
    color: #fff;
   display: block;
    float: left;
    padding: 20px;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
    z-index: 10;
  }
  #sidebar,
  #sidebar.div {
    display: none;
  }
 .grid-container {
    display: grid;
    grid-template-columns: 350px 350px 350px;
    grid-gap: 2em;
    padding: 5px;
   margin: 1em 2em 1em 20em;
  }
}
@media screen and (max-width: 600px) {
  #erlogo {
    display: none;
  }
 #sale {
    width: 400px;
    height: 400px;
  }
 .navbar {
    display: none;
  }
 #booking {
    margin: 2em;
    overflow-x: scroll;
    word-wrap: break-word;
  }
}
.navli a {
  color: #fff;
  text-decoration: none;
  padding: 14px 16px;
}
li:hover.innerdrop,
li:focus-within.innerdrop {
  background-color: #57213f;
 cursor: pointer;
}
li:focus-within a {
  outline: none;
  text-align: left;
  padding: 10px;
}
ul.navlist li.navli ul.dropdown {
  background-color: #995473;
  visibility: hidden;
  padding: 14px 16px;
  width: 180px;
  list-style-type: none;
 opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}
ul.navlist li:hover.navli > ul.dropdown,
ul.navlist li:focus-within > ul.dropdown,
ul.navlist li ul:hover.dropdown,
ul.navlist li ul:focus.dropdown {
  visibility: visible;
  opacity: 1;
  display: block;
}
ul.navlist li ul li {
  clear: both;
  width: 100%;
  padding: 5px;
}
/* Info Boxes and Grids */
.prices {
  font-size: 15px;
  list-style: none;
  text-align: left;
  background-color: #381428;
}
.serv {
  padding: 1em;
}
.serv a {
  text-decoration: none;
  color: white;
}
.prices li::before {
  content: "\00BB \0020";
  font-size: 20px;
}
.service {
  font-size: 15px;
  text-align: left;
  padding: 25px;
}
.policy {
  background-color: #9a5473;
  margin: 30px;
  padding: 50px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
}
/* || Paragraph styles */
#temp {
  margin: 1em 1em 1em 2em;
  padding: 5em;
  background: #995473;
  width: 12em;
  color: white;
}
.q {
  padding: 1em;
  font-size: 20px;
  font-style: bold;
}
.a {
  padding: 1em;
  line-height: 2em;
  font-size: 15px;
}
#phone {
  text-align: right;
  padding: 5px;
  color: white;
  font-size: 20px;
}
#info {
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  width: 100%;
}
#booking {
  color: white;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
 background-color: #8b4c70;
  border-top: #7a3d64 solid 10px;
  border-bottom: #7a3d64 solid 10px;
  padding: 5em 2em 5em 2em;
}
/* ||  Form styles */
#name,
#email {
  width: 400px;
  height: 30px;
  border: none;
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
}
#message {
  width: 400px;
  border: none;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
}
#submit {
  background-color: #57213f;
  margin-top: 10px;
  width: 200px;
  color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#submit:hover {
  background-color: #e9c4fc;
  /* Green */
  color: white;
}
/* ||  Grid styles */
.grid-container {
  display: grid;
  grid-template-columns: 360px 360px 360px;
  grid-gap: 2em;
  padding: 5px;
}
.grid-container > div {
  background-color: #8b4c70;
  color: white;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 20px 0;
 font-size: 30px;
}
/* ||  Image styles */
#erlogo {
  margin-left: 35%;
  height: 300px;
}
#sale {
  margin-left: 30%;
}
#logo {
  margin: auto;
  margin-left: 40%;
  height: 300px;
}
/* Buttons */
#bookbtn {
  background-image: linear-gradient(#7f00ff, #e100ff);
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  outline: none;
  border: none;
  margin: 1em 6em 1em 1em;
  cursor: pointer;
  width: 17em;
  height: 5em;
  user-select: none;
 padding: 0.75em 1.75em;
  border-radius: 25px;
  color: #fff;
}
/* Mobile */
</style>

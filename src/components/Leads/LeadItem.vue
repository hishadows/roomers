<template>
     <div class="findhome-card">

        <!-- slider -->
    <div data-delay="4000" data-animation="slide" class="slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
      
        <div class="w-slider-mask">
        <div class="slide-3 w-slide"><img src="images/House-restyling-bro.png" loading="lazy" width="220" sizes="220px" srcset="images/House-restyling-bro-p-500.png 500w, images/House-restyling-bro-p-800.png 800w, images/House-restyling-bro-p-1080.png 1080w, images/House-restyling-bro-p-2000.png 2000w, images/House-restyling-bro.png 2000w" alt="" class="image-37"></div>
        <div class="w-slide"><img src="images/5847906.jpg" loading="lazy" width="250" sizes="(max-width: 479px) 100vw, 250px" srcset="images/5847906-p-500.jpg 500w, images/5847906-p-800.jpg 800w, images/5847906-p-1080.jpg 1080w, images/5847906-p-1600.jpg 1600w, images/5847906-p-2000.jpg 2000w, images/5847906-p-2600.jpg 2600w, images/5847906.jpg 3000w" alt="" class="image-35"></div>
      </div>

      <div class="left-arrow w-slider-arrow-left"></div>
      <div class="right-arrow w-slider-arrow-right">
        <div class="w-icon-slider-right"></div>
      </div>
      <div class="w-slider-nav w-round"></div>
    </div>

        <!-- Accomodation Details  -->

    <div class="div-block-40 w-clearfix">
      <div class="div-block-43">
        <h5 class="available-head">Available : <strong class="bold-text-2">{{ date }}</strong></h5>
        <h5 class="roomtype-head">Address :<strong class="bold-text">{{ address }}</strong></h5>
        <h5 class="roomtype-head">Type : <strong class="bold-text-4"> {{ type }}</strong></h5>
        <h5 class="roomtype-head">Room : <strong class="bold-text-4">{{ room }}</strong></h5>
        <h5 class="roomtype-head">Gender: <strong class="bold-text-4">{{ gender }}</strong></h5>
      </div>

      <!-- rent and utility -->
      <div class="div-block-42">
        <h3 class="heading-46"><span class="text-span-5">{{ rent }}</span><sub class="subscript">/mo</sub></h3>
        <h5 class="heading-47"><strong class="bold-text-3">{{ utility }} </strong><span class="text-span-6">utilities</span></h5>
      </div>

        <!-- contact user and view profile -->

      <div class="div-block-41"><img src="images/IMG_1203.jpeg" loading="lazy" width="50" sizes="50px" srcset="images/IMG_1203-p-500.jpeg 500w, images/IMG_1203-p-800.jpeg 800w, images/IMG_1203-p-1080.jpeg 1080w, images/IMG_1203-p-1600.jpeg 1600w, images/IMG_1203.jpeg 1624w" alt="" class="image-36">
        <h5 class="heading-44"><router-link to="./userprofile">Ashrita</router-link></h5>
        <a href="#" class="button-10 w-button"><router-link to="/contact">contact </router-link></a>
      </div>
    </div>
  </div>
</template>

<script>

export default{
    props:['title','date','address','room','gender','type','utility','rent','contact','description'],
}


</script>

<style scoped>

.nav-dropdown-list-3 {
  border-radius: 12px;
  background-color: #fff;
}

.nav-dropdown-list-3.w--open {
  padding-top: 10px;
  padding-bottom: 10px;
}

.nav-dropdown-icon-3 {
  margin-right: 10px;
}

.nav-menu-wrapper-three-3 {
  width: 100%;
}

.navbar-logo-center-container-3 {
  z-index: 5;
  width: 1030px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  background-color: transparent;
}

.navbar-logo-center-container-3.shadow-three {
  width: 100%;
  max-width: 1140px;
}

.nav-dropdown-toggle-3 {
  padding: 5px 30px 5px 10px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
}

.nav-dropdown-toggle-3:hover {
  color: rgba(26, 27, 31, 0.75);
}

.nav-dropdown-toggle-3:focus-visible {
  border-radius: 5px;
  outline-color: #0050bd;
  outline-offset: 0px;
  outline-style: solid;
  outline-width: 2px;
  color: #0050bd;
}

.nav-dropdown-toggle-3[data-wf-focus-visible] {
  border-radius: 5px;
  outline-color: #0050bd;
  outline-offset: 0px;
  outline-style: solid;
  outline-width: 2px;
  color: #0050bd;
}

.nav-menu-three-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.nav-link-accent-3 {
  margin-right: 20px;
  margin-left: 5px;
  padding: 5px 10px;
  color: #1a1b1f;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 0.25px;
  text-decoration: none;
}

.nav-link-accent-3:hover {
  color: rgba(26, 27, 31, 0.75);
}

.navbar-wrapper-three-3 {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.navbar-brand-three-3 {
  position: absolute;
  z-index: 5;
}

.nav-link-3 {
  margin-right: 5px;
  margin-left: 5px;
  padding: 5px 10px;
  color: #1a1b1f;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-decoration: none;
}

.nav-link-3:hover {
  color: rgba(26, 27, 31, 0.75);
}

.nav-link-3:focus-visible {
  border-radius: 4px;
  outline-color: #0050bd;
  outline-offset: 0px;
  outline-style: solid;
  outline-width: 2px;
  color: #0050bd;
}

.nav-link-3[data-wf-focus-visible] {
  border-radius: 4px;
  outline-color: #0050bd;
  outline-offset: 0px;
  outline-style: solid;
  outline-width: 2px;
  color: #0050bd;
}

.container-6 {
  width: 100%;
  max-width: 940px;
  margin-right: auto;
  margin-left: auto;
}

.nav-dropdown-link-3 {
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
}

.nav-dropdown-link-3:focus-visible {
  border-radius: 5px;
  outline-color: #0050bd;
  outline-offset: 0px;
  outline-style: solid;
  outline-width: 2px;
  color: #0050bd;
}

.nav-dropdown-link-3[data-wf-focus-visible] {
  border-radius: 5px;
  outline-color: #0050bd;
  outline-offset: 0px;
  outline-style: solid;
  outline-width: 2px;
  color: #0050bd;
}

.nav-menu-block-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.navbar-logo-center-2 {
  background-color: #dbdbdb;
}

.nav-dropdown-3 {
  margin-right: 5px;
  margin-left: 5px;
}

.button-primary-3 {
  padding: 12px 25px;
  border-radius: 8px;
  background-color: #1a1b1f;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.button-primary-3:hover {
  background-color: #32343a;
  color: #fff;
}

.button-primary-3:active {
  background-color: #43464d;
}

.section-3 {
  display: block;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  background-color: #a2b8a2;
}

.home-heading {
  position: static;
  left: 0%;
  top: 143px;
  right: auto;
  bottom: 0%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: auto;
  margin-top: auto;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.ph-heading {
  position: relative;
  left: auto;
  top: 70px;
  width: 100%;
  margin: auto auto 0px;
  float: left;
  background-color: transparent;
  color: #333;
  text-align: center;
}

.ph-homeimg {
  position: static;
  top: 0px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: auto;
  max-height: none;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  background-color: transparent;
  text-align: center;
}

.home-ph-img {
  position: static;
  left: 240px;
  top: auto;
  width: 30%;
  max-width: none;
  margin-right: 140px;
  padding-top: 0px;
  background-color: transparent;
}

.accomodation-options {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 15;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 3px 1px;
  border-color: #000 #000 #000;
  border-top-style: solid;
  border-bottom-style: solid;
  background-color: #dbdbdb;
  text-align: center;
}

.button-13 {
  position: static;
  min-width: 170px;
  margin-right: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: #000;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
}

.button-13:focus {
  background-color: #a2b8a2;
}

.image-32 {
  position: relative;
  left: auto;
  top: auto;
  margin-right: 40px;
  background-color: transparent;
}

.button-14 {
  width: auto;
  min-width: 170px;
  margin-left: 0px;
  border-style: solid;
  border-width: 1px;
  border-color: #000;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  font-weight: 400;
  letter-spacing: normal;
}

.button-14:focus {
  background-color: #a2b8a2;
}

.heading-46 {
  margin-top: auto;
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
}

.heading-47 {
  margin-top: auto;
  margin-bottom: 0px;
  font-weight: 400;
  letter-spacing: 0px;
}

.heading-44 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  float: none;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  font-weight: 500;
  letter-spacing: 1px;
}

.bold-text-4 {
  letter-spacing: 1px;
}

.text-span-5 {
  color: #000;
  font-size: 22px;
}

.div-block-43 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.text-span-6 {
  color: #afafaf;
  font-size: 12px;
  font-weight: 400;
}

.div-block-42 {
  position: static;
  left: 45%;
  top: -107%;
  right: 0%;
  bottom: -22%;
  display: block;
  width: auto;
  height: auto;
  margin: -23px 0px auto auto;
  padding-top: 0px;
  padding-bottom: 0px;
  float: right;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  text-align: center;
}

.roomtype-head {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: auto;
  max-width: 504.8666687011719px;
  margin-top: auto;
  margin-bottom: 10px;
  margin-left: 10px;
  float: none;
  clear: none;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
}

.findhome-card {
  position: static;
  left: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: auto;
  height: auto;
  max-height: 292px;
  max-width: 660px;
  min-height: auto;
  min-width: auto;
  margin: 0px auto 20px;
  padding: 15px;
  clear: none;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 8fr 1fr;
  grid-template-columns: 8fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  border-style: solid;
  border-width: 1px;
  border-color: #b7b7b7;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  font-size: 12px;
  font-weight: 400;
}

.bold-text-2 {
  color: #000;
  letter-spacing: 1px;
}

.image-37 {
  position: static;
}

.div-block-40 {
  margin-left: 10px;
  padding-right: 10px;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  -ms-grid-row-align: auto;
  align-self: auto;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.subscript {
  color: #999;
  font-size: 12px;
  font-weight: 500;
}

.available-head {
  width: auto;
  max-width: 504.8666687011719px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
}

.bold-text {
  color: #f06c00;
  letter-spacing: 1px;
}

.bold-text:hover {
  color: #4278ff;
  text-decoration: underline;
}

.image-36 {
  border-radius: 20px;
}

.slide-3 {
  width: auto;
  margin-right: 0px;
  margin-left: 0px;
}

.div-block-41 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 42px;
  padding-top: 0px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.slider {
  position: relative;
  z-index: auto;
  width: 220px;
  height: 250px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: 0px;
  background-color: #fff;
}

.left-arrow {
  left: 0%;
  top: 0%;
  right: auto;
  bottom: 0%;
}

.button-10 {
  width: 120px;
  height: 99.99990473176435%;
  margin-top: 0px;
  margin-left: auto;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #a2b8a2;
  color: #000;
  text-align: center;
  letter-spacing: 1px;
}

.button-10:active {
  background-color: rgba(255, 255, 255, 0.38);
  box-shadow: 4px 5px 0 -1px rgba(0, 0, 0, 0.2);
}

.bold-text-3 {
  font-family: Montserrat, sans-serif;
  color: #7c7c7c;
  font-size: 13px;
}

.image-35 {
  margin-top: 0px;
  margin-bottom: auto;
  padding-top: 40px;
  padding-bottom: 40px;
}

@media screen and (max-width: 991px) {
  .nav-dropdown-list-3.shadow-three.w--open {
    position: absolute;
  }

  .nav-menu-wrapper-three-3 {
    top: 70px;
    background-color: transparent;
  }

  .nav-menu-three-3 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 10px;
    padding: 20px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 50px;
    background-color: #fff;
    box-shadow: 0 8px 50px 0 rgba(0, 0, 0, 0.05);
  }

  .navbar-wrapper-three-3 {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .menu-button-3 {
    padding: 12px;
  }

  .menu-button-3.w--open {
    background-color: #a6b1bf;
    color: #fff;
  }

  .navbar-brand-three-3 {
    position: relative;
  }

  .nav-link-3 {
    padding-right: 5px;
    padding-left: 5px;
  }

  .container-6 {
    max-width: 728px;
  }
}

@media screen and (max-width: 767px) {
  .nav-dropdown-list-3.shadow-three {
    box-shadow: 0 8px 50px 0 rgba(0, 0, 0, 0.05);
  }

  .nav-dropdown-list-3.shadow-three.w--open {
    position: relative;
  }

  .nav-dropdown-list-3.shadow-three.mobile-shadow-hide {
    box-shadow: none;
  }

  .nav-dropdown-toggle-3 {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .nav-menu-three-3 {
    padding-bottom: 30px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 20px;
  }

  .nav-link-accent-3 {
    display: inline-block;
    margin-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .navbar-brand-three-3 {
    padding-left: 0px;
  }

  .nav-link-3 {
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .nav-menu-block-3 {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .mobile-margin-top-12 {
    margin-top: 10px;
  }

  .nav-dropdown-3 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
}

@media screen and (max-width: 479px) {
  .nav-menu-three-3 {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .image-30 {
    max-width: 50%;
  }

  .container-6 {
    max-width: none;
  }

  .navbar-logo-center-2 {
    background-color: #dbdbdb;
  }

  .section-3 {
    margin-top: 0px;
    background-color: #a2b8a2;
  }

  .home-heading {
    position: static;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: auto;
    width: auto;
    height: 100px;
    margin-top: 0px;
    margin-right: 0px;
    margin-left: auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    text-align: center;
  }

  .ph-heading {
    position: static;
    left: auto;
    top: auto;
    max-width: none;
    margin-top: 40px;
    margin-bottom: 0px;
    margin-left: auto;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
    font-size: 2em;
    line-height: 130%;
    font-weight: 500;
    text-align: center;
  }

  .ph-homeimg {
    top: -16px;
    width: auto;
    max-width: none;
    background-color: transparent;
  }

  .home-ph-img {
    position: static;
    left: 6px;
    top: auto;
    width: auto;
    max-width: 60%;
    min-width: auto;
    margin-right: auto;
    margin-left: auto;
    background-color: transparent;
  }

  .accomodation-options {
    position: static;
    top: 0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: 3px solid #65b891;
    border-bottom-style: solid;
    border-bottom-color: #dbdbdb;
    text-align: center;
  }

  .button-13 {
    margin-right: auto;
    margin-left: auto;
    text-transform: uppercase;
  }

  .image-32 {
    margin-right: auto;
    margin-left: auto;
  }

  .button-14 {
    margin-right: auto;
    margin-left: auto;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
    border-style: solid;
    border-color: #000;
    background-color: #fff;
    text-align: center;
    text-transform: uppercase;
  }

  .heading-46 {
    text-align: center;
  }

  .text-span-5 {
    color: #000;
  }

  .div-block-43 {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    text-align: left;
  }

  .div-block-42 {
    margin-top: auto;
    margin-left: 10px;
    float: none;
    clear: left;
    text-align: center;
  }

  .roomtype-head {
    display: block;
    width: auto;
    max-width: none;
    text-align: center;
  }

  .findhome-card {
    position: static;
    left: 0%;
    top: auto;
    right: 0%;
    bottom: 0%;
    width: auto;
    height: auto;
    max-height: none;
    max-width: none;
    min-height: auto;
    min-width: auto;
    margin: 10px 20px 0px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: left;
  }

  .div-block-40 {
    width: 100%;
    margin-right: 0px;
    margin-left: 0px;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    -ms-grid-row-align: auto;
    align-self: auto;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: left;
  }

  .available-head {
    width: auto;
    max-width: none;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    -ms-grid-row-align: auto;
    align-self: auto;
    text-align: left;
  }

  .div-block-41 {
    width: 100.00000254207231%;
    max-width: none;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .slider {
    position: static;
    left: 18px;
    width: 61%;
    height: 42%;
    margin-right: 0px;
    margin-left: 0px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }

  .left-arrow {
    position: absolute;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .right-arrow {
    position: static;
  }
}

</style>
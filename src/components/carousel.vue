<template>

<!--begin bg-carousel-->
<div id="bg-fade-carousel" class="carousel slide carousel-fade col-lg-11" data-ride="carousel">

<!-- Wrapper for slides -->
    <div class="carousel-inner">
        <div class="item active">
            <div class="slide1"></div>
        </div>
        <div class="item">
            <div class="slide2"></div>
        </div>
        <div class="item">
            <div class="slide3"></div>
        </div>
    </div><!-- .carousel-inner --> 

    <a class="button-book-now" href="#book">Limited Sessions, CLICK TO BOOK!</a>

    <div class="container carousel-overlay text-center">
        
        <span><i class="fa fa-instagram fa-2x social-media" aria-hidden="true"></i></span>
        <span><i class="fa fa-facebook-square fa-2x social-media" aria-hidden="true"></i></span>
        <span><i class="fa fa-twitter-square fa-2x social-media" aria-hidden="true"></i></span>
        <h1 class="siteTitle">FIERCE STREET</h1>
        <h3 class="subText"><span><img src="../assets/scissor.png" id="siteLogo"></span>BARBERS</h3>
    </div>
    
</div><!-- .carousel --> 
<!--end bg-carousel-->


</template>


<script>




</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Martel+Sans:800|Montserrat+Subrayada:700');



  /* Carousel Overlay */
  .carousel-overlay {
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    color: #fff;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5);
  }

.subText {
  font-size: 25px;
  font-family: 'Noto Serif', serif;
  margin: 0 5px 0 0;
}
.subText2 {
  font-size: 15px;
  margin: 0 25px 0 25px;
  font-family: 'Martel Sans', sans-serif;
}
.siteTitle {
  font-family: 'Montserrat Subrayada', sans-serif;
  font-size: 40px;
  margin: 0;
  text-align: left;
  
}

  .carousel {
    max-height: 62vh;
  }
  
  .slide1,
  .slide2,
  .slide3 {
    min-height: 62vh;
    /* Must have a height or min-height set due to use of background images */
    background-size: cover;
    background-position: center center;
    filter: grayscale(80%);
  }
  
  .slide1 {
    background-image: url("../assets/barber-pexels.jpg");
  }
  
  .slide2 {
    background-image: url("../assets/barber2-pexels.jpg");
  }
  
  .slide3 {
    background-image: url("../assets/barber-pixabay.jpg");
  }

  .jumbo-title {
    z-index: 11;
    position: absolute;
    top: 30vh;
    left: 8vw;
    transform: scale(1.1);
  } 
.social-media {
  float: right;
  margin: 6px;
  color: #fff;
}

i:hover {
  color:#ccc;
  cursor: pointer;
}

.button-book-now {
    position: absolute;
    right: 8vw;
    top: 0;
    max-width: 360px;
    
background:    #ccc;
background:    #f00;
background:    #f00;
border-radius: 5px;
box-shadow:    0 1px 0 0 #444;
color:         #fff;
display:       inline-block;
padding:       8px 20px;
font:          normal 700 18px/1 "Open Sans", sans-serif;
text-align:    center;
text-shadow:   1px 1px 0 #000;
}
.button-book-now:hover,
.button-book-now:focus {
    background: #ff1212;
    background: -webkit-gradient(linear, left top, left bottom, from(#ff1212), to(#b62f2f));
    background: -moz-linear-gradient(top, #ff1212, #b62f2f);
    background: linear-gradient(to bottom, #ff1212, #b62f2f);
    color: #ffffff;
    text-decoration: none;
}
.button-book-now:active {
    background: #960909;
    background: -webkit-gradient(linear, left top, left bottom, from(#960909), to(#982727));
    background: -moz-linear-gradient(top, #960909, #982727);
    background: linear-gradient(to bottom, #960909, #982727);
}

</style>
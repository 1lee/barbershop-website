<template>
  <div class="welcome navPoint" id="welcome">

<div class="stripe-effect">
    <div class="stripe-wrap">
      <div class="stripe"></div>
    </div>
</div><!--END stripe-effect-->

<barber-carousel></barber-carousel>
 <!--navbar-->
        <nav id="navigation" class="navbar navbar-default" v-on:scroll="handleScroll()" :class="{nFixed: scrolled}">

            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header container-fluid">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img src="../assets/scissor.png" id="siteLogo"></a>

            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">

                    <router-link to="#about" tag="li" :class="{active:scrollQue == 1}" @click="updateScrollQue(1)" exact><a>About </a></router-link>

                    <router-link to="#barbers" tag="li" :class="{active:scrollQue == 2}" @click="updateScrollQue(2)"><a>Barbers </a></router-link>

                    <router-link to="#book" tag="li" :class="{active:scrollQue == 3}" @click="updateScrollQue(3)"><a>Book</a></router-link>
                    
                    <router-link to="#careers" tag="li" active-class="active"><a>Careers</a></router-link>

                    
                </ul>
            </div>
            <!-- /.navbar-collapse -->
            <!-- /.container-fluid -->
        </nav>

    
    <barber-contact></barber-contact>
    <barber-about></barber-about>
    <barber-barbers></barber-barbers>
    <barber-book></barber-book>

  </div>

</template>

<script>

import Carousel from './carousel.vue';
import Contact from './contact.vue';
import About from './pages/about.vue';
import Barbers from './pages/barbers.vue';
import Book from './pages/book.vue';

export default {

  components: {
    "barber-carousel": Carousel,
    "barber-contact": Contact,
    "barber-about": About,
    "barber-barbers": Barbers,
    "barber-book": Book
  },
  data() {
            return {
                //controls fixed scrollbar behavior
                scrolled: false,
                scrollQue: 0
            };
        }, 
        methods: {
            updateScrollQue(scrollQ){
                this.scrollQue = scrollQ;
            },
            handleScroll() {
                if(window.scrollY > 350){
                    this.scrolled = true;
                    
                } else if (window.scrollY < 350) {
                    this.scrolled = false;
                }
            
            },
            scrollSpyer() {
                let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

                //create an array to order the sections
                let navPoints = [];
                //pull the data from the DOM
                let sections = {};
                let section = document.querySelectorAll(".navPoint");
                Array.prototype.forEach.call(section, function(e){
                    sections[e.id] = {
                        name: e.id,
                        top: e.offsetTop,
                        height: e.scrollHeight,
                        bottom: (e.offsetTop + e.scrollHeight)
                    }
                //place the newly created objects in the array
                navPoints.push(sections[e.id]);
                })
               
               for(let i = 0; i < navPoints.length; i++){
                 if(navPoints[i].top <= scrollPosition + 30 && navPoints[i].bottom >= scrollPosition  ) {
                       this.scrollQue = i;
                   }
                   console.log(navPoints);
                   console.log(this.scrollQue);
               }

            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('scroll', this.scrollSpyer);
    
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('scroll', this.scrollSpyer);
        }
}

</script>



<style>
  
  .carousel-space {
    height: 62vh;
    background: url('../assets/wood-pexels.png') repeat; 
  }
  
  .stripe-effect {
    position: absolute;
    height: 62vh;
    width: 100vw;
  }
  
  .stripe-wrap {
    z-index: 0;
    position: relative;
    display: inline-block;
    overflow: hidden;
    height: 62vh;
    width: 100vw;
    margin: 0;
  }
  
  .stripe {
    position: absolute;
    background: url('../assets/stripes.png');
    margin: 0;
    left: 0;
    top: 0;
    height: 400%;
    width: 100%;
    animation: slideshow 90s linear infinite;
  }
  
  @keyframes slideshow {
    0% {
      top: 0%;
    }
    100% {
      top: -300%;
    }
  }
  
/*navbar*/
 @import url('https://fonts.googleapis.com/css?family=Martel+Sans:800|Montserrat+Subrayada:700');
    
     .navbar {
        position: absolute;
        z-index: 100;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding-left: 20px;
        padding-right: 20px;
        border-left: none;
        border-right: none;
        border-radius: 0;
        transition: background 1s;
    }
.navbar-default .navbar-nav > li > a:focus {
    color: #fff;

}


 .navbar-default .navbar-nav > .active > a, 
 .navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus,
.navbar-default .navbar-nav > .active > a:visited 
.navbar-default .navbar-nav > .active > a:active {
      color: #fff;
      background-color: #000;
 }
.nFixed {
        position: fixed;
        top: 3vh;
    }
    .nav.navbar-nav li a {
        color: #fff;
    }
    
    .nav.navbar-nav li a:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);
    }  
    #siteLogo {
        height: 30px;
        color: #fff;
        padding-bottom: 5px;
    }
    @media screen and (max-width: 760px) {
    .navbar {
        background-color: rgba(0, 0, 0, 0.8);
    }
}
</style>
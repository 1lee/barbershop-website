<template>
    <div id="about" class="about-page navPoint">

        
            <div class="content-frame">
                <h1>About Us</h1>
                <img src="../../assets/divider.png" class="divider">
                <p class="ipsum">Literally tattooed est roof party glossier single-origin coffee XOXO, tacos farm-to-table bitters disrupt
                    fixie quis snackwave. Bushwick sriracha photo booth, id ullamco thundercats do cornhole health goth blue
                    bottle street art air plant. Irure art party incididunt humblebrag, listicle kale chips swag leggings
                    try-hard hashtag. Quis franzen adipisicing, farm-to-table lyft incididunt aliqua culpa vape williamsburg
                    copper mug umami venmo. Put a bird on it glossier odio PBR&B, scenester selvage tilde flexitarian dolor
                    sartorial pug vegan flannel. Vinyl copper mug austin ullamco truffaut</p>
            </div>

<div class="content-frame flex-frame">
<div class="award"><img src="../../assets/award1.png"></div>
<div class="award"><img src="../../assets/award2.png"></div>
<div class="award"><img src="../../assets/award3.png"></div>
</div>



    </div>
</template>

<script>
    export default {
        
    }

</script>

<style>
  
    .about-page {
        height: 100vh;
        display: flex;
        justify-content: space-around;
        transition: all 1s;
        flex: 1 1 auto;
    }
    
    h1 {
        color: #fff;
        text-align: center;
    }
    
    .divider {
        margin-left: 40%;
        margin-right: 40%;
        width: 20%;
        height: auto;
    }
    
    .award {
         text-align: center;
        transition: all 1s;
    }
    .award img {
        width: 35%;
        margin: 10px 0 10px 0;
        
    }
    
    .content-frame {
  
        width: 95%;
        margin: 0 2vw 0 2vw;
        border: 5px solid #fff;
        position: relative;
        top: 15%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 1s;
        max-height: 75vh;    
    }
    .flex-frame {
        display: flex;
        flex-direction: column;
    }
    
    .ipsum {
        color: aliceblue;
        text-align: center;
        margin: 5px;
    }
    @media screen and (max-width: 620px) {
    .about-page {
        flex-direction: column;
        justify-content: initial;
    }
    .flex-frame {
        flex-direction: row;
        justify-content: space-around;
    }
    .award img {
        width: 80%;
    }
    .content-frame {
        margin-bottom: 3%;
    }
}


</style>
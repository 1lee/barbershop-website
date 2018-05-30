<template>
    <div id="barbers" class="navPoint">
  <div class="title-header">
    <h1 class="barber-page-title">The <span>FIRECE STREET</span> barbers</h1>
    </div>

<div class="barbers-page">
        <div class="barber-block">
                <img src="../../assets/barber1.jpg" class="profile-pic">
                <div class="profile-info">
                <p class="profile-text">KURT</p>
                <p><span><i class="fa fa-instagram fa-2x social-profile" aria-hidden="true"></i></span>
        <span><i class="fa fa-facebook-square fa-2x social-profile" aria-hidden="true"></i></span>
        <span><i class="fa fa-twitter-square fa-2x social-profile" aria-hidden="true"></i></span>
</p>
</div><!--END .profile-info-->
        </div>

        <div class="barber-block">
                <img src="../../assets/barber2.jpg" class="profile-pic">
                <div class="profile-info">
                <p class="profile-text">OMAR</p>
                <p><span><i class="fa fa-instagram fa-2x social-profile" aria-hidden="true"></i></span>
        <span><i class="fa fa-facebook-square fa-2x social-profile" aria-hidden="true"></i></span>
        <span><i class="fa fa-twitter-square fa-2x social-profile" aria-hidden="true"></i></span>
</p>
</div><!--END .profile-info-->
        </div>

        <div class="barber-block">
                <img src="../../assets/barber3.jpg" class="profile-pic">
                <div class="profile-info">
                <p class="profile-text">SHAUNDI</p>
                <p><span><i class="fa fa-instagram fa-2x social-profile" aria-hidden="true"></i></span>
        <span><i class="fa fa-facebook-square fa-2x social-profile" aria-hidden="true"></i></span>
        <span><i class="fa fa-twitter-square fa-2x social-profile" aria-hidden="true"></i></span>
</p>
</div><!--END .profile-info-->
        </div>

        <div class="barber-block">
                <img src="../../assets/barber4.jpg" class="profile-pic">
                <div class="profile-info">
                <p class="profile-text">DALE</p>
                <p><span><i class="fa fa-instagram fa-2x social-profile" aria-hidden="true"></i></span>
        <span><i class="fa fa-facebook-square fa-2x social-profile" aria-hidden="true"></i></span>
        <span><i class="fa fa-twitter-square fa-2x social-profile" aria-hidden="true"></i></span>
</p>
</div><!--END .profile-info-->
         
        </div>
</div><!--END .barbers-page-->
    </div>
</template>

<script>
    export default {

    }

</script>


<style>
#barbers {
min-height: 130vh;
}
.title-header {
    position: relative;
    top: 15vh;
}
.barber-page-title {
    background-color: rgba(0, 0, 0, 0.5);
}
.barber-page-title span {
    font-family: 'Montserrat Subrayada', sans-serif;
}
.barbers-page {
    position: relative;
    top: 20vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.barber-block {
    border: 5px solid #fff;
    margin-top: 2%;
    padding: 1%;
    background-color: rgba(0, 0, 0, 0.5);
}

.profile-pic {
    height: 40vh;
    width: auto;
    border: 2px solid #fff;
}
.profile-text, .social-profile {
    color: #fff;
}
</style>
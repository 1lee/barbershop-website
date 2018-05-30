<template>
    <div>

        <div class="contact">
            <div class="phone-number">
                <h4>Call for appointment</h4>
                <p>770.555.5555</p>
            </div>
            <div class="location">
                <h4>Location</h4>
                <p>1313 Northgate Pkwy</p>
                <p>Atlanta, GA 33333</p>
            </div>
            <div class="hours">
                <h4>Hours</h4>
                <p>M - F 8am - 7pm</p>
                <p>Sunday 10am - 3pm</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {

    }

</script>

<style>

.contact {
    display: flex;
    margin-top: 12vh;
    justify-content: space-around;

}
.phone-number, .location, .hours {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    min-height: 120px;
    height: 80%;
    width: 30%;
    transition: all 2s;
}
    @media screen and (max-width: 620px) {
        .contact {
            flex-direction: column;
        }
        .phone-number, .location, .hours {
            width: 80%;
            
            margin: 1% auto;
            text-align: center;
        }
}
</style>
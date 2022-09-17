<template>
    <div class="navBarHolder">
        <div class="navBarBack">
            <router-link class="routerLinkStyle" to="/AvailabilityPage">Availability</router-link>
            <router-link class="routerLinkStyle" to="/BookingPage">Booking</router-link>
            <router-link class="routerLinkStyle" to="/ContactPage">Contact</router-link>
            <router-link class="routerLinkStyle" to="/FeaturesPage">Features</router-link>
            <router-link class="routerLinkStyle" to="/">Home</router-link>
            <router-link class="routerLinkStyle" to="/PhotosPage">Photos</router-link>
            <router-link class="routerLinkStyle" to="/SpecialsPage">Specials</router-link>
            <router-link class="routerLinkStyle" to="/TariffsPage">Tariffs</router-link>
            <router-link class="routerLinkStyle" to="/EditDataPage">Tariffs</router-link>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data:function(){
        return{}
    }
})
</script>
<style>
    .routerLinkStyle{
        font-size: 2vw; 
        text-decoration: none;
        color: var(--TextBlue);
        transition: 1s;
        padding: 0 1vw;
        border-left: solid 1px var(--TextBlue);
        border-right: solid 1px var(--TextBlue);
    }
    .routerLinkStyle:hover{
        filter:  drop-shadow(-10px 10px 4px #232323);
        color: var(--TextBlueHover);
    }
    .navBarHolder{
        display: flex;
        justify-content: center;
    }
    .navBarBack{
        background-color: var(--SandColor);
        width: 80%;
        display: flex;
        justify-content: center;
        border-radius: 20px;
        padding: 1vw;
        margin: 2vw;
    }
</style>

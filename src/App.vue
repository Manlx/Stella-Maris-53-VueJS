<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Components/header.vue';
import NavBar from './Components/navBar.vue';
import FooterComp from './Components/footerComp.vue';

export default defineComponent({
    components: { Header, NavBar, FooterComp }
})

</script>
<template>
<Header/>
<NavBar/>
<RouterView/>
<FooterComp/>
</template>

<style>
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');
    
    :root{
        --SandColor:rgb(183,171,157);
        --BackgroundColor:linear-gradient(white,rgb(42, 76, 115));
        --TextBlueHover:rgb(14, 162, 242);
        --TextBlue:rgb(79,114,133);
        --UniBorderRadius:20px
    }
    *{
        font-family: 'Heebo', sans-serif;
        margin: 0;
        padding: 0;
    }
    body{
        background-image: var(--BackgroundColor);
        min-height: 100vh;
    }
    .flexCenter{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    html {
        scroll-behavior: smooth;
    }
</style>

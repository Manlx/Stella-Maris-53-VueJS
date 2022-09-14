<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Components/header.vue';
import NavBar from './Components/navBar.vue';

export default defineComponent({
    components: { Header, NavBar }
})

</script>
<template>
<Header/>
<NavBar/>
<RouterView/>
</template>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-image: linear-gradient(white,rgb(42, 76, 115));
        min-height: 100vh;
    }
    .flexCenter{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>

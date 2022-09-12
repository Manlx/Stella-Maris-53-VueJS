<script lang="ts">
import { defineComponent } from 'vue';
import CarouselComp from './Components/CarouselComp.vue';

export default defineComponent({
    components: { CarouselComp }
})

</script>
<template>
<p>Hi from App</p>
<CarouselComp/>
</template>

<style>
    body{
        background-image: linear-gradient(white,rgb(42, 76, 115));
        height: 100vh;
    }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Components/header.vue';

export default defineComponent({
    components: { Header}
})

</script>
<template>
<Header/>
<RouterView/>
<!-- <ImagePicker/> -->
<!-- <CarouselComp :PageRateIn="3000"/> -->
</template>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-image: linear-gradient(white,rgb(42, 76, 115));
    }
    .flexCenter{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

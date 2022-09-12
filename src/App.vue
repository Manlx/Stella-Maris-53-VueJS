<script lang="ts">
import { defineComponent } from 'vue';
import CarouselComp from './Components/carouselComp.vue';
import Header from './Components/header.vue';
import ImagePicker from './Components/imagePicker.vue';

export default defineComponent({
    components: { CarouselComp, Header, ImagePicker }
})

</script>
<template>
<Header/>
<ImagePicker/>
<CarouselComp :PageRateIn="3000"/>
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

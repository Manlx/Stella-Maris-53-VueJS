<template>
    <div>
        <CarouselComp PageRateIn="3000"/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CarouselComp from '@/Components/carouselComp.vue';

export default defineComponent({
    data: function () {
        return {};
    },
    components: { CarouselComp }
})
    
</script>
<style>
    
</style>
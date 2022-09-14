<template>
    <div>
        <ImagePicker/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ImagePicker from '@/Components/imagePicker.vue';

export default defineComponent({
    data: function () {
        return {}
    },
    components: { ImagePicker }
})
</script>
<style>
    
</style>
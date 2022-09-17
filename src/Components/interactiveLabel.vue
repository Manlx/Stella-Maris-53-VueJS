<template>
    <div>
        <p>{{inpValue}}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data:function(){
        return {

        }
    },
    props:["inpValue"]
})
</script>
<style>
    
</style>
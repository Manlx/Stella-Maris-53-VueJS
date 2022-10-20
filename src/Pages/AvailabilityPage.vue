<template>
    <div>
    </div>
</template>
<script lang="ts">
import {ImageData} from '../Classes/Interfaces';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { },
    data:function() {
        return {
            temp: this.getExample()
        }
    },
    methods:{
        getExample:function(){
            let temp: ImageData = {
                ImagePath: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                Description: "",
                Tags: ["Outdoors","Kitchen","Expensive"],
                Location:[],
            }
            return temp;
        }
    }
})
</script>
<style>
    
</style>
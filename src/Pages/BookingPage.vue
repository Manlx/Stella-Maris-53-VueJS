<template>
    <div class="BookingFormHolders">
        <iframe src="https://drive.google.com/file/d/15gz5j6RKRkQzq5ULhSOktFArTKbvpcc6/preview" width="640" height="480" allow="autoplay" id="BookingPDF"></iframe>
        <!-- <iframe src="https://drive.google.com/file/d/1lQsBgsCcRaM4PmpFyFgOIj3z18Y3xbib/preview" width="640" height="480" allow="autoplay"></iframe> -->
    </div>
</template>
<script lang="ts">
    import $ from 'jquery'
    import { RootObject } from '@/Classes/Interfaces';
    import { defineComponent } from 'vue';

export default defineComponent({
    data:function() {
        return {
            
        }
    },
    methods:{
        loadData: function () {
            // eslint-disable-next-line
            let self = this;
            $.getJSON("/Data/Data.json", function (data: RootObject) {
               console.log(data) 
            });
        }
    }
})
</script>
<style>
   .BookingFormHolders{
    height: 100vh;
   } 
</style>
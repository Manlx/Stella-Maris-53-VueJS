<template>
    <div class="bookingFormHolders">
        <div class="instructionText">
            <h1>Instructions:</h1>
            <a id="expandClick" @click="clickExpand">Click to view Tariffs</a>
        </div>
        <div class="dropBodyBlock">
            <iframe id="bookingFormPreview" src="" width="80%" height="100%" allow="autoplay"></iframe>
        </div>
        
    </div>
</template>
<script lang="ts">
    import $ from 'jquery'
    import { RootObject,LinkedPDF } from '@/Classes/Interfaces';
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
               let Links:LinkedPDF[] = data.linkedPDF;
               console.log(Links)
               let BookingLink = Links.find(function(e){
                return e.name == 'TariffPDF'
               })?.link;
               console.log(BookingLink);
               $("#bookingFormPreview").attr("src",BookingLink!);
            });
        },
        clickExpand:function(){
            $(".dropBodyBlock").toggleClass("activeBlock");
        }
    },
    created:function(){
        this.loadData();
    }
})
</script>
<style>
    iframe{
        border-radius: var(--UniBorderRadius);
    }
    .instructionText{
        width: 80%;
    }
    .dropBodyBlock{
        height: 0;
        transition: 1s;
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .activeBlock{
        height: 100vh;
    }
    .bookingFormHolders{
        padding: 3vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #expandClick{
        border-radius: var(--UniBorderRadius);
        cursor: pointer;
        font-size: xx-large;
    }
</style>
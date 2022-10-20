<template>
    <collapse-comp :StartMinimized="true" :Title="'Click to View Booking Document'">
        <iframe id="bookingFormPreview" src="" width="100%" height="1000px" allow="autoplay"></iframe>
    </collapse-comp>
</template>
<script lang="ts">
    import $ from 'jquery'
    import { RootObject,LinkedPDF } from '@/Classes/Interfaces';
    import { defineComponent } from 'vue';
import CollapseComp from '@/Components/CollapseComp.vue';

export default defineComponent({
  components: { CollapseComp },
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
                return e.name == 'BookingPDF'
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
    }
    #expandClick{
        border-radius: var(--UniBorderRadius);
        cursor: pointer;
        font-size: xx-large;
    }
</style>
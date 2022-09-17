<template >
    <div class="LogoHolder">
        <div id="SCLogo" class="tooltip">
            <span class="tooltiptext">Made by Manuel A Nunes</span>
        </div>
        <!-- <img src="/Icons/SC.png" alt="" srcset=""> -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    
})
</script>
<style>
    #FooterCompExternal{
        justify-self: end;
        background-color: green;
        display: flex;
    }
    .FooterHolder{

        /* justify-self: end; */
        /* align-self: flex-end; */
        width:  96vw;
        padding: 2vw;
        background-image: linear-gradient(transparent,var(--DarkBlue));
    }
    #SCLogo{
        background-image: url('../../public/Icons/SC.png');
        width: 70px;
        height: 50px;
        background-size: 100% 100%;
        border-radius: var(--BorderRadi);
    }

    .LogoHolder{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
    }

    /* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
        bottom: 0;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
</style>
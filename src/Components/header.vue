<template lang="">
    <div class="header">
        <div class="flexCenter ">
            <div class="logo"></div>
        </div>
        <div class="flexCenter ">
            <div id="TitleHolder">
            </div>
        </div>
        <div class="flexCenter">
            <div class="logo"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:"headerComp",
    data:function()
    {
        return {}
    },
    components:{},
    props:[],
    methods:{},
    created:function(){
        console.log()
    }
})
</script>
<style>
    #TitleHolder{
        border-radius: 20px;
        padding: 20px;
        height: 70%;
        border: 3px solid white;
        width: 100%;
        min-width: 500px;
        min-height: 90px;
        max-width: 800px;
        background-image: url('../../public/Resources/Stella_Maris_6V2.png');
        background-size: 100% 100%;
        transition: 1s;
        margin: 1vw;
    }
    #TitleHolder:hover{
        filter:  drop-shadow(-10px 10px 4px #232323);
    }
    .logo{
        background-position: center;
        background-size: 100% 100%;
        display: flex;
        height: 30vh;
        width: 30vh;
        
        border-radius: 20px;
        background-image: url('../../public/Icons/Stella_Maris_5.png');
        transition: 1s;
    }
    .logo:hover{
        filter:  drop-shadow(-10px 10px 4px #232323);
    }
    #SubTitle{
        font-size: var(--AverageFontSize);
    }
    
    #SubTitleHolder{
        grid-column: 2;
        grid-row: 2;
        
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:  rgb(115,156,176);
        border-radius: 20px;
    }
    
    .header{
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        background-image: linear-gradient(rgb(42, 76, 115),transparent);
    }
</style>
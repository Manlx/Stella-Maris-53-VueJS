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
        border-radius: var(--UniBorderRadius);
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

    .logo{
        background-position: center;
        background-size: 100% 100%;
        display: flex;
        height: 30vh;
        width: 30vh;
        
        border-radius: var(--UniBorderRadius);
        background-image: url('../../public/Icons/Stella_Maris_5.png');
        transition: 1s;
    }
    .header{
        padding-top: 1vh;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        background-image: linear-gradient(rgb(42, 76, 115),transparent);
    }
</style>
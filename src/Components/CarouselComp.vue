
<script lang="ts">
    let intervalID = -1;
    import $ from 'jquery'
    import { defineComponent } from 'vue';
    import {ImageData} from '../Classes/Interfaces'
    type DataReturn = {
        Index:number,
        PageRate:number,
        doTick:boolean,
        FileInfo:ImageData[]
    }

    export default defineComponent({
        name:"carouselComp",
        data:function():DataReturn{
            return {
                Index: 0,
                PageRate:3000,
                doTick:true,
                FileInfo:[]
            }
        },
        components:{},
        props:["PageRateIn"],
        methods:{
            mouseEnter:function()
            {
                this.doTick = false;
            },
            mouseLeave:function(){
                this.doTick = true;
            },
            getData:function()
            {
                // eslint-disable-next-line
                let vm = this;
                $.getJSON("/Data/Data.json",
                    function (data) {
                        vm.FileInfo = data.ImageData
                        vm.FileInfo = vm.FileInfo.filter(function(e){
                            return !e.Tags.includes("Portrait")
                        })
                        clearInterval(intervalID)
                        intervalID = setInterval(vm.tick,vm.PageRate)

                        vm.loadData()
                    }
                );
            },
            
            loadData: function() {  
                $(".carouselDisplay").css("background-image",`url('${this.FileInfo[this.Index].ImagePath}')`);
                $(".carouselTextHolder").html(`
                <p class="carouselText">${this.FileInfo[this.Index].Description}</p>
                `)
            },
            tick: function() {
                // console.log(this.doTick)
                if (!this.doTick)
                    return;
                this.btnRightClick()
                this.loadData()
            },
            btnRightClick: function() {
                this.Index++;
                if (this.Index >= this.FileInfo.length)
                    this.Index = 0
                this.loadData()
            },
            btnLeftClick: function() {
                this.Index--;
                if (this.Index < 0)
                    this.Index = this.FileInfo.length-1
                this.loadData()
            }
        },
        created:function(){
            this.PageRate = this.PageRateIn;
            console.log('Created Carousel')
            $(".carouselHolder").mouseenter(this.mouseEnter);
            this.getData();
        }
    })
</script>
<template>
    <div class="carouselHolder" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <div class="carouselButton leftButton" @click="btnLeftClick"></div>
        <div class="carouselDisplay">
            <div class="carouselTextHolder">
                <p class="carouselText"></p>
            </div>
        </div>
        <div class="carouselButton rightButton" @click="btnRightClick"></div>
    </div>
</template>
<style>
    .carouselHolder{
        width: 90vw;
        margin: auto;
        height: 40vw;
        display: flex;
    }
    .carouselDisplay{
        display: flex;
        width: 80vw;
        background-color: #232323;
        height: 100%;
        border-radius: 20px;
        background-size: 100% 100%;
        justify-content: center;
        align-items: center;
    }
    .carouselButton{
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 5vw;
        height: 100%;
        margin: 0 1vw 0 1vw;
        transition: 0.5s;
    }
    
    .leftButton{
        background-image: url('../../public/Icons/LeftArrow.svg');
        
    }
    .rightButton{
        background-image: url('../../public/Icons/RightArrow.svg');
        
    }
    .leftButton:hover{
        filter:  drop-shadow(10px 10px 4px #232323);
    }
    .rightButton:hover{
        filter:  drop-shadow(-10px 10px 4px #232323);
    }
    .carouselTextHolder{
        transition: 1s;
        display: flex;
        opacity: 0;
        width: 80%;
        height: 60%;
        background-color: #232323;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        padding: 1vw;
    }
    .carouselDisplay:hover > .carouselTextHolder{
        opacity: 0.8;
    }
    .carouselText{
        color: white;
        font-size: 4vw;
    }
</style>
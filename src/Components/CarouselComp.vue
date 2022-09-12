
<script lang="ts">
    /* eslint-disable */
    import $ from 'jquery'
    import { defineComponent } from 'vue';
    type DataReturn = {
        Index:number,
        PageRate:number,
        doTick:boolean,
        FileInfo:DataJsonInterfaces.ImageData[]
    }

    export default defineComponent({
        data:function():DataReturn{
            return {
                Index: 0,
                PageRate:2000,
                doTick:true,
                FileInfo:[]
            }
        },
        components:{},
        props:[],
        methods:{
            getData:function()
            {
                let self = this;
                $.getJSON("/Data/Data.json",
                    function (data) {
                        self.FileInfo = data.ImageData
    
                        setInterval(self.tick,self.PageRate,self)
                        self.loadData()
                    }
                );
            },
            btnRightClick: function() {
                this.Index++;
                if (this.Index >= this.FileInfo.length)
                    this.Index = 0
                this.loadData()
            },
            loadData: function() {  
                $(".CarouselDisplay").css("background-image",`url('${this.FileInfo[this.Index].ImagePath}')`);
                $(".CarouselInfo").html(`
                <p class="CarouselText">${this.FileInfo[this.Index].Description}</p>
                `);
            },
            tick: function() {
                if (!this.doTick)
                    return;
                this.btnRightClick()
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
            console.log('Created Carousel')
            let doTick = this.doTick;
            $(".CarouselHolder").mouseenter(function () { 
            });
            $(".CarouselHolder").mouseleave(function () { 
                doTick= true
            });

            let VWUnit = screen.width/100;
            let Ratio = screen.height/ screen.width
            let Scale = 1
            let Width = ($(".CarouselHolder").outerWidth()!)/VWUnit*Scale;
            let Heigth = Width*Ratio;
            $(".InnerScaler").css("width",`${Width}vw`);
            $(".InnerScaler").css("height",`${Heigth}vw`);
            

            let ButtonHeight = ($(".CarouselButtonHolder").outerWidth()!)/VWUnit;
            $(".CarouselButton").css("height",`${ButtonHeight}vw`);
            this.getData();

            
        }
    })
</script>
<template>
    <div class="CarouselHolder" >
        <div class="CarouselButton LeftButton"></div>
        <div class="CarouselDisplay"></div>
        <div class="CarouselButton RightButton"></div>
    </div>
</template>
<style>
    .CarouselHolder{
        width: 90vw;
        margin: auto;
        height: 56vw;
        display: flex;
    }
    .CarouselDisplay{
        display: flex;
        width: 80vw;
        background-color: #232323;
        height: 100%;
        border-radius: 20px;
        background-size: 100% 100%;
    }
    .CarouselButton{
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 5vw;
        height: 100%;
        margin: 0 3vw 0 3vw;
    }
    .LeftButton{
        background-image: url('../../public/Icons/LeftArrow.svg');
        
    }
    .RightButton{
        background-image: url('../../public/Icons/RightArrow.svg');
        
    }
</style>
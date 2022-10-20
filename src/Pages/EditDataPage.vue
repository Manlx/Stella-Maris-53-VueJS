<template>
    <div>
        <collapse-comp  :key="Index" :Title="'Click To Expand Image Editing'" :StartMinimized="true">
            <div v-if="this.displayData">
                <image-collapse v-for="(ImageDatas,Index) in this.dataObj.ImageData" :key="Index" :Title="'View More'" :StartMinimized="true" :ImgData="ImageDatas" @RemoveTag="removeTag" @RemoveThis="RemoveImageDataItme"> </image-collapse>
            </div>
            
        </collapse-comp>
    </div>
</template>

<script lang="ts">
    import $ from 'jquery'
    import { defineComponent } from 'vue';
    import { RootObject,ImageData } from '@/Classes/Interfaces';
    import CollapseComp from '@/Components/CollapseComp.vue';
    import ImageCollapse from '@/Components/ImageCollapse.vue';
    type returnType= {
        dataObj: RootObject|null;
        displayData:boolean;
    }
    export default defineComponent({
    data: function (): returnType {
        return {
            dataObj: null,
            displayData:false
        };
    },
    methods: {
        loadData: function () {
            // eslint-disable-next-line
            let self = this;
            $.getJSON("/Data/Data.json", function (data: RootObject) {
                self.dataObj = data!;
                // console.log(self.dataObj.ImageData[0].ImagePath)
                self.displayData = true;
            });
        },
        removeTag:function(ImageDataObj:ImageData,Tag:string){
            let i = this.dataObj!.ImageData.indexOf(ImageDataObj);
            let temp = this.dataObj?.ImageData[i];
            temp?.Tags.splice(temp.Tags.indexOf(Tag),1)
        },
        RemoveImageDataItme:function(ImageDataObj:ImageData){
            this.dataObj!.ImageData.splice(this.dataObj!.ImageData.indexOf(ImageDataObj),1);
        }
    },
    created: function () {
        this.loadData();
    },
    components: {CollapseComp,ImageCollapse}
})
</script>

<style scoped>
    .dataGroup{
        margin: 3vw;
        background-color: #454545;
        color: var(--TextBlueHover);
        padding: 1vw;
        border-radius: var(--UniBorderRadius);
        border: solid white 5px;
        /* width: 100%; */
        /* background-color: aqua; */
    }
    .dataGroupBody{
        max-height: 0;
        transition: max-height 0.75s ease-out;
        overflow: hidden;
    }
    
    .active {
        max-height: 999vh;
        transition: max-height 0.75s ease-in;
        overflow: scroll;
    } 
    .clickToExpand{
        text-decoration: none;
        font-size: xx-large;
        cursor: pointer;
    }
</style>
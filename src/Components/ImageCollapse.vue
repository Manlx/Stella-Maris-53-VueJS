<template>
    <div class="CollapseHolder">
        <div class="TitleHolder" @click.self="expandClick">
            <div class="imgDisplay" :style="getImageStyle()" @click.self="expandClick">
            </div>
            <h1 @click.self="expandClick">{{Title}} {{(this.StartMinimized && this.Minimized)?"▲":"▼"}}</h1>
            <div class="RemoveImageData" @click="RemoveThis">

            </div>
        </div>
        <div class="CollapseBody" :class="{Collapsed:(this.StartMinimized && this.Minimized)}">
            <div>
                <image-tag-comp @RemovedTag="RemoveTag" v-for="Tag,index in this.ImgData.Tags" :key="index" :Tag="Tag"/>
            </div>
        </div>
    </div>
</template>

<script>
import imageTagComp from './imageTagComp.vue';
export default {
  components: { imageTagComp },
    data: function(){
        return {
            Minimized:true,
        }
    },
    name:"CollapseComp",
    props:["Title","StartMinimized","ImgData"],
    methods:{
        expandClick:function(){
            this.Minimized = !this.Minimized;
        },
        getImageStyle:function(){
            return {
                "background-image":`url('${this.$props.ImgData.ImagePath}')`
            }
        },
        RemoveTag:function(Tag){
            // this.Data = this.ImageData;
            console.log("ImageCollapse Calling")
            this.$emit("RemoveTag",this.ImgData,Tag)
            // this.Data.Tags.splice(this.Data.Tags.indexOf(Tag),1);
        },
        RemoveThis:function(){
            this.$emit("RemoveThis",this.ImgData);
        }
    }
}
</script>

<style scoped>
    .TitleHolder{
        display: flex;
        align-items: center;
        height: 12vh;
        justify-content: flex-start;
        background-color: #787878;
        padding: 1vh;
        border-radius: var(--UniBorderRadius);
        margin: 0vh 0;
    }

    .TitleHolder h1{
        margin: auto;
    }

    .CollapseBody{
        display: flex;
        background-color: #454545;
        flex-direction: column;
        padding: 1vh;
        border-radius: var(--UniBorderRadius);
    }

    .CollapseHolder{
        padding: 30px;
        background-color: #232323;
        color: white;
        margin: 1vh;
        border-radius: var(--UniBorderRadius);
    }
    
    .Collapsed{
        max-height: 0;
        overflow: hidden;
        padding: 0;
    }

    .imgDisplay{
        display: flex;
        height: 90%;

        aspect-ratio: 1/1;
        background-position: center;
        background-size: 100% 100%;
        /* margin: 40px; */
        border-radius: var(--UniBorderRadius);
        /* background-color: cyan; */
    }

    .RemoveImageData{
        display: inline-flex;
        height: 100%;
        aspect-ratio: 1/1;
        background-image: url('../../public/Icons/DeleteIcon.svg');
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border: 10px solid transparent;
        transition: 0.5s;
        cursor: pointer;
        border-radius: var(--UniBorderRadius);
    }
    .RemoveImageData:hover{
        background-color: firebrick;
        border: 10px solid firebrick;
        
    }
</style>
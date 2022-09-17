<template>
    <div id="imageDataCompHolder">
        <div class="imageDataEntry">
            <div class="imageDataHolder">
                <div>
                    <img src="" alt="" srcset="" class="imageDataDisplay"/>
                </div>
                <div>
                    <h1>Description:</h1>
                    <p>Pielle</p>
                    <InteractiveLabel  v-for="(item,index) in imageData" :inpValue="item" :key="index"/>
                </div>
                
            </div>
            <div class="imageDataControls">
                <button>Delete</button>
                <button>Duplicate</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import InteractiveLabel from './interactiveLabel.vue';
    export default defineComponent({
    data: function () {
        return {};
    },
    components: { InteractiveLabel },
    props:["imageData"]
})
</script>
<style>
    .imageDataEntry{
        display: flex;
    }
    .imageDataDisplay{
        width: 200px;
        height: 200px;
    }
    .dataHolder{
        display: flex;
        margin: 1vw;
    }
    #imageDataCompHolder{
        border: 1px solid green;
    }
    .imageDataControls{
        display: flex;
        width: 20%;
        background-color: aqua;
        flex-direction: column;
        padding: 1vw;
    }
    .imageDataHolder{
        padding: 1vw;
        display: flex;
        background-color: coral;
        width: 100%;
    }
</style>
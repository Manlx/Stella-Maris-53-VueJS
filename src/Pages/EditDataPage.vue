<template>
    <div class="dataGroupHolders">
        <div class="dataGroup">
            <a @click="expandClick(`imageDataddl`)" class="clickToExpand">Click To Expand</a>
            <div class="dataGroupBody" id="imageDataddl">
                <ImageDataComp :imageData="dataObj?.ImageData"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, numquam at blanditiis nihil quibusdam ducimus sunt. Obcaecati aliquid ullam asperiores reprehenderit. Animi pariatur consectetur nobis sint libero. Doloremque, eaque eum?</p>
            </div>
        </div>
        <div class="dataGroup">
            <a @click="expandClick(`tariffDataddl`)" class="clickToExpand">Click To Expand</a>
            <div class="dataGroupBody" id="tariffDataddl">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, numquam at blanditiis nihil quibusdam ducimus sunt. Obcaecati aliquid ullam asperiores reprehenderit. Animi pariatur consectetur nobis sint libero. Doloremque, eaque eum?</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import $ from 'jquery'
    import { defineComponent } from 'vue';
    import { RootObject } from '@/Classes/Interfaces';
import ImageDataComp from '@/Components/imageDataComp.vue';
    type returnType= {
        dataObj: RootObject|null;
    }
    export default defineComponent({
    data: function (): returnType {
        return {
            dataObj: null
        };
    },
    methods: {
        expandClick: function (ID: string) {
            $(`#${ID}`).toggleClass("active");
        },
        loadData: function () {
            // eslint-disable-next-line
            let self = this;
            $.getJSON("/Data/Data.json", function (data: RootObject) {
                self.dataObj = data!;
            });
        }
    },
    created: function () {
        this.loadData();
    },
    components: { ImageDataComp }
})
</script>

<style>
    .dataGroup{
        margin: 3vw;
        background-color: #454545;
        color: var(--TextBlueHover);
        padding: 1vw;
        border-radius: var(--UniBorderRadius);
        border: solid white 5px;
    }
    .dataGroupBody{
        max-height: 0;
        transition: max-height 0.75s ease-out;
        overflow: hidden;
    }
    
    .active {
        max-height: 999vh;
        transition: max-height 0.75s ease-in;
    } 
    .clickToExpand{
        font-size: xx-large;
        cursor: pointer;
    }
</style>
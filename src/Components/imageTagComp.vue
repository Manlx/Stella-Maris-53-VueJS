<template>
    <div class="TagHolder">
        {{this.Tag}}
        <div class="RemoveTag" @click="RemoveClicked">
            X
        </div>
    </div>
</template>

<script>
export default {
    props:{
        Tag:null
    },
    methods:{
        RemoveClicked:function(){
            this.$emit("RemovedTag",this.Tag);
        }
    }
}

</script>

<style scoped>
    .TagHolder{
        background-color: #898989;
        color: white;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: 5px;
        border-radius: var(--UniBorderRadius);
    }
    .RemoveTag{
        padding: 10px;
        background-color: #232323;
        border-radius: var(--UniBorderRadius);
        margin: 5px;
        transition: 0.5s;
        cursor: pointer;
    }

    .RemoveTag:hover{
        background-color: firebrick;
    }
</style>
<template>
    <div class="CollapseHolder">
        <div class="TitleHolder" @click="expandClick">
            <h1>{{Title}} {{(this.StartMinimized && this.Minimized)?"▲":"▼"}}</h1>
        </div>
        <div class="CollapseBody" :class="{Collapsed:(this.StartMinimized && this.Minimized)}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            Minimized:true
        }
    },
    name:"CollapseComp",
    props:["Title","StartMinimized"],
    methods:{
        expandClick:function(){
            this.Minimized = !this.Minimized;
        }
    }
}
</script>

<style scoped>
    .TitleHolder{
        display: flex;
        align-items: center;
    }

    .CollapseBody{
        display: flex;
        background-color: #454545;
        flex-direction: column;
        padding: 1vh;
        border-radius: 20px;
        transition: 1s;
    }

    .CollapseHolder{
        padding: 30px;
        background-color: #232323;
        color: white;
        margin: 1vh;
        border-radius: 20px;
    }
    
    .Collapsed{
        height: 0;
        overflow: hidden;
        padding: 0;
    }
</style>
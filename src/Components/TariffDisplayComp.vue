<template>
    <div class="flexCenter">
        <table class="tariffTable">
            <tbody>
                <tr>
                    <th>FROM</th>
                    <th>TO</th>
                    <th>Per Night</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import $ from 'jquery'
import { Tariff,RootObject } from '@/Classes/Interfaces';
import { defineComponent } from 'vue';

export default defineComponent({
    data:function(){
        return {}
    },
    created:function()
    {
        this.getData();
    },
    methods:{
        getData:function(){
            // eslint-disable-next-line
            let vm = this;
                $.getJSON("/Data/Data.json",
                function (data:RootObject) {
                    vm.loadTariffInfo(data.tariffs)
                }
            );
        },
        loadTariffInfo:function(Values:Tariff[]){
            console.log()
            let Rows = ''

            Values.forEach(element => {
                Rows += `
                <tr>
                    <td>${element.from}</td>
                    <td>${element.to}</td>
                    <td>${element.perNight}</td>
                </tr>
                `
            });
            let Out = `
            <tbody>
                <tr>
                    <th>FROM</th>
                    <th>TO</th>
                    <th>Per Night</th>
                </tr>
                ${Rows}
            </tbody>`;

            $('.tariffTable').html(Out);
        }
    }
})
</script>
<style>
    .tariffTable{
        background-color: rgb(183,171,157);
        width: 80%;
        border-radius: 20px;
        padding: 2vw;
    }
    .tariffTable th,tr{
        text-align: center;
        color: green;
        font-size: xx-large;
    }
</style>
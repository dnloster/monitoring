<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-4 col-xl-4">
                <Card :scrollbar="true" title="Qradar" background="bg-primary" :data="dataQradar" details="/qradar" />
            </div>
            <div class="col-12 col-md-4 col-xl-4">
                <Card :scrollbar="true" title="Fidelis" background="bg-info" :data="dataFidelis" details="/fidelis" />
            </div>
            <div class="col-12 col-md-4 col-xl-4">
                <Card :scrollbar="true" title="TA-21" background="bg-danger" :data="dataTA21" details="/ta21" />
            </div>
        </div>
        <div class="row mt-4 justify-content-center gap-5">
            <div class="col-12 col-md-6 col-xl-4">
                <Card :scrollbar="true" title="VCM" background="bg-secondary" details="/vcm" />
            </div>
            <div class="col-12 col-md-6 col-xl-4">
                <Card :scrollbar="true" title="FMS/FMC" background="bg-warning" details="/fmsfmc" />
            </div>
        </div>
    </div>
</template>

<script>

import Card from "../components/Card.vue";
import dataQradar from "../../public/data_qradar.json";
import dataFidelis from "../../public/data_fidelis.json";
import dataTA21 from "../../public/data_ta21.json";

export default {
    components: {
        Card,
    },
    data() {
        return {
            dataQradar: dataQradar,
            dataFidelis: dataFidelis,
            dataTA21
        };
    }
};
</script>

<style lang="scss" scoped>
.container-fluid {
    width: 98%;
    &>.row:first-child{
        &>.col-12:nth-child(3){
            &>.shadow-box{
                &>.footer{
                    margin-top: 30px !important;
                }
            }
        }
    }
}
</style>

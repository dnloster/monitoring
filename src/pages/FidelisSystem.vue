<script lang="ts">

import Sidebar from "../components/SidebarFidelis.vue";
import EndpointTable from "../components/EndpointFidelis.vue";
import data from "../../public/tree.json";
import dataTable from "../../public/table.json";

export default {
    name: "Dashboard",
    components: {
        Sidebar,
        EndpointTable
    },
    data() {
        return {
            data: data,
            dataTable: dataTable
        };
    }
};

</script>

<template>
    <div class="shadow-box mb-3">
        <div class="list-header bg-info">
            <div class="header-title">
                <h1 class="text-center mt-3 mb-5 text-white">Fidelis</h1>
            </div>
        </div>
        <div class="container-fluid row w-full">
            <div class="col-12 col-md-5 col-xl-3"><Sidebar :data="data" /></div>
            <div class="col-12 col-md-7 col-xl-9"><EndpointTable :data="dataTable"/></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'bootstrap';
@import "../assets/vars.scss";

.list-header {
    border-bottom: 1px solid #dee2e6;
    border-radius: 10px 10px 0 0;
    margin: -10px;
    margin-bottom: 10px;
    padding: 10px;

    .dark & {
        background-color: $dark-header-bg;
        border-bottom: 0;
    }
}

.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 770px) {
    .list-header {
        margin: -20px;
        margin-bottom: 10px;
        padding: 5px;
    }
}

</style>

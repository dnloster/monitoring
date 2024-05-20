<script setup lang="ts">

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net-bs5";
import data from "../../public/a.json";
import moment from "moment/moment";
import 'moment/locale/vi';

DataTable.use(DataTablesCore);

moment.locale('vi')

const columns = [
    { data: "id" },
    { data: "name" },
    { data: "description" },
    {
        data: "last_event_time", render: function (data) {
            return moment(data).format('Do MMMM YYYY, h:mm:ss a')
        }
    }
];


</script>

<template>
    <div class="shadow-box w-75 m-auto">
        <div class="shadow-box mb-3">
            <div class="list-header bg-primary text-white">
                <div class="header-title">
                    <h1 class="text-center mt-3 mb-5">Qradar</h1>
                </div>
            </div>
            <div>
                <h2 class="text-center">Log Sources</h2>
            </div>
            <DataTable :columns="columns" :rowHover="true" ajax="/a.json" class="table table-hover table-striped"
                width="100%">
                <thead class="border-top-0">
                    <tr>
                        <th>ID</th>
                        <th>Tên máy chủ</th>
                        <th>Mô tả</th>
                        <th style="width: 20%;">Tương tác cuối</th>
                    </tr>
                </thead>
            </DataTable>
            <!-- <div>
                <a class="d-flex align-items-center gap-2 justify-content-center btn btn-primary text-white rounded-pill mt-2 w-25" href="/qradar-log" target="_blank"><font-awesome-icon icon="list" />Log Sources ({{ data.data.length }})</a>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'bootstrap';
@import 'datatables.net-bs5';
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

.btn-primary {
    background-color: #5cdd8b;
    border-color: #5cdd8b;
    color: #000;

    &:hover,
    &:active,
    &:focus {
        background-color: #7ce8a4;
        border-color: #7ce8a4;
        color: #000;
    }
}
</style>

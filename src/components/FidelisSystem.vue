<script setup lang="ts">

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net-bs5";

DataTable.use(DataTablesCore);

const columns = [
    { data: "name" },
    { data: "ip_address" },
    { data: "status" },
];

</script>

<template>
    <div class="shadow-box w-75 m-auto">
        <div class="shadow-box mb-3">
            <div class="list-header bg-info">
                <div class="header-title">
                    <h1 class="text-center mt-3 mb-5">Fidelis</h1>
                </div>
            </div>
            <DataTable :columns="columns" ajax="/data_fidelis.json" class="table table-hover table-striped" width="100%">
                <thead class="border-top-0">
                    <tr>
                        <th>Tên máy chủ</th>
                        <th>Địa chỉ IP</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
            </DataTable>
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

</style>

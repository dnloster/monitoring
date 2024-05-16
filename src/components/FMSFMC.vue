<script setup lang="ts">

</script>

<template>
    <div class="shadow-box mb-3">
        <div class="list-header">
            <div class="header-title">
                <h1 class="text-center mt-3 mb-5">FMS/FMC</h1>
            </div>
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

.btn-primary{
    background-color: #5cdd8b;
    border-color: #5cdd8b;
    color: #000;

    &:hover, &:active, &:focus{
        background-color: #7ce8a4;
        border-color: #7ce8a4;
        color: #000;
    }
}
</style>

<template>
    <div class="container-fluid">
        <div class="row">
            <div v-if="!$root.isMobile" class="col-12 col-md-5 col-xl-6" style="max-height: calc((100vh - 76px) / 2); overflow: scroll">
                <div>
                    <router-link to="/add" class="btn btn-primary mb-3"><font-awesome-icon icon="plus" /> {{ $t("Add New Monitor") }}</router-link>
                </div>
                <MonitorList :scrollbar="true" />
            </div>

            <div ref="container" class="col-12 col-md-7 col-xl-6 mb-3" style="max-height: calc((100vh - 76px) / 2); overflow: scroll">
                <!-- Add :key to disable vue router re-use the same component -->
                <router-view :key="$route.fullPath" :calculatedHeight="height" />
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-xl-6">
                <QradarSystem :scrollbar="true" />
            </div>
            <div class="col-12 col-md-6 col-xl-6">
                <FidelisSystem :scrollbar="true" />
            </div>
        </div>
    </div>
</template>

<script>

import MonitorList from "../components/MonitorList.vue";
import QradarSystem from "../components/QradarSystem.vue";
import FidelisSystem from "../components/FidelisSystem.vue";

export default {
    components: {
        MonitorList,
        QradarSystem,
        FidelisSystem,
    },
    data() {
        return {
            height: 0
        };
    },
    mounted() {
        this.height = this.$refs.container.offsetHeight;
    },
};
</script>

<style lang="scss" scoped>
.container-fluid {
    width: 98%;
}
</style>

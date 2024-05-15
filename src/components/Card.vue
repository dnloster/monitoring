<!-- eslint-disable vue/require-default-prop -->
<script>
export default {
    props: {
        title: String,
        background: String,
        data: Array,
        details: String,
    },
    setup(props) {
        // eslint-disable-next-line vue/no-setup-props-destructure
        const { data } = props;
        return data;
    },
    computed: {
        getActiveQradar() {
            let activeQradar = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.status === "ACTIVE") {
                        return activeQradar++;
                    }
                });
            }
            return activeQradar;
        },
        getUnknownQradar() {
            let unknownQradar = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.status === "UNKNOWN") {
                        return unknownQradar++;
                    }
                });
            }
            return unknownQradar;
        },
        getRunningFidelis() {
            let runningFidelis = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.status === "running") {
                        return runningFidelis++;
                    }
                });
            }
            return runningFidelis;
        }
    }
};

</script>

<template>
    <div class="shadow-box mb-3">
        <div class="list-header" :class="background">
            <div class="header-title">
                <h1 class="text-center mt-3 text-white">{{ title }}</h1>
            </div>
        </div>
        <div class="content p-3">
            <h5>Tổng số máy chủ: {{ data !== undefined ? data.data.length : "0" }}</h5>

            <!-- Máy chủ đang chạy -->
            <h5 v-if="title==='Qradar'">
                Máy chủ active: {{ getActiveQradar }}
            </h5>
            <h5 v-if="title==='Fidelis'">
                Máy chủ running: {{ getRunningFidelis }}
            </h5>
            <h5 v-if="title==='TA-21'">
                Máy chủ Active:
            </h5>
            <h5 v-if="title==='VCM'">
                Máy chủ Active:
            </h5>
            <h5 v-if="title==='FMS/FMC'">
                Máy chủ Active:
            </h5>

            <!-- Máy chủ không chạy, chạy lỗi -->
            <h5 v-if="title=== 'Qradar'">Máy chủ không xác định: {{ getUnknownQradar }}</h5>
            <h5 v-if="title=== 'Fidelis'">Máy chủ không xác định: </h5>
            <h5 v-if="title=== 'TA-21'">Máy chủ không xác định: </h5>
            <h5 v-if="title=== 'VCM'">Máy chủ không xác định: </h5>
            <h5 v-if="title=== 'FMS/FMC'">Máy chủ không xác định: </h5>
        </div>
        <div class="footer d-flex justify-content-between p-3">
            <span>Liên hệ:</span>
            <router-link :to="details" target="_blank" class="btn text-white text-center d-inline-flex align-items-center gap-2" :class="background"><font-awesome-icon icon="list-ul" />Chi tiết</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'bootstrap';
@import 'datatables.net-bs5';
@import "../assets/vars.scss";

.list-header {
    // border-bottom: 1px solid #00f514;
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

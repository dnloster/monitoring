<!-- eslint-disable vue/require-default-prop -->
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    components: {
        Pie,
        Bar
    },
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
    data() {
        const getActiveQradar = () => {
            let activeQradar = 0;
            if (this.data !== undefined) {
                this.data.forEach((d) => {
                    if (d.status === "ACTIVE") {
                        return activeQradar++;
                    }
                });
            }
            return activeQradar;
        };
        const getUnknownQradar = () => {
            let unknownQradar = 0;
            if (this.data !== undefined) {
                this.data.forEach((d) => {
                    if (d.status === "UNKNOWN") {
                        return unknownQradar++;
                    }
                });
            }
            return unknownQradar;
        };
        const getRunningFidelis = () => {
            let runningFidelis = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.status === "running") {
                        return runningFidelis++;
                    }
                });
            }
            return runningFidelis;
        };
        const getUnknownFidelis = () => {
            let unknownFidelis = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.status !== "running") {
                        return unknownFidelis++;
                    }
                });
            }
            return unknownFidelis;
        };
        const getDownloadActiveTA = () => {
            let downloadActiveTA = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.type === "download" && d.status === "active") {
                        return downloadActiveTA++;
                    }
                });
            }
            return downloadActiveTA;
        };
        const getManageActiveTA = () => {
            let ManageActiveTA = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.type === "manage" && d.status === "active") {
                        return ManageActiveTA++;
                    }
                });
            }
            return ManageActiveTA;
        };
        return {
            dataChartQradar: {
                labels: ["Máy chủ đang hoạt động", "Máy chủ không xác định"],
                datasets: [
                    {
                        backgroundColor: ["#5cdd8b", "#8e9092"],
                        data: [getActiveQradar(), getUnknownQradar()],
                    },
                ],
            },
            dataChartFidelis: {
                labels: ["Dịch vụ đang chạy", "Dịch vụ không hoạt động"],
                datasets: [
                    {
                        backgroundColor: ["#0dcaf0", "#8e9092"],
                        data: [getRunningFidelis(), getUnknownFidelis()],
                    },
                ],
            },
            dataChartTA21: {
                labels: [""],
                datasets: [
                    {
                        label: "Máy chủ Download đang hoạt động",
                        backgroundColor: "#DD1B16",
                        data: [getDownloadActiveTA()],
                    },
                    {
                        label: "Máy chủ Download không hoạt động",
                        backgroundColor: "#DD1B",
                        data: [getManageActiveTA()],
                    },
                    {
                        label: "Máy chủ quản lý đang hoạt động",
                        backgroundColor: "##f8a",
                        data: [getManageActiveTA()],
                    },
                    {
                        label: "Máy chủ quản lý không hoạt động",
                        backgroundColor: "#f26",
                        data: [getManageActiveTA()],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        };
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
        },
        getUnknownFidelis() {
            let unknownFidelis = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.status !== "running") {
                        return unknownFidelis++;
                    }
                });
            }
            return unknownFidelis;
        },
        getDownloadTA() {
            let downloadTA = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.type === "download") {
                        return downloadTA++;
                    }
                });
            }
            return downloadTA;
        },
        getDownloadActiveTA() {
            let downloadActiveTA = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.type === "download" && d.status === "active") {
                        return downloadActiveTA++;
                    }
                });
            }
            return downloadActiveTA;
        },
        getManageTA() {
            let ManageTA = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.type === "manage") {
                        return ManageTA++;
                    }
                });
            }
            return ManageTA;
        },
        getManageActiveTA() {
            let ManageActiveTA = 0;
            if (this.data !== undefined) {
                this.data.forEach(d => {
                    if (d.type === "manage" && d.status === "active") {
                        return ManageActiveTA++;
                    }
                });
            }
            return ManageActiveTA;
        }
    },
};

</script>

<template>
    <div class="shadow-box mb-3">
        <div class="list-header" :class="background">
            <div class="header-title">
                <h1 class="text-center mt-3 text-white">{{ title }}</h1>
            </div>
        </div>
        <div class="content p-3 row">
            <div class="content-left col-12 col-xl-7">
                <!-- Máy chủ đang chạy -->
                <h6 v-if="title === 'Qradar'">
                    Máy chủ đang hoạt động: {{ getActiveQradar }} / {{ data.data.length }}
                </h6>
                <h6 v-if="title === 'Fidelis'">
                    Dịch vụ đang chạy: {{ getRunningFidelis }} / {{ data.data.length }}
                </h6>
                <h6 v-if="title === 'TA-21'">
                    Máy chủ Download đang hoạt động: {{ getDownloadActiveTA }} / {{ getDownloadTA }}
                </h6>
                <h6 v-if="title === 'VCM'">
                    Máy chủ Active:
                </h6>
                <h6 v-if="title === 'FMS/FMC'">
                    Máy chủ Active:
                </h6>

                <!-- Máy chủ không chạy, chạy lỗi -->
                <h6 v-if="title === 'Qradar'">Máy chủ không xác định: {{ getUnknownQradar }} / {{ data.data.length }}
                </h6>
                <h6 v-if="title === 'Fidelis'">Dịch vụ không hoạt động: {{ getUnknownFidelis }} / {{ data.data.length }}
                </h6>
                <h6 v-if="title === 'TA-21'">Máy chủ quản lý đang hoạt động: {{ getManageActiveTA }} / {{ getManageTA }}
                </h6>
                <h6 v-if="title === 'VCM'">Máy chủ không xác định: </h6>
                <h6 v-if="title === 'FMS/FMC'">Máy chủ không xác định: </h6>

                <!-- Log source Qradar -->
                <h6 v-if="title === 'Qradar'">Log Sources Error: 6 / 15</h6>
                <!-- Endpoint Fidelis -->
                <h6 v-if="title === 'Fidelis'">Endpoint not running: 2 / 9</h6>
            </div>
            <div class="content-right col-12 col-xl-5">
                <!-- Biểu đồ -->
                <Pie v-if="title === 'Qradar'" :data="dataChartQradar" :options="options" />
                <Pie v-if="title === 'Fidelis'" :data="dataChartFidelis" :options="options" />
                <Bar v-if="title === 'TA-21'" :data="dataChartTA21" :options="options" />
            </div>
        </div>
        <div class="footer d-flex justify-content-between p-3 align-items-center">
            <!-- Thông tin liên hệ -->
            <div class="d-inline-flex flex-column">
                <h6>Thông tin và liên hệ:</h6>
                <span v-if="title === 'Qradar'" style="font-size: 14px;">Nguyễn Tiến Dũng (0398178911)</span>
                <span v-if="title === 'Fidelis'" style="font-size: 14px;">Nguyễn Tiến Dũng (0398178911)</span>
                <span v-if="title === 'TA-21'" style="font-size: 14px;">Vũ Ngọc Cương (0983933818)</span>
            </div>
            <div class="d-inline-flex flex-row gap-2">
                <router-link v-if="title === 'Qradar'" to="/qradar" class="btn text-white text-center bg-primary">System
                    Health</router-link>
                <router-link :to="details" class="btn text-white text-center d-flex flex-row gap-1 align-items-center"
                    :class="background"><font-awesome-icon icon="list-ul" />Chi tiết</router-link>
            </div>
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

canvas {
    height: 300px;
}
</style>

<template>
    <div class="table-container">
        <input v-model="search" placeholder="Search" />
        <table id="endpointTable">
            <thead>
                <tr>
                    <th>Endpoint Name</th>
                    <th>IP Address</th>
                    <th>Operating System</th>
                    <th>Agent Connected</th>
                    <th>Last Contact</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="endpoint in paginatedEndpoints" :key="endpoint.hostName">
                    <td>{{ endpoint.hostName }}</td>
                    <td>{{ endpoint.ipAddress }}</td>
                    <td>{{ endpoint.os }}</td>
                    <td :class="{ connected: endpoint.agentConnected, disconnected: !endpoint.agentConnected }">
                        {{ endpoint.agentConnected ? "Yes" : "No" }}
                    </td>
                    <td>{{ endpoint.lastContactDate }}</td>
                    <td>{{ endpoint.description }}</td>
                </tr>
            </tbody>
        </table>
        <div class="pagination">
            <button :disabled="currentPage === 1" @click="prevPage">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
        </div>
    </div>
</template>

<script>
// import DataTable from "datatables.net-vue3";
// import DataTablesCore from "datatables.net-bs5";
// import { onMounted, ref } from "vue";

// DataTable.use(DataTablesCore);

export default {
    name: "EndpointTable",
    props: {
        // eslint-disable-next-line vue/require-default-prop
        data: Array
    },
    setup(props) {
        // eslint-disable-next-line vue/no-setup-props-destructure
        const { data } = props;
        return data;
    },
    data() {
        return {
            search: "",
            currentPage: 1,
            itemsPerPage: 10,
            endpoints: this.data.entities
        };
    },
    computed: {
        filteredEndpoints() {
            return this.endpoints.filter(endpoint => {
                return endpoint.hostName.toLowerCase().includes(this.search.toLowerCase());
            });
        },
        paginatedEndpoints() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredEndpoints.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.filteredEndpoints.length / this.itemsPerPage);
        }
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        }
    }
};
</script>

<style scoped>
@import 'bootstrap';
@import 'datatables.net-bs5';
.table-container {
    padding: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
}
.connected {
    color: green;
}
.disconnected {
    color: red;
}
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.pagination button {
    margin: 0 5px;
    padding: 5px 10px;
}
</style>

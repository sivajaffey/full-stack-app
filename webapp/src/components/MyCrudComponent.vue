<script>
export default {
    name: 'MyCrudComponent', // Updated to multi-word name
    components:{},
    methods:{
        back() {
            this.$router.back();
        }
    },
    data() {
        return {
            header: "Welcome",
            tableHr: "Available List",
            tbleHeaders: { 
                id: 'ID', 
                name: 'Name', 
                description: 'Description'
            } 
        };
    },
}
</script>

<template>
    <div>
        <div>
            <h1>{{ header }}</h1>
            <h2>{{ tableHr }}</h2>
        </div>
        <div>
            <button @click="back">back</button>
        </div>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>anem</td>
                    <td>tes</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

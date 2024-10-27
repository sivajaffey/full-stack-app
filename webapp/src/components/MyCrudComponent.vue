<script>
import { mapMutations } from 'vuex';
// const { mapMutations } = createNamespaceHelpers('tableList');
export default {
    name: 'MyCrudComponent', // Updated to multi-word name
    mounted() {
        console.log(this.$store.state.tableList.viewlist) // this.$store
    },
    components:{},
    methods:{
        ...mapMutations(['addToList', 'updateToList', 'deleteFromList']),
        addToViewList(){
            this.addToList({name:this.name,description:this.description});
            this.back()
            this.name = this.description =''
        },
        back() {
            if (this.addData) {
                this.add();
            } else {
                this.$router.back();
            }
        },
        add() {
            this.addData = !this.addData;
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
            },
            addData:false,
            editData:false,
            tableList:(state)=>state.tableList.viewlist,
            editList:(data)=>{
                this.editData = true;
                this.id = data.id
                this.name = data.name;
                this.description = data.description;
            },
            id:'',
            name:'',
            description:''
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
        <button @click="add" v-if="!addData">Add to list</button>
        <div v-if="addData">
            <div>
                <label>
                    Name
                </label>
                <input type="text" v-model="name"/>
            </div>
            <div>
                <label>
                    Description
                </label>
                <textarea v-model="description"></textarea>
            </div>
           <div>
                <button @click="addToViewList({name:name,description:description})">Submit</button>
           </div>
        </div>
        <div v-if="editData">
            <div>
                <label>ID : {{ id }}</label>
            </div>
            <div>
                <label>
                    Name
                </label>
                <input type="text" v-model="name"/>
            </div>
            <div>
                <label>
                    Description
                </label>
                <textarea v-model="description"></textarea>
            </div>
           <div>
                <button @click="()=>{
                    updateToList({id:id, name:name,description:description});
                    this.name = '';
                    this.id='';
                    this.description=''
                    this.editData = false;
                }">Update</button>
           </div>
        </div>
        <div v-if="!addData">
            <tr v-if="this.$store.state.tableList.viewlist.length == 0">No Records found</tr>
            <table v-if="this.$store.state.tableList.viewlist.length > 0">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-for="rows of this.$store.state.tableList.viewlist" :key="rows.id">
                        <td>{{rows?.id}}</td>
                        <td>{{rows?.name}}</td>
                        <td>{{rows?.description}}</td>
                        <td>
                            <button @click="editList(rows)">Edit</button>
                            <button @click="deleteFromList(rows?.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

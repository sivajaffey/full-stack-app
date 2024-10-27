<script>
export default {
    name:'HeaderComponent',
    methods:{
        viewListPage() {console.log('test',this.$router.currentRoute)
            this.$router.push({name:'MyCrudComponent'});
        },
        back() {
            this.$router.push({name:"App"})
        }
    }
}
</script>

<template>
      <button @click="viewListPage()" v-if="this.$router.currentRoute.value.path === '/'">ViewList</button>
</template>


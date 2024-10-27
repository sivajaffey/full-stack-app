<template>
  <!-- {{ this.$router.currentRoute.value.path }} -->
 <router-view />
</template>


<script>
export default {
  name: 'App',
  components: { },
  data(){
    return {
        header: "Welcome"
    }
  },
  methods:{
    // viewListPage() {console.log('test',this.$router.currentRoute)
    //   this.$router.push({name:'MyCrudComponent'});
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

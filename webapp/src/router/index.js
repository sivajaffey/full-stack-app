import {  createRouter, createMemoryHistory } from 'vue-router';
// import App from './../App.vue';
import MyCrudComponent from './../components/MyCrudComponent.vue';
import HeaderComponent from './../components/HeaderComponent.vue';

const routes = [
    { path: '/', name: 'HeaderComponent', component: ()=> HeaderComponent },
    { path: '/view', name: 'MyCrudComponent', component: ()=> MyCrudComponent },
]
const router = createRouter({
    history:createMemoryHistory(),
    routes
})
export default router; 

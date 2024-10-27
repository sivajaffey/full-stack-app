import { createStore } from 'vuex';

const store = createStore({
    state:{
        count:0
    },
    mutations: {
        Increment:() =>{
            this.store.state.count++
        }
    }
})

export default store;

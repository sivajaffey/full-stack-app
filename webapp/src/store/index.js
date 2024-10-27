import { createStore } from 'vuex';
import tableList from './modules/tableList';

const store = createStore({
    modules:{
        tableList:tableList
    }
})

export default store;

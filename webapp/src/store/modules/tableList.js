export default {
    state() {
        return {
            viewlist:[]
        }
    },
    mutations:{
        addToList(state, payload) {
            state.viewlist.push({id: Date.now(), ...payload});
        },
        updateToList(state, payload) {
            state.viewlist.map((row,i)=>{
                console.log(payload)
                if (row.id == payload.id) {
                    state.viewlist[i] = payload;
                }
            })
        },
        deleteFromList(state,payload) {
            state.viewlist = state.viewlist.filter(d=>d.id !== payload)
        }
    }
}
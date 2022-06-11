import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state: {
        posts: []
    }
})
const mutations = {

};

const actions = {}
export default{
    namespaced: true,
    store,
    mutations,
    actions
};
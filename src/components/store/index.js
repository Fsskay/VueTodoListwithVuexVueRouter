import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state: {
            list: [],
            searchedTodos:[]
        },
        mutations:{
            searchTodo (state,searchedValue){
                const searchText =  searchedValue;
                this.state.searchedTodos = this.state.list.filter(todo=>todo.text === searchText)
            }
        }
    })
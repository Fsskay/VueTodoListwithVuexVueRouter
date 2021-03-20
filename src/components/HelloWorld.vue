<template>
    <div class="hello">

        <input type="text" v-model="inputValue">
        <button v-on:click="add">提交</button>

        <br/>
        <ul v-if="view=='ALL'">
            <strong>所有的todo 全部任务数为({{list.length}}):</strong>
            <li v-for="todo in list" :key="todo.id">

                <span :style="{'text-decoration':(todo.finished?'line-through':'none')}">{{todo.text}}</span>
                <button v-on:click="toggleTodo(todo.id)">切换</button>
                <button v-on:click="deleteTodo(todo.id)">删除</button>
                <button v-on:click="editTodo(todo.id)">编辑</button>
            </li>
        </ul>
        <ul v-if="view=='FINISHIEDTODO'">
            <strong>完成的todo 全部任务数为({{finishedTodo.length}}):</strong>
            <li v-for="todo in finishedTodo" :key="todo.id">
                <span :style="{'text-decoration':(todo.finished?'line-through':'none')}">{{todo.text}}</span>
                <button v-on:click="toggleTodo(todo.id)">切换</button>
                <button v-on:click="deleteTodo(todo.id)">删除</button>
                <button v-on:click="editTodo(todo.id)">编辑</button>
            </li>
        </ul>
        <ul v-if="view=='UNFINISHIEDTODO'">
            <strong>未完成的todo 全部任务数为({{unfinishedTodo.length}}):</strong>
            <li v-for="todo in unfinishedTodo" :key="todo.id">
                <span :style="{'text-decoration':(todo.finished?'line-through':'none')}">{{todo.text}}</span>
                <button v-on:click="toggleTodo(todo.id)">切换</button>
                <button v-on:click="deleteTodo(todo.id)">删除</button>
                <button v-on:click="editTodo(todo.id)">编辑</button>
            </li>
        </ul>


        <button v-on:click="showAll"> 显示全部</button>
        <button v-on:click="showFinished"> 显示已完成</button>
        <button v-on:click="showUnFinished"> 显示未完成</button>


    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data: function () {
            {
                return {
                    inputValue: '',
                    list: [],
                    view:'ALL',
                }
            }
        },
        methods: {
            add: function () {
                this.list.push({text: this.inputValue, id: Math.random(), finished: false});
                this.inputValue = '';
                console.log(this.list)
            },
            deleteTodo: function (id) {
                const deleteTodoId = id;
                this.list = this.list.filter(todo => todo.id !== deleteTodoId)
            },
            editTodo: function (id) {
                const editedTodoId = id;
                const editedTodo = this.list.find(todo => todo.id === editedTodoId)
                editedTodo.text = prompt('Todo标题', editedTodo.text) || editedTodo.text;
            },
            toggleTodo: function (id) {
                const editedTodoId = id;
                const editedTodo = this.list.find(todo => todo.id === editedTodoId)
                editedTodo.finished = !editedTodo.finished
            },
            showAll :function(){
                this.view='ALL'
            },
            showFinished : function () {
                this.view='FINISHIEDTODO'
            },
            showUnFinished:function () {
                this.view='UNFINISHIEDTODO'

            }
        },
        computed:{
            finishedTodo (){
                return this.list.filter(todo=>todo.finished===true)
            },
            unfinishedTodo (){
                return this.list.filter(todo=>todo.finished!==true)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    li {
        display: inline-block;
        margin:20px;
        border: 1px solid grey;
        padding: 10px;
    }

    a {
        color: #42b983;
    }


</style>

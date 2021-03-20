<template>
    <div>
        <div>这里是搜索结果</div>
        <ul>
            <strong>搜索结果任务数为({{this.$store.state.searchedTodos.length}}):</strong>
            <li v-for="todo in this.$store.state.searchedTodos" :key="todo.id">
                <span :style="{'text-decoration':(todo.finished?'line-through':'none')}">{{todo.text}}</span>
            </li>
        </ul>
        <button v-on:click="backHome">返回主页</button>
    </div>
</template>

<script>
    export default {
        name: "SearchResult",

        methods:{
            backHome(){
                this.$router.go(-1)
            }
        }

    }
</script>

<style scoped>

</style>
import Vue from 'vue'
import App from './App.vue'
import store from './components/store/index'
import VueRouter from 'vue-router'
import HelloWorld from "./components/HelloWorld";
import SearchResult from "./components/SearchResult";




const routes = [
  { path: '/', component: HelloWorld },
  { path: '/searchResult', component: SearchResult }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App),

}).$mount('#app')



// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。

import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import showBlog from "./components/showBlog.vue"
import AddBlog from "./components/AddBlog.vue"
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {path:'/showblog', 
    name:'showblog',
    component:showBlog
  
  },
    {
      path: '/addblog',
      name: 'addblog',
      component: AddBlog

    },
  
   
  ],
  mode: 'history'
})


Vue.config.productionTip = false;
// Vue.directive('rainbow',{
//    bind(el,binding,vnode){
//      el.style.color="#"+Math.random().toString().slice(2,8);
//    }
// })
// Vue.filter("to-uppercase",function(value:string){
//   return value.toUpperCase();

// });
Vue.filter("snippet",function(value:string){
  return value.slice(0,70)+'...';

});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

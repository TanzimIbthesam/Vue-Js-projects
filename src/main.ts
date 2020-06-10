import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

Vue.config.productionTip = false;
Vue.directive('rainbow',{
   bind(el,binding,vnode){
     el.style.color="#"+Math.random().toString().slice(2,8);
   }
})
Vue.filter("to-uppercase",function(value:string){
  return value.toUpperCase();

});
Vue.filter("snippet",function(value:string){
  return value.slice(0,100)+'...';

});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

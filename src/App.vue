<template>
  <div id="app">
    <div id="" class="bg-blue-600 text-white py-5" >
      <ul class="flex justify-center items-center">
        <li class="pl-2 text-2xl font-semibold active:bg-indigo-600"><router-link to="/showblog" exact>ShowBlog</router-link></li>
        
        <li class="pl-2 text-2xl font-semibold"> <router-link to="/addblog" exact>AddBlog</router-link>
      </li>
     
      </ul>
      
      <!-- <router-link to="/showblog">Show Blog</router-link> -->
     

    </div>
    <router-view></router-view>
 
   <!-- <app-blog></app-blog> -->
   <!-- <show-blog></show-blog> -->
   <!-- <blog-title></blog-title> -->

  </div>
</template>
<script>
// import AddBlog  from   './components/AddBlog.vue';
// import showBlog  from   './components/showBlog.vue';
// import blogTitle  from   './components/blogTitle.vue';
export default {
  components:{
        // 'app-blog':AddBlog,
        // 'show-blog':showBlog,
        // 'blog-title':blogTitle

  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


<template>
<div class="flex flex-col justify-center items-center w-full px-6">
   
  <h1 class="text-2xl font-bold font-sans">{{ blog.title }}</h1>
        <p class="text-xl">{{ blog.description }}</p>
        <p class="font-bold text-xl">Author: {{ blog.author }}</p>
         
        <ul>
            <li class="text-red-600 text-2xl" v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
        </ul>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
         id:this.$route.params.id,
         blog:{

         }
        }
    },
   methods:{},
     created:function(){
       axios.get('https://vue-blog-45c59.firebaseio.com/posts/'+ this.id +'.json')
       .then(response=>{
           console.log(response);
           this.blog=response.data;
       });

        
    },
    
}
</script>
<style lang="">
    
</style>
<template>
    <div class="flex flex-col justify-center items-center w-full bg-gray-700">
              <div  v-for="blog in blogs" v-bind:key="blog"   class="w-11/12 xl:w-1/2   text-black py-10 border border-black rounded-lg mt-5 bg-gray-100">
                  <h1  class="text-3xl font-bold font-sans" v-rainbow>{{blog.title|to-uppercase}}</h1>
                  <p class="text-xl font-medium font-sans">{{blog.body|snippet}}</p>
                  
              
              </div>
               
              
              
                 
            
           
             
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
           blogs:[],

            }
       
           
        },
 
    methods:{
   
    },
  created:function(){
       axios.get('http://jsonplaceholder.typicode.com/posts/')
  .then(response=>{
    // handle success
    console.log(response);
   this.blogs=response.data.slice(0,10);
   
  })
        
    },
  }

    // mounted:function() {
    //             // const axios = require('axios').default;


    // }
    

</script>
<style scoped>
.textarea{
    @apply py-20  border-2 border-gray-300 
}
    
</style>
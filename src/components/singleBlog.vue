
<template>
<div class="flex flex-col justify-center items-center w-full ">
  <h1 class="text-2xl font-semibold">{{blog.title}}</h1>
  <p class="">{{blog.body}}</p>
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
       axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
       .then(response=>{
           console.log(response);
           this.blog=response.data;
       });

        
    },
    
}
</script>
<style lang="">
    
</style>
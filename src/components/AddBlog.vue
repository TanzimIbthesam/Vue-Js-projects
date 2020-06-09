<template>
    <div class="flex flex-col justify-center items-center w-full">
               <div class="sm:w-2/3 xl:w-1/3  m-16 w-11/12 border border-gray-400 py-10">
               <div v-if="submitted" class="bg-yellow-500 text-white py-2">
                  <h1 class="font-bold">Blog Post published</h1>
               </div>
                
               <div class="">
                     <h1 class="font-bold">Add Blog Posts</h1>
                      <h2 class="font-bold">Add a title</h2>
                     <form v-if="!submitted"  action="" method="post">
                      
                               <input type="text" name="" id="" class="sm:px-32 px-16  py-2 border-2 border-gray-300 border-lg" placeholder="Write your title here" v-model.lazy="blog.title">
                               <div class="mt-4">
                  <h2 class="font-bold">Add a description</h2>
                  <textarea name="" id="" cols="30" rows="" class="textarea px-8 sm:px-20 border-lg" v-model.lazy="blog.description">Write description Here</textarea>
              </div>
                  <div class="mt-4 ">
                     <h4>Add a category</h4>
                   <label for="" class="pl-1">Sports</label>
                   <input type="checkbox" value="sports" class="ml-2" v-model="blog.categories">
                   <label for="" class="pl-1">Technology</label>
                   <input type="checkbox" value="technology" class="ml-1"  v-model="blog.categories">
                   <label for="" class="pl-1">Entertainment</label>
                   <input type="checkbox" value="entertainment" class="ml-1"  v-model="blog.categories">
                   <label for="" class="pl-1">International</label>
                   <input type="checkbox" value="international" class="ml-1"  v-model="blog.categories">
                   
              </div>
                 <div class="mt-4">
                  <h1>Select an author</h1>
                  <select  v-model="blog.author" name="" id="" class="sm:px-48 px:32 py-2 border-2 border-gray-300">
                      <option v-for="author in authors" v-bind:key="author" class="">{{author}}</option>
                
                  </select>
              </div>
             <div class="mt-4">
                    <button v-on:click.prevent="post" class=" py-2 sm:px-48 px-32 bg-blue-400 text-white font-bold uppercase">
                  Send
               </button>
               </div>
                     </form>
                     
                
              
            
              
            
           
            
              
             </div>
           
               
               </div>
               <div class="sm:w-1/3  w-11/12 border border-gray-400 py-5">
                 <!-- <p class="text-2xl " v-for="category in blog.categories" v-bind:key="category">Category-{{category}}</p> -->
                 <h4>Blog Categories</h4>
                 
                        <p  v-for="category in blog.categories" v-bind:key="category">{{category}}</p>
                   
                   <p>{{blog.author}}</p>
                
                <h1 class="text-2xl font-bold">Title:{{blog.title}}</h1>
                <p class="px-1">Decription:{{blog.description}}</p>
                       
               </div>
               
              
              
                 
            
           
             
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            blog:{
                 title:' ',
            description:' ',
            categories:[],
            author:'',

            },
            authors:['Mark','Ricky','John'],
            submitted:false,
           
        }
    },
    methods:{
    post:function(){
   
 axios.post('http://jsonplaceholder.typicode.com/posts',{
    headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
					title:this.blog.title,
					body: this.blog.description,
					userId:1,


				}).then(data=>{
          console.log(data);
          this.submitted=true;
				});
        
               
        }
    }
    
}
</script>
<style scoped>
.textarea{
    @apply py-20  border-2 border-gray-300 
}
    
</style>
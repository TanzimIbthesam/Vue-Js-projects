<template>
    <div class="flex flex-col justify-center items-center w-full">
        
                <input  type="text" v-model="search" class="border py-2 m-5 w-1/2 border border-gray-300 rounded-lg shadow-xl" placeholder="Search here">
              <div  v-for="blog in  filteredBlogs" v-bind:key="blog"   class="w-11/12 xl:w-1/2   text-black py-10 border border-black rounded-lg mt-5 bg-gray-100">
              <!-- <router-link v-bind:to="'/blog/'+blog.id">  <h1  class="text-3xl font-bold font-sans" v-rainbow>{{blog.title}}</h1></router-link> -->
               <router-link v-bind:to="'/blog/' + blog.id"><h2 class="text-3xl font-bold font-sans">{{ blog.title }}</h2></router-link>
            <article>{{ blog.description}}</article>
                
             
                  
              
              </div>
              
    
              
              
                 
            
           
             
    </div>
</template>
<script>
import axios from 'axios';
import searchMixin from '../mixins/Searchmixins';
export default {
    data() {
        return {
           blogs:[],
           search:'',
          
            

            }
       
           
        },
 
    methods:{
   
    },
//   created:function(){
//        axios.get('https://vue-blog-45c59.firebaseio.com/posts.json')
       
//   .then(response=>{
//     // handle success
//     // console.log(response);
    
//     return response.data();
// //    this.blogs=response.data.slice(0,4);

  
//   });
//     },
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter(blog=>{
                return blog.title.match(this.search) || blog.description.match(this.search)  ;
               

            });
        }
    },
     mounted () {
  axios.get('https://vue-blog-45c59.firebaseio.com/posts.json')
  .then(response=>{
        console.log(response);
        const data=response.data;
        console.log(data);
        const  blogsArray= [];
        for (const key in data){
            data[key].id=key;
            blogsArray.push(data[key]);
           
          }
           this.blogs = blogsArray;
          console.log(this.blogs);


  });
  },
    filters:{
//         'to-uppercase':function(value){
//   return value.toUpperCase();
//     },
        touppercase(value){
  return value.toUpperCase();
    }
  },
  directives:{
      'rainbow':{
          bind(el,binding,vnode){
     el.style.color="#"+Math.random().toString().slice(2,8);
   }
      }
  },
  mixins:[searchMixin]

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
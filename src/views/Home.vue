<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
          <h1 class="">Hello World</h1>
          <button class="new">Hello World</button>
  </div>
 
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {
 
  }
};
</script>
<style>
.new{
  @apply bg-red-600 pl-4 px-4 py-4 text-white border rounded-md text-2xl
}
.new:hover{
 @apply bg-orange-500
}
</style>

<template>
  <div id="app">
    <h1>My Todos App</h1>
    <ul>
      <li v-for="post of post" :key="post.id">{{post.title}}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios"; 
export default {
  name: 'App',
  data(){
    return{
    post:[]
  }
  },
  async created(){
    try{
      const res=await axios.get("http://localhost:3000/api/post");
      this.post=res.data.data;
    }catch(e){
      console.error(e);
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

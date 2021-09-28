<template>
  <div id="app">
    <h1>My Todos App</h1>
    <input type="text" v-model="postdata" @keyup.enter="addPost">
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
    post:[],
    postdata:''
  }
  },
  async created(){
    try{
      const res=await axios.get("http://localhost:3000/api/post");
      this.post=res.data.data;
    }catch(e){
      console.error(e);
    }
  },
  methods:{
    async addPost(){
      const res=await axios.post("http://localhost:3000/api/post",{title:this.postdata});
      this.post=[...this.post,res.data.data];
      this.postdata='';
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

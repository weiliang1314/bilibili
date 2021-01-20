<template>
  <div class="user">
    <navbar></navbar>
    <img src="../assets/bei.jpg" class="back" >
  <div><userdetail :userinfo='model'></userdetail></div>
  </div>
</template>

<script>
import navbar from '../components/common/navbar.vue'
import userdetail from '../components/conect/userdetail'


export default {
  name:'user',
  data(){
    return{model:{}}
  },
  components:{navbar,
    userdetail,
  
  },
  methods:{
    async userinfo(){
      //获取个人信息
      const res=await this.$http.get('/user/'+localStorage.getItem('id'),{/*headers:{
        //在http中用了拦截器,就不用每个写请求头
       // 'Authorization':'Bearer '+localStorage.getItem('token')}*/
        
      
         
      })
      console.log(res)
      this.model=res.data[0]

    }
  },
  created(){
    this.userinfo()
  }

}
</script>

<style lang="less">
.user{
  .back{
    width: 100%;
    height: 40vw;

  }
}

</style>
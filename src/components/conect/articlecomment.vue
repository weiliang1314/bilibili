<template>
  <div class="comment">
<p class="title">
  <span>评论</span>
  <span>({{datalength}})</span>
</p>
<div class="commentimg">
  <img v-if="myuser" :src="myuser.user_img">
  <img v-else src="../../assets/tou.jpg" alt="还没登录">
  <input v-model="content" type="text" placeholder="说点什么吧"  ref='postipt'>
  <button @click="focus">发表</button>
</div>
  </div>
</template>

<script>
  export default {
    name:'articlecomment',
    props:['datalength'],
    data(){
      return{
        myuser:null,
        content:'',
      }
    },
    methods:{
      //在评论页获取个人的信息
      async myuserinfo(){
        const res=await this.$http.get('/user/'+localStorage.getItem('id'));
        this.myuser=res.data[0];
        console.log(res)

      },
      //点击发表时触发的事件
      focus(){
       if(!this.myuser&&!localStorage.getItem('token')&&!localStorage.getItem('id')){
         this.$msg.fail('请先登录');
         return;
       }
       this.$emit('postcomment',this.content)
       //回复一级评论后把输入框置为空
       this.content=''
      },
      //二级评论点击回复后，聚焦到评论填写
      focused(){
        this.$refs.postipt.focus()
      }
    },
    created(){
      if(localStorage.getItem('token')){
      this.myuserinfo();}

    },
    
  }
</script>

<style lang="less" scoped>
.comment{
  padding: 4vw 1.333vw;
  background-color: white;
  .title{
    font-size: 3.4vw;
    span:nth-child(2){
      color:#aaa;
      margin-left: 1.333vw;
    }
  }
  .commentimg{
    display: flex;
    
    align-items: center;
    img{
      width: 8vw;
      height: 8vw;
      border-radius: 50%;
    }
    input{
      outline: none;
      border:0;
      background-color: #f4f4f4;
      border-radius: 2.667vw;
      height: 5.333vw;
      width: 60%;
      margin-left: 2vw;
      font-size: 1.6vw;
      padding: 0 2.667vw 0 1.333vw;

    }
    button{
      border:0;
      background-color:  palevioletred;
      border-radius: 2.667vw;
      color: white;
      padding: 0.667vw 2.333vw;

    }
  }
}

</style>
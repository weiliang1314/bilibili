<template>
  <div class="userdetail">
  <div>
    <div class='userimg'><img v-if="userinfo.user_img" src="userinfo.user_img"><img v-else src='../../assets/tou.jpg' ></div>
    <div class='useredit'>
      <div><p><span>0</span><span class="text">粉丝</span></p>
      <p><span>0</span><span class="text">关注</span></p>
      <p><span>0</span><span class="text">获赞</span></p></div>
      <div class="userbtn" @click="$router.push('/useredit')">编辑资料</div>
    </div>
  </div>
  <div>
    <h3>{{userinfo.name}}</h3>
    <p v-if="userinfo.user_desc">{{userinfo.user_desc}}</p>
    <p v-else>这个人很神秘，什么都没写~</p>
  </div>
  <div>
    <p>动态</p>
    <p>视频</p>
  </div>
  </div>
</template>

<script>
  export default {
    name:'userdetail',
    props:['userinfo']
  }
</script>

<style lang="less" scoped>
.userdetail{
  background-color: white;
  padding: 0 1.6vw;
 >div:nth-child(1){
    display: flex;
    .userimg{
    margin-right: 2.667vw;
    padding: 0.667vw 1.333vw;
    img{
      height: 20vw;
      width: 20vw;
    }
  }
  .useredit{
    padding: 0.667vw 1.333vw;
    flex:1;
    div:nth-child(1){
      display: flex;
      p{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        .text{
          color:#aaa
        }
      }
      p:nth-child(1),p:nth-child(2){
        border-right: 1px solid #aaa;
      }
    }
    .userbtn{
     font-size: 19px;
     font-weight: bold;
      border:2px solid palevioletred;
      color: palevioletred;
      padding: 3px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
    }
  }
  }
  >div:nth-child(2){
    border-bottom: 1px solid #aaa;
    width: 100%;
    h3{
      margin: 1.333vw 0 0.4vw 0;
      font-weight: 400;
    }
    p{
      padding: 0;
      margin: 1.333vw 0;
      color:#aaa
    }

  }
  >div:nth-child(3){
    display: flex;
    p{
      
      margin-right: 2vw;
      font-size: 4vw;
      color: #aaa;
    }
  }
  
}

</style>
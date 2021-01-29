<template>
  <div class='commenttitle'>
<div  v-for='(item,index) in commentchild' :key='index'><div class='comments'><div class="userimg">
  <img v-if="item.userinfo&&item.userinfo.user_img" :src="item.userinfo.user_img">
      <img v-else src='../../assets/tou.jpg'></div> 
   <div class="usertext">
     <p><span v-if='item.userinfo'>{{item.userinfo.name}}</span>
     <span v-else>用户没有名字</span>
     <span>{{item.comment_date}}</span></p>
     <div v-if='!temp'>{{item.comment_content}}</div>
      <div v-else><span style="color:#478ef0">回复@{{item.parent_user_info.name}}</span>{{item.comment_content}}</div>
   </div><!--vue组件的递归-->
  
   </div>
    <commenttitle :commentchild='item.child' :temp='true'></commenttitle></div>
   
  </div>
</template>

<script>
  export default {
    name:'commenttitle',
    props:['commentchild','temp']
  }
</script>

<style lang="less" scoped>
.commenttitle{
  padding: 0 2vw;
  .comments{
    display: flex;
   
    padding: 1.333vw 0;
     
   
  .userimg{
    margin-right: 1.333vw;
    img{
      width: 8vw;
      height: 8vw;
      border-radius: 50%;
    }
  }
  .usertext{
   
    p{
      font-size: 2.833vw;
      color:#555;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    div{
      font-size: 2.533vw;
    }
  }}
}

</style>
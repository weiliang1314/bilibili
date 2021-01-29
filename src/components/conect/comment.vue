<template>
  <div class="comment">
    <div  v-for='(item,index) in commentlist' :key='index'><div class='comments'><div class="userimg">
      <img v-if="item.userinfo&&item.userinfo.user_img" :src="item.userinfo.user_img">
      <img v-else src='../../assets/tou.jpg'></div> 
   <div class="usertext">
     <!--做一次判断才可以渲染出来-->
     <p><span v-if='item.userinfo'>{{item.userinfo.name}}</span>
     <span v-else>用户没有名字</span>
     <span>{{item.comment_date}}</span></p>
     <div>{{item.comment_content}}</div>
   </div>
   
   </div>
   <commenttitle  :commentchild='item.child'></commenttitle></div>
    
  
  </div>
  
</template>

<script>
import commenttitle from './commenttitle'

  export default {
    name:'comment',
    data(){
      return{
        commentlist:null,
      }
    },
    components:{commenttitle},
    methods:{
      async commentdata(){
        //获取评论的数据
        const res=await this.$http.get('/comment/'+this.$route.params.id);
        console.log(res.data)
        if(res.data){
          this.$emit('lengths',res.data.length)
        }
        this.commentlist=this.changecomment(res.data)

      },
      //评论数据处理，分为几级评论
      changecomment(data){
      function fn(temp) {
     let arr1 = [];
     for (let i = 0; i < data.length; i++) {
        if (data[i].parent_id == temp) {
            arr1.push(data[i])
            data[i].child = fn(data[i].comment_id)

        }
    }
    return arr1
}
return fn(null)
      },
    },
    created(){
      this.commentdata();
    }
    
  }
</script>

<style lang="less" scoped>
.comment{
  padding: 2vw 1.333vw;
  background-color: white;
  
  .comments{
    display: flex;
    padding: 1.333vw 0;
     border-bottom: 1px solid #aaa;
   
  .userimg{
    margin-right: 1.333vw;
    img{
      width: 8vw;
      height: 8vw;
      border-radius: 50%;
    }
  }
  .usertext{
    flex: 1;
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
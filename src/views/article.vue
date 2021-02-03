<template>
  <div v-if="model">

<div class='datavideo'>
  <navbar></navbar>
  <!--后台拿不到<video :src="model.content"></video>-->
  <div class='video'> <video src="../assets/f3pn.mp4" controls></video>
 
  </div>
   <div class='datas'>  <van-collapse v-model="activeNames">
   
  <van-collapse-item :title="model.category.title+'&'+model.name" name="1">未经作者授权禁止转载</van-collapse-item>
  
</van-collapse>
<div class="date">
  <span>{{model.userinfo.name}}</span>
  <span>123.3次播放</span>
  <span>2312弹幕</span>
  <span>{{model.date}}</span>
  

</div>
<div class="ping">
  <div><span><img src="../assets/s.png"></span><span>收藏</span>
  <span><img src="../assets/x.png"></span><span>缓存</span>
  <span><img src="../assets/f.png"></span><span>分享</span></div>
  <div><span><img src="../assets/l.png"></span><span>{{model.commentlen}}评论</span></div>
</div>
</div>
 
</div>
<articledata v-for='(item,index) in commendmodel' :key="index" :commendmodel="item"></articledata>
<articlecomment :datalength='lens' @postcomment='postcomment' ref="commentipt"></articlecomment>
<comment @lengths='len=>lens=len' @pubclick='pubclick' ref='commentpubliss'></comment>
  </div>
</template>

<script>
import navbar from '../components/common/navbar'
import articledata from '../components/common/articledata'
import articlecomment from '../components/conect/articlecomment'
import comment from '../components/conect/comment'
  export default {
    name:'aeticle',
    data(){
      return{ model:null,activeNames: ['0'],
      commendmodel:null,
      myuser:null,
      lens:null,
      postcom:{
        comment_content:'',
        comment_date:'',
        parent_id:null,
        article_id:null,
      }}
    },
    components:{
      navbar,
      articledata,
      articlecomment,
      comment,
    },
    methods:{
      //获取详情页数据
      async articledata(){
        const res=await this.$http.get('/article/'+this.$route.params.id);
        this.model=res.data[0]
        console.log(res)
      },
      //获取详情页推荐的视频数据
      async commendata(){
        const res=await this.$http.get('/commend');
        this.commendmodel=res.data;
        console.log(res)

      },
      //数据双向绑定后，获取写入的评论
      async postcomment(res){
        console.log(res)
        const date=new Date();
        let m=date.getMonth()+1;
        let d=date.getDate();
        if(m<10)m='0'+m;
        if(d<10)d='0'+d;
        let str=m+'-'+d;
      this.postcom.comment_content=res;
      this.postcom.comment_date=str;
      this.postcom.article_id=this.$route.params.id;
      console.log(this.postcom)
      //获取评论发表
     const result=await this.$http.post('/comment_post/'+localStorage.getItem('id'),this.postcom)
     console.log(result)
     //发表完评论后刷新数据
     this.$refs.commentpubliss.commentdata();
     this.postcom.parent_id=null;
     if(result.status==200){
       this.$msg.fail('评论发布成功')
     }


      },
      //给一级回复评论
      pubclick(id){
        this.postcom.parent_id=id;
        //父组件用子组件的方法
        this.$refs.commentipt.focused()
      }
      
    },
    created(){
      this.articledata();
      this.commendata();
      
    },
    //在详情页点击推荐的视频跳转
    watch:{
      $route(){
         this.articledata();
      this.commendata();
      }
    }
    
  }
</script>

<style lang="less" scoped>
.datavideo{
  
  .video{
    width: 100%;
    video{width: 100%;}
  }
  .datas{
    padding:2vw 0;
    background-color: white;
  
    .date{
      padding: 15px 15px;
      span{
        color:#aaa;
        margin-right: 15px;
      }
      span:nth-child(1){
        padding: 5px 8px;
        color:#fb7299;
        background-color: #f4f4f4;
        border-radius: 8px;

      }
    }
    .ping{
       padding: 5px 15px;
       display: flex;
       justify-content: space-between;
       div{
         display: flex;
         justify-content: center;
         align-items: center;
         color:#aaa
       }
       div:nth-child(1){
         span{
        padding-right:  15px;}
       }

    }
  }
}

</style>
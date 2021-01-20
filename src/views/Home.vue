<template>
  <div class="home">
   <navbar></navbar>
   <van-tabs v-model="active" swipeable sticky>
  <van-tab v-for="(item,index) in category" :title= item.title :key="index">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="../assets/2.png"></van-swipe-item>
  <van-swipe-item><img src="../assets/1.jpg"></van-swipe-item>
  <van-swipe-item><img src="../assets/3.jpg"></van-swipe-item>
  <van-swipe-item><img src="../assets/4.jpg"></van-swipe-item>
</van-swipe>
<van-list
  v-model="item.loading"
  :finished="item.finished"
  finished-text="没有更多了"
  @load="onLoad"
  :immediate-check="false"
>
   <div class="dateparent">
      <homedate class="dateitem"  :dateitem='citem' v-for="(citem,cindex) in item.list" :key='cindex'></homedate>
    </div>
</van-list>
   
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
import navbar from '../components/common/navbar'
import homedate from '../components/common/homedate'


export default {
  name: 'Home',
 data(){return {
   category:[],
   active:0
 }},
  components: {
    navbar,homedate,
    
  },
  methods:{
   async selectdata(){
     //获取滚动导航条的内容
     const res=await this.$http.get('/category');
     console.log(res)
     this.changecategory(res.data)
     this.selectdatas()
    

    },
    changecategory(data){
      //对原来获取的数据进行改造,返回一个新的数组，不会改变原来数组item为当前元素的值，index为索引
     const cate1= data.map((item,index)=>{
        item.list=[];
        item.page=0;
        item.pagesize=12;
        //下拉数据加载,
        item.finished=false;
        item.loading=true;
        return item
      })
  this.category=cate1

    },
    //
     async selectdatas(){
     //获取对应内容数据
     
     const categoryitem=this.categoryitem();
     const res=await this.$http.get('/detail/'+categoryitem._id,{params:
     {page:categoryitem.page,pagesize:categoryitem.pagesize}});
     console.log(res)
    //下拉获取到新的数据后添加进去
    categoryitem.list.push(...res.data);
    //数据加载到底部
    categoryitem.loading=false;
    //数据加载完
    if(res.data.length<categoryitem.pagesize){
      categoryitem.finished=true
    }

    },
    categoryitem(){
     
      const citem=this.category[this.active];
      return citem;

    },
    //下拉加载更多数据
    onLoad(){
      const categoryitem=this.categoryitem();
      setTimeout(()=>{
        categoryitem.page+=1;
      this.selectdatas();
      },1000);



    }
  },
  watch:{
active(){
  this.selectdatas()
}
  },
  created(){
    this.selectdata()
  }
}
</script>
<style lang="less" scoped>
.dateparent{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .dateitem{
    width: 45%;
    margin: 3% 0;
  }
}
.my-swipe {
  padding: 0;
  margin: 0;
  .van-swipe-item {
    color: #fff;
   
    text-align: center;
    img{
      width: 99%;
      height: 193px;
    }
  }}
</style>

<template>
  <div class="imgp" @click="pushs">
<div style="width:45%">
   <div class="imgs"> <img src='../../assets/bei.jpg' style="width:100%">
    <div class='video'><img src="../../assets/b.png"><span class=''>11万</span></div>
   <div class="coment"><img src="../../assets/p.png"> <span >{{commendmodel.commentlen}}</span></div></div>
  </div>
  <div><p>{{commendmodel.name}}</p>
  <p><span>up</span><span>那你</span></p>
  </div>
   
  </div>
</template>

<script>
  export default {
    name:'articledata',
    props:['commendmodel'],
    methods:{
      pushs(){
        if(this.$route.path!='/article/'+this.commendmodel.id)
       this.$router.push('/article/'+this.commendmodel.id)
      }
    }
  }
</script>

<style lang="less" scoped>
.imgp{display: flex;
border-bottom: 1px solid #aaa;
background-color: white;
padding: 10px 0;
div:nth-child(2){
  padding: 0 15px;
  p:nth-child(2){
    color:#aaa;
    span{
      padding: 2px 5px;
    }
    span:nth-child(1){
      border: 1px solid #aaa;
      border-radius: 5px;

    }
  }
}

  .imgs{
  position: relative;
  width: 100%;
  .video{
    position: absolute;
    bottom: 0.667vw;
    left: 0.667vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 3.467vw;
      height: 3.467vw;
    }
  }
  .coment{
    position: absolute;
    bottom: 0.667vw;
    right: 0.667vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 3.467vw;
      height: 3.467vw;
    }
  }
}}
</style>
<template>
  <div @click="$router.push('/article/'+dateitem.id)">
  <div>
   <div class="imgs"> <img src='../../assets/bei.jpg' style="width:100%">
    <div class='video'><img src="../../assets/b.png"><span class=''>11万</span></div>
   <div class="coment"><img src="../../assets/p.png"> <span >{{dateitem.commentlen}}</span></div></div>
    <p>{{dateitem.name}}</p>
  </div>
  </div>
</template>

<script>
  export default {
    name:'homedate',
    props:['dateitem']
  }
</script>

<style lang="less" scoped>
.imgs{
  position: relative;
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
}
</style>
<template>
  <div class='navbar'>
     <div class='logo'>
       <img src='../../assets/bi.png'>
     </div>
  <div><p><van-icon class="icon" name="search" />请输入内容</p></div>
  <div><img src='../../assets/tou.jpg'><p>官网</p></div>
  
  </div>
 
</template>

<script>
  export default {
    name:'navbar'
  }
</script>

<style lang="less" scoped>
.navbar{
  display: flex;
  height:8.667vw;
  background-color: white;
  .logo{
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 120px;
      height: 42px;
    }
  }
  div:nth-child(2){
    flex:1;
    display: flex;
    align-items: center;
    p{
      line-height: 32px;
      padding-left: 30px;
      position: relative;
      background-color: #f4f4f4;
      height: 32px;
      width: 100%;
      border-radius: 15px;
      color:#aaa;
      .icon{
        position: absolute;
        left:10px;
        top:50%;
        transform: translate(0,-40%);
      }
    }
  }
  div:nth-child(3){
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width:40px;
      height: 40px;
    }
    p{
      padding: 5px 10px;
      margin: 0px 8px;
      background-color:  palevioletred;
      color: white;
      border-radius: 8px;
    }
  }
}

</style>
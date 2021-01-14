<template>
 
  <div class="longin">
    <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
  </div>
  
</template>

<script>
  export default {
    name:'longinTop'
  }
</script>

<style lang="less" scoped>
.longin{
  height: 45px;
  line-height: 45px;
  background-color: white;
  display: flex;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  div{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /*随着容器大小改变可以调整大小用px-to-vw插件计算 alt+z*/
  font-size: 3.733vw;
  color: palevioletred;
  font-weight: bold;
  
}
div:nth-child(3){
  justify-content: right;
  
}
}


</style>
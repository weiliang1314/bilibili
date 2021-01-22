<template>
  <div id="app">
    <div id="nav">
     
    </div>
    <keep-alive><router-view v-if="$route.meta.keepalive==true"/></keep-alive>
    <router-view v-if="!$route.meta.keepalive"></router-view>
    
  </div>
</template>

<style lang="less">
body{
  margin: 0;
  padding: 0;
  /**从已经设定的宽和高减去padding border才能得到内容的宽和高 */
  box-sizing: border-box;
  background-color: #f4f4f4;
}

</style>

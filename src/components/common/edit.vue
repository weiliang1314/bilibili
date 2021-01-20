<template>
  <div class="edits" @click="banner">
<div class="edit"><span>{{left}}</span>
 <span> <slot name="right"></slot></span></div>
 
  </div>
</template>

<script>
  export default {
    name:'edits',
    props:['left'],
    methods:{
      banner(){
        this.$emit('banner')
      }
    }
  }
</script>

<style lang="less" scoped>
.edits{

.edit{
  background-color: white;
  padding: 3.333vw 1.333vw;
  border-bottom: 1px solid #aaa;
  font-size: 3.733vw;
  color: #333;
  display: flex;
  justify-content:space-between;
  align-items: center;
  font-weight: 700;
  
}}

</style>
<template>
  <div>
    <van-field  :label="label" :type='type' :placeholder='placeholder' :rule='rule' v-model='content'/>
  </div>
</template>

<script>

export default {
name:'longintext',
data(){
  return{
    content:''
  }
},
//监听：不支持缓存，数据变会触发相应操作，支持异步，函数接收两个参数，第一个为最新的值，第二个是之前的值

watch:{
  content(){
    this.hand()
  }
},
methods:{
  //正则表达验证
  hand(){
    const rule=new RegExp(this.rule);
    if(rule.test(this.content)){
        this.$emit('change',this.content)
    }
  }
},
props:['label','type','placeholder','rule']

  
};

</script>

<style>

</style>
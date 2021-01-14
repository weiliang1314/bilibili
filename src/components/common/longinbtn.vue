<template>
  <div class="btns" @click='regclick'>
    <div class="btn">{{btntext}}</div>
  </div>
</template>

<script>
export default {
  name:'longinbtn',
  props:['btntext'],
  methods:{
    regclick(){
      this.$emit('regsubmit')
    }
  }

}
</script>

<style>
.btns{
  padding: 2vw 1.333vw;
}
.btn{
  
  height: 11.333vw;
  background-color: #ff9db5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.2vw;
  border-radius: 2.933vw;
}
</style>
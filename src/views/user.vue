<template>
  <div class="user">
    <navbar></navbar>
    <img src="../assets/bei.jpg" class="back">
  <div><userdetail></userdetail></div>
  </div>
</template>

<script>
import navbar from '../components/common/navbar.vue'
import userdetail from '../components/conect/userdetail'


export default {
  name:'user',
  components:{navbar,
    userdetail,
  
  }

}
</script>

<style lang="less">
.user{
  .back{
    width: 100%;
    height: 40vw;

  }
}

</style>
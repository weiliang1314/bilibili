<template>
  <div class="about">
  <longin-top><div slot="center">用户注册</div></longin-top>
  <longintext label="姓名" style="margin:15px 0" placeholder="请输入姓名" rule='^.{6,16}$'
   @change='content=>name=content'></longintext>
  <longintext label="账号" placeholder='请输入账号' rule="^.{6,16}$" @change='content=>username=content'></longintext>
  <longintext label="电话" placeholder='请输入电话号码' rule='/^\d{3}-\d{8}$|^\d{4}-\d{7}$/' @change='content=>phone=content'></longintext>
  <longintext label="密码" placeholder='请输入密码' type='password'rule='^.{6,16}$'@change='content=>password=content'></longintext>
  <longinbtn btntext="注册"></longinbtn>
  </div>
</template>
<script>

import longinTop from '../components/common/longinTop'
import longintext from '../components/common/longintext'
import longinbtn from '../components/common/longinbtn'


export default {
  name: 'about',
  data(){
    return{name:'',
    username:'',
    password:'',
    phone:''}
  },
  components: {
    longinTop,
    longintext,
    longinbtn
    
  
   
  },
  methods:{
    //正则验证
    success(content){
     // this.name=content
  
     
    }
  }
}
</script>
<template>
  <div class="about">
  <longin-top><div slot="center">用户注册</div><div slot="right" style="font-size:15px;" @click="$router.push('/longin')">切换到登录</div></longin-top>
  <longintext label="姓名" style="margin:15px 0" placeholder="请输入姓名" rule='^.{6,16}$'
   @change='content=>model.name=content'></longintext>
  <longintext label="账号" placeholder='请输入账号' rule="^.{6,16}$" @change='content=>model.username=content'></longintext>
  <!--<longintext label="电话" placeholder='请输入电话号码' rule='^\d{3}-\d{8}$|^\d{4}-\d{7}$' @change='content=>phone=content'></longintext>-->
  <longintext label="密码" placeholder='请输入密码' type='password'rule='^.{6,16}$'@change='content=>model.password=content'></longintext>
  <longinbtn btntext="注册" @regsubmit='regsubmit'></longinbtn>
  </div>
</template>
<script>

import longinTop from '../components/common/longinTop'
import longintext from '../components/common/longintext'
import longinbtn from '../components/common/longinbtn'


export default {
  name: 'about',
  data(){
    return{model:{name:'',
    username:'',
    password:'',
    phone:''}}
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
  
     
    },
     async regsubmit(){
       let rulg=/^.{6,16}$/
     if(rulg.test(this.model.name)&&rulg.test(this.model.username)&&rulg.test(this.model.password)){
      
        const res=await this.$http.post('/register',this.model);
        console.log(res)
        this.$msg.fail(res.data.msg)
        localStorage.setItem('token',res.data.objtoken)
        localStorage.setItem('id',res.data.id)
        setTimeout(()=>{
          this.$router.push('/user')
        },1000)
      }else{
        this.$msg.fail('格式不正确')
      }
      
    }
  }
}
</script>
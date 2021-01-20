<template>
  <div>
<div style="margin-bottom:15px"><navbar></navbar></div>
<div class="upload"><van-uploader :after-read="afterRead" class="uploadimg" preview-size="100vw"/>
<edit left="头像"><img v-if="model.user_img" src='model.user_img' slot="right"><img v-else src='../assets/tou.jpg' slot="right"></edit></div>
<edit left="昵称" @banner="banner"><a href="javascript:;" slot="right" >{{model.name}}</a></edit>
<edit left="ID"><a href="javascript:;" slot="right" >{{model.username}}</a></edit>
<edit left="性别" @banner="gendershow=true"><a href="javascript:;" slot="right" >{{model.gender?'男':'女'}}</a></edit>
<edit left="出生日期"></edit>
<edit left="个性签名" @banner="shows=true"><a href="javascript:;" slot="right" >{{model.user_desc}}</a></edit>
<div style="margin-top:35px" @click="$router.push('/user')"><longin-top><div slot="center">返回个人中心</div></longin-top></div>
<van-dialog v-model:show="show" title="昵称" show-cancel-button @confirm="confirmclick" @cancel="content=''">
 <van-field v-model="content"  autofocus placeholder="请输入" />
</van-dialog>
<van-dialog v-model:show="shows" title="个性签名" show-cancel-button @confirm="confirmclicks" @cancel="content=''">
 <van-field v-model="content" type="textarea"  autofocus placeholder="请输入" />
</van-dialog>
<van-action-sheet v-model="gendershow" :actions="actions" cancel-text="取消" @select="onSelect" />
  </div>
</template>
 
<script>

import navbar from '../components/common/navbar'
import edit from '../components/common/edit'
import longinTop from '../components/common/longinTop.vue'
  export default {
    name:'useredit',
    data(){
      return{
        model:{},
        show:false,
        content:'',
        text:'',
        shows:false,
        gendershow:false,
        actions: [{ name: '男',va1:1}, { name: '女' ,val:0}]
      }
    },
    components:{
      navbar,
      edit,
     longinTop
      
    },
    methods:{
     async selecuser(){
             const res=await this.$http.get('/user/'+localStorage.getItem('id'),{
      })
      console.log(res)
      this.model=res.data[0]

      },
     async afterRead(file){
        //头像上传
        console.log(file)
        const fromdata=new FormData()
        fromdata.append('file',file.file)
        const res=await this.$http.post('/upload',fromdata)
        console.log(res)
        this.model.user_img=res.data.url;
        this.uploaddata()

      },
      //上传头像后使后台存的头像数据也改变，这样刷新后数据就不会恢复成原来那样
       async uploaddata(){
         const res=await this.$http.post('/update/'+localStorage.getItem('id'),this.model)
         if(res.data.code==200){
           this.$msg.fail('修改成功')
         }
       },
       //点击弹出框
       banner(){
         this.show=true
       },
       //点击确认修改
       confirmclick(){
         this.model.name=this.content;
         this.uploaddata();
         this.content='';
       },
        confirmclicks(){
         this.model.user_desc=this.content;
         this.uploaddata();
         this.content='';
       },
       //点击取消清空输入框@cancel=content
       //
       //性别点击事件
        onSelect(data){
          this.model.gender=data.val
          this.uploaddata()
          this.gendershow=false

        }
    },
    created(){
      this.selecuser()
    },
   
  }
</script>

<style lang="less" scoped>
a{
  color:#aaa
}
img{
  height: 46px;
  width: 46px;
  border-radius: 50%;
}
.upload{
  position: relative;
  overflow: hidden;
  .uploadimg{
    position: absolute;
    opacity: 0;
  }
}
</style>
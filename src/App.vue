<template>
  <div id="app">
    <HelloWorld/>
    <div class="nav_box">
      <span @click="fun(1)" :class="flag=='one'?'active':''">推荐</span>
      <span @click="fun(2)" :class="flag=='two'?'active':''">分类</span>
      <span @click="fun(3)" :class="flag=='three'?'active':''">排行</span>
      <span @click="fun(4)" :class="flag=='four'?'active':''">文学艺术</span>
      <span @click="fun(5)" :class="flag=='five'?'active':''">哲学社科</span>
    </div>
    <components :is="flag"></components>
    <foo/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 导航组件
import one from './components/ListOne.vue'
import two from './components/ListTwo.vue'
import three from './components/ListThree.vue'
import four from './components/ListFour.vue'
import five from './components/ListFive.vue'
// 底部组件
import foo from './components/FooTer.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    one,two,three,four,five,foo
  },
  data(){
    return{
      flag:'one'
    }
  },methods:{
    fun(num){
      switch (num) {
        case 1:
          this.flag='one'
          break;
        case 2:
          this.flag='two'
          break;
        case 3:
          this.flag='three'
          break;
        case 4:
          this.flag='four'
          break;
        case 5:
          this.flag='five'
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
}
html{
    font-size: 375./12px;
    overflow: hidden;
}
.main{
    width: 100%;
} */
</style>
<!-- 导航样式 -->
<style>
.nav_box{
  width: 90vw;
  padding: 0 5vw;
  height: 40px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 107px;
  z-index: 99999999999;
}
.nav_box span{
  color: gray;
  font-size: 15px;
}
.active{
  color: rgb(96, 156, 180) !important;
}
</style>

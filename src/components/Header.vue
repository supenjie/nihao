<template>
    <div>
        <div class="header">
                <div class="h-title">
                    <p>微信读书</p>
                </div>
                <div class="search">
                    <span>🔍︎</span>
                    <input type="text" name="" id="text" placeholder="搜索">
                </div>
                
        </div>

    </div>
</template>

<script >
// import one from './books/OneView'
export default {
    data(){
        return{
            items:[
            {
                id:'1',
                text:'推荐',
                start:'true',
            }
        ]
        }
    },methods:{

    }, 
//      components: {
//      one
//   },
 
}

</script>

<style lang="less" scoped>
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
}
.header{
    width: 375./(375./12rem);
    height: 150./(375./12rem);
    background-color: rgb(255, 255, 255);
}
.h-title{
    height: 50./(375./12rem);
    // background-color: aqua;
    font-size: 16./(375./12rem);
    line-height: 50./(375./12rem);
    text-align: center;
}
.h-title p{
    font-weight: 900;
}
.search{
    height: 50./(375./12rem);
    // background-color: green;
    padding: 0 10./(375./12rem);
    position: relative;
    font-size: 16./(375./12rem);
    position: relative;
}
#text{
    width: 100%;
    height: 40./(375./12rem);
    border-radius: 50./(375./12rem);
    border: none;
    margin-top: 5px;
    float: left;
    outline: none;
    text-indent: 2.5em;
    background-color: #f5f5f5;
}
.search span{
   position: absolute;
   top: 14./(375./12rem);
   left: 20./(375./12rem);
   color: gray;
}
</style>
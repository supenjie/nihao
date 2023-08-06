<template>
  <div>
    <div class="head">
      <h3>微信读书</h3>
      <div class="sou_box">
        <svg
          t="1691116319320"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2593"
          width="16"
          height="16"
        >
          <path
            d="M402.285714 0a402.285714 402.285714 0 0 1 336.457143 622.884571l276.626286 276.48-103.424 103.497143-274.285714-274.285714A402.285714 402.285714 0 1 1 402.285714 0z m0 146.285714a256 256 0 1 0 0 512 256 256 0 0 0 0-512z"
            fill="#707070"
            p-id="2594"
          ></path>
        </svg>
        <input type="text" placeholder="搜索" />
      </div>
    </div>
    <div class="mybook">
      <div class="mybook_top">
        <img
          
          src="https://img0.baidu.com/it/u=3133478492,2166884751&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360"
          alt=""
        />
        <b style="color: rgb(166, 162, 162);">微信用户</b>
        <a>体验卡今日到期</a>
        <span> 反馈 </span>
      </div>
      <img
        class="book"
        src="https://weread-1258476243.file.myqcloud.com/weread/cover/17/yuewen_23484983/t6_yuewen_234849831690286968.jpg"
        alt=""
      />
      <img class="book" src="https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg" alt="">
      <!-- <img class="book" src="https://wfqqreader-1252317822.image.myqcloud.com/cover/544/27370544/t6_27370544.jpg" alt=""> -->
      <span class="xp"
        ><p><span>书</span><span>架</span></p>
        <b
          ><svg
            t="1691146319112"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4341"
            width="12"
            height="12"
          >
            <path
              d="M386.640017 196.405191 687.536947 487.723004c13.840827 13.408717 13.840827 35.135036 0 48.543753s-36.293132 13.408717-50.156485 0L336.483532 244.948944c-13.840827-13.408717-13.840827-35.135036 0-48.543753S372.777687 182.996474 386.640017 196.405191z"
              fill="#879196"
              p-id="4342"
            ></path>
            <path
              d="M336.483532 779.073583l300.895906-291.351603c13.863354-13.408717 36.316683-13.408717 50.156485 0 13.840827 13.408717 13.840827 35.135036 0 48.543753L386.640017 827.617336c-13.863354 13.408717-36.316683 13.408717-50.156485 0S322.642705 792.437246 336.483532 779.073583z"
              fill="#879196"
              p-id="4343"
            ></path></svg></b
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{
    width: 375px;
    height: 150px;
    background-color: rgb(102, 90, 90);
}
.h-title{
    height: 50./(375./12rem);
    background-color: aqua;
    font-size: 16./(375./12rem);
    line-height: 50./(375./12rem);
    text-align: center;
}
.h-title p{
    font-weight: 900;
}
.search{
    height: 50./(375./12rem);
    background-color: green;
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
<style  scoped>
.head {
  width: 100%;
  position: fixed;
  top: 0;
  background: #ffffff;
  z-index: 9999999;

}
.head h3 {
    text-align: center;
    margin-top: 20px;
    font-weight: 900;
    font-size: 17px;
  }
  .sou_box {
    width: 100%;
    height: 35px;
    /* background: red; */
    margin-top: 20px;
    display: flex;
    justify-content: center;
    position: relative;
    padding-bottom: 10px;

  }
 .head input {
      width: 90%;
      height: 30px;
      text-indent: 40px;
      outline-style: none;
      border-radius: 20px;
      border: none;
      background: #f5f7f9;
    }
 .head   svg {
      position: absolute;
      left: 8.5%;
      top: 8px;
    }
.mybook {
  margin: auto;
  width: 84%;
  height: 160px;
  padding: 20px 0 20px 6%;
  border-radius: 15px;
  background: #565860;
  /* // margin-top: 20px; */
  margin-top: 117px;
  position: relative;
  
}
.mybook_top {
    width: 100%;
    height: 30px;
  /* background: red; */
    display: flex;
    align-items: center;
    position: relative;

  }
  .mybook_top   img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .mybook_top  b {
      color: white;
      font-size: 13px;
      padding: 0 6px;
      /* // margin-left: 5px; */
    }
    .mybook_top   a {
      color: #a4a0a4;
      font-weight: bold;
      font-size: 13px;
    }
    .mybook_top   span {
      position: absolute;
      right: 0;
      display: block;
      height: 25px;
      padding: 0 10px;
      color: white;
      text-align: center;
      line-height: 25px;
      background: #74767a;
      font-size: 12px;
      border-radius: 20px 0 0 20px;
    }



    .book {
  margin-top: 20px;
  width: 70px;
  height: 100px;
  margin-right: 10px;
}
.xp {
  position: absolute;
  right: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  top: 110px;

}
.xp p {
    width: 20px;
    color: white;
  }
 .xp b {
    color: rgb(255, 255, 255);
  }
  
</style>

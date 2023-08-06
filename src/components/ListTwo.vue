<template>
  <ul>
    <li v-for="(item, idnex) in arr" :key="idnex">
      <div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.num1 }}</p>
        <p>{{ item.num2 }}</p>
        <p>{{ item.num3 }}</p>
      </div>
      <img :src="item.img" alt="" />
    </li>
  </ul>
    </template>
    
    <script>
    export default {
      name: 'ListTwo',
      props: {
        msg: String
      },
      data() {
    return {
      arr: [
        {
          title: "精品小说",
          num1: "1.长相思（样子 张晚意 邓为）",
          num2: "2.剑来",
          num3: "3.三体（全集）",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/17/yuewen_23484983/t6_yuewen_234849831690286968.jpg",
        },
        {
          title: "历史",
          num1: "1.明朝那些事儿（全集）",
          num2: "2.长安的荔枝",
          num3: "3.熙攘台女侠",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/61/YueWen_822995/t6_YueWen_822995.jpg",
        },
        {
          title: "文学",
          num1: "1.从文白传",
          num2: "2.红楼梦",
          num3: "3.平淡的世界",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/791/36059791/t6_36059791.jpg",
        },
        {
          title: "艺术",
          num1: "1.云朵面包",
          num2: "2.新摄影笔记",
          num3: "3.风的颜色",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/79/cpplatform_wgvam8harpo8docjz4uoue/t6_cpplatform_wgvam8harpo8docjz4uoue1677229946.jpg",
        },
        {
          title: "哲学宗教",
          num1: "1.信仰",
          num2: "2.基督教的传书",
          num3: "3.圣经（全集）",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/67/YueWen_36235932/t6_YueWen_36235932.jpg",
        },
      ],
    };
  },
    }
    </script>
    
<style scoped>
ul {
  list-style: none;
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
}

ul li:first-child {
  margin-top: 10px;
}

ul li {
  width: 100%;
  height: 130px;
  background: #f8f8fa;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

ul li img {
  width: 90px;
  height: 130px;
}

ul li div {
  margin-left: 30px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

ul li div p {
  display: block;
  color: gray;
  font-size: 14px;
}

    </style>
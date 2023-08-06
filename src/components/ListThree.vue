<template>
  <ul>
    <h2>本周热榜</h2>
    <li v-for="(item, index) in bookArr" :key="index">
      <img :src="item.img" alt="" />
      <div>
        <p>
          <b>{{ index + 1 }}</b> <span>{{ item.name }}</span>
        </p>
        <p style="margin-left: 14px">{{ item.author }}</p>
      </div>
    </li>
  </ul>
    </template>
    
    <script>
    export default {
      name: 'ListThree',
      props: {
        msg: String
      },
      data() {
    return {
      snum: 0,
      bookArr: [
        {
          name: "长相思",
          pageviews: 89.3,
          author: "桐华",
          content: "大家都在读",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/17/yuewen_23484983/t6_yuewen_234849831690286968.jpg",
        },
        {
          name: "长安的荔枝",
          pageviews: 95.5,
          author: "马伯庸",
          content: "阅读第九守密局的人也在读",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg",
        },
        {
          name: "第九守局",
          pageviews: 77.7,
          author: "姓易的",
          content: "大家都在读",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/544/27370544/t6_27370544.jpg",
        },
        {
          name: "法医秦明",
          pageviews: 69.3,
          author: "王大锤",
          content: "法医秦明",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/55/cpplatform_2thuj2jlv1odkiylmdlcjr/t6_cpplatform_2thuj2jlv1odkiylmdlcjr1689825647.jpg",
        },
        {
          name: "认知觉醒",
          pageviews: 93.2,
          author: "百合",
          content: "认知自我改变自我",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg",
        },
        {
          name: "活着",
          pageviews: 98.3,
          author: "余华",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/464/834464/t6_834464.jpg",
        },
        {
          name: "少年发声",
          pageviews: 89.3,
          author: "沈从文",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/791/36059791/t6_36059791.jpg",
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
  margin-bottom: 60px;
}

ul h2 {
  color: #171515;
  font-weight: 900;
  text-align: center;
  height: 10px;
}

ul li:first-child {
  margin-top: 0;
}

ul li {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  margin-top: 50px;
}

ul li img {
  width: 70px;
  height: 100px;
}

ul li div {
  margin-left: 20px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

ul li div p {
  display: block;
  font-size: 14px;
}

    </style>
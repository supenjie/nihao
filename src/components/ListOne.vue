<template>
  <ul>
    <li v-for="(item, index) in bookArr" :key="index">
      <img :src="item.img" alt="" />
      <div>
        <h3>{{ item.name }}</h3>
        <p class="one_p">
          {{ item.author }}<span>|</span>推荐值{{ item.num + "%"
          }}<b v-color="item.num">{{ textfun(item.num) }}</b>
        </p>
        <p class="two_p">{{ item.content }}</p>
      </div>
    </li>

  </ul>
</template>

<script>
export default {
  name: 'ListOne',
  props: {
    msg: String
  },
  data() {
    return {
      bookArr: [
        {
          name: "长相思",
          num: 89.3,
          author: "桐华",
          content: "大家都在读",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/17/yuewen_23484983/t6_yuewen_234849831690286968.jpg",
        },
        {
          name: "长安的荔枝",
          num: 95.5,
          author: "马伯庸",
          content: "阅读第九守密局的人也在读",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg",
        },
        {
          name: "第九守局",
          num: 77.7,
          author: "姓易的",
          content: "大家都在读",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/544/27370544/t6_27370544.jpg",
        },
        {
          name: "法医秦明",
          num: 69.3,
          author: "王大锤",
          content: "法医秦明",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/55/cpplatform_2thuj2jlv1odkiylmdlcjr/t6_cpplatform_2thuj2jlv1odkiylmdlcjr1689825647.jpg",
        },
        {
          name: "认知觉醒",
          num: 93.2,
          author: "百合",
          content: "认知自我改变自我",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg",
        },
        {
          name: "活着",
          num: 98.3,
          author: "余华",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/464/834464/t6_834464.jpg",
        },
        {
          name: "少年发声",
          num: 89.3,
          author: "沈从文",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/791/36059791/t6_36059791.jpg",
        },
      ],

      flag: false,
      one: null,
    };
  },
  directives: {
    color(i, n) {
      if (n.value > 90) {
        i.style.color = "#ecdab5";
      } else if (n.value > 85) {
        i.style.color = "#e85160";
      } else if (n.value > 70) {
        i.style.color = "#00a2f5";
      }
    },
  },
  methods: {
    textfun(num) {
      if (num > 90) {
        return "神作";
      } else if (num > 85) {
        return "脍炙人口";
      } else if (num > 80) {
        return "好评如潮";
      } else if (num > 70) {
        return "值得一读";
      }
      // return
    },

  },

}
</script>

<style>


ul {
  width: 90%;
  margin: auto;
  list-style: none;
  padding-bottom: 60px;
}

ul li {
  width: 100%;
  height: 100px;
  padding: 15px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
}

ul li img {
  width: 70px;
  height: 100%;
}

ul li div {
  margin-left: 15px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

ul li div h3 {
  font-weight: normal;
  font-size: 17px;
}

ul li div .one_p {
  font-size: 13px;
  color: gray;
}

ul li div .one_p span {
  padding: 0 5px;
  color: #ccc;
}

ul li div .one_p b {
  margin-left: 8px;
  font-weight: 900;
}

ul li div .two_p {
  color: #b1afaf;
  font-size: 12px;
}

</style>
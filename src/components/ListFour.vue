<template>
   <ul>
    <li @click="yfun(index)" v-for="(item, index) in bookArr" :key="index">
      <b style="margin-right: 5px">{{ index + 1 }}</b>
      <img :src="item.img" alt="" />
      <div>
        <p>
          <span>{{ item.name }}</span>
        </p>
        <p style="color: gray">{{ item.author }}</p>
        <p style="color: gray">
          推荐值{{ item.pageviews }}%<b v-color="item.pageviews">{{
            textfun(item.pageviews)
          }}</b>
        </p>
        <i
          ><svg
            t="1691144804760"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3319"
            width="16"
            height="16"
          >
            <path
              d="M505.206216 600.365718c-164.725984 0-298.740344-134.619286-298.740343-300.04326 0-165.423975 134.01436-300.043261 298.740343-300.043261 164.772517 0 298.786876 134.619286 298.786877 300.043261 0 165.423975-134.01436 300.043261-298.740344 300.04326z m0-565.37308C359.605199 34.946106 241.179315 154.023448 241.179315 300.275925c0 146.345542 118.472417 265.329819 264.073434 265.329819 145.647551 0 264.119967-118.984277 264.119968-265.329819 0-146.299009-118.518949-265.376352-264.119968-265.376352z"
              fill="#707070"
              p-id="3320"
            ></path>
            <path
              d="M992.636917 1023.441607H17.822049a17.356721 17.356721 0 0 1-17.356721-17.356721l-0.186131-6.979915c0-231.081705 226.474961-419.074071 504.927019-419.07407 278.452059 0 504.973553 187.992366 504.973553 419.07407l-0.139598 5.304735c-0.372262 9.306553-8.143234 19.0319-17.403254 19.031901zM35.039171 988.774698h939.961829c-8.934291-209.164773-216.284286-374.076888-469.841316-374.076888-255.046078 0-463.326729 166.866491-470.120513 374.076888z"
              fill="#707070"
              p-id="3321"
            ></path></svg
          >{{ item.num }}</i
        >
      </div>
    </li>
  </ul>
    </template>
    
    <script>
    export default {
      name: 'ListFour',
      
      props: {
        msg: String
      },
      data() {
    return {
      bookArr: [
        {
          name: "长安的荔枝",
          pageviews: 95.5,
          flag: false,
          author: "马伯庸",
          num: 57529,
          content: "阅读第九守密局的人也在读",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg",
        },

        {
          name: "法医秦明",
          pageviews: 69.3,
          flag: false,
          author: "王大锤",
          num: 99212,
          content: "法医秦明",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/55/cpplatform_2thuj2jlv1odkiylmdlcjr/t6_cpplatform_2thuj2jlv1odkiylmdlcjr1689825647.jpg",
        },
        {
          name: "第九守局",
          pageviews: 77.7,
          flag: false,
          author: "姓易的",
          num: 6642,
          content: "大家都在读",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/544/27370544/t6_27370544.jpg",
        },
        {
          name: "少年发声",
          pageviews: 89.3,
          flag: false,
          author: "沈从文",
          num: 98425,
          content: "认知自我改变自我",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/791/36059791/t6_36059791.jpg",
        },
        {
          name: "认知觉醒",
          pageviews: 93.2,
          flag: false,
          author: "百合",
          num: 12134,
          content: "认知自我改变自我",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg",
        },
        {
          name: "活着",
          pageviews: 98.3,
          flag: false,
          author: "余华",
          num: 250012,

          content: "认知自我改变自我",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/464/834464/t6_834464.jpg",
        },
        {
          name: "长相思",
          pageviews: 89.3,
          flag: false,
          author: "桐华",
          num: 255252,
          content: "大家都在读",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/17/yuewen_23484983/t6_yuewen_234849831690286968.jpg",
        },
      ],
    };
  },
  directives: {
    color(i, n) {
      if (n.value > 90) {
        i.style.color = "orange";
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
        return "〖神作〗";
      } else if (num > 85) {
        return "〖好评如潮〗";
      } else if (num > 80) {
        return "〖脍炙人口〗";
      } else if (num > 70) {
        return "〖值得一读〗";
      }
      // return
    },
    yfun(index) {

        this.bookArr[index].num++;
      
    },
  },
    }
    </script>
    
    <style scoped>
    ul {
  list-style: none;
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
}

ul h2 {
  color: #ff405a;
  font-weight: 900;
  text-align: center;
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
  position: relative;
}

ul li img {
  width: 70px;
  height: 100px;
}

ul li div {
  margin-left: 20px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

ul li div p {
  display: block;
  font-size: 14px;
}

ul li i {
  position: absolute;
  display: block;
  padding: 0 10px;
  height: 20px;
  border-radius: 20px;
  background: #f0eeee;
  right: 0;
  top: 0;
  font-size: 12px;
  font-style: normal;
  color: #6d6d6d;
  display: flex;
  align-items: center;
}

ul li i svg {
  width: 12px;
  height: 12px;
  position: relative;
  left: -2px;
  top: 0px;
}

    
    </style>
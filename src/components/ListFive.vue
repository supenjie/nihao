<template>
     <ul>
    <li @click="yfun(index)" v-for="(item, index) in bookArr" :key="index">
      <b style="margin-right: 5px">{{ index + 1 }}</b>
      <img :src="item.img" alt="" />
      <div>
        <span>{{ item.name }}</span>
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
            ></path></svg>{{ item.num }}</i
        >
      </div>
    </li>
  </ul>
    </template>
    
    <script>
    export default {
      name: 'ListFive',
      props: {
        msg: String
      },
      data() {
    return {
      bookArr: [
        {
          name: "地铁三部曲",
          pageviews: 90.2,
          flag: false,
          author: "马德米特里·格鲁霍",
          num: 28855,
          content: "核战争",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/51/YueWen_40726691/t6_YueWen_40726691.jpg",
        },

        {
          name: "身体由我",
          pageviews: 93.1,
          flag: false,
          author: "希拉",
          num: 993212,
          content: "法医秦明",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/25/cpplatform_6z3wjuzzpanewx6h8zgjvy/t6_cpplatform_6z3wjuzzpanewx6h8zgjvy1675915252.jpg",
        },
        {
          name: "正面管教",
          pageviews: 77.7,
          flag: false,
          author: "杰尼森科尔",
          num: 16642,
          content: "大家都在读",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/33/cpplatform_nxkyuocaxczycncqyfugye/t6_cpplatform_nxkyuocaxczycncqyfugye1675999568.jpg",
        },
        {
          name: "准爸爸读胎教故事",
          pageviews: 80.7,
          flag: false,
          author: "汉住",
          num: 9825,
          content: "认知自我改变自我",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/27/YueWen_706059/t6_YueWen_706059.jpg",
        },
        {
          name: "如何让爱人爱你",
          pageviews: 73.2,
          flag: false,
          author: "里尔·发儿",
          num: 363634,
          content: "认知自我改变自我",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/294/22717294/t6_22717294.jpg",
        },
        {
          name: "真希望父母读这本书",
          pageviews: 98.3,
          flag: false,
          author: "嘎哈·佩斯",
          num: 263332,

          content: "认知自我改变自我",
          img: "https://weread-1258476243.file.myqcloud.com/weread/cover/44/YueWen_33140005/t6_YueWen_33140005.jpg",
        },
        {
          name: "男人来自火星",
          pageviews: 77.6,
          flag: false,
          author: "约翰",
          num: 255252,
          content: "大家都在读",
          img: "https://wfqqreader-1252317822.image.myqcloud.com/cover/840/33800840/t6_33800840.jpg",
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
  margin-bottom: 0px;
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
  height: 70px;
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
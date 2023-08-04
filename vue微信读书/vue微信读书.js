const start = Vue.extend({
  template: `
  
    `,
  data() {
    return {
        items:[
            {
                id:'1',
                text:'推荐',
                start:'true',
            }
        ]
    };
  },
  methods: {},
});
const vm = new Vue({
  el: "#box",
  components: {
    header: start,
  },
});

let PageIndex = {};

// pageObject.vue = vueCommon;

var vm = new Vue({
  el: "#container_app",
  data: pageObject,
  components: {},
  /**
   * when vue init
   */
  created() {
    console.log("vm created !!");
    console.log("pageObject:", pageObject);
    // if(!pageObject.vue) pageObject.vue = vueCommon;
    // console.log('pageObject.vue.enableSiderBar:', pageObject.vue.enableSiderBar);
  },
  /**
   * when component render
   */
  updated() {
    console.log("vm updated !!");
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      console.log9("vm updated -> nextTick !!");
      console.log("pageObject:", pageObject);
    });
  },
  mounted: function () {
    console.log("vm mounted !!");
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      console.log('vm mounted -> nextTick !!');
      console.log("pageObject:", pageObject);
      this.init();
    });
  },
  methods: {
      init() {
          pageComponet.siderBarInit();
      }
  },
  watch: {},
});

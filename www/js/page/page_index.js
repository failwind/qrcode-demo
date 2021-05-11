let PageIndex = {};

var vm = new Vue({
  el: "#container_app",
  data: pageObject,
  components: {},
  /**
   * when vue init
   */
  created() {
    console.log("vm created !!");
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
    });
  },
  mounted: function () {
    console.log("vm mounted !!");
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      console.log('vm mounted -> nextTick !!');
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

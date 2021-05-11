/**
 * ==================================================================================================================
 * 此處放置 vue componet tepmlate
 * ==================================================================================================================
 */
/**
 * SiderBar
 */
Vue.component("sider-bar", {
  template: `
  <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Start Bootstrap</div>
      <div class="list-group list-group-flush">
          <a class="list-group-item list-group-item-action bg-light" href="#!">Dashboard</a>
          <a class="list-group-item list-group-item-action bg-light" href="#!">Shortcuts</a>
          <a class="list-group-item list-group-item-action bg-light" href="#!">Overview</a>
          <a class="list-group-item list-group-item-action bg-light" href="#!">Events</a>
          <a class="list-group-item list-group-item-action bg-light" href="#!">Profile</a>
          <a class="list-group-item list-group-item-action bg-light" href="#!">Status</a>
      </div>
  </div>`,
})
/**
 * 測試用 vue component 1
 */
Vue.component("my-component1", {
  template: `
    <div>
      <h3>--component1--</h3>
      <select>
        <option>0</option>
        <option>1</option>
        <option>2</option>
      </select>
    </div>`,
});
/**
 * 測試用 vue component 2
 */
Vue.component("my-component2", {
  template: `
    <div>
      <h3>--component2--</h3>
    </div>
    `,
});

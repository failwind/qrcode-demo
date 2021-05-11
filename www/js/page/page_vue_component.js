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
  <div class="bg-light border-right" id="sidebar-wrapper" v-if="vueCommon.enableSiderBar">
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
});
Vue.component("top-bar", {
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <button class="btn btn-primary" id="menu-toggle" v-if="vueCommon.enableSiderBar">Toggle Menu</button>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" v-if="vueCommon.enableTopBar"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="vueCommon.enableTopBar">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                  <a class="nav-link" href="#!">
                      Home
                      <span class="sr-only">(current)</span>
                  </a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Something else here</a>
                  </div>
              </li>
          </ul>
      </div>
  </nav>
  `
});
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

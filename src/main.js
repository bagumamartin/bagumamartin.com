import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Import font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

createApp(App)
  .component("fai", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
// await router.isReady();
// app.mount("#app");
// // .mount("#app");

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

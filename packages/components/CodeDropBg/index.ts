import { App } from "vue";

import CodeDropBg from "./src/index.vue";

CodeDropBg.install = function (app: App) {
  // 组件注册，按需引入
  app.component(CodeDropBg.name, CodeDropBg);
  return app;
};

export default CodeDropBg;

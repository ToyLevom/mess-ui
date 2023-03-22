import { App } from "vue";
import './theme/color.variables.css'
import components from "./components";

// 导出所有组件，用于组件单独引用
export * from "./components";

// 完整引入组件
const install = function (app: App) {
  components.forEach((component) => {
    app.use(component as unknown as { install: () => any });
  });
};

export default { install };

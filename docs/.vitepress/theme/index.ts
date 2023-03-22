// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import MessUI from "../../../lib/mess-ui";
import "../../../packages/theme/color.variables.css";
import "../../../lib/style.css";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(MessUI);
    // register your custom global components
    // ctx.app.component('MyGlobalComponent' /* ... */)
  },
};

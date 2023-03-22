import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MessUI文档",
  description: "用于博客构建的UI库",
  lang: "zh",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "组件", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "指引",
        items: [
          { text: "安装", link: "/mds/install" },
          { text: "组件", link: "/mds/comps" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

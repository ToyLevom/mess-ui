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

    outline: [2, 3],
    outlineTitle: "此页",

    socialLinks: [
      { icon: "github", link: "https://github.com/ToyLevom/mess-ui" },
    ],

    footer: {
      message: "",
      copyright:
        'Copyright © 2016 - present | 815280716@qq.com | <a href="https://beian.miit.gov.cn/" target="_blank">津ICP备19001218号-1</a>',
    },
  },
});

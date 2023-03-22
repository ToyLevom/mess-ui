---
title: 安装
---

### npm 安装

推荐使用 npm 安装的方式，他能更好的配合打包工具。

`npm i mess-ui -S`

### 使用 CDN

```js
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/mess-ui@1.0.0/lib/style.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/mess-ui@1.0.0/lib/mess-ui.js"></script>
```

### 使用

在入口文件 main.js 中引入样式文件和组件。

```js
import Vue from "vue";
import "mess-ui/lib/style.css";
import MessUI from "mess-ui";
import App from "./App.vue";

createApp(App).use(MessUI).mount("#app");
```

也可以单独引入组件。例如单独引入按钮组件。

```js
import Vue from "vue";
import "mess-ui/lib/style.css";
import { MessButton } from "mess-ui";
import App from "./App.vue";

createApp(App).use(MessButton).mount("#app");
```

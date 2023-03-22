import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const build = {
  outDir: "lib",
  lib: {
    entry: path.resolve(__dirname, "./packages/index.ts"),
    name: "MessUI",
    fileName: "mess-ui",
  },
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ["vue"],
    output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: "Vue",
      },
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "examples"),
    },
  },
  build,
});

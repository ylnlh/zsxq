import { defineUserConfig } from "vuepress";
// import {searchProPlugin}  from "vuepress-plugin-search-pro";
// import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/zsxq/", // 上传路径
  // base: "/", // 本地路径，因为我不是根目录


  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  theme,
  plugins: [
    // searchProPlugin({
    //   // 索引全部内容
    //   indexContent: true,
    // }),
  ]

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

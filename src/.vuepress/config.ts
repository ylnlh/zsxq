import { defineUserConfig } from "vuepress";
// import { commentPlugin } from "vuepress-plugin-comment2";

// import { cut } from "nodejs-jieba";
// import { searchProPlugin } from "vuepress-plugin-search-pro";
// import { searchPlugin } from '@vuepress/plugin-search'
// import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/zsxq/", // 上传路径
  // base: "/", // 本地路径，因为我不是根目录


  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",
  plugins: [
    // commentPlugin({
    //   provider: "Giscus",
    //   repo: "ylnlh/zsxq",
    //   repoId: "R_kgDOLJ2zvA",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOLJ2zvM4CcxIF",
    // }),
    // searchProPlugin({
    //   indexContent: true,
    // }),
  ],
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

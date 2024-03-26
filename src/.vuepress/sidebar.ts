import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "前端",
      prefix: "pages/front-end/",
      // link: "front-end/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "discover",
      text: "服务端",
      prefix: "pages/server/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "discover",
      text: "css预处理语言",
      prefix: "pages/css-language/",
      collapsible: true,
      children: "structure",
    },
    // "slides",
  ],
});
// {
//   //   icon: "discover",
//   //   text: "案例",
//   //   prefix: "demo/",
//   //   link: "demo/",
//   //   children: "structure",
//   // },
//   // {
//   //   text: "文档",
//   //   icon: "note",
//   //   prefix: "guide/",
//   //   children: "structure",
//   // },
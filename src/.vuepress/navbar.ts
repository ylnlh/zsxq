import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // { text: "案例", icon: "discover", link: "/zh/demo/" },
  {
    text: "前端",
    icon: "HTML",
    prefix: "/pages/front-end/",
    children: [
      {
        text: "html",
        icon: "HTML",
        link: "html/01/01-前言WEB标准.html"
      },
      {
        text: "css",
        icon: "css",
        link: "css/01/01-CSS初识.html"
      },
      {
        text: "js基础",
        icon: "js",
        link: "js基础/01-JavaScript基础.html"
      },
      {
        text: "js进阶",
        icon: "js",
        link: "js进阶/01-JavaScript进阶.html"
      },
      {
        text: "JQ",
        icon: "jq",
        link: "JQ/01-jQuery.html"
      },
      {
        text: "webapi",
        icon: "WebAPI",
        link: "webapi/01-webapis.html"
      },
      {
        text: "ajax",
        icon: "ajax",
        link: "ajax/01-ajax基础.html"
      },
      {
        text: "h5cs",
        icon: "css",
        link: "h5c3/01-html5css3.html"
      },
      {
        text: "框架",
        icon: "uniapp",
        prefix: "框架/",
        children: [
          { text: "vue2", icon: "vue", link: "vue2/01-vue.html" },
          { text: "微信小程序", icon: "weixinxiaochengxu", link: "微信小程序/01-小程序基础.html" },
          { text: "react", icon: "react", link: "react/01-react入门.html" },
          { text: "uniapp", icon: "uniapp", link: "uniapp/01-微信小程序起步.html" },
        ],
      }
    ],
  },
  {
    text: "服务端",
    icon: "nodejs",
    prefix: "/pages/server/",
    children: [
      {
        text: "nodeJs",
        icon: "nodejs",
        link: "nodeJs/01-nodeJS基础.html"
      },
      {
        text: "php",
        icon: "php",
        link: "php/01-php基础.html"
      },
    ],
  },
  {
    text: "前端工程化",
    icon: "webpack",
    prefix: "/pages/engineering/",
    children: [
      { text: "webpack", icon: "webpack", link: "webpack/01-前言基础使用核心概念.html" },
    ],
  },
]);

// export default navbar([
//   "/",
//   "/demo/",
//   {
//     text: "指南",
//     icon: "lightbulb",
//     prefix: "/guide/",
//     children: [
//       {
//         text: "Bar",
//         icon: "lightbulb",
//         prefix: "bar/",
//         children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
//       },
//       {
//         text: "Foo",
//         icon: "lightbulb",
//         prefix: "foo/",
//         children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
//       },
//     ],
//   },
//   {
//     text: "V2 文档",
//     icon: "book",
//     link: "https://theme-hope.vuejs.press/zh/",
//   },
// ]);

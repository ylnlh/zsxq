import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // { text: "案例", icon: "discover", link: "/zh/demo/" },
  {
    text: "前端",
    icon: "creative",
    prefix: "/pages/front-end/",
    children: [
      {
        text: "html",
        icon: "creative",
        link: "html/01/01-前言WEB标准.html"
      },
      {
        text: "css",
        icon: "css",
        link: "css/01/01-CSS初识.html"
      },
      {
        text: "js基础",
        icon: "javascript",
        link: "js基础/01-JavaScript基础.html"
      },
      {
        text: "js进阶",
        icon: "es6",
        link: "js进阶/01-JavaScript进阶.html"
      },
      {
        text: "JQ",
        icon: "javascript",
        link: "JQ/01-jQuery.html"
      },
      {
        text: "webapi",
        icon: "javascript",
        link: "webapi/01-webapis.html"
      },
      {
        text: "ajax",
        icon: "ajax",
        link: "ajax/01-ajax基础.html"
      },
      {
        text: "h5cs",
        icon: "html",
        link: "h5c3/01-html5css3.html"
      },
      {
        text: "框架",
        icon: "config",
        prefix: "框架/",
        children: [
          { text: "vue2", icon: "vue", link: "vue2/01-vue.html" },
          { text: "微信小程序", icon: "mini-app", link: "微信小程序/01-小程序基础.html" },
          { text: "react", icon: "react", link: "react/01-react入门.html" },
        ],
      },
    ],
  },
  {
    text: "服务端",
    icon: "page",
    prefix: "/pages/server/",
    children: [
      {
        text: "nodeJs",
        icon: "nodeJS",
        link: "nodeJs/01-nodeJS基础.html"
      },
      {
        text: "Foo",
        icon: "php",
        link: "php/01-php基础.html"
      },
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

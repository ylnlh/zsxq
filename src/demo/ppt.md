---
title: 分享
icon: laptop-code
category:
  - 使用指南
---

### 1.github clone 项目

意思是自从 21 年 8 月 13 后不再支持用户名密码的方式验证了，需要创建个人访问令牌(personal access token)

- 创建公共仓库
- 点击头像 选择 Settings
- 左侧栏中选择 Developer settings
- 目中选择 Personal access tokens
- 点击 Generate new token
- 如果只是给自己使用的话，可以直接选择无限的有效期,后面一些权限，为了方便也可以全部勾选，再点击最后的 Generate token 生成令牌
- 将生成的令牌拷贝下来，并且保存
- 现有项目的 url（注意在复制这条指令的时候，把汉字改成对应的内容之后，要把将括号删掉）
- git remote set-url origin https://<你的令牌>@github.com/<你的 git 用户名>/<要修改的仓库名>.git
-
- git clone https://github.com/ylnlh/docs-origin.git
- git clone https://oauth2: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@github.com/ylnlh/docs-origin.git
-

### [创建 vuepress](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)

1. 依赖环境

```
    Node.js v18.16.0+
    包管理器，如 pnpm、yarn2+、npm 等
    推荐使用pnpm 包管理工具
```

2. 创建并进入一个新目录

```
    mkdir vuepress-starter
    cd vuepress-starter
```

3. 初始化项目

```
    git init
    npm init
```

4.将 VuePress 安装为本地依赖

```
    yarn add -D vuepress@next

    tips:我安装会报错误

    解决方案：https://www.jianshu.com/p/235b769d26e1
```

5. 在 package.json 中添加一些 scripts

```
    {
      "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
      }
    }
```

6. 将默认的临时目录和缓存目录添加到 .gitignore 文件中

```
    echo 'node_modules' >> .gitignore
    echo '.temp' >> .gitignore
    echo '.cache' >> .gitignore
```

7. 创建你的第一篇文档

```
    mkdir docs
    echo '# Hello VuePress' > docs/README.md
```

8. 在本地启动服务器来开发你的文档网站

```
    npm run docs:dev
```

### [配置主题](https://www.npmjs.com/package/vuepress-theme-hope)

自己选一个主题

1. [主题官网](https://theme-hope.vuejs.press/zh/get-started/create.html)
2. 在终端中执行下列命令之一:

```
pnpm create vuepress-theme-hope my-docs
```

```
文件夹参数

这里的 my-docs 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 my-docs 文件夹。

如果你有需求，你可以更改此参数来使用一个新文件夹名称。
```

```
中文显示

如果你的英语很不好，请在第一次选择中通过键盘 ↓ 选择 简体中文 并回车来在后续流程中使用中文进行显示。
```

```
开发服务器

安装依赖
pnpm install

pnpm run docs:dev

如果你在模板初始化成功后选择立即启动开发服务器，稍等片刻，你就可以在浏览器地址栏输入 localhost:8080/ 访问开发服务器了。
```

#### 项目结构

```
.
├── .github (可选的) → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
│
├── src → 文档文件夹
│    │
│    ├── .vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件

```

#### 路由

1. ##### 导航栏

```
    text:: 项目文字
    link: 项目链接
    icon: 项目图标 (可选)
    activeMatch: 项目激活匹配 (可选)，支持正则字符串。
```

```
export default navbar([
  "/",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);


相对路径	                路由路径
/README.md	            /
/index.md	            /
/contributing.md	    /contributing.html
/guide/README.md	    /guide/
/guide/getting-started.md /guide/getting-started.html
```

##### 2. 侧边栏

```
export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});

structure：通过标题自动生成侧边栏，自动读取本地文件，为你生成对应的侧边栏结构

```

##### create a new repository on the command line

```
echo "# zsxq" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ylnlh/zsxq.git
git push -u origin main
```

##### push an existing repository from the command line

```
git remote add origin https://github.com/ylnlh/zsxq.git
git branch -M main
git push -u origin main
```

##### git page

- Settings
  ![Settings](./images/1.jpg)
- Pages
  ![Pages](./images/2.jpg)
-
- github Action 推送和部署分支
  ![Pages](./images/3.jpg)
  ![Pages](./images/4.jpg)

注意：您可以通过私下发布来限制对 GitHub Pages 网站的访问。私人发布的网站只能由对发布网站的存储库具有读取权限的人访问。您可以使用私人发布的网站与企业成员共享内部文档或知识库。

### [主题配置](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar)

- hostname 仅限 Root

```
    它应该包含完整协议 (如: https://example.com)。
```

- author

```
    interface AuthorInfo {
      /**
       * 作者姓名
       */
      name: string;

      /**
       * 作者网站
       */
      url?: string;

      /**
       * 作者 Email
       */
      email?: string;
    }
```

- logo

```
    logo: "https://img2.baidu.com/it/u=2617064008,4198815855&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500"
```

- repo 项目仓库的 URL

```
    // 如果你按照 `organization/repository` 的格式设置它
    // 我们会将它作为一个 GitHub 仓库
    repo: 'vuejs/vuepress',
    // 你也可以直接将它设置为一个 URL
    repo: 'https://gitlab.com/foo/bar',
```

- docsDir

```
文档源文件存放在仓库中的目录名。

它将会用于生成 编辑此页 的链接。
```

- displayFooter

```
是否默认显示页脚
```

- 加密配置

```
encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },
```

### 启用评论功能

#### [Giscus](https://plugin-comment2.vuejs.press/zh/guide/giscus.html)

1. 你需要创建一个公开仓库，并开启评论区，以作为评论存放的地点，转到代码库 Settings -> 在 Features 部分下 -> 勾选 Discussions 框。

![Pages](./images/7.jpg)

2. 接下来，在你的代码库中安装 giscus 应用程序。
   ![Pages](./images/5.jpg)
   ![Pages](./images/6.jpg)
   ![Pages](./images/8.jpg)

```
https://github.com/apps/giscus
```

3. 进入 giscus 主页，进行配置，需要从 Settings->GitHub Apps 打开
   ![Pages](./images/9.jpg)
4. 在你的 GitHub 代码库上的讨论页面创建一个类别——比如 "Comments（评论）"——或者选择现有的类别。

#### [搜索](https://theme-hope.vuejs.press/zh/guide/feature/search.html)

```
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      searchPro: true,
      // searchPro: {
      //   插件选项
      // },
    },
  }),
});

```

[Waline](https://waline.js.org/guide/get-started/)

1. 登录 或 注册 LeanCloud 国际版 并进入 控制台

2. 点击左上角 创建应用 并起一个你喜欢的名字 (请选择免费的开发版):
   ![Pages](./images/10.jpg)
3. 进入应用，选择左下角的 设置 > 应用 Key。你可以看到你的 APP ID,APP Key 和 Master Key。请记录它们，以便后续使用。
   ![Pages](./images/11.jpg)
4. Vercel 部署 (服务端)
   - 点击上方按钮，跳转至 Vercel 进行 Server 端部署。如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。
     [![Pages](./images/12.jpg)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample)
   - 输入一个你喜欢的 Vercel 项目名称并点击 Create 继续
     ![Pages](./images/13.jpg)
     ![Pages](./images/14.jpg)
   - 此时 Vercel 会基于 Waline 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。
     ![Pages](./images/15.jpg)
   - 部署成功，此时点击 Go to Dashboard 可以跳转到应用的控制台。
   - 点击顶部的 Settings - Environment Variables 进入环境变量配置页，并配置三个环境变量 LEAN_ID, LEAN_KEY 和 LEAN_MASTER_KEY 。它们的值分别对应上一步在 LeanCloud 中获得的 APP ID, APP KEY, Master Key。
     ![Pages](./images/16.jpg)
   - 环境变量配置完成之后点击顶部的 Deployments 点击顶部最新的一次部署右侧的 Redeploy 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。
     ![Pages](./images/17.jpg)
   - 此时会跳转到 Overview 界面开始部署，等待片刻后 STATUS 会变成 Ready。此时请点击 Visit ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。
     ![Pages](./images/18.jpg)
5. 评论管理 (管理端)

   - 部署完成后，请访问 serverURL/ui/register 进行注册。首个注册的人会被设定成管理员。
   - 管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。
   - 用户也可通过评论框注册账号，登陆后会跳转到自己的档案页。

import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as a,c as r,a as e,b as i,d as s,f as l}from"./app-3t_6R6Vu.js";const u="/zsxq/assets/1-meuyyBXh.jpg",o="/zsxq/assets/2-rp-rSL3k.jpg",c="/zsxq/assets/3-02whFATG.jpg",v="/zsxq/assets/4-_YLk0cD8.jpg",m="/zsxq/assets/7-DaJQSq7S.jpg",g="/zsxq/assets/5-3MfWNVGT.jpg",b="/zsxq/assets/6-s24_sYYY.jpg",h="/zsxq/assets/8-eHiD3Vfv.jpg",p="/zsxq/assets/9-YbKd3hxB.jpg",x="/zsxq/assets/10-fkGl5rfZ.jpg",_="/zsxq/assets/11-ARZ_8Qie.jpg",q="/zsxq/assets/12-14p5ZiwC.jpg",f="/zsxq/assets/13-4sLw5JA4.jpg",y="/zsxq/assets/14-l57yJzuk.jpg",z="/zsxq/assets/15-TRm4ljMr.jpg",j="/zsxq/assets/16-I-kXndSX.jpg",k="/zsxq/assets/17-FWut3Bui.jpg",P="/zsxq/assets/18-AjIo5QK7.jpg",E={},A=l('<h3 id="_1-github-clone-项目" tabindex="-1"><a class="header-anchor" href="#_1-github-clone-项目" aria-hidden="true">#</a> 1.github clone 项目</h3><p>意思是自从 21 年 8 月 13 后不再支持用户名密码的方式验证了，需要创建个人访问令牌(personal access token)</p><ul><li>创建公共仓库</li><li>点击头像 选择 Settings</li><li>左侧栏中选择 Developer settings</li><li>目中选择 Personal access tokens</li><li>点击 Generate new token</li><li>如果只是给自己使用的话，可以直接选择无限的有效期,后面一些权限，为了方便也可以全部勾选，再点击最后的 Generate token 生成令牌</li><li>将生成的令牌拷贝下来，并且保存</li><li>现有项目的 url（注意在复制这条指令的时候，把汉字改成对应的内容之后，要把将括号删掉）</li><li>git remote set-url origin https://&lt;你的令牌&gt;@github.com/&lt;你的 git 用户名&gt;/&lt;要修改的仓库名&gt;.git</li><li></li><li>git clone https://github.com/ylnlh/docs-origin.git</li><li>git clone https://oauth2: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@github.com/ylnlh/docs-origin.git</li><li></li></ul>',3),w={id:"创建-vuepress",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#创建-vuepress","aria-hidden":"true"},"#",-1),D={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},G=l(`<ol><li>依赖环境</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    Node.js v18.16.0+
    包管理器，如 pnpm、yarn2+、npm 等
    推荐使用pnpm 包管理工具
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建并进入一个新目录</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    mkdir vuepress-starter
    cd vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>初始化项目</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    git init
    npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.将 VuePress 安装为本地依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    yarn add -D vuepress@next

    tips:我安装会报错误

    解决方案：https://www.jianshu.com/p/235b769d26e1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>在 package.json 中添加一些 scripts</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    {
      &quot;scripts&quot;: {
        &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
        &quot;docs:build&quot;: &quot;vuepress build docs&quot;
      }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>将默认的临时目录和缓存目录添加到 .gitignore 文件中</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    echo &#39;node_modules&#39; &gt;&gt; .gitignore
    echo &#39;.temp&#39; &gt;&gt; .gitignore
    echo &#39;.cache&#39; &gt;&gt; .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>创建你的第一篇文档</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    mkdir docs
    echo &#39;# Hello VuePress&#39; &gt; docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>在本地启动服务器来开发你的文档网站</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),R={id:"配置主题",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#配置主题","aria-hidden":"true"},"#",-1),L={href:"https://www.npmjs.com/package/vuepress-theme-hope",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,"自己选一个主题",-1),F={href:"https://theme-hope.vuejs.press/zh/get-started/create.html",target:"_blank",rel:"noopener noreferrer"},H=e("li",null,"在终端中执行下列命令之一:",-1),N=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm create vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>文件夹参数

这里的 my-docs 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 my-docs 文件夹。

如果你有需求，你可以更改此参数来使用一个新文件夹名称。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>中文显示

如果你的英语很不好，请在第一次选择中通过键盘 ↓ 选择 简体中文 并回车来在后续流程中使用中文进行显示。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>开发服务器

安装依赖
pnpm install

pnpm run docs:dev

如果你在模板初始化成功后选择立即启动开发服务器，稍等片刻，你就可以在浏览器地址栏输入 localhost:8080/ 访问开发服务器了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h4><ol><li><h5 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏" aria-hidden="true">#</a> 导航栏</h5></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    text:: 项目文字
    link: 项目链接
    icon: 项目图标 (可选)
    activeMatch: 项目激活匹配 (可选)，支持正则字符串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default navbar([
  &quot;/&quot;,
  &quot;/demo/&quot;,
  {
    text: &quot;指南&quot;,
    icon: &quot;lightbulb&quot;,
    prefix: &quot;/guide/&quot;,
    children: [
      {
        text: &quot;Bar&quot;,
        icon: &quot;lightbulb&quot;,
        prefix: &quot;bar/&quot;,
        children: [&quot;baz&quot;, { text: &quot;...&quot;, icon: &quot;ellipsis&quot;, link: &quot;&quot; }],
      },
      {
        text: &quot;Foo&quot;,
        icon: &quot;lightbulb&quot;,
        prefix: &quot;foo/&quot;,
        children: [&quot;ray&quot;, { text: &quot;...&quot;, icon: &quot;ellipsis&quot;, link: &quot;&quot; }],
      },
    ],
  },
  {
    text: &quot;V2 文档&quot;,
    icon: &quot;book&quot;,
    link: &quot;https://theme-hope.vuejs.press/zh/&quot;,
  },
]);


相对路径	                路由路径
/README.md	            /
/index.md	            /
/contributing.md	    /contributing.html
/guide/README.md	    /guide/
/guide/getting-started.md /guide/getting-started.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-侧边栏" tabindex="-1"><a class="header-anchor" href="#_2-侧边栏" aria-hidden="true">#</a> 2. 侧边栏</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default sidebar({
  &quot;/&quot;: [
    &quot;&quot;,
    {
      text: &quot;案例&quot;,
      icon: &quot;laptop-code&quot;,
      prefix: &quot;demo/&quot;,
      link: &quot;demo/&quot;,
      children: &quot;structure&quot;,
    },
    {
      text: &quot;文档&quot;,
      icon: &quot;book&quot;,
      prefix: &quot;guide/&quot;,
      children: &quot;structure&quot;,
    },
    {
      text: &quot;幻灯片&quot;,
      icon: &quot;person-chalkboard&quot;,
      link: &quot;https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html&quot;,
    },
  ],
});

structure：通过标题自动生成侧边栏，自动读取本地文件，为你生成对应的侧边栏结构

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="create-a-new-repository-on-the-command-line" tabindex="-1"><a class="header-anchor" href="#create-a-new-repository-on-the-command-line" aria-hidden="true">#</a> create a new repository on the command line</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;# zsxq&quot; &gt;&gt; README.md
git init
git add README.md
git commit -m &quot;first commit&quot;
git branch -M main
git remote add origin https://github.com/ylnlh/zsxq.git
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="push-an-existing-repository-from-the-command-line" tabindex="-1"><a class="header-anchor" href="#push-an-existing-repository-from-the-command-line" aria-hidden="true">#</a> push an existing repository from the command line</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add origin https://github.com/ylnlh/zsxq.git
git branch -M main
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="git-page" tabindex="-1"><a class="header-anchor" href="#git-page" aria-hidden="true">#</a> git page</h5><ul><li>Settings <img src="`+u+'" alt="Settings" loading="lazy"></li><li>Pages <img src="'+o+'" alt="Pages" loading="lazy"></li><li></li><li>github Action 推送和部署分支 <img src="'+c+'" alt="Pages" loading="lazy"><img src="'+v+'" alt="Pages" loading="lazy"></li></ul><p>注意：您可以通过私下发布来限制对 GitHub Pages 网站的访问。私人发布的网站只能由对发布网站的存储库具有读取权限的人访问。您可以使用私人发布的网站与企业成员共享内部文档或知识库。</p>',19),T={id:"主题配置",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#主题配置","aria-hidden":"true"},"#",-1),C={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar",target:"_blank",rel:"noopener noreferrer"},I=l(`<ul><li>hostname 仅限 Root</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    它应该包含完整协议 (如: https://example.com)。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>author</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface AuthorInfo {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>logo</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    logo: &quot;https://img2.baidu.com/it/u=2617064008,4198815855&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=501&amp;h=500&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>repo 项目仓库的 URL</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // 如果你按照 \`organization/repository\` 的格式设置它
    // 我们会将它作为一个 GitHub 仓库
    repo: &#39;vuejs/vuepress&#39;,
    // 你也可以直接将它设置为一个 URL
    repo: &#39;https://gitlab.com/foo/bar&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>docsDir</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>文档源文件存放在仓库中的目录名。

它将会用于生成 编辑此页 的链接。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>displayFooter</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>是否默认显示页脚
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>加密配置</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>encrypt: {
    config: {
      &quot;/demo/encrypt.html&quot;: [&quot;1234&quot;],
    },
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启用评论功能" tabindex="-1"><a class="header-anchor" href="#启用评论功能" aria-hidden="true">#</a> 启用评论功能</h3>`,15),Y={id:"giscus",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#giscus","aria-hidden":"true"},"#",-1),U={href:"https://plugin-comment2.vuejs.press/zh/guide/giscus.html",target:"_blank",rel:"noopener noreferrer"},J=l('<ol><li>你需要创建一个公开仓库，并开启评论区，以作为评论存放的地点，转到代码库 Settings -&gt; 在 Features 部分下 -&gt; 勾选 Discussions 框。</li></ol><figure><img src="'+m+'" alt="Pages" tabindex="0" loading="lazy"><figcaption>Pages</figcaption></figure><ol start="2"><li>接下来，在你的代码库中安装 giscus 应用程序。 <img src="'+g+'" alt="Pages" loading="lazy"><img src="'+b+'" alt="Pages" loading="lazy"><img src="'+h+`" alt="Pages" loading="lazy"></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/apps/giscus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>进入 giscus 主页，进行配置，需要从 Settings-&gt;GitHub Apps 打开 <img src="`+p+'" alt="Pages" loading="lazy"></li><li>在你的 GitHub 代码库上的讨论页面创建一个类别——比如 &quot;Comments（评论）&quot;——或者选择现有的类别。</li></ol>',5),W={id:"搜索",tabindex:"-1"},X=e("a",{class:"header-anchor",href:"#搜索","aria-hidden":"true"},"#",-1),Z={href:"https://theme-hope.vuejs.press/zh/guide/feature/search.html",target:"_blank",rel:"noopener noreferrer"},Q=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineUserConfig } from &quot;vuepress&quot;;
import { hopeTheme } from &quot;vuepress-theme-hope&quot;;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O={href:"https://waline.js.org/guide/get-started/",target:"_blank",rel:"noopener noreferrer"},$=e("li",null,[e("p",null,"登录 或 注册 LeanCloud 国际版 并进入 控制台")],-1),ee=e("li",null,[e("p",null,[i("点击左上角 创建应用 并起一个你喜欢的名字 (请选择免费的开发版): "),e("img",{src:x,alt:"Pages",loading:"lazy"})])],-1),ie=e("li",null,[e("p",null,[i("进入应用，选择左下角的 设置 > 应用 Key。你可以看到你的 APP ID,APP Key 和 Master Key。请记录它们，以便后续使用。 "),e("img",{src:_,alt:"Pages",loading:"lazy"})])],-1),ne=e("p",null,"Vercel 部署 (服务端)",-1),se={href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample",target:"_blank",rel:"noopener noreferrer"},le=e("img",{src:q,alt:"Pages",loading:"lazy"},null,-1),de=l('<li>输入一个你喜欢的 Vercel 项目名称并点击 Create 继续 <img src="'+f+'" alt="Pages" loading="lazy"><img src="'+y+'" alt="Pages" loading="lazy"></li><li>此时 Vercel 会基于 Waline 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。 <img src="'+z+'" alt="Pages" loading="lazy"></li><li>部署成功，此时点击 Go to Dashboard 可以跳转到应用的控制台。</li><li>点击顶部的 Settings - Environment Variables 进入环境变量配置页，并配置三个环境变量 LEAN_ID, LEAN_KEY 和 LEAN_MASTER_KEY 。它们的值分别对应上一步在 LeanCloud 中获得的 APP ID, APP KEY, Master Key。 <img src="'+j+'" alt="Pages" loading="lazy"></li><li>环境变量配置完成之后点击顶部的 Deployments 点击顶部最新的一次部署右侧的 Redeploy 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。 <img src="'+k+'" alt="Pages" loading="lazy"></li><li>此时会跳转到 Overview 界面开始部署，等待片刻后 STATUS 会变成 Ready。此时请点击 Visit ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。 <img src="'+P+'" alt="Pages" loading="lazy"></li>',6),te=e("li",null,[e("p",null,"评论管理 (管理端)"),e("ul",null,[e("li",null,"部署完成后，请访问 serverURL/ui/register 进行注册。首个注册的人会被设定成管理员。"),e("li",null,"管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。"),e("li",null,"用户也可通过评论框注册账号，登陆后会跳转到自己的档案页。")])],-1);function ae(re,ue){const n=t("ExternalLinkIcon");return a(),r("div",null,[A,e("h3",w,[V,i(),e("a",D,[i("创建 vuepress"),s(n)])]),G,e("h3",R,[S,i(),e("a",L,[i("配置主题"),s(n)])]),M,e("ol",null,[e("li",null,[e("a",F,[i("主题官网"),s(n)])]),H]),N,e("h3",T,[K,i(),e("a",C,[i("主题配置"),s(n)])]),I,e("h4",Y,[B,i(),e("a",U,[i("Giscus"),s(n)])]),J,e("h4",W,[X,i(),e("a",Z,[i("搜索"),s(n)])]),Q,e("p",null,[e("a",O,[i("Waline"),s(n)])]),e("ol",null,[$,ee,ie,e("li",null,[ne,e("ul",null,[e("li",null,[i("点击上方按钮，跳转至 Vercel 进行 Server 端部署。如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。 "),e("a",se,[le,s(n)])]),de])]),te])])}const ve=d(E,[["render",ae],["__file","ppt.html.vue"]]);export{ve as default};

import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o,c as t,a as e,d as l,b as r,f as i}from"./app-rpFDZqdF.js";const d={},c=i('<p>​</p><h1 id="node-js-day1" tabindex="-1"><a class="header-anchor" href="#node-js-day1" aria-hidden="true">#</a> Node.js - day1</h1><h2 id="_1-整个node-js课程学习目标" tabindex="-1"><a class="header-anchor" href="#_1-整个node-js课程学习目标" aria-hidden="true">#</a> 1. 整个node.js课程学习目标</h2><ol><li>【基础概念】 <ul><li>什么是node.js以及node.js的特点</li><li>node.js适合做什么</li><li>什么是模块化、什么是Common.js模块化规范</li><li>模块、包、npm、包加载机制</li><li>etc...</li></ul></li><li>【基本能力】 <ul><li>掌握node.js中基本API的使用</li><li>能够使用npm管理包</li><li>能够使用ES6新语法</li><li>能够使用node.js创建基本的web服务器</li></ul></li><li>【高阶内容】 <ul><li>能够使用Express框架、结合mysql数据库实现后端网站</li></ul></li></ol><blockquote><p>注意：整个node.js学习阶段，概念类知识点较多，需要理解透彻！</p></blockquote><h2 id="_2-了解基本概念" tabindex="-1"><a class="header-anchor" href="#_2-了解基本概念" aria-hidden="true">#</a> 2. 了解基本概念</h2><h3 id="_2-1-语言-和-环境-平台-之间的关系" tabindex="-1"><a class="header-anchor" href="#_2-1-语言-和-环境-平台-之间的关系" aria-hidden="true">#</a> 2.1 语言 和 环境(平台) 之间的关系</h3><ol><li><strong>语言，是编写代码的语法规范</strong>；程序员遵循特定的语法规范，编写出来的代码，只是单纯的文本字符串而已，<strong>并不具备可执行的特点</strong>；</li><li><strong>环境（平台），提供了执行代码的能力</strong>，如果程序员编写的代码想要成功执行，必须要依赖于特定的执行环境； <ul><li>例如：Javascript代码可以被浏览器中的JS解析引擎执行；</li><li>所以，浏览器，就是一个 Javascript 的执行环境；因为 Javascript 代码可以在浏览器中被执行；</li></ul></li></ol><h3 id="_2-2-前端-和-后端" tabindex="-1"><a class="header-anchor" href="#_2-2-前端-和-后端" aria-hidden="true">#</a> 2.2 前端 和 后端</h3><ol><li>前端主要工作 <ol><li>页面结构</li><li>美化页面样式</li><li>书写页面的业务逻辑</li><li>使用Ajax调用后台接口</li></ol></li><li>后端主要工作 <ol><li>操作数据库</li><li>对外暴露操作数据库的API接口</li></ol></li><li>前后端协作开发</li></ol><h3 id="_2-3-浏览器环境-中的-javascript" tabindex="-1"><a class="header-anchor" href="#_2-3-浏览器环境-中的-javascript" aria-hidden="true">#</a> 2.3 浏览器环境 中的 Javascript</h3><ol><li>诞生：上世纪 90年代左右，网景 liveScript、表单验证</li><li>一战： <ul><li>主角：微软和网景</li><li>结果：微软IE胜出</li><li>胜利的果实：ECMAScript 语言标准的诞生</li></ul></li><li>二战 <ul><li>主角：谷歌、火狐、IE</li><li>结果：谷歌胜出</li><li>胜利的果实：谷歌的V8引擎是最快的JS解析引擎</li></ul></li><li>回顾：浏览器中 Javascript 的组成部分 <ul><li>ECMAScript核心 + DOM + BOM</li></ul></li></ol><h3 id="_2-4-node环境-中的-javascript" tabindex="-1"><a class="header-anchor" href="#_2-4-node环境-中的-javascript" aria-hidden="true">#</a> 2.4 Node环境 中的 Javascript</h3>',13),h={href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,[l("Node.js 中 Javascript 的组成部分 "),e("ul",null,[e("li",null,"ECMAScript 核心 + 全局成员 + 核心 API 模块"),e("li",null,"全局成员：console、setInterval、setTimeout。。。"),e("li",null,"核心 API 模块：就是 Node 平台 单独提供的一些API，这些API是Node平台所独有的；")])],-1),u=e("li",null,[l("注意：Node.js 中 没有 BOM 和 DOM "),e("ol",null,[e("li",null,"由于 Node 服务器端运行环境中，没有浏览器 和 HTML 的概念，所以，Node中的javascript 提出了 DOM 和 BOM 这两个对象模型，取而代之的，是 全局成员 和 核心 API 模块；")])],-1),g=i(`<h3 id="_2-5-ecmascript-规范-浏览器中的js-node中的js之间的关系" tabindex="-1"><a class="header-anchor" href="#_2-5-ecmascript-规范-浏览器中的js-node中的js之间的关系" aria-hidden="true">#</a> 2.5 ECMAScript 规范，浏览器中的js，Node中的js之间的关系</h3><ol><li>ECMAScript 规范（标准）：就是一本书，这本书中规定了语言的特性；</li><li>浏览器中的js： <ul><li>浏览器中的 js 组成部分：ECMAScript 核心 + DOM + BOM</li></ul></li><li>Node中的js： <ul><li>Node中的 js 组成部分： ECMAScript 核心 + 全局成员 + 核心API成员</li></ul></li></ol><h3 id="_2-6-画图说明-浏览器中的js-与-node中-js-之间的区别" tabindex="-1"><a class="header-anchor" href="#_2-6-画图说明-浏览器中的js-与-node中-js-之间的区别" aria-hidden="true">#</a> 2.6 画图说明 浏览器中的js 与 Node中 js 之间的区别</h3><h3 id="_2-7-总结" tabindex="-1"><a class="header-anchor" href="#_2-7-总结" aria-hidden="true">#</a> 2.7 总结</h3><ol><li><p><strong>什么是 Node.js(我们自己给它下个定义)</strong></p><blockquote><p>就是一个服务器端的Javascript运行环境，可以让程序员，通过 Javascript 做 后台服务器编程开发</p></blockquote></li><li><p><strong>学习 Node.js 可以做什么</strong></p><ul><li>像 PHP 一样，使用 Javascript 编写符合规范的<strong>后端 API 接口</strong> 或 <strong>网站</strong></li><li>使用 Node.js 开发一些<strong>实用的工具</strong> 或 <strong>包</strong></li><li>基于 Socket 技术，开发类似于聊天室之类的<strong>即时通讯项目</strong></li><li>基于 Electron 环境，开发<strong>桌面软件</strong></li><li>ect...</li></ul></li></ol><h2 id="_3-环境安装" tabindex="-1"><a class="header-anchor" href="#_3-环境安装" aria-hidden="true">#</a> 3. 环境安装</h2><h3 id="_3-1-lts-和-current-版本区别" tabindex="-1"><a class="header-anchor" href="#_3-1-lts-和-current-版本区别" aria-hidden="true">#</a> 3.1 LTS 和 Current 版本区别</h3><ol><li><strong>LTS：</strong>【推荐在企业中使用】，是<strong>长期稳定版</strong>的安装包，运行稳定、安全；</li><li><strong>Current：</strong>【推荐学习或尝鲜去使用】，是<strong>最新特征版</strong>，这个安装包中有最新的Node特性；</li></ol><h3 id="_3-2-下载安装" tabindex="-1"><a class="header-anchor" href="#_3-2-下载安装" aria-hidden="true">#</a> 3.2 下载安装</h3><h3 id="_3-3-查看-node-版本号" tabindex="-1"><a class="header-anchor" href="#_3-3-查看-node-版本号" aria-hidden="true">#</a> 3.3 查看 Node 版本号</h3><ol><li>打开终端，在命令行输入命令<code>node -v</code>即可</li><li><strong>Tips: 如何进入终端呢？</strong><ul><li>【推荐】在任意目录的空白位置，先按住<code>shift</code>键不松开，然后，在空白位置，鼠标右键单击，会出来一个右键菜单，选择<code>在此处打开 powershell/cmd 窗口</code></li><li>【了解】使用快捷键<code>windows徽标 + R</code>打开运行面板，输入 <code>cmd</code> 后直接回车；</li></ul></li></ol><h3 id="_3-4-path-环境变量" tabindex="-1"><a class="header-anchor" href="#_3-4-path-环境变量" aria-hidden="true">#</a> 3.4 path 环境变量</h3><ol><li><strong>什么是path环境变量</strong><ul><li>Path环境变量的作用：能够让我们在终端中执行相关的命令，从而快速启动应用程序；</li></ul></li><li><strong>系统环境变量和用户环境变量的区别</strong><ul><li>用户环境变量：</li><li>系统环境变量：</li></ul></li><li><strong>通过终端输入命令的形式，快速启动应用程序时，路径的查找规则</strong><ul><li>先在当前运行 终端命令的 目录中查找，如果有则直接运行；</li><li>如果当前运行 终端命令的 目录中没有，则去全局的path环境变量中查找；</li></ul></li></ol><h2 id="_4-node-js-环境中-执行-js-代码的两种方式" tabindex="-1"><a class="header-anchor" href="#_4-node-js-环境中-执行-js-代码的两种方式" aria-hidden="true">#</a> 4. Node.js 环境中 执行 js 代码的两种方式</h2><h3 id="_4-1-node-命令【推荐】" tabindex="-1"><a class="header-anchor" href="#_4-1-node-命令【推荐】" aria-hidden="true">#</a> 4.1 node 命令【推荐】</h3><ol><li>直接使用 <code>node 要执行的js文件的路径</code> 来执行指定的JS文件</li></ol><blockquote><p>小技巧：</p><ol><li>在终端中，使用键盘的↑, 可以快速定位到上一次执行的命令</li><li>在终端中，使用键盘的 <code>tab</code> 键能够快速补全路径</li><li>windows 系统上，在终端中输入 <code>cls</code> 可以清屏</li></ol></blockquote><h3 id="_4-2-repl-环境-了解" tabindex="-1"><a class="header-anchor" href="#_4-2-repl-环境-了解" aria-hidden="true">#</a> 4.2 REPL 环境 - 了解</h3><ol><li><strong>如何进入 REPL 环境</strong>： 打开任意终端，直接输入 <code>node</code> 并回车，就会进入到 REPL 环境中；</li><li><strong>如何离开 REPL 环境</strong>：按两次<code>ctrl + c</code> 就能退出 REPL 环境；</li><li><strong>REPL中，每个字母代表什么意思呢</strong>：</li></ol><ul><li><strong>R</strong>： Read 的意思，每当我们输入完毕代码之后，只要敲击回车，Node环境就会读取用户输入的代码</li><li><strong>E</strong>：Evaluate 的意思，表示把 Read 进来的用户代码，调用 类似于 Eval 的函数，去解析执行</li><li><strong>P</strong>：Print 输出的意思；把第二步中解析执行的结果，输出给用户；</li><li><strong>L</strong>：Loop 循环的意思，表示当输出完毕之后，进入下一次的 REP循环</li></ul><h2 id="_5-ecmascript-6常用语法" tabindex="-1"><a class="header-anchor" href="#_5-ecmascript-6常用语法" aria-hidden="true">#</a> 5. ECMAScript 6常用语法</h2><h3 id="_5-1-let-变量-与-const-常量" tabindex="-1"><a class="header-anchor" href="#_5-1-let-变量-与-const-常量" aria-hidden="true">#</a> 5.1 let(变量) 与 const(常量)</h3><ol><li>之前定义变量，用 var 关键字；有如下主要缺点： <ul><li>存在变量提升问题，降低 js 代码的可阅读性</li><li>没有块级作用域，容易造成变量污染</li></ul></li><li>let 主要特性： <ul><li>不存在变量提升问题，只有定义之后才能使用此变量</li><li>有 <code>{ }</code> 作用域</li></ul></li><li>const 主要特性： <ul><li>不存在变量提升问题，只有定义之后才能使用此变量</li><li>const 定义的<strong>常量</strong>，<strong>无法被重新赋值</strong></li><li>当定义常量的时候，必须定义且初始化，否则报语法错误</li><li>const 定义的常量，也有 块级作用域</li></ul></li></ol><h3 id="_5-2-变量的解构赋值-常用" tabindex="-1"><a class="header-anchor" href="#_5-2-变量的解构赋值-常用" aria-hidden="true">#</a> 5.2 变量的解构赋值（常用）</h3><blockquote><p>**定义：**所谓的解构赋值，就是把 某个对象中的属性，当作变量，给解放出来，这样，今后就能够当作变量直接使用了；</p></blockquote><ul><li>可以使用 <code>:</code>为解构出来的变量重命名</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  // 变量的解构赋值
  const { name : name123, age, gender } = person
  console.log(name123)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-箭头函数-常用" tabindex="-1"><a class="header-anchor" href="#_5-3-箭头函数-常用" aria-hidden="true">#</a> 5.3 箭头函数(常用)</h3><ol><li><p>语法：</p><ul><li><p>定义普通的 <code>function</code> 函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是普通 function 定义的 show 方法&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>把方法定义为箭头函数（最完整的写法）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token parameter">形参列表</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 函数体代码 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p><strong>箭头函数，本质上就是一个匿名函数</strong>；</p></li><li><p><strong>箭头函数的特性</strong>： 箭头函数内部的 this, 永远和 箭头函数外部的 this 保持一致；</p></li><li><p><strong>变体</strong>：</p><ul><li>变体1：如果箭头函数，左侧的形参列表中，只有一个参数，则，左侧小括号可以省略；</li><li>变体2：如果右侧函数体中，只有一行代码，则，右侧的 <code>{ }</code> 可以省略；</li><li>变体3：如果箭头函数左侧 只有一个 形参，而且右侧只有一行代码，则 两边的 <code>()</code> 和 <code>{}</code> 都可以省略</li></ul></li><li><p><strong>注意</strong>： 如果我们省略了 右侧函数体的 <code>{ }</code>，那么，默认会把 右侧函数体中代码的执行结果，当作箭头函数的调用结果 return 出去；</p></li></ol><h3 id="_5-4-对象中-定义方法-和-定义属性-的便捷方式" tabindex="-1"><a class="header-anchor" href="#_5-4-对象中-定义方法-和-定义属性-的便捷方式" aria-hidden="true">#</a> 5.4 对象中 <code>定义方法</code> 和 <code>定义属性</code> 的便捷方式</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> show <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31);function _(v,j){const a=s("ExternalLinkIcon");return o(),t("div",null,[c,e("ol",null,[e("li",null,[e("a",h,[l("什么是 Node.js"),r(a)]),l("：就是 Javascript 的服务器端运行环境，可以让程序员使用 Javascript 来实现服务器端的编程；")]),p,u]),g])}const f=n(d,[["render",_],["__file","01-nodeJS基础.html.vue"]]);export{f as default};

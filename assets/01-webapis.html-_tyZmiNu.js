import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,f as n}from"./app-rpFDZqdF.js";const d={},r=n(`<p>​</p><h1 id="day01-web-apis" tabindex="-1"><a class="header-anchor" href="#day01-web-apis" aria-hidden="true">#</a> day01 - Web APIs</h1><h5 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标：</h5><h5 id="能够通过id来获取元素-能够通过标签名来获取元素-能够通过class来获取元素-能够通过选择器来获取元素-能" tabindex="-1"><a class="header-anchor" href="#能够通过id来获取元素-能够通过标签名来获取元素-能够通过class来获取元素-能够通过选择器来获取元素-能" aria-hidden="true">#</a> 能够通过ID来获取元素 能够通过标签名来获取元素 能够通过class来获取元素 能够通过选择器来获取元素 能</h5><h5 id="够获取body和html元素-能够给元素注册事件-能够修改元素的内容-能够区分innertext和innerhtml的区别" tabindex="-1"><a class="header-anchor" href="#够获取body和html元素-能够给元素注册事件-能够修改元素的内容-能够区分innertext和innerhtml的区别" aria-hidden="true">#</a> 够获取body和html元素 能够给元素注册事件 能够修改元素的内容 能够区分innerText和innerHTML的区别</h5><h5 id="能够修改像div这类普通元素的属性-能够修改表单元素的属性-能够修改元素的样式属性" tabindex="-1"><a class="header-anchor" href="#能够修改像div这类普通元素的属性-能够修改表单元素的属性-能够修改元素的样式属性" aria-hidden="true">#</a> 能够修改像div这类普通元素的属性 能够修改表单元素的属性 能够修改元素的样式属性</h5><h2 id="_1-1-web-api介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-web-api介绍" aria-hidden="true">#</a> 1.1. Web API介绍</h2><h2 id="_1-1-1-api的概念" tabindex="-1"><a class="header-anchor" href="#_1-1-1-api的概念" aria-hidden="true">#</a> 1.1.1 API的概念</h2><h5 id="api-application-programming-interface-应用程序编程接口-是一些预先定义的函数-目的是提供应用程序与" tabindex="-1"><a class="header-anchor" href="#api-application-programming-interface-应用程序编程接口-是一些预先定义的函数-目的是提供应用程序与" aria-hidden="true">#</a> API（Application Programming Interface，应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与</h5><h5 id="开发人员基于某软件或硬件得以访问一组例程的能力-而又无需访问源码-无需理解其内部工作机制细节-只需直" tabindex="-1"><a class="header-anchor" href="#开发人员基于某软件或硬件得以访问一组例程的能力-而又无需访问源码-无需理解其内部工作机制细节-只需直" aria-hidden="true">#</a> 开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，无需理解其内部工作机制细节，只需直</h5><h5 id="接调用使用即可。" tabindex="-1"><a class="header-anchor" href="#接调用使用即可。" aria-hidden="true">#</a> 接调用使用即可。</h5><h5 id="举例解释什么是api。" tabindex="-1"><a class="header-anchor" href="#举例解释什么是api。" aria-hidden="true">#</a> 举例解释什么是API。</h5><h5 id="例如" tabindex="-1"><a class="header-anchor" href="#例如" aria-hidden="true">#</a> 例如，</h5><h5 id="c语言中有一个函数-fopen-可以打开硬盘上的文件-这个函数对于我们来说-就是一个c语言提供的打开文" tabindex="-1"><a class="header-anchor" href="#c语言中有一个函数-fopen-可以打开硬盘上的文件-这个函数对于我们来说-就是一个c语言提供的打开文" aria-hidden="true">#</a> C语言中有一个函数 fopen()可以打开硬盘上的文件，这个函数对于我们来说，就是一个C语言提供的打开文</h5><h5 id="件的工具。" tabindex="-1"><a class="header-anchor" href="#件的工具。" aria-hidden="true">#</a> 件的工具。</h5><h5 id="javascript中有一个函数alert-可以在页面弹一个提示框-这个函数就是js提供的一个弹框工具。" tabindex="-1"><a class="header-anchor" href="#javascript中有一个函数alert-可以在页面弹一个提示框-这个函数就是js提供的一个弹框工具。" aria-hidden="true">#</a> javascript中有一个函数alert()可以在页面弹一个提示框，这个函数就是js提供的一个弹框工具。</h5><h5 id="这些工具-函数-由编程语言提供-内部的实现已经封装好了-我们只要学会灵活的使用这些工具即可。" tabindex="-1"><a class="header-anchor" href="#这些工具-函数-由编程语言提供-内部的实现已经封装好了-我们只要学会灵活的使用这些工具即可。" aria-hidden="true">#</a> 这些工具（函数）由编程语言提供，内部的实现已经封装好了，我们只要学会灵活的使用这些工具即可。</h5><h2 id="_1-1-2-web-api的概念" tabindex="-1"><a class="header-anchor" href="#_1-1-2-web-api的概念" aria-hidden="true">#</a> 1.1.2 Web API的概念</h2><h5 id="web-api-是浏览器提供的一套操作浏览器功能和页面元素的-api-bom-和-dom-。" tabindex="-1"><a class="header-anchor" href="#web-api-是浏览器提供的一套操作浏览器功能和页面元素的-api-bom-和-dom-。" aria-hidden="true">#</a> Web API 是浏览器提供的一套操作浏览器功能和页面元素的 API ( BOM 和 DOM )。</h5><h5 id="现阶段我们主要针对于浏览器讲解常用的-api-主要针对浏览器做交互效果。比如我们想要浏览器弹出一个警示" tabindex="-1"><a class="header-anchor" href="#现阶段我们主要针对于浏览器讲解常用的-api-主要针对浏览器做交互效果。比如我们想要浏览器弹出一个警示" aria-hidden="true">#</a> 现阶段我们主要针对于浏览器讲解常用的 API , 主要针对浏览器做交互效果。比如我们想要浏览器弹出一个警示</h5><h5 id="框-直接使用-alert-弹出" tabindex="-1"><a class="header-anchor" href="#框-直接使用-alert-弹出" aria-hidden="true">#</a> 框， 直接使用 alert(‘弹出’)</h5><h5 id="mdn-详细-api-https-developer-mozilla-org-zh-cn-docs-web-api" tabindex="-1"><a class="header-anchor" href="#mdn-详细-api-https-developer-mozilla-org-zh-cn-docs-web-api" aria-hidden="true">#</a> MDN 详细 API : https://developer.mozilla.org/zh-CN/docs/Web/API</h5><h5 id="因为-web-api-很多-所以我们将这个阶段称为-web-apis。" tabindex="-1"><a class="header-anchor" href="#因为-web-api-很多-所以我们将这个阶段称为-web-apis。" aria-hidden="true">#</a> 因为 Web API 很多，所以我们将这个阶段称为 Web APIs。</h5><h5 id="此处的-web-api-特指浏览器提供的一系列api-很多函数或对象方法-即操作网页的一系列工具。例如-操作html" tabindex="-1"><a class="header-anchor" href="#此处的-web-api-特指浏览器提供的一系列api-很多函数或对象方法-即操作网页的一系列工具。例如-操作html" aria-hidden="true">#</a> 此处的 Web API 特指浏览器提供的一系列API(很多函数或对象方法)，即操作网页的一系列工具。例如：操作html</h5><h5 id="标签、操作页面地址的方法。" tabindex="-1"><a class="header-anchor" href="#标签、操作页面地址的方法。" aria-hidden="true">#</a> 标签、操作页面地址的方法。</h5><h3 id="_1-1-3-api-和-web-api-总结" tabindex="-1"><a class="header-anchor" href="#_1-1-3-api-和-web-api-总结" aria-hidden="true">#</a> 1.1.3 API 和 Web API 总结</h3><h5 id="_1-api-是为我们程序员提供的一个接口-帮助我们实现某种功能-我们会使用就可以了-不必纠结内部如何实现" tabindex="-1"><a class="header-anchor" href="#_1-api-是为我们程序员提供的一个接口-帮助我们实现某种功能-我们会使用就可以了-不必纠结内部如何实现" aria-hidden="true">#</a> 1. API 是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现</h5><h5 id="_2-web-api-主要是针对于浏览器提供的接口-主要针对于浏览器做交互效果。" tabindex="-1"><a class="header-anchor" href="#_2-web-api-主要是针对于浏览器提供的接口-主要针对于浏览器做交互效果。" aria-hidden="true">#</a> 2. Web API 主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果。</h5><h5 id="_3-web-api-一般都有输入和输出-函数的传参和返回值-web-api-很多都是方法-函数" tabindex="-1"><a class="header-anchor" href="#_3-web-api-一般都有输入和输出-函数的传参和返回值-web-api-很多都是方法-函数" aria-hidden="true">#</a> 3. Web API 一般都有输入和输出（函数的传参和返回值），Web API 很多都是方法（函数）</h5><h5 id="_4-学习-web-api-可以结合前面学习内置对象方法的思路学习" tabindex="-1"><a class="header-anchor" href="#_4-学习-web-api-可以结合前面学习内置对象方法的思路学习" aria-hidden="true">#</a> 4. 学习 Web API 可以结合前面学习内置对象方法的思路学习</h5><h2 id="_1-2-dom-介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-dom-介绍" aria-hidden="true">#</a> 1.2. DOM 介绍</h2><h3 id="_1-2-1-什么是dom" tabindex="-1"><a class="header-anchor" href="#_1-2-1-什么是dom" aria-hidden="true">#</a> 1.2.1 什么是DOM</h3><h5 id="文档对象模型-document-object-model-简称dom-是-w3c-组织推荐的处理可扩展标记语言-html或者" tabindex="-1"><a class="header-anchor" href="#文档对象模型-document-object-model-简称dom-是-w3c-组织推荐的处理可扩展标记语言-html或者" aria-hidden="true">#</a> 文档对象模型（Document Object Model，简称DOM），是 W3C 组织推荐的处理可扩展标记语言（html或者</h5><h5 id="xhtml-的标准编程接口。" tabindex="-1"><a class="header-anchor" href="#xhtml-的标准编程接口。" aria-hidden="true">#</a> xhtml）的标准编程接口。</h5><h5 id="w3c-已经定义了一系列的-dom-接口-通过这些-dom-接口可以改变网页的内容、结构和样式。" tabindex="-1"><a class="header-anchor" href="#w3c-已经定义了一系列的-dom-接口-通过这些-dom-接口可以改变网页的内容、结构和样式。" aria-hidden="true">#</a> W3C 已经定义了一系列的 DOM 接口，通过这些 DOM 接口可以改变网页的内容、结构和样式。</h5><h5 id="dom是w3c组织制定的一套处理-html和xml文档的规范-所有的浏览器都遵循了这套标准。" tabindex="-1"><a class="header-anchor" href="#dom是w3c组织制定的一套处理-html和xml文档的规范-所有的浏览器都遵循了这套标准。" aria-hidden="true">#</a> DOM是W3C组织制定的一套处理 html和xml文档的规范，所有的浏览器都遵循了这套标准。</h5><h3 id="_1-2-2-dom树" tabindex="-1"><a class="header-anchor" href="#_1-2-2-dom树" aria-hidden="true">#</a> 1.2.2. DOM树</h3><h5 id="dom树-又称为文档树模型-把文档映射成树形结构-通过节点对象对其处理-处理的结果可以加入到当前的页" tabindex="-1"><a class="header-anchor" href="#dom树-又称为文档树模型-把文档映射成树形结构-通过节点对象对其处理-处理的结果可以加入到当前的页" aria-hidden="true">#</a> DOM树 又称为文档树模型，把文档映射成树形结构，通过节点对象对其处理，处理的结果可以加入到当前的页</h5><h5 id="面。" tabindex="-1"><a class="header-anchor" href="#面。" aria-hidden="true">#</a> 面。</h5><h5 id="文档-一个页面就是一个文档-dom中使用document表示" tabindex="-1"><a class="header-anchor" href="#文档-一个页面就是一个文档-dom中使用document表示" aria-hidden="true">#</a> 文档：一个页面就是一个文档，DOM中使用document表示</h5><h5 id="节点-网页中的所有内容-在文档树中都是节点-标签、属性、文本、注释等-使用node表示" tabindex="-1"><a class="header-anchor" href="#节点-网页中的所有内容-在文档树中都是节点-标签、属性、文本、注释等-使用node表示" aria-hidden="true">#</a> 节点：网页中的所有内容，在文档树中都是节点（标签、属性、文本、注释等），使用node表示</h5><h5 id="标签节点-网页中的所有标签-通常称为元素节点-又简称为-元素-使用element表示" tabindex="-1"><a class="header-anchor" href="#标签节点-网页中的所有标签-通常称为元素节点-又简称为-元素-使用element表示" aria-hidden="true">#</a> 标签节点：网页中的所有标签，通常称为元素节点，又简称为“元素”，使用element表示</h5><h2 id="_1-3-获取元素" tabindex="-1"><a class="header-anchor" href="#_1-3-获取元素" aria-hidden="true">#</a> 1.3. 获取元素</h2><h5 id="为什么要获取页面元素" tabindex="-1"><a class="header-anchor" href="#为什么要获取页面元素" aria-hidden="true">#</a> 为什么要获取页面元素？</h5><h5 id="例如-我们想要操作页面上的某部分-显示-隐藏-动画-需要先获取到该部分对应的元素-再对其进行操作。" tabindex="-1"><a class="header-anchor" href="#例如-我们想要操作页面上的某部分-显示-隐藏-动画-需要先获取到该部分对应的元素-再对其进行操作。" aria-hidden="true">#</a> 例如：我们想要操作页面上的某部分(显示/隐藏，动画)，需要先获取到该部分对应的元素，再对其进行操作。</h5><h3 id="_1-3-1-根据id获取" tabindex="-1"><a class="header-anchor" href="#_1-3-1-根据id获取" aria-hidden="true">#</a> 1.3.1. 根据ID获取</h3><h5 id="案例代码" tabindex="-1"><a class="header-anchor" href="#案例代码" aria-hidden="true">#</a> 案例代码</h5><h3 id="_1-3-2-根据标签名获取元素" tabindex="-1"><a class="header-anchor" href="#_1-3-2-根据标签名获取元素" aria-hidden="true">#</a> 1.3.2. 根据标签名获取元素</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：document.getElementsByTagName(&#39;标签名&#39;) 或者 element.getElementsByTagName(&#39;标签名&#39;) 
作用：根据标签名获取元素对象
参数：标签名
返回值：元素对象集合（伪数组，数组元素是元素对象）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例代码-1" tabindex="-1"><a class="header-anchor" href="#案例代码-1" aria-hidden="true">#</a> 案例代码</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：document.getElementById(id)
作用：根据ID获取元素对象
参数：id值，区分大小写的字符串
返回值：元素对象 或 null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;div id=&quot;time&quot;&gt; 2019 ­ 9 ­ 9 &lt;/div&gt;
&lt;script&gt;
// 因为我们文档页面从上往下加载，所以先得有标签 所以我们script写到标签的下面
var timer = document.getElementById(&#39;time&#39;);
console.log(timer);
console.log(typeof timer);
// console.dir 打印我们返回的元素对象 更好的查看里面的属性和方法
console.dir(timer);
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="注意-getelementsbytagname-获取到是动态集合-即-当页面增加了标签-这个集合中也就增加了元素。" tabindex="-1"><a class="header-anchor" href="#注意-getelementsbytagname-获取到是动态集合-即-当页面增加了标签-这个集合中也就增加了元素。" aria-hidden="true">#</a> 注意：getElementsByTagName()获取到是动态集合，即：当页面增加了标签，这个集合中也就增加了元素。</h5><h3 id="_1-3-3-h5新增获取元素方式" tabindex="-1"><a class="header-anchor" href="#_1-3-3-h5新增获取元素方式" aria-hidden="true">#</a> 1.3.3. H5新增获取元素方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;ul&gt;
&lt;li&gt;知否知否，应是等你好久 11 &lt;/li&gt;
&lt;li&gt;知否知否，应是等你好久 22 &lt;/li&gt;
&lt;li&gt;知否知否，应是等你好久 33 &lt;/li&gt;
&lt;li&gt;知否知否，应是等你好久 44 &lt;/li&gt;
&lt;li&gt;知否知否，应是等你好久 55 &lt;/li&gt;
&lt;/ul&gt;
&lt;ul id=&quot;nav&quot;&gt;
&lt;li&gt;生僻字&lt;/li&gt;
&lt;li&gt;生僻字&lt;/li&gt;
&lt;li&gt;生僻字&lt;/li&gt;
&lt;li&gt;生僻字&lt;/li&gt;
&lt;li&gt;生僻字&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
// 1.返回的是 获取过来元素对象的集合 以伪数组的形式存储的
var lis = document.getElementsByTagName(&#39;li&#39;);
console.log(lis);
console.log(lis[ 0 ]);
// 2. 我们想要依次打印里面的元素对象我们可以采取遍历的方式
for (var i =  0 ; i &lt; lis.length; i++) {
console.log(lis[i]);
        }
// 3. element.getElementsByTagName()  可以得到这个元素里面的某些标签
var nav = document.getElementById(&#39;nav&#39;); // 这个获得nav 元素
var navLis = nav.getElementsByTagName(&#39;li&#39;);
console.log(navLis);
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例代码-2" tabindex="-1"><a class="header-anchor" href="#案例代码-2" aria-hidden="true">#</a> 案例代码</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;div class=&quot;box&quot;&gt;盒子 1 &lt;/div&gt;
&lt;div class=&quot;box&quot;&gt;盒子 2 &lt;/div&gt;
&lt;div id=&quot;nav&quot;&gt;
&lt;ul&gt;
&lt;li&gt;首页&lt;/li&gt;
&lt;li&gt;产品&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;script&gt;
// 1. getElementsByClassName 根据类名获得某些元素集合
var boxs = document.getElementsByClassName(&#39;box&#39;);
console.log(boxs);
// 2. querySelector 返回指定选择器的第一个元素对象 切记 里面的选择器需要加符号 .box  #nav
var firstBox = document.querySelector(&#39;.box&#39;);
console.log(firstBox);
var nav = document.querySelector(&#39;#nav&#39;);
console.log(nav);
var li = document.querySelector(&#39;li&#39;);
console.log(li);
// 3. querySelectorAll()返回指定选择器的所有元素对象集合
var allBox = document.querySelectorAll(&#39;.box&#39;);
console.log(allBox);
var lis = document.querySelectorAll(&#39;li&#39;);
console.log(lis);
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-4-获取特殊元素-body-html" tabindex="-1"><a class="header-anchor" href="#_1-3-4-获取特殊元素-body-html" aria-hidden="true">#</a> 1.3.4 获取特殊元素（body，html）</h3><h2 id="_1-4-事件基础" tabindex="-1"><a class="header-anchor" href="#_1-4-事件基础" aria-hidden="true">#</a> 1.4. 事件基础</h2><h3 id="_1-4-1-事件概述" tabindex="-1"><a class="header-anchor" href="#_1-4-1-事件概述" aria-hidden="true">#</a> 1.4.1. 事件概述</h3><h5 id="javascript-使我们有能力创建动态页面-而事件是可以被-javascript-侦测到的行为。" tabindex="-1"><a class="header-anchor" href="#javascript-使我们有能力创建动态页面-而事件是可以被-javascript-侦测到的行为。" aria-hidden="true">#</a> JavaScript 使我们有能力创建动态页面，而事件是可以被 JavaScript 侦测到的行为。</h5><h5 id="简单理解-触发-响应机制。" tabindex="-1"><a class="header-anchor" href="#简单理解-触发-响应机制。" aria-hidden="true">#</a> 简单理解： 触发--- 响应机制。</h5><h5 id="网页中的每个元素都可以产生某些可以触发-javascript-的事件-例如-我们可以在用户点击某按钮时产生一个-事" tabindex="-1"><a class="header-anchor" href="#网页中的每个元素都可以产生某些可以触发-javascript-的事件-例如-我们可以在用户点击某按钮时产生一个-事" aria-hidden="true">#</a> 网页中的每个元素都可以产生某些可以触发 JavaScript 的事件，例如，我们可以在用户点击某按钮时产生一个 事</h5><h5 id="件-然后去执行某些操作。" tabindex="-1"><a class="header-anchor" href="#件-然后去执行某些操作。" aria-hidden="true">#</a> 件，然后去执行某些操作。</h5><h3 id="_1-4-2-事件三要素" tabindex="-1"><a class="header-anchor" href="#_1-4-2-事件三要素" aria-hidden="true">#</a> 1.4.2. 事件三要素</h3><h5 id="事件源-谁-触发事件的元素" tabindex="-1"><a class="header-anchor" href="#事件源-谁-触发事件的元素" aria-hidden="true">#</a> 事件源（谁）：触发事件的元素</h5><h5 id="事件类型-什么事件-例如-click-点击事件" tabindex="-1"><a class="header-anchor" href="#事件类型-什么事件-例如-click-点击事件" aria-hidden="true">#</a> 事件类型（什么事件）： 例如 click 点击事件</h5><h5 id="事件处理程序-做啥-事件触发后要执行的代码-函数形式-事件处理函数" tabindex="-1"><a class="header-anchor" href="#事件处理程序-做啥-事件触发后要执行的代码-函数形式-事件处理函数" aria-hidden="true">#</a> 事件处理程序（做啥）：事件触发后要执行的代码(函数形式)，事件处理函数</h5><h5 id="案例代码-3" tabindex="-1"><a class="header-anchor" href="#案例代码-3" aria-hidden="true">#</a> 案例代码</h5><h3 id="_1-4-3-执行事件的步骤" tabindex="-1"><a class="header-anchor" href="#_1-4-3-执行事件的步骤" aria-hidden="true">#</a> 1.4.3. 执行事件的步骤</h3><h5 id="案例代码-4" tabindex="-1"><a class="header-anchor" href="#案例代码-4" aria-hidden="true">#</a> 案例代码</h5><h3 id="_1-4-4-常见的鼠标事件" tabindex="-1"><a class="header-anchor" href="#_1-4-4-常见的鼠标事件" aria-hidden="true">#</a> 1.4.4. 常见的鼠标事件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;button id=&quot;btn&quot;&gt;唐伯虎&lt;/button&gt;
&lt;script&gt;
// 点击一个按钮，弹出对话框
// 1. 事件是有三部分组成 事件源 事件类型 事件处理程序 我们也称为事件三要素
//(1) 事件源 事件被触发的对象 谁 按钮
var btn = document.getElementById(&#39;btn&#39;);
//(2) 事件类型 如何触发 什么事件 比如鼠标点击(onclick) 还是鼠标经过 还是键盘按下
//(3) 事件处理程序 通过一个函数赋值的方式 完成
btn.onclick = function() {
alert(&#39;点秋香&#39;);
        }
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;div&gt; 123 &lt;/div&gt;
&lt;script&gt;
// 执行事件步骤
// 点击div 控制台输出 我被选中了
// 1. 获取事件源
var div = document.querySelector(&#39;div&#39;);
// 2.绑定事件 注册事件
// div.onclick
// 3.添加事件处理程序
div.onclick = function() {
console.log(&#39;我被选中了&#39;);
        }
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-5-分析事件三要素" tabindex="-1"><a class="header-anchor" href="#_1-4-5-分析事件三要素" aria-hidden="true">#</a> 1.4.5. 分析事件三要素</h3><h5 id="下拉菜单三要素" tabindex="-1"><a class="header-anchor" href="#下拉菜单三要素" aria-hidden="true">#</a> 下拉菜单三要素</h5><h5 id="关闭广告三要素" tabindex="-1"><a class="header-anchor" href="#关闭广告三要素" aria-hidden="true">#</a> 关闭广告三要素</h5><h2 id="_1-5-操作元素" tabindex="-1"><a class="header-anchor" href="#_1-5-操作元素" aria-hidden="true">#</a> 1.5. 操作元素</h2><h5 id="javascript的-dom-操作可以改变网页内容、结构和样式-我们可以利用-dom-操作元素来改变元素里面的内容、" tabindex="-1"><a class="header-anchor" href="#javascript的-dom-操作可以改变网页内容、结构和样式-我们可以利用-dom-操作元素来改变元素里面的内容、" aria-hidden="true">#</a> JavaScript的 DOM 操作可以改变网页内容、结构和样式，我们可以利用 DOM 操作元素来改变元素里面的内容、</h5><h5 id="属性等。-注意-这些操作都是通过元素对象的属性实现的" tabindex="-1"><a class="header-anchor" href="#属性等。-注意-这些操作都是通过元素对象的属性实现的" aria-hidden="true">#</a> 属性等。（注意：这些操作都是通过元素对象的属性实现的）</h5><h3 id="_1-5-1-改变元素内容-获取或设置" tabindex="-1"><a class="header-anchor" href="#_1-5-1-改变元素内容-获取或设置" aria-hidden="true">#</a> 1.5.1. 改变元素内容（获取或设置）</h3><h5 id="innertext改变元素内容" tabindex="-1"><a class="header-anchor" href="#innertext改变元素内容" aria-hidden="true">#</a> innerText改变元素内容</h5><h5 id="innertext和innerhtml的区别" tabindex="-1"><a class="header-anchor" href="#innertext和innerhtml的区别" aria-hidden="true">#</a> innerText和innerHTML的区别</h5><h5 id="获取内容时的区别" tabindex="-1"><a class="header-anchor" href="#获取内容时的区别" aria-hidden="true">#</a> 获取内容时的区别：</h5><h5 id="innertext会去除空格和换行-而innerhtml会保留空格和换行" tabindex="-1"><a class="header-anchor" href="#innertext会去除空格和换行-而innerhtml会保留空格和换行" aria-hidden="true">#</a> innerText会去除空格和换行，而innerHTML会保留空格和换行</h5><h5 id="设置内容时的区别" tabindex="-1"><a class="header-anchor" href="#设置内容时的区别" aria-hidden="true">#</a> 设置内容时的区别：</h5><h5 id="innertext不会识别html-而innerhtml会识别" tabindex="-1"><a class="header-anchor" href="#innertext不会识别html-而innerhtml会识别" aria-hidden="true">#</a> innerText不会识别html，而innerHTML会识别</h5><h5 id="案例代码-5" tabindex="-1"><a class="header-anchor" href="#案例代码-5" aria-hidden="true">#</a> 案例代码</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;button&gt;显示当前系统时间&lt;/button&gt;
&lt;div&gt;某个时间&lt;/div&gt;
&lt;p&gt; 1123 &lt;/p&gt;
&lt;script&gt;
// 当我们点击了按钮，  div里面的文字会发生变化
// 1. 获取元素
var btn = document.querySelector(&#39;button&#39;);
var div = document.querySelector(&#39;div&#39;);
// 2.注册事件
btn.onclick = function() {
// div.innerText = &#39;2019­6­6&#39;;
div.innerHTML = getDate();
        }
function getDate() {
var date = new Date();
// 我们写一个  2019 年  5 月  1 日 星期三
var year = date.getFullYear();
var month = date.getMonth() +  1 ;
var dates = date.getDate();
var arr = [&#39;星期日&#39;, &#39;星期一&#39;, &#39;星期二&#39;, &#39;星期三&#39;, &#39;星期四&#39;, &#39;星期五&#39;, &#39;星期六&#39;];
var day = date.getDay();
return &#39;今天是：&#39; + year + &#39;年&#39; + month + &#39;月&#39; + dates + &#39;日 &#39; + arr[day];
        }
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-2-常用元素的属性操作" tabindex="-1"><a class="header-anchor" href="#_1-5-2-常用元素的属性操作" aria-hidden="true">#</a> 1.5.2. 常用元素的属性操作</h3><h5 id="获取属性的值" tabindex="-1"><a class="header-anchor" href="#获取属性的值" aria-hidden="true">#</a> 获取属性的值</h5><h5 id="元素对象-属性名" tabindex="-1"><a class="header-anchor" href="#元素对象-属性名" aria-hidden="true">#</a> 元素对象.属性名</h5><h5 id="设置属性的值" tabindex="-1"><a class="header-anchor" href="#设置属性的值" aria-hidden="true">#</a> 设置属性的值</h5><h5 id="元素对象-属性名-值" tabindex="-1"><a class="header-anchor" href="#元素对象-属性名-值" aria-hidden="true">#</a> 元素对象.属性名 = 值</h5><h5 id="案例代码-6" tabindex="-1"><a class="header-anchor" href="#案例代码-6" aria-hidden="true">#</a> 案例代码</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;div&gt;&lt;/div&gt;
&lt;p&gt;
我是文字
&lt;span&gt; 123 &lt;/span&gt;
&lt;/p&gt;
&lt;script&gt;
// innerText 和 innerHTML的区别
// 1. innerText 不识别html标签 非标准 去除空格和换行
var div = document.querySelector(&#39;div&#39;);
// div.innerText = &#39;&lt;strong&gt;今天是：&lt;/strong&gt; 2019&#39;;
// 2. innerHTML 识别html标签 W3C标准 保留空格和换行的
div.innerHTML = &#39;&lt;strong&gt;今天是：&lt;/strong&gt; 2019&#39;;
// 这两个属性是可读写的 可以获取元素里面的内容
var p = document.querySelector(&#39;p&#39;);
console.log(p.innerText);
console.log(p.innerHTML);
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-3-案例-分时问候" tabindex="-1"><a class="header-anchor" href="#_1-5-3-案例-分时问候" aria-hidden="true">#</a> 1.5.3. 案例：分时问候</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;button id=&quot;ldh&quot;&gt;刘德华&lt;/button&gt;
&lt;button id=&quot;zxy&quot;&gt;张学友&lt;/button&gt; &lt;br&gt;
&lt;img src=&quot;images/ldh.jpg&quot; alt=&quot;&quot; title=&quot;刘德华&quot;&gt;
&lt;script&gt;
// 修改元素属性  src
// 1. 获取元素
var ldh = document.getElementById(&#39;ldh&#39;);
var zxy = document.getElementById(&#39;zxy&#39;);
var img = document.querySelector(&#39;img&#39;);
// 2. 注册事件 处理程序
zxy.onclick = function() {
img.src = &#39;images/zxy.jpg&#39;;
img.title = &#39;张学友思密达&#39;;
        }
ldh.onclick = function() {
img.src = &#39;images/ldh.jpg&#39;;
img.title = &#39;刘德华&#39;;
        }
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-4-表单元素的属性操作" tabindex="-1"><a class="header-anchor" href="#_1-5-4-表单元素的属性操作" aria-hidden="true">#</a> 1.5.4. 表单元素的属性操作</h3><h5 id="获取属性的值-1" tabindex="-1"><a class="header-anchor" href="#获取属性的值-1" aria-hidden="true">#</a> 获取属性的值</h5><h5 id="元素对象-属性名-1" tabindex="-1"><a class="header-anchor" href="#元素对象-属性名-1" aria-hidden="true">#</a> 元素对象.属性名</h5><h5 id="设置属性的值-1" tabindex="-1"><a class="header-anchor" href="#设置属性的值-1" aria-hidden="true">#</a> 设置属性的值</h5><h5 id="元素对象-属性名-值-1" tabindex="-1"><a class="header-anchor" href="#元素对象-属性名-值-1" aria-hidden="true">#</a> 元素对象.属性名 = 值</h5><h5 id="表单元素中有一些属性如-disabled、checked、selected-元素对象的这些属性的值是布尔型。" tabindex="-1"><a class="header-anchor" href="#表单元素中有一些属性如-disabled、checked、selected-元素对象的这些属性的值是布尔型。" aria-hidden="true">#</a> 表单元素中有一些属性如：disabled、checked、selected，元素对象的这些属性的值是布尔型。</h5><h5 id="案例代码-7" tabindex="-1"><a class="header-anchor" href="#案例代码-7" aria-hidden="true">#</a> 案例代码</h5><h3 id="_1-5-5-案例-仿京东显示密码" tabindex="-1"><a class="header-anchor" href="#_1-5-5-案例-仿京东显示密码" aria-hidden="true">#</a> 1.5.5. 案例：仿京东显示密码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;button&gt;按钮&lt;/button&gt;
&lt;input type=&quot;text&quot; value=&quot;输入内容&quot;&gt;
&lt;script&gt;
// 1. 获取元素
var btn = document.querySelector(&#39;button&#39;);
var input = document.querySelector(&#39;input&#39;);
// 2. 注册事件 处理程序
btn.onclick = function() {
// 表单里面的值 文字内容是通过 value 来修改的
input.value = &#39;被点击了&#39;;
// 如果想要某个表单被禁用 不能再点击 disabled  我们想要这个按钮 button禁用
// btn.disabled = true;
this.disabled = true;
// this 指向的是事件函数的调用者 btn
        }
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-6-样式属性操作" tabindex="-1"><a class="header-anchor" href="#_1-5-6-样式属性操作" aria-hidden="true">#</a> 1.5.6. 样式属性操作</h3><h5 id="我们可以通过-js-修改元素的大小、颜色、位置等样式。" tabindex="-1"><a class="header-anchor" href="#我们可以通过-js-修改元素的大小、颜色、位置等样式。" aria-hidden="true">#</a> 我们可以通过 JS 修改元素的大小、颜色、位置等样式。</h5><h5 id="常用方式" tabindex="-1"><a class="header-anchor" href="#常用方式" aria-hidden="true">#</a> 常用方式</h5><h4 id="方式-1-通过操作style属性" tabindex="-1"><a class="header-anchor" href="#方式-1-通过操作style属性" aria-hidden="true">#</a> 方式 1 ：通过操作style属性</h4><h5 id="元素对象的style属性也是一个对象" tabindex="-1"><a class="header-anchor" href="#元素对象的style属性也是一个对象" aria-hidden="true">#</a> 元素对象的style属性也是一个对象！</h5><h5 id="元素对象-style-样式属性-值" tabindex="-1"><a class="header-anchor" href="#元素对象-style-样式属性-值" aria-hidden="true">#</a> 元素对象.style.样式属性 = 值;</h5><h5 id="案例代码-8" tabindex="-1"><a class="header-anchor" href="#案例代码-8" aria-hidden="true">#</a> 案例代码</h5><h4 id="案例-淘宝点击关闭二维码" tabindex="-1"><a class="header-anchor" href="#案例-淘宝点击关闭二维码" aria-hidden="true">#</a> 案例：淘宝点击关闭二维码</h4><h4 id="案例-循环精灵图背景" tabindex="-1"><a class="header-anchor" href="#案例-循环精灵图背景" aria-hidden="true">#</a> 案例：循环精灵图背景</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;div&gt;&lt;/div&gt;
&lt;script&gt;
// 1. 获取元素
var div = document.querySelector(&#39;div&#39;);
// 2. 注册事件 处理程序
div.onclick = function() {
// div.style里面的属性 采取驼峰命名法
this.style.backgroundColor = &#39;purple&#39;;
this.style.width = &#39;250px&#39;;
        }
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例-显示隐藏文本框内容" tabindex="-1"><a class="header-anchor" href="#案例-显示隐藏文本框内容" aria-hidden="true">#</a> 案例：显示隐藏文本框内容</h4><h4 id="方式-2-通过操作classname属性" tabindex="-1"><a class="header-anchor" href="#方式-2-通过操作classname属性" aria-hidden="true">#</a> 方式 2 ：通过操作className属性</h4><h5 id="元素对象-classname-值" tabindex="-1"><a class="header-anchor" href="#元素对象-classname-值" aria-hidden="true">#</a> 元素对象.className = 值;</h5><h5 id="因为class是关键字-所有使用classname。" tabindex="-1"><a class="header-anchor" href="#因为class是关键字-所有使用classname。" aria-hidden="true">#</a> 因为class是关键字，所有使用className。</h5><h5 id="案例代码-9" tabindex="-1"><a class="header-anchor" href="#案例代码-9" aria-hidden="true">#</a> 案例代码</h5><h4 id="案例-密码框格式提示错误信息" tabindex="-1"><a class="header-anchor" href="#案例-密码框格式提示错误信息" aria-hidden="true">#</a> 案例：密码框格式提示错误信息</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;div class=&quot;first&quot;&gt;文本&lt;/div&gt;
&lt;script&gt;
// 1. 使用 element.style 获得修改元素样式 如果样式比较少 或者 功能简单的情况下使用
var test = document.querySelector(&#39;div&#39;);
test.onclick = function() {
// this.style.backgroundColor = &#39;purple&#39;;
// this.style.color = &#39;#fff&#39;;
// this.style.fontSize = &#39;25px&#39;;
// this.style.marginTop = &#39;100px&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 2. 我们可以通过 修改元素的className更改元素的样式 适合于样式较多或者功能复杂的情况
// 3. 如果想要保留原先的类名，我们可以这么做 多类名选择器
// this.className = &#39;change&#39;;
this.className = &#39;first change&#39;;
        }
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-6-今日总结" tabindex="-1"><a class="header-anchor" href="#_1-6-今日总结" aria-hidden="true">#</a> 1.6. 今日总结</h2>`,126),l=[r];function s(t,h){return i(),a("div",null,l)}const u=e(d,[["render",s],["__file","01-webapis.html.vue"]]);export{u as default};

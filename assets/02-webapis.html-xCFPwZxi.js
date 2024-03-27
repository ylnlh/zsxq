import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,f as d}from"./app-hz3rNBT8.js";const l={},a=d(`<h1 id="day02-web-apis" tabindex="-1"><a class="header-anchor" href="#day02-web-apis" aria-hidden="true">#</a> day02 - Web APIs</h1><h4 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标：</h4><h4 id="能够说出排他操作的一般实现步骤" tabindex="-1"><a class="header-anchor" href="#能够说出排他操作的一般实现步骤" aria-hidden="true">#</a> 能够说出排他操作的一般实现步骤</h4><h4 id="能够使用html5中的dataset方式操作自定义属性" tabindex="-1"><a class="header-anchor" href="#能够使用html5中的dataset方式操作自定义属性" aria-hidden="true">#</a> 能够使用html5中的dataset方式操作自定义属性</h4><h4 id="能够根据提示完成百度换肤的案例" tabindex="-1"><a class="header-anchor" href="#能够根据提示完成百度换肤的案例" aria-hidden="true">#</a> 能够根据提示完成百度换肤的案例</h4><h4 id="能够根据提示完成全选案例" tabindex="-1"><a class="header-anchor" href="#能够根据提示完成全选案例" aria-hidden="true">#</a> 能够根据提示完成全选案例</h4><h4 id="能够根据提示完成tab栏切换案例" tabindex="-1"><a class="header-anchor" href="#能够根据提示完成tab栏切换案例" aria-hidden="true">#</a> 能够根据提示完成tab栏切换案例</h4><h4 id="能够区分元素节点、文本节点、属性节点" tabindex="-1"><a class="header-anchor" href="#能够区分元素节点、文本节点、属性节点" aria-hidden="true">#</a> 能够区分元素节点、文本节点、属性节点</h4><h4 id="能够获取指定元素的父元素" tabindex="-1"><a class="header-anchor" href="#能够获取指定元素的父元素" aria-hidden="true">#</a> 能够获取指定元素的父元素</h4><h4 id="能够获取指定元素的所有子元素" tabindex="-1"><a class="header-anchor" href="#能够获取指定元素的所有子元素" aria-hidden="true">#</a> 能够获取指定元素的所有子元素</h4><h4 id="能够说出childnodes和children的区别" tabindex="-1"><a class="header-anchor" href="#能够说出childnodes和children的区别" aria-hidden="true">#</a> 能够说出childNodes和children的区别</h4><h4 id="能够使用createelement创建页面元素" tabindex="-1"><a class="header-anchor" href="#能够使用createelement创建页面元素" aria-hidden="true">#</a> 能够使用createElement创建页面元素</h4><h2 id="_1-1-排他操作" tabindex="-1"><a class="header-anchor" href="#_1-1-排他操作" aria-hidden="true">#</a> 1.1. 排他操作</h2><h2 id="_1-1-1-排他思想" tabindex="-1"><a class="header-anchor" href="#_1-1-1-排他思想" aria-hidden="true">#</a> 1.1.1 排他思想</h2><h4 id="如果有同一组元素-我们想要某一个元素实现某种样式-需要用到循环的排他思想算法" tabindex="-1"><a class="header-anchor" href="#如果有同一组元素-我们想要某一个元素实现某种样式-需要用到循环的排他思想算法" aria-hidden="true">#</a> 如果有同一组元素，我们想要某一个元素实现某种样式， 需要用到循环的排他思想算法：</h4><h4 id="_1-所有元素全部清除样式-干掉其他人" tabindex="-1"><a class="header-anchor" href="#_1-所有元素全部清除样式-干掉其他人" aria-hidden="true">#</a> 1. 所有元素全部清除样式（干掉其他人）</h4><h4 id="_2-给当前元素设置样式-留下我自己" tabindex="-1"><a class="header-anchor" href="#_2-给当前元素设置样式-留下我自己" aria-hidden="true">#</a> 2. 给当前元素设置样式 （留下我自己）</h4><h4 id="_3-注意顺序不能颠倒-首先干掉其他人-再设置自己" tabindex="-1"><a class="header-anchor" href="#_3-注意顺序不能颠倒-首先干掉其他人-再设置自己" aria-hidden="true">#</a> 3. 注意顺序不能颠倒，首先干掉其他人，再设置自己</h4><h2 id="_1-2-案例-百度换肤" tabindex="-1"><a class="header-anchor" href="#_1-2-案例-百度换肤" aria-hidden="true">#</a> 1.2 案例：百度换肤</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button&gt;按钮 1 &lt;/button&gt;
&lt;button&gt;按钮 2 &lt;/button&gt;
&lt;button&gt;按钮 3 &lt;/button&gt;
&lt;button&gt;按钮 4 &lt;/button&gt;
&lt;button&gt;按钮 5 &lt;/button&gt;
&lt;script&gt;
// 1. 获取所有按钮元素
var btns = document.getElementsByTagName(&#39;button&#39;);
// btns得到的是伪数组 里面的每一个元素 btns[i]
for (var i =  0 ; i &lt; btns.length; i++) {
btns[i].onclick = function() {
// (1) 我们先把所有的按钮背景颜色去掉 干掉所有人
for (var i =  0 ; i &lt; btns.length; i++) {
btns[i].style.backgroundColor = &#39;&#39;;
                }
// (2) 然后才让当前的元素背景颜色为pink 留下我自己
this.style.backgroundColor = &#39;pink&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> }</h5><h5 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> }</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-3-案例-表格隔行变色" tabindex="-1"><a class="header-anchor" href="#_1-3-案例-表格隔行变色" aria-hidden="true">#</a> 1.3 案例：表格隔行变色</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;ul class=&quot;baidu&quot;&gt;
&lt;li&gt;&lt;img src=&quot;images/1.jpg&quot;&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src=&quot;images/2.jpg&quot;&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src=&quot;images/3.jpg&quot;&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src=&quot;images/4.jpg&quot;&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
// 1. 获取元素
var imgs = document.querySelector(&#39;.baidu&#39;).querySelectorAll(&#39;img&#39;);
// console.log(imgs);
// 2. 循环注册事件
for (var i =  0 ; i &lt; imgs.length; i++) {
imgs[i].onclick = function() {
// this.src 就是我们点击图片的路径   images/2.jpg
// console.log(this.src);
// 把这个路径 this.src 给body 就可以了
document.body.style.backgroundImage = &#39;url(&#39; + this.src + &#39;)&#39;;
            }
        }
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-案例-全选" tabindex="-1"><a class="header-anchor" href="#_1-4-案例-全选" aria-hidden="true">#</a> 1.4 案例：全选</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 1.获取元素 获取的是 tbody 里面所有的行
var trs = document.querySelector(&#39;tbody&#39;).querySelectorAll(&#39;tr&#39;);
// 2. 利用循环绑定注册事件
for (var i =  0 ; i &lt; trs.length; i++) {
// 3. 鼠标经过事件 onmouseover
trs[i].onmouseover = function() {
// console.log(11);
this.className = &#39;bg&#39;;
                }
// 4. 鼠标离开事件 onmouseout
trs[i].onmouseout = function() {
this.className = &#39;&#39;;
            }
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-自定义属性操作" tabindex="-1"><a class="header-anchor" href="#_1-5-自定义属性操作" aria-hidden="true">#</a> 1.5. 自定义属性操作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 1. 全选和取消全选做法： 让下面所有复选框的checked属性（选中状态） 跟随 全选按钮即可
// 获取元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var j_cbAll = document.getElementById(&#39;j_cbAll&#39;);
var j_tbs = document.getElementById(&#39;j_tb&#39;).getElementsByTagName(&#39;input&#39;);
// 全选按钮注册事件
j_cbAll.onclick = function() {
// this.checked 当前复选框的选中状态
console.log(this.checked);
for (var i =  0 ; i &lt; j_tbs.length; i++) {
j_tbs[i].checked = this.checked;
                }
         }
// 给所有的子复选框注册单击事件
for (var i =  0 ; i &lt; j_tbs.length; i++) {
j_tbs[i].onclick = function() {
// flag 控制全选按钮是否选中
var flag = true;
// 每次点击下面的复选框都要循环检查者 4 个小按钮是否全被选中
for (var i =  0 ; i &lt; j_tbs.length; i++) {
if (!j_tbs[i].checked) {
flag = false;
break;
                    }
                }
// 设置全选按钮的状态
j_cbAll.checked = flag;
            }
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-1-获取属性值" tabindex="-1"><a class="header-anchor" href="#_1-5-1-获取属性值" aria-hidden="true">#</a> 1.5.1 获取属性值</h3><h3 id="_1-5-2-设置属性值" tabindex="-1"><a class="header-anchor" href="#_1-5-2-设置属性值" aria-hidden="true">#</a> 1.5.2. 设置属性值</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;demo&quot; index=&quot;1&quot; class=&quot;nav&quot;&gt;&lt;/div&gt;
&lt;script&gt;
var div = document.querySelector(&#39;div&#39;);
// 1. 获取元素的属性值
// (1) element.属性
console.log(div.id);
//(2) element.getAttribute(&#39;属性&#39;)  get得到获取 attribute 属性的意思 我们程序员自己添加
的属性我们称为自定义属性 index
console.log(div.getAttribute(&#39;id&#39;));
console.log(div.getAttribute(&#39;index&#39;));
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-3-移出属性" tabindex="-1"><a class="header-anchor" href="#_1-5-3-移出属性" aria-hidden="true">#</a> 1.5.3. 移出属性</h3><h3 id="_1-5-4-案例-tab栏" tabindex="-1"><a class="header-anchor" href="#_1-5-4-案例-tab栏" aria-hidden="true">#</a> 1.5.4. 案例：tab栏</h3><h5 id="_2-设置元素属性值" tabindex="-1"><a class="header-anchor" href="#_2-设置元素属性值" aria-hidden="true">#</a> // 2. 设置元素属性值</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// (1) element.属性= &#39;值&#39;
div.id = &#39;test&#39;;
div.className = &#39;navs&#39;;
// (2) element.setAttribute(&#39;属性&#39;, &#39;值&#39;);  主要针对于自定义属性
div.setAttribute(&#39;index&#39;,  2 );
div.setAttribute(&#39;class&#39;, &#39;footer&#39;); // class 特殊 这里面写的就是
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// class 不是className
// 3 移除属性 removeAttribute(属性)    
div.removeAttribute(&#39;index&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-5-h5自定义属性" tabindex="-1"><a class="header-anchor" href="#_1-5-5-h5自定义属性" aria-hidden="true">#</a> 1.5.5. H5自定义属性</h3><h4 id="自定义属性目的-是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。" tabindex="-1"><a class="header-anchor" href="#自定义属性目的-是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。" aria-hidden="true">#</a> 自定义属性目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。</h4><h4 id="自定义属性获取是通过getattribute-属性-获取。" tabindex="-1"><a class="header-anchor" href="#自定义属性获取是通过getattribute-属性-获取。" aria-hidden="true">#</a> 自定义属性获取是通过getAttribute(‘属性’) 获取。</h4><h4 id="但是有些自定义属性很容易引起歧义-不容易判断是元素的内置属性还是自定义属性。" tabindex="-1"><a class="header-anchor" href="#但是有些自定义属性很容易引起歧义-不容易判断是元素的内置属性还是自定义属性。" aria-hidden="true">#</a> 但是有些自定义属性很容易引起歧义，不容易判断是元素的内置属性还是自定义属性。</h4><h4 id="h5给我们新增了自定义属性" tabindex="-1"><a class="header-anchor" href="#h5给我们新增了自定义属性" aria-hidden="true">#</a> H5给我们新增了自定义属性：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 获取元素
var tab_list = document.querySelector(&#39;.tab_list&#39;);
var lis = tab_list.querySelectorAll(&#39;li&#39;);
var items = document.querySelectorAll(&#39;.item&#39;);
// for循环，给选项卡绑定点击事件
for (var i =  0 ; i &lt; lis.length; i++) {
// 开始给 5 个小li 设置索引号
lis[i].setAttribute(&#39;index&#39;, i);
lis[i].onclick = function() {
// 1. 上的模块选项卡，当前这一个底色会是红色，其余不变（排他思想）
// 干掉所有人 其余的li清除 class 这个类
for (var i =  0 ; i &lt; lis.length; i++) {
lis[i].className = &#39;&#39;;
                }
// 留下我自己
this.className = &#39;current&#39;;
// 2. 下面的显示内容模块
var index = this.getAttribute(&#39;index&#39;);
console.log(index);
// 干掉所有人 让其余的item 这些div 隐藏
for (var i =  0 ; i &lt; items.length; i++) {
items[i].style.display = &#39;none&#39;;
                }
// 留下我自己 让对应的item 显示出来
items[index].style.display = &#39;block&#39;;
            }
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-6-节点操作" tabindex="-1"><a class="header-anchor" href="#_1-6-节点操作" aria-hidden="true">#</a> 1.6. 节点操作</h2><h3 id="_1-6-1-节点概述" tabindex="-1"><a class="header-anchor" href="#_1-6-1-节点概述" aria-hidden="true">#</a> 1.6.1. 节点概述</h3><h4 id="网页中的所有内容都是节点-标签、属性、文本、注释等-在dom-中-节点使用-node-来表示。" tabindex="-1"><a class="header-anchor" href="#网页中的所有内容都是节点-标签、属性、文本、注释等-在dom-中-节点使用-node-来表示。" aria-hidden="true">#</a> 网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM 中，节点使用 node 来表示。</h4><h4 id="html-dom-树中的所有节点均可通过-javascript-进行访问-所有-html-元素-节点-均可被修改-也可以创建或" tabindex="-1"><a class="header-anchor" href="#html-dom-树中的所有节点均可通过-javascript-进行访问-所有-html-元素-节点-均可被修改-也可以创建或" aria-hidden="true">#</a> HTML DOM 树中的所有节点均可通过 JavaScript 进行访问，所有 HTML 元素（节点）均可被修改，也可以创建或</h4><h4 id="删除。" tabindex="-1"><a class="header-anchor" href="#删除。" aria-hidden="true">#</a> 删除。</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div getTime=&quot;20&quot; data­index=&quot;2&quot; data­list­name=&quot;andy&quot;&gt;&lt;/div&gt;
&lt;script&gt;
var div = document.querySelector(&#39;div&#39;);
// console.log(div.getTime);
console.log(div.getAttribute(&#39;getTime&#39;));
div.setAttribute(&#39;data­time&#39;,  20 );
console.log(div.getAttribute(&#39;data­index&#39;));
console.log(div.getAttribute(&#39;data­list­name&#39;));
// h5新增的获取自定义属性的方法 它只能获取data­开头的
// dataset 是一个集合里面存放了所有以data开头的自定义属性
console.log(div.dataset);
console.log(div.dataset.index);
console.log(div.dataset[&#39;index&#39;]);
// 如果自定义属性里面有多个­链接的单词，我们获取的时候采取 驼峰命名法
console.log(div.dataset.listName);
console.log(div.dataset[&#39;listName&#39;]);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一般地-节点至少拥有nodetype-节点类型-、nodename-节点名称-和nodevalue-节点值-这三个基本属" tabindex="-1"><a class="header-anchor" href="#一般地-节点至少拥有nodetype-节点类型-、nodename-节点名称-和nodevalue-节点值-这三个基本属" aria-hidden="true">#</a> 一般地，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属</h4><h4 id="性。" tabindex="-1"><a class="header-anchor" href="#性。" aria-hidden="true">#</a> 性。</h4><h3 id="_1-6-2-节点层级" tabindex="-1"><a class="header-anchor" href="#_1-6-2-节点层级" aria-hidden="true">#</a> 1.6.2. 节点层级</h3><h4 id="利用-dom-树可以把节点划分为不同的层级关系-常见的是父子兄层级关系。" tabindex="-1"><a class="header-anchor" href="#利用-dom-树可以把节点划分为不同的层级关系-常见的是父子兄层级关系。" aria-hidden="true">#</a> 利用 DOM 树可以把节点划分为不同的层级关系，常见的是父子兄层级关系。</h4><h3 id="_1-6-3-父级节点" tabindex="-1"><a class="header-anchor" href="#_1-6-3-父级节点" aria-hidden="true">#</a> 1.6.3. 父级节点</h3><h3 id="_1-6-4-子节点" tabindex="-1"><a class="header-anchor" href="#_1-6-4-子节点" aria-hidden="true">#</a> 1.6.4. 子节点</h3><h4 id="所有子节点" tabindex="-1"><a class="header-anchor" href="#所有子节点" aria-hidden="true">#</a> 所有子节点</h4><h4 id="子元素节点" tabindex="-1"><a class="header-anchor" href="#子元素节点" aria-hidden="true">#</a> 子元素节点</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;demo&quot;&gt;
&lt;div class=&quot;box&quot;&gt;
&lt;span class=&quot;erweima&quot;&gt;×&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
// 1. 父节点 parentNode
var erweima = document.querySelector(&#39;.erweima&#39;);
// var box = document.querySelector(&#39;.box&#39;);
// 得到的是离元素最近的父级节点(亲爸爸) 如果找不到父节点就返回为 null
console.log(erweima.parentNode);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第-1-个子节点" tabindex="-1"><a class="header-anchor" href="#第-1-个子节点" aria-hidden="true">#</a> 第 1 个子节点</h4><h4 id="最后-1-个子节点" tabindex="-1"><a class="header-anchor" href="#最后-1-个子节点" aria-hidden="true">#</a> 最后 1 个子节点</h4><h4 id="第-1-个子元素节点" tabindex="-1"><a class="header-anchor" href="#第-1-个子元素节点" aria-hidden="true">#</a> 第 1 个子元素节点</h4><h4 id="最后-1-个子元素节点" tabindex="-1"><a class="header-anchor" href="#最后-1-个子元素节点" aria-hidden="true">#</a> 最后 1 个子元素节点</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
&lt;li&gt;我是li&lt;/li&gt;
&lt;li&gt;我是li&lt;/li&gt;
&lt;li&gt;我是li&lt;/li&gt;
&lt;li&gt;我是li&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
// DOM 提供的方法（API）获取
var ul = document.querySelector(&#39;ul&#39;);
var lis = ul.querySelectorAll(&#39;li&#39;);
// 1. 子节点  childNodes 所有的子节点 包含 元素节点 文本节点等等
console.log(ul.childNodes);
console.log(ul.childNodes[ 0 ].nodeType);
console.log(ul.childNodes[ 1 ].nodeType);
// 2. children 获取所有的子元素节点 也是我们实际开发常用的
console.log(ul.children);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实际开发中-firstchild-和-lastchild-包含其他节点-操作不方便-而-firstelementchild-和-lastelementchild-又有" tabindex="-1"><a class="header-anchor" href="#实际开发中-firstchild-和-lastchild-包含其他节点-操作不方便-而-firstelementchild-和-lastelementchild-又有" aria-hidden="true">#</a> 实际开发中，firstChild 和 lastChild 包含其他节点，操作不方便，而 firstElementChild 和 lastElementChild 又有</h4><h4 id="兼容性问题-那么我们如何获取第一个子元素节点或最后一个子元素节点呢" tabindex="-1"><a class="header-anchor" href="#兼容性问题-那么我们如何获取第一个子元素节点或最后一个子元素节点呢" aria-hidden="true">#</a> 兼容性问题，那么我们如何获取第一个子元素节点或最后一个子元素节点呢？</h4><h3 id="_1-6-5-案例-新浪下拉菜单" tabindex="-1"><a class="header-anchor" href="#_1-6-5-案例-新浪下拉菜单" aria-hidden="true">#</a> 1.6.5. 案例：新浪下拉菜单</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ol&gt;
&lt;li&gt;我是li1&lt;/li&gt;
&lt;li&gt;我是li2&lt;/li&gt;
&lt;li&gt;我是li3&lt;/li&gt;
&lt;li&gt;我是li4&lt;/li&gt;
&lt;li&gt;我是li5&lt;/li&gt;
&lt;/ol&gt;
&lt;script&gt;
var ol = document.querySelector(&#39;ol&#39;);
// 1. firstChild 第一个子节点 不管是文本节点还是元素节点
console.log(ol.firstChild);
console.log(ol.lastChild);
// 2. firstElementChild 返回第一个子元素节点 ie9才支持
console.log(ol.firstElementChild);
console.log(ol.lastElementChild);
// 3. 实际开发的写法 既没有兼容性问题又返回第一个子元素
console.log(ol.children[ 0 ]);
console.log(ol.children[ol.children.length ­  1 ]);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-6-兄弟节点" tabindex="-1"><a class="header-anchor" href="#_1-6-6-兄弟节点" aria-hidden="true">#</a> 1.6.6. 兄弟节点</h3><h4 id="下一个兄弟节点" tabindex="-1"><a class="header-anchor" href="#下一个兄弟节点" aria-hidden="true">#</a> 下一个兄弟节点</h4><h4 id="_1550973538696" tabindex="-1"><a class="header-anchor" href="#_1550973538696" aria-hidden="true">#</a> 1550973538696</h4><h4 id="上一个兄弟节点" tabindex="-1"><a class="header-anchor" href="#上一个兄弟节点" aria-hidden="true">#</a> 上一个兄弟节点</h4><h4 id="_1550973558511" tabindex="-1"><a class="header-anchor" href="#_1550973558511" aria-hidden="true">#</a> 1550973558511</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 1. 获取元素
var nav = document.querySelector(&#39;.nav&#39;);
var lis = nav.children; // 得到 4 个小li
// 2.循环注册事件
for (var i =  0 ; i &lt; lis.length; i++) {
lis[i].onmouseover = function() {
this.children[ 1 ].style.display = &#39;block&#39;;
            }
lis[i].onmouseout = function() {
this.children[ 1 ].style.display = &#39;none&#39;;
            }
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下一个兄弟元素节点-有兼容性问题" tabindex="-1"><a class="header-anchor" href="#下一个兄弟元素节点-有兼容性问题" aria-hidden="true">#</a> 下一个兄弟元素节点（有兼容性问题）</h4><h4 id="_1550973610223" tabindex="-1"><a class="header-anchor" href="#_1550973610223" aria-hidden="true">#</a> 1550973610223</h4><h4 id="上一个兄弟元素节点-有兼容性问题" tabindex="-1"><a class="header-anchor" href="#上一个兄弟元素节点-有兼容性问题" aria-hidden="true">#</a> 上一个兄弟元素节点（有兼容性问题）</h4><h4 id="_1550973630150" tabindex="-1"><a class="header-anchor" href="#_1550973630150" aria-hidden="true">#</a> 1550973630150</h4><h4 id="_1550973722805" tabindex="-1"><a class="header-anchor" href="#_1550973722805" aria-hidden="true">#</a> 1550973722805</h4><h4 id="_1550973799759" tabindex="-1"><a class="header-anchor" href="#_1550973799759" aria-hidden="true">#</a> 1550973799759</h4><h3 id="_1-6-7-创建节点" tabindex="-1"><a class="header-anchor" href="#_1-6-7-创建节点" aria-hidden="true">#</a> 1.6.7. 创建节点</h3><h3 id="_1-6-8-添加节点" tabindex="-1"><a class="header-anchor" href="#_1-6-8-添加节点" aria-hidden="true">#</a> 1.6.8. 添加节点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;我是div&lt;/div&gt;
&lt;span&gt;我是span&lt;/span&gt;
&lt;script&gt;
var div = document.querySelector(&#39;div&#39;);
// 1.nextSibling 下一个兄弟节点 包含元素节点或者 文本节点等等
console.log(div.nextSibling);
console.log(div.previousSibling);
// 2. nextElementSibling 得到下一个兄弟元素节点
console.log(div.nextElementSibling);
console.log(div.previousElementSibling);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getNextElementSibling(element) {
var el = element;
while (el = el.nextSibling) {
if (el.nodeType ===  1 ) {
return el;
        }
      }
return null;
    }  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-9-案例-简单版发布留言" tabindex="-1"><a class="header-anchor" href="#_1-6-9-案例-简单版发布留言" aria-hidden="true">#</a> 1.6.9. 案例：简单版发布留言</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
&lt;li&gt; 123 &lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
// 1. 创建节点元素节点
var li = document.createElement(&#39;li&#39;);
// 2. 添加节点 node.appendChild(child)  node 父级  child 是子级 后面追加元素
var ul = document.querySelector(&#39;ul&#39;);
ul.appendChild(li);
// 3. 添加节点 node.insertBefore(child, 指定元素);
var lili = document.createElement(&#39;li&#39;);
ul.insertBefore(lili, ul.children[ 0 ]);
// 4. 我们想要页面添加一个新的元素 ： 1. 创建元素 2. 添加元素
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;textarea name=&quot;&quot; id=&quot;&quot;&gt;&lt;/textarea&gt;
&lt;button&gt;发布&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;/ul&gt;
&lt;script&gt;
// 1. 获取元素
var btn = document.querySelector(&#39;button&#39;);
var text = document.querySelector(&#39;textarea&#39;);
var ul = document.querySelector(&#39;ul&#39;);
// 2. 注册事件
btn.onclick = function() {
if (text.value == &#39;&#39;) {
alert(&#39;您没有输入内容&#39;);
return false;
            } else {
// console.log(text.value);
// (1) 创建元素
var li = document.createElement(&#39;li&#39;);
// 先有li 才能赋值
li.innerHTML = text.value;
// (2) 添加元素
// ul.appendChild(li);
ul.insertBefore(li, ul.children[ 0 ]);
            }
        }
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,88),s=[a];function t(r,c){return i(),n("div",null,s)}const h=e(l,[["render",t],["__file","02-webapis.html.vue"]]);export{h as default};

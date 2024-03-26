import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,f as d}from"./app-rpFDZqdF.js";const a={},l=d(`<h1 id="day03-web-apis" tabindex="-1"><a class="header-anchor" href="#day03-web-apis" aria-hidden="true">#</a> day03 - Web APIs</h1><h5 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标：</h5><h5 id="能够使用removechild-方法删除节点" tabindex="-1"><a class="header-anchor" href="#能够使用removechild-方法删除节点" aria-hidden="true">#</a> 能够使用removeChild()方法删除节点</h5><h5 id="能够完成动态生成表格案例" tabindex="-1"><a class="header-anchor" href="#能够完成动态生成表格案例" aria-hidden="true">#</a> 能够完成动态生成表格案例</h5><h5 id="能够使用传统方式和监听方式给元素注册事件" tabindex="-1"><a class="header-anchor" href="#能够使用传统方式和监听方式给元素注册事件" aria-hidden="true">#</a> 能够使用传统方式和监听方式给元素注册事件</h5><h5 id="能够说出事件流执行的三个阶段" tabindex="-1"><a class="header-anchor" href="#能够说出事件流执行的三个阶段" aria-hidden="true">#</a> 能够说出事件流执行的三个阶段</h5><h5 id="能够在事件处理函数中获取事件对象" tabindex="-1"><a class="header-anchor" href="#能够在事件处理函数中获取事件对象" aria-hidden="true">#</a> 能够在事件处理函数中获取事件对象</h5><h5 id="能够使用事件对象取消默认行为" tabindex="-1"><a class="header-anchor" href="#能够使用事件对象取消默认行为" aria-hidden="true">#</a> 能够使用事件对象取消默认行为</h5><h5 id="能够使用事件对象阻止事件冒泡" tabindex="-1"><a class="header-anchor" href="#能够使用事件对象阻止事件冒泡" aria-hidden="true">#</a> 能够使用事件对象阻止事件冒泡</h5><h5 id="能够使用事件对象获取鼠标的位置" tabindex="-1"><a class="header-anchor" href="#能够使用事件对象获取鼠标的位置" aria-hidden="true">#</a> 能够使用事件对象获取鼠标的位置</h5><h5 id="能够完成跟随鼠标的天使案例" tabindex="-1"><a class="header-anchor" href="#能够完成跟随鼠标的天使案例" aria-hidden="true">#</a> 能够完成跟随鼠标的天使案例</h5><h2 id="_1-1-节点操作" tabindex="-1"><a class="header-anchor" href="#_1-1-节点操作" aria-hidden="true">#</a> 1.1. 节点操作</h2><h2 id="_1-1-1-删除节点" tabindex="-1"><a class="header-anchor" href="#_1-1-1-删除节点" aria-hidden="true">#</a> 1.1.1 删除节点</h2><h5 id="node-removechild-方法从-node节点中删除一个子节点-返回删除的节点。" tabindex="-1"><a class="header-anchor" href="#node-removechild-方法从-node节点中删除一个子节点-返回删除的节点。" aria-hidden="true">#</a> node.removeChild() 方法从 node节点中删除一个子节点，返回删除的节点。</h5><h3 id="_1-1-2-案例-删除留言" tabindex="-1"><a class="header-anchor" href="#_1-1-2-案例-删除留言" aria-hidden="true">#</a> 1.1.2 案例：删除留言</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button&gt;删除&lt;/button&gt;
&lt;ul&gt;
&lt;li&gt;熊大&lt;/li&gt;
&lt;li&gt;熊二&lt;/li&gt;
&lt;li&gt;光头强&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
// 1.获取元素
var ul = document.querySelector(&#39;ul&#39;);
var btn = document.querySelector(&#39;button&#39;);
// 2. 删除元素  node.removeChild(child)
// ul.removeChild(ul.children[0]);
// 3. 点击按钮依次删除里面的孩子
btn.onclick = function() {
if (ul.children.length ==  0 ) {
this.disabled = true;
            } else {
ul.removeChild(ul.children[ 0 ]);
            }
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-复制-克隆-节点" tabindex="-1"><a class="header-anchor" href="#_1-1-3-复制-克隆-节点" aria-hidden="true">#</a> 1.1.3 复制（克隆）节点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;textarea name=&quot;&quot; id=&quot;&quot;&gt;&lt;/textarea&gt;
&lt;button&gt;发布&lt;/button&gt;
&lt;ul&gt;
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
li.innerHTML = text.value + &quot;&lt;a href=&#39;javascript:;&#39;&gt;删除&lt;/a&gt;&quot;;
// (2) 添加元素
// ul.appendChild(li);
ul.insertBefore(li, ul.children[ 0 ]);
// (3) 删除元素 删除的是当前链接的li  它的父亲
var as = document.querySelectorAll(&#39;a&#39;);
for (var i =  0 ; i &lt; as.length; i++) {
as[i].onclick = function() {
// 删除的是 li 当前a所在的li  this.parentNode;
ul.removeChild(this.parentNode);
                    }
                }
            }
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-案例-动态生成表格" tabindex="-1"><a class="header-anchor" href="#_1-1-4-案例-动态生成表格" aria-hidden="true">#</a> 1.1.4 案例：动态生成表格</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
&lt;li&gt; 1111 &lt;/li&gt;
&lt;li&gt; 2 &lt;/li&gt;
&lt;li&gt; 3 &lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
var ul = document.querySelector(&#39;ul&#39;);
// 1. node.cloneNode(); 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容
// 2. node.cloneNode(true); 括号为true 深拷贝 复制标签复制里面的内容
var lili = ul.children[ 0 ].cloneNode(true);
ul.appendChild(lili);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 1.先去准备好学生的数据
var datas = [{
name: &#39;魏璎珞&#39;,
subject: &#39;JavaScript&#39;,
score:  100
        }, {
name: &#39;弘历&#39;,
subject: &#39;JavaScript&#39;,
score:  98
        }, {
name: &#39;傅恒&#39;,
subject: &#39;JavaScript&#39;,
score:  99
        }, {
name: &#39;明玉&#39;,
subject: &#39;JavaScript&#39;,
score:  88
        }, {
name: &#39;大猪蹄子&#39;,
subject: &#39;JavaScript&#39;,
score:  0
        }];
// 2. 往tbody 里面创建行： 有几个人（通过数组的长度）我们就创建几行
var tbody = document.querySelector(&#39;tbody&#39;);
// 遍历数组
for (var i = 0 ; i &lt; datas.length; i++) {
// 1. 创建 tr行
var tr = document.createElement(&#39;tr&#39;);
tbody.appendChild(tr);
// 2. 行里面创建单元格td 单元格的数量取决于每个对象里面的属性个数
// 使用for in遍历学生对象
for (var k in datas[i]) {
// 创建单元格
var td = document.createElement(&#39;td&#39;);
// 把对象里面的属性值 datas[i][k] 给 td  
td.innerHTML = datas[i][k];
tr.appendChild(td);
            }
// 3. 创建有删除 2 个字的单元格
var td = document.createElement(&#39;td&#39;);
td.innerHTML = &#39;&lt;a href=&quot;javascript:;&quot;&gt;删除 &lt;/a&gt;&#39;;
tr.appendChild(td);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        }
// 4. 删除操作 开始
var as = document.querySelectorAll(&#39;a&#39;);
for (var i =  0 ; i &lt; as.length; i++) {
as[i].onclick = function() {
// 点击a 删除 当前a 所在的行(链接的爸爸的爸爸)  node.removeChild(child)  
tbody.removeChild(this.parentNode.parentNode)
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-5-创建元素的三种方式" tabindex="-1"><a class="header-anchor" href="#_1-1-5-创建元素的三种方式" aria-hidden="true">#</a> 1.1.5 创建元素的三种方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-6-innerthml和createelement效率对比" tabindex="-1"><a class="header-anchor" href="#_1-1-6-innerthml和createelement效率对比" aria-hidden="true">#</a> 1.1.6 innerTHML和createElement效率对比</h3><h5 id="innerhtml字符串拼接方式-效率低" tabindex="-1"><a class="header-anchor" href="#innerhtml字符串拼接方式-效率低" aria-hidden="true">#</a> innerHTML字符串拼接方式（效率低）</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 三种创建元素方式区别
// 1. document.write() 创建元素 如果页面文档流加载完毕，再调用这句话会导致页面重绘
var btn = document.querySelector(&#39;button&#39;);
btn.onclick = function() {
document.write(&#39;&lt;div&gt;123&lt;/div&gt;&#39;);
         }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 2. innerHTML 创建元素
var inner = document.querySelector(&#39;.inner&#39;);
for (var i =  0 ; i &lt;=  100 ; i++) {
inner.innerHTML += &#39;&lt;a href=&quot;#&quot;&gt;百度&lt;/a&gt;&#39;
         }
var arr = [];
for (var i =  0 ; i &lt;=  100 ; i++) {
arr.push(&#39;&lt;a href=&quot;#&quot;&gt;百度&lt;/a&gt;&#39;);
        }
inner.innerHTML = arr.join(&#39;&#39;);
// 3. document.createElement() 创建元素
var create = document.querySelector(&#39;.create&#39;);
for (var i =  0 ; i &lt;=  100 ; i++) {
var a = document.createElement(&#39;a&#39;);
create.appendChild(a);
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="createelement方式-效率一般" tabindex="-1"><a class="header-anchor" href="#createelement方式-效率一般" aria-hidden="true">#</a> createElement方式（效率一般）</h5><h5 id="innerhtml数组方式-效率高" tabindex="-1"><a class="header-anchor" href="#innerhtml数组方式-效率高" aria-hidden="true">#</a> innerHTML数组方式（效率高）</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
function fn() {
var d1 = +new Date();
var str = &#39;&#39;;
for (var i =  0 ; i &lt;  1000 ; i++) {
document.body.innerHTML += &#39;&lt;div style=&quot;width:100px; height:2px; border:1px
solid blue;&quot;&gt;&lt;/div&gt;&#39;;
        }
var d2 = +new Date();
console.log(d2 ­ d1);
    }
fn();
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
function fn() {
var d1 = +new Date();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (var i =  0 ; i &lt;  1000 ; i++) {
var div = document.createElement(&#39;div&#39;);
div.style.width = &#39;100px&#39;;
div.style.height = &#39;2px&#39;;
div.style.border = &#39;1px solid red&#39;;
document.body.appendChild(div);
        }
var d2 = +new Date();
console.log(d2 ­ d1);
    }
fn();
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-dom的核心总结" tabindex="-1"><a class="header-anchor" href="#_1-2-dom的核心总结" aria-hidden="true">#</a> 1.2. DOM的核心总结</h2><h5 id="关于dom操作-我们主要针对于元素的操作。主要有创建、增、删、改、查、属性操作、事件操作。" tabindex="-1"><a class="header-anchor" href="#关于dom操作-我们主要针对于元素的操作。主要有创建、增、删、改、查、属性操作、事件操作。" aria-hidden="true">#</a> 关于dom操作，我们主要针对于元素的操作。主要有创建、增、删、改、查、属性操作、事件操作。</h5><h3 id="_1-2-1-创建" tabindex="-1"><a class="header-anchor" href="#_1-2-1-创建" aria-hidden="true">#</a> 1.2.1. 创建</h3><h3 id="_1-2-2-增加" tabindex="-1"><a class="header-anchor" href="#_1-2-2-增加" aria-hidden="true">#</a> 1.2.2. 增加</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
function fn() {
var d1 = +new Date();
var array = [];
for (var i =  0 ; i &lt;  1000 ; i++) {
array.push(&#39;&lt;div style=&quot;width:100px; height:2px; border:1px solid blue;&quot;&gt;
&lt;/div&gt;&#39;);
        }
document.body.innerHTML = array.join(&#39;&#39;);
var d2 = +new Date();
console.log(d2 ­ d1);
    }
fn();
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-3-删" tabindex="-1"><a class="header-anchor" href="#_1-2-3-删" aria-hidden="true">#</a> 1.2.3. 删</h3><h3 id="_1-2-4-改" tabindex="-1"><a class="header-anchor" href="#_1-2-4-改" aria-hidden="true">#</a> 1.2.4. 改</h3><h3 id="_1-2-5-查" tabindex="-1"><a class="header-anchor" href="#_1-2-5-查" aria-hidden="true">#</a> 1.2.5. 查</h3><h3 id="_1-2-6-属性操作" tabindex="-1"><a class="header-anchor" href="#_1-2-6-属性操作" aria-hidden="true">#</a> 1.2.6. 属性操作</h3><h3 id="_1-2-7-事件操作-重点" tabindex="-1"><a class="header-anchor" href="#_1-2-7-事件操作-重点" aria-hidden="true">#</a> 1.2.7. 事件操作（重点）</h3><h2 id="_1-3-事件高级" tabindex="-1"><a class="header-anchor" href="#_1-3-事件高级" aria-hidden="true">#</a> 1.3. 事件高级</h2><h3 id="_1-3-1-注册事件-2-种方式" tabindex="-1"><a class="header-anchor" href="#_1-3-1-注册事件-2-种方式" aria-hidden="true">#</a> 1.3.1. 注册事件（ 2 种方式）</h3><h3 id="_1-3-2-事件监听" tabindex="-1"><a class="header-anchor" href="#_1-3-2-事件监听" aria-hidden="true">#</a> 1.3.2 事件监听</h3><h4 id="addeventlistener-事件监听-ie9以后支持" tabindex="-1"><a class="header-anchor" href="#addeventlistener-事件监听-ie9以后支持" aria-hidden="true">#</a> addEventListener()事件监听（IE9以后支持）</h4><h5 id="eventtarget-addeventlistener-方法将指定的监听器注册到-eventtarget-目标对象-上-当该对象触发指定的事" tabindex="-1"><a class="header-anchor" href="#eventtarget-addeventlistener-方法将指定的监听器注册到-eventtarget-目标对象-上-当该对象触发指定的事" aria-hidden="true">#</a> eventTarget.addEventListener()方法将指定的监听器注册到 eventTarget（目标对象）上，当该对象触发指定的事</h5><h5 id="件时-就会执行事件处理函数。" tabindex="-1"><a class="header-anchor" href="#件时-就会执行事件处理函数。" aria-hidden="true">#</a> 件时，就会执行事件处理函数。</h5><h4 id="attacheevent-事件监听-ie678支持" tabindex="-1"><a class="header-anchor" href="#attacheevent-事件监听-ie678支持" aria-hidden="true">#</a> attacheEvent()事件监听（IE678支持）</h4><h5 id="eventtarget-attachevent-方法将指定的监听器注册到-eventtarget-目标对象-上-当该对象触发指定的事件" tabindex="-1"><a class="header-anchor" href="#eventtarget-attachevent-方法将指定的监听器注册到-eventtarget-目标对象-上-当该对象触发指定的事件" aria-hidden="true">#</a> eventTarget.attachEvent()方法将指定的监听器注册到 eventTarget（目标对象） 上，当该对象触发指定的事件</h5><h5 id="时-指定的回调函数就会被执行。" tabindex="-1"><a class="header-anchor" href="#时-指定的回调函数就会被执行。" aria-hidden="true">#</a> 时，指定的回调函数就会被执行。</h5><h4 id="事件监听兼容性解决方案" tabindex="-1"><a class="header-anchor" href="#事件监听兼容性解决方案" aria-hidden="true">#</a> 事件监听兼容性解决方案</h4><h5 id="封装一个函数-函数中判断浏览器的类型" tabindex="-1"><a class="header-anchor" href="#封装一个函数-函数中判断浏览器的类型" aria-hidden="true">#</a> 封装一个函数，函数中判断浏览器的类型：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button&gt;传统注册事件&lt;/button&gt;
&lt;button&gt;方法监听注册事件&lt;/button&gt;
&lt;button&gt;ie9 attachEvent&lt;/button&gt;
&lt;script&gt;
var btns = document.querySelectorAll(&#39;button&#39;);
// 1. 传统方式注册事件
btns[ 0 ].onclick = function() {
alert(&#39;hi&#39;);
    }
btns[ 0 ].onclick = function() {
alert(&#39;hao a u&#39;);
        }
// 2. 事件侦听注册事件 addEventListener
// (1) 里面的事件类型是字符串 必定加引号 而且不带on
// (2) 同一个元素 同一个事件可以添加多个侦听器（事件处理程序）
btns[ 1 ].addEventListener(&#39;click&#39;, function() {
alert( 22 );
    })
btns[ 1 ].addEventListener(&#39;click&#39;, function() {
alert( 33 );
    })
// 3. attachEvent ie9以前的版本支持
btns[ 2 ].attachEvent(&#39;onclick&#39;, function() {
alert( 11 );
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-3-删除事件-解绑事件" tabindex="-1"><a class="header-anchor" href="#_1-3-3-删除事件-解绑事件" aria-hidden="true">#</a> 1.3.3. 删除事件（解绑事件）</h3><h5 id="删除事件兼容性解决方案" tabindex="-1"><a class="header-anchor" href="#删除事件兼容性解决方案" aria-hidden="true">#</a> 删除事件兼容性解决方案</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt; 1 &lt;/div&gt;
&lt;div&gt; 2 &lt;/div&gt;
&lt;div&gt; 3 &lt;/div&gt;
&lt;script&gt;
var divs = document.querySelectorAll(&#39;div&#39;);
divs[ 0 ].onclick = function() {
alert( 11 );
// 1. 传统方式删除事件
divs[ 0 ].onclick = null;
        }
// 2. removeEventListener 删除事件
divs[ 1 ].addEventListener(&#39;click&#39;, fn) // 里面的fn 不需要调用加小括号
function fn() {
alert( 22 );
divs[ 1 ].removeEventListener(&#39;click&#39;, fn);
        }
// 3. detachEvent
divs[ 2 ].attachEvent(&#39;onclick&#39;, fn1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn1() {
alert( 33 );
divs[ 2 ].detachEvent(&#39;onclick&#39;, fn1);
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-4-dom事件流" tabindex="-1"><a class="header-anchor" href="#_1-3-4-dom事件流" aria-hidden="true">#</a> 1.3.4. DOM事件流</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html中的标签都是相互嵌套的，我们可以将元素想象成一个盒子装一个盒子，document是最外面的大盒子。
当你单击一个div时，同时你也单击了div的父元素，甚至整个页面。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>那么是先执行父元素的单击事件，还是先执行div的单击事件 ？？？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="比如-我们给页面中的一个div注册了单击事件-当你单击了div时-也就单击了body-单击了html-单击了" tabindex="-1"><a class="header-anchor" href="#比如-我们给页面中的一个div注册了单击事件-当你单击了div时-也就单击了body-单击了html-单击了" aria-hidden="true">#</a> 比如：我们给页面中的一个div注册了单击事件，当你单击了div时，也就单击了body，单击了html，单击了</h5><h5 id="document。" tabindex="-1"><a class="header-anchor" href="#document。" aria-hidden="true">#</a> document。</h5><h6 id="当时的-2-大浏览器霸主谁也不服谁" tabindex="-1"><a class="header-anchor" href="#当时的-2-大浏览器霸主谁也不服谁" aria-hidden="true">#</a> 当时的 2 大浏览器霸主谁也不服谁！</h6><h6 id="ie-提出从目标元素开始-然后一层一层向外接收事件并响应-也就是冒泡型事件流。" tabindex="-1"><a class="header-anchor" href="#ie-提出从目标元素开始-然后一层一层向外接收事件并响应-也就是冒泡型事件流。" aria-hidden="true">#</a> IE 提出从目标元素开始，然后一层一层向外接收事件并响应，也就是冒泡型事件流。</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Netscape（网景公司）提出从最外层开始，然后一层一层向内接收事件并响应，也就是捕获型事件流。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>江湖纷争，武林盟主也脑壳疼！！！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>最终，w3c 采用折中的方式，平息了战火，制定了统一的标准 —­­— 先捕获再冒泡。
现代浏览器都遵循了此标准，所以当事件发生时，会经历 3 个阶段。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="dom-事件流会经历-3-个阶段" tabindex="-1"><a class="header-anchor" href="#dom-事件流会经历-3-个阶段" aria-hidden="true">#</a> DOM 事件流会经历 3 个阶段：</h5><h5 id="_1-捕获阶段" tabindex="-1"><a class="header-anchor" href="#_1-捕获阶段" aria-hidden="true">#</a> 1. 捕获阶段</h5><h5 id="_2-当前目标阶段" tabindex="-1"><a class="header-anchor" href="#_2-当前目标阶段" aria-hidden="true">#</a> 2. 当前目标阶段</h5><h5 id="_3-冒泡阶段" tabindex="-1"><a class="header-anchor" href="#_3-冒泡阶段" aria-hidden="true">#</a> 3. 冒泡阶段</h5><h5 id="我们向水里面扔一块石头-首先它会有一个下降的过程-这个过程就可以理解为从最顶层向事件发生的最具体元素" tabindex="-1"><a class="header-anchor" href="#我们向水里面扔一块石头-首先它会有一个下降的过程-这个过程就可以理解为从最顶层向事件发生的最具体元素" aria-hidden="true">#</a> 我们向水里面扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素</h5><h5 id="目标点-的捕获过程-之后会产生泡泡-会在最低点-最具体元素-之后漂浮到水面上-这个过程相当于事件冒" tabindex="-1"><a class="header-anchor" href="#目标点-的捕获过程-之后会产生泡泡-会在最低点-最具体元素-之后漂浮到水面上-这个过程相当于事件冒" aria-hidden="true">#</a> （目标点）的捕获过程；之后会产生泡泡，会在最低点（ 最具体元素）之后漂浮到水面上，这个过程相当于事件冒</h5><h5 id="泡。" tabindex="-1"><a class="header-anchor" href="#泡。" aria-hidden="true">#</a> 泡。</h5><h5 id="事件冒泡" tabindex="-1"><a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a> 事件冒泡</h5><h5 id="事件捕获" tabindex="-1"><a class="header-anchor" href="#事件捕获" aria-hidden="true">#</a> 事件捕获</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;father&quot;&gt;
&lt;div class=&quot;son&quot;&gt;son盒子&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
// onclick 和 attachEvent（ie） 在冒泡阶段触发
// 冒泡阶段 如果addEventListener 第三个参数是 false 或者 省略
// son ­&gt; father ­&gt;body ­&gt; html ­&gt; document
var son = document.querySelector(&#39;.son&#39;);
// 给son注册单击事件
son.addEventListener(&#39;click&#39;, function() {
alert(&#39;son&#39;);
        }, false);
// 给father注册单击事件
var father = document.querySelector(&#39;.father&#39;);
father.addEventListener(&#39;click&#39;, function() {
alert(&#39;father&#39;);
        }, false);
// 给document注册单击事件，省略第 3 个参数
document.addEventListener(&#39;click&#39;, function() {
alert(&#39;document&#39;);
        })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-5-事件对象" tabindex="-1"><a class="header-anchor" href="#_1-3-5-事件对象" aria-hidden="true">#</a> 1.3.5. 事件对象</h3><h4 id="什么是事件对象" tabindex="-1"><a class="header-anchor" href="#什么是事件对象" aria-hidden="true">#</a> 什么是事件对象</h4><h5 id="事件发生后-跟事件相关的一系列信息数据的集合都放到这个对象里面-这个对象就是事件对象。" tabindex="-1"><a class="header-anchor" href="#事件发生后-跟事件相关的一系列信息数据的集合都放到这个对象里面-这个对象就是事件对象。" aria-hidden="true">#</a> 事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象。</h5><h5 id="比如" tabindex="-1"><a class="header-anchor" href="#比如" aria-hidden="true">#</a> 比如：</h5><h5 id="_1-谁绑定了这个事件。" tabindex="-1"><a class="header-anchor" href="#_1-谁绑定了这个事件。" aria-hidden="true">#</a> 1. 谁绑定了这个事件。</h5><h5 id="_2-鼠标触发事件的话-会得到鼠标的相关信息-如鼠标位置。" tabindex="-1"><a class="header-anchor" href="#_2-鼠标触发事件的话-会得到鼠标的相关信息-如鼠标位置。" aria-hidden="true">#</a> 2. 鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置。</h5><h5 id="_3-键盘触发事件的话-会得到键盘的相关信息-如按了哪个键。" tabindex="-1"><a class="header-anchor" href="#_3-键盘触发事件的话-会得到键盘的相关信息-如按了哪个键。" aria-hidden="true">#</a> 3. 键盘触发事件的话，会得到键盘的相关信息，如按了哪个键。</h5><h4 id="事件对象的使用" tabindex="-1"><a class="header-anchor" href="#事件对象的使用" aria-hidden="true">#</a> 事件对象的使用</h4><h5 id="事件触发发生时就会产生事件对象-并且系统会以实参的形式传给事件处理函数。" tabindex="-1"><a class="header-anchor" href="#事件触发发生时就会产生事件对象-并且系统会以实参的形式传给事件处理函数。" aria-hidden="true">#</a> 事件触发发生时就会产生事件对象，并且系统会以实参的形式传给事件处理函数。</h5><h5 id="所以-在事件处理函数中声明-1-个形参用来接收事件对象。" tabindex="-1"><a class="header-anchor" href="#所以-在事件处理函数中声明-1-个形参用来接收事件对象。" aria-hidden="true">#</a> 所以，在事件处理函数中声明 1 个形参用来接收事件对象。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;father&quot;&gt;
&lt;div class=&quot;son&quot;&gt;son盒子&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
// 如果addEventListener() 第三个参数是 true 那么在捕获阶段触发
// document ­&gt; html ­&gt; body ­&gt; father ­&gt; son
var son = document.querySelector(&#39;.son&#39;);
// 给son注册单击事件，第 3 个参数为true
son.addEventListener(&#39;click&#39;, function() {
alert(&#39;son&#39;);
         }, true);
var father = document.querySelector(&#39;.father&#39;);
// 给father注册单击事件，第 3 个参数为true
father.addEventListener(&#39;click&#39;, function() {
alert(&#39;father&#39;);
         }, true);
// 给document注册单击事件，第 3 个参数为true
document.addEventListener(&#39;click&#39;, function() {
alert(&#39;document&#39;);
        }, true)
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件对象的兼容性处理" tabindex="-1"><a class="header-anchor" href="#事件对象的兼容性处理" aria-hidden="true">#</a> 事件对象的兼容性处理</h4><h5 id="事件对象本身的获取存在兼容问题" tabindex="-1"><a class="header-anchor" href="#事件对象本身的获取存在兼容问题" aria-hidden="true">#</a> 事件对象本身的获取存在兼容问题：</h5><h5 id="_1-标准浏览器中是浏览器给方法传递的参数-只需要定义形参-e-就可以获取到。" tabindex="-1"><a class="header-anchor" href="#_1-标准浏览器中是浏览器给方法传递的参数-只需要定义形参-e-就可以获取到。" aria-hidden="true">#</a> 1. 标准浏览器中是浏览器给方法传递的参数，只需要定义形参 e 就可以获取到。</h5><h5 id="_2-在-ie6-8-中-浏览器不会给方法传递参数-如果需要的话-需要到-window-event-中获取查找。" tabindex="-1"><a class="header-anchor" href="#_2-在-ie6-8-中-浏览器不会给方法传递参数-如果需要的话-需要到-window-event-中获取查找。" aria-hidden="true">#</a> 2. 在 IE6~8 中，浏览器不会给方法传递参数，如果需要的话，需要到 window.event 中获取查找。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>只要“||”前面为false, 不管“||”后面是true 还是 false，都返回 “||” 后面的值。
只要“||”前面为true, 不管“||”后面是true 还是 false，都返回 “||” 前面的值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件对象的属性和方法" tabindex="-1"><a class="header-anchor" href="#事件对象的属性和方法" aria-hidden="true">#</a> 事件对象的属性和方法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt; 123 &lt;/div&gt;
&lt;script&gt;
var div = document.querySelector(&#39;div&#39;);
div.onclick = function(e) {
// 事件对象
e = e || window.event;
console.log(e);
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e-target-和-this-的区别" tabindex="-1"><a class="header-anchor" href="#e-target-和-this-的区别" aria-hidden="true">#</a> e.target 和 this 的区别</h4><h5 id="this-是事件绑定的元素-绑定这个事件处理函数的元素-。" tabindex="-1"><a class="header-anchor" href="#this-是事件绑定的元素-绑定这个事件处理函数的元素-。" aria-hidden="true">#</a> this 是事件绑定的元素（绑定这个事件处理函数的元素） 。</h5><h5 id="e-target-是事件触发的元素。" tabindex="-1"><a class="header-anchor" href="#e-target-是事件触发的元素。" aria-hidden="true">#</a> e.target 是事件触发的元素。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>常情况下terget 和 this是一致的，
但有一种情况不同，那就是在事件冒泡时（父子元素有相同事件，单击子元素，父元素的事件处理函数也会被触发
执行），
这时候this指向的是父元素，因为它是绑定事件的元素对象，
而target指向的是子元素，因为他是触发事件的那个具体元素对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="事件冒泡下的e-target和this" tabindex="-1"><a class="header-anchor" href="#事件冒泡下的e-target和this" aria-hidden="true">#</a> 事件冒泡下的e.target和this</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt; 123 &lt;/div&gt;
&lt;script&gt;
var div = document.querySelector(&#39;div&#39;);
div.addEventListener(&#39;click&#39;, function(e) {
// e.target 和 this指向的都是div
console.log(e.target);
console.log(this);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        });
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-6-阻止默认行为" tabindex="-1"><a class="header-anchor" href="#_1-3-6-阻止默认行为" aria-hidden="true">#</a> 1.3.6 阻止默认行为</h3><h5 id="html中一些标签有默认行为-例如a标签被单击后-默认会进行页面跳转。" tabindex="-1"><a class="header-anchor" href="#html中一些标签有默认行为-例如a标签被单击后-默认会进行页面跳转。" aria-hidden="true">#</a> html中一些标签有默认行为，例如a标签被单击后，默认会进行页面跳转。</h5><h3 id="_1-3-7-阻止事件冒泡" tabindex="-1"><a class="header-anchor" href="#_1-3-7-阻止事件冒泡" aria-hidden="true">#</a> 1.3.7 阻止事件冒泡</h3><h5 id="事件冒泡本身的特性-会带来的坏处-也会带来的好处。" tabindex="-1"><a class="header-anchor" href="#事件冒泡本身的特性-会带来的坏处-也会带来的好处。" aria-hidden="true">#</a> 事件冒泡本身的特性，会带来的坏处，也会带来的好处。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
&lt;li&gt;abc&lt;/li&gt;
&lt;li&gt;abc&lt;/li&gt;
&lt;li&gt;abc&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
var ul = document.querySelector(&#39;ul&#39;);
ul.addEventListener(&#39;click&#39;, function(e) {
// 我们给ul 绑定了事件 那么this 就指向ul  
console.log(this); // ul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// e.target 触发了事件的对象 我们点击的是li e.target 指向的就是li
console.log(e.target); // li
        });
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a href=&quot;http://www.baidu.com&quot;&gt;百度&lt;/a&gt;
&lt;script&gt;
// 2. 阻止默认行为 让链接不跳转
var a = document.querySelector(&#39;a&#39;);
a.addEventListener(&#39;click&#39;, function(e) {
e.preventDefault(); //  dom 标准写法
        });
// 3. 传统的注册方式
a.onclick = function(e) {
// 普通浏览器 e.preventDefault();  方法
e.preventDefault();
// 低版本浏览器 ie678  returnValue  属性
e.returnValue = false;
// 我们可以利用return false 也能阻止默认行为 没有兼容性问题
return false;
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="阻止事件冒泡的兼容性处理" tabindex="-1"><a class="header-anchor" href="#阻止事件冒泡的兼容性处理" aria-hidden="true">#</a> 阻止事件冒泡的兼容性处理</h5><h3 id="_1-3-8-事件委托" tabindex="-1"><a class="header-anchor" href="#_1-3-8-事件委托" aria-hidden="true">#</a> 1.3.8 事件委托</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;father&quot;&gt;
&lt;div class=&quot;son&quot;&gt;son儿子&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
var son = document.querySelector(&#39;.son&#39;);
// 给son注册单击事件
son.addEventListener(&#39;click&#39;, function(e) {
alert(&#39;son&#39;);
e.stopPropagation(); // stop 停止  Propagation 传播
window.event.cancelBubble = true; // 非标准 cancel 取消 bubble 泡泡
        }, false);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var father = document.querySelector(&#39;.father&#39;);
// 给father注册单击事件
father.addEventListener(&#39;click&#39;, function() {
alert(&#39;father&#39;);
        }, false);
// 给document注册单击事件
document.addEventListener(&#39;click&#39;, function() {
alert(&#39;document&#39;);
        })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="事件冒泡本身的特性-会带来的坏处-也会带来的好处。-1" tabindex="-1"><a class="header-anchor" href="#事件冒泡本身的特性-会带来的坏处-也会带来的好处。-1" aria-hidden="true">#</a> 事件冒泡本身的特性，会带来的坏处，也会带来的好处。</h5><h4 id="什么是事件委托" tabindex="-1"><a class="header-anchor" href="#什么是事件委托" aria-hidden="true">#</a> 什么是事件委托</h4><h6 id="把事情委托给别人-代为处理。" tabindex="-1"><a class="header-anchor" href="#把事情委托给别人-代为处理。" aria-hidden="true">#</a> 把事情委托给别人，代为处理。</h6><h5 id="事件委托也称为事件代理-在-jquery-里面称为事件委派。" tabindex="-1"><a class="header-anchor" href="#事件委托也称为事件代理-在-jquery-里面称为事件委派。" aria-hidden="true">#</a> 事件委托也称为事件代理，在 jQuery 里面称为事件委派。</h5><h5 id="说白了就是-不给子元素注册事件-给父元素注册事件-把处理代码在父元素的事件中执行。" tabindex="-1"><a class="header-anchor" href="#说白了就是-不给子元素注册事件-给父元素注册事件-把处理代码在父元素的事件中执行。" aria-hidden="true">#</a> 说白了就是，不给子元素注册事件，给父元素注册事件，把处理代码在父元素的事件中执行。</h5><h5 id="生活中的代理" tabindex="-1"><a class="header-anchor" href="#生活中的代理" aria-hidden="true">#</a> 生活中的代理：</h5><h5 id="js事件中的代理" tabindex="-1"><a class="header-anchor" href="#js事件中的代理" aria-hidden="true">#</a> js事件中的代理：</h5><h4 id="事件委托的原理" tabindex="-1"><a class="header-anchor" href="#事件委托的原理" aria-hidden="true">#</a> 事件委托的原理</h4><h5 id="给父元素注册事件-利用事件冒泡-当子元素的事件触发-会冒泡到父元素-然后去控制相应的子元素。" tabindex="-1"><a class="header-anchor" href="#给父元素注册事件-利用事件冒泡-当子元素的事件触发-会冒泡到父元素-然后去控制相应的子元素。" aria-hidden="true">#</a> 给父元素注册事件，利用事件冒泡，当子元素的事件触发，会冒泡到父元素，然后去控制相应的子元素。</h5><h4 id="事件委托的作用" tabindex="-1"><a class="header-anchor" href="#事件委托的作用" aria-hidden="true">#</a> 事件委托的作用</h4><h5 id="我们只操作了一次-dom-提高了程序的性能。" tabindex="-1"><a class="header-anchor" href="#我们只操作了一次-dom-提高了程序的性能。" aria-hidden="true">#</a> 我们只操作了一次 DOM ，提高了程序的性能。</h5><h5 id="动态新创建的子元素-也拥有事件。" tabindex="-1"><a class="header-anchor" href="#动态新创建的子元素-也拥有事件。" aria-hidden="true">#</a> 动态新创建的子元素，也拥有事件。</h5><h2 id="_1-4-常用鼠标事件" tabindex="-1"><a class="header-anchor" href="#_1-4-常用鼠标事件" aria-hidden="true">#</a> 1.4. 常用鼠标事件</h2><h3 id="_1-4-1-案例-禁止选中文字和禁止右键菜单" tabindex="-1"><a class="header-anchor" href="#_1-4-1-案例-禁止选中文字和禁止右键菜单" aria-hidden="true">#</a> 1.4.1 案例：禁止选中文字和禁止右键菜单</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
&lt;li&gt;知否知否，点我应有弹框在手！&lt;/li&gt;
&lt;li&gt;知否知否，点我应有弹框在手！&lt;/li&gt;
&lt;li&gt;知否知否，点我应有弹框在手！&lt;/li&gt;
&lt;li&gt;知否知否，点我应有弹框在手！&lt;/li&gt;
&lt;li&gt;知否知否，点我应有弹框在手！&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
// 事件委托的核心原理：给父节点添加侦听器， 利用事件冒泡影响每一个子节点
var ul = document.querySelector(&#39;ul&#39;);
ul.addEventListener(&#39;click&#39;, function(e) {
// e.target 这个可以得到我们点击的对象
e.target.style.backgroundColor = &#39;pink&#39;;
        })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-2-鼠标事件对象" tabindex="-1"><a class="header-anchor" href="#_1-4-2-鼠标事件对象" aria-hidden="true">#</a> 1.4.2 鼠标事件对象</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
我是一段不愿意分享的文字
&lt;script&gt;
// 1. contextmenu 我们可以禁用右键菜单
document.addEventListener(&#39;contextmenu&#39;, function(e) {
e.preventDefault();
        })
// 2. 禁止选中文字 selectstart
document.addEventListener(&#39;selectstart&#39;, function(e) {
e.preventDefault();
        })
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-3-获取鼠标在页面的坐标" tabindex="-1"><a class="header-anchor" href="#_1-4-3-获取鼠标在页面的坐标" aria-hidden="true">#</a> 1.4.3 获取鼠标在页面的坐标</h3><h3 id="_1-4-4-案例-跟随鼠标的天使" tabindex="-1"><a class="header-anchor" href="#_1-4-4-案例-跟随鼠标的天使" aria-hidden="true">#</a> 1.4.4 案例：跟随鼠标的天使</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 鼠标事件对象 MouseEvent
document.addEventListener(&#39;click&#39;, function(e) {
// 1. client 鼠标在可视区的x和y坐标
console.log(e.clientX);
console.log(e.clientY);
console.log(&#39;­­­­­­­­­­­­­­­­­­­­­&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 2. page 鼠标在页面文档的x和y坐标
console.log(e.pageX);
console.log(e.pageY);
console.log(&#39;­­­­­­­­­­­­­­­­­­­­­&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 3. screen 鼠标在电脑屏幕的x和y坐标
console.log(e.screenX);
console.log(e.screenY);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img^ src=&quot;images/angel.gif&quot;^ alt=&quot;&quot;&gt;
&lt;script&gt;
var pic = document.querySelector(&#39;img&#39;);
document.addEventListener(&#39;mousemove&#39;, function(e) {
// 1. mousemove只要我们鼠标移动1px 就会触发这个事件
// 2.核心原理： 每次鼠标移动，我们都会获得最新的鼠标坐标，
// 把这个x和y坐标做为图片的top和left 值就可以移动图片
var x = e.pageX;
var y = e.pageY;
console.log(&#39;x坐标是&#39; + x, &#39;y坐标是&#39; + y);
//3 . 千万不要忘记给left 和top 添加px 单位
pic.style.left = x ­  50  + &#39;px&#39;;
pic.style.top = y ­  40  + &#39;px&#39;;
});
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,140),s=[l];function r(t,v){return i(),n("div",null,s)}const h=e(a,[["render",r],["__file","03-webapis.html.vue"]]);export{h as default};

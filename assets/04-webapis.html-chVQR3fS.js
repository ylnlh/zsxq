import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,f as a}from"./app-tt0ZouaX.js";const d={},s=a(`<p>​</p><h1 id="day04-web-apis" tabindex="-1"><a class="header-anchor" href="#day04-web-apis" aria-hidden="true">#</a> day04 - Web APIs</h1><h5 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标：</h5><h5 id="能够说出常用的3-5个键盘事件" tabindex="-1"><a class="header-anchor" href="#能够说出常用的3-5个键盘事件" aria-hidden="true">#</a> 能够说出常用的3-5个键盘事件</h5><h5 id="能够知道如何获取当前键盘按下的是哪个键" tabindex="-1"><a class="header-anchor" href="#能够知道如何获取当前键盘按下的是哪个键" aria-hidden="true">#</a> 能够知道如何获取当前键盘按下的是哪个键</h5><h5 id="能够知道浏览器的顶级对象window" tabindex="-1"><a class="header-anchor" href="#能够知道浏览器的顶级对象window" aria-hidden="true">#</a> 能够知道浏览器的顶级对象window</h5><h5 id="能够使用window-onload事件" tabindex="-1"><a class="header-anchor" href="#能够使用window-onload事件" aria-hidden="true">#</a> 能够使用window.onload事件</h5><h5 id="能够使用window-onresize事件" tabindex="-1"><a class="header-anchor" href="#能够使用window-onresize事件" aria-hidden="true">#</a> 能够使用window.onresize事件</h5><h5 id="能够说出两种定时器的区别" tabindex="-1"><a class="header-anchor" href="#能够说出两种定时器的区别" aria-hidden="true">#</a> 能够说出两种定时器的区别</h5><h5 id="能够使用location对象的href属性完成页面之间的跳转" tabindex="-1"><a class="header-anchor" href="#能够使用location对象的href属性完成页面之间的跳转" aria-hidden="true">#</a> 能够使用location对象的href属性完成页面之间的跳转</h5><h5 id="能够使用location对象获取url中的参数部分" tabindex="-1"><a class="header-anchor" href="#能够使用location对象获取url中的参数部分" aria-hidden="true">#</a> 能够使用location对象获取url中的参数部分</h5><h5 id="能够使用history提供的方法实现页面刷新" tabindex="-1"><a class="header-anchor" href="#能够使用history提供的方法实现页面刷新" aria-hidden="true">#</a> 能够使用history提供的方法实现页面刷新</h5><h2 id="_1-1-常用的键盘事件" tabindex="-1"><a class="header-anchor" href="#_1-1-常用的键盘事件" aria-hidden="true">#</a> 1.1. 常用的键盘事件</h2><h2 id="_1-1-1-键盘事件" tabindex="-1"><a class="header-anchor" href="#_1-1-1-键盘事件" aria-hidden="true">#</a> 1.1.1 键盘事件</h2><h3 id="_1-1-2-键盘事件对象" tabindex="-1"><a class="header-anchor" href="#_1-1-2-键盘事件对象" aria-hidden="true">#</a> 1.1.2 键盘事件对象</h3><h5 id="使用keycode属性判断用户按下哪个键" tabindex="-1"><a class="header-anchor" href="#使用keycode属性判断用户按下哪个键" aria-hidden="true">#</a> 使用keyCode属性判断用户按下哪个键</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 常用的键盘事件
//1. keyup 按键弹起的时候触发
document.addEventListener(&#39;keyup&#39;, function() {
console.log(&#39;我弹起了&#39;);
        })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//3. keypress 按键按下的时候触发 不能识别功能键 比如 ctrl shift 左右箭头啊
document.addEventListener(&#39;keypress&#39;, function() {
console.log(&#39;我按下了press&#39;);
        })
//2. keydown 按键按下的时候触发 能识别功能键 比如 ctrl shift 左右箭头啊
document.addEventListener(&#39;keydown&#39;, function() {
console.log(&#39;我按下了down&#39;);
        })
// 4. 三个事件的执行顺序  keydown ­­ keypress ­­ keyup
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-案例-模拟京东按键输入内容" tabindex="-1"><a class="header-anchor" href="#_1-1-3-案例-模拟京东按键输入内容" aria-hidden="true">#</a> 1.1.3 案例：模拟京东按键输入内容</h3><h5 id="当我们按下-s-键-光标就定位到搜索框-文本框获得焦点-。" tabindex="-1"><a class="header-anchor" href="#当我们按下-s-键-光标就定位到搜索框-文本框获得焦点-。" aria-hidden="true">#</a> 当我们按下 s 键， 光标就定位到搜索框（文本框获得焦点）。</h5><h5 id="注意-触发获得焦点事件-可以使用-元素对象-focus" tabindex="-1"><a class="header-anchor" href="#注意-触发获得焦点事件-可以使用-元素对象-focus" aria-hidden="true">#</a> 注意：触发获得焦点事件，可以使用 元素对象.focus()</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 键盘事件对象中的keyCode属性可以得到相应键的ASCII码值
document.addEventListener(&#39;keyup&#39;, function(e) {
console.log(&#39;up:&#39; + e.keyCode);
// 我们可以利用keycode返回的ASCII码值来判断用户按下了那个键
if (e.keyCode ===  65 ) {
alert(&#39;您按下的a键&#39;);
            } else {
alert(&#39;您没有按下a键&#39;)
            }
        })
document.addEventListener(&#39;keypress&#39;, function(e) {
// console.log(e);
console.log(&#39;press:&#39; + e.keyCode);
        })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot;&gt;
&lt;script&gt;
// 获取输入框
var search = document.querySelector(&#39;input&#39;);
// 给document注册keyup事件
document.addEventListener(&#39;keyup&#39;, function(e) {
// 判断keyCode的值
if (e.keyCode ===  83 ) {
// 触发输入框的获得焦点事件
search.focus();
            }
        })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-案例-模拟京东快递单号查询" tabindex="-1"><a class="header-anchor" href="#_1-1-4-案例-模拟京东快递单号查询" aria-hidden="true">#</a> 1.1.4 案例：模拟京东快递单号查询</h3><h5 id="要求-当我们在文本框中输入内容时-文本框上面自动显示大字号的内容。" tabindex="-1"><a class="header-anchor" href="#要求-当我们在文本框中输入内容时-文本框上面自动显示大字号的内容。" aria-hidden="true">#</a> 要求：当我们在文本框中输入内容时，文本框上面自动显示大字号的内容。</h5><h2 id="_1-2-bom" tabindex="-1"><a class="header-anchor" href="#_1-2-bom" aria-hidden="true">#</a> 1.2. BOM</h2><h3 id="_1-2-1-什么是bom" tabindex="-1"><a class="header-anchor" href="#_1-2-1-什么是bom" aria-hidden="true">#</a> 1.2.1. 什么是BOM</h3><h5 id="bom-browser-object-model-即浏览器对象模型-它提供了独立于内容而与浏览器窗口进行交互的对象-其核" tabindex="-1"><a class="header-anchor" href="#bom-browser-object-model-即浏览器对象模型-它提供了独立于内容而与浏览器窗口进行交互的对象-其核" aria-hidden="true">#</a> BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核</h5><h5 id="心对象是-window。" tabindex="-1"><a class="header-anchor" href="#心对象是-window。" aria-hidden="true">#</a> 心对象是 window。</h5><h5 id="bom-由一系列相关的对象构成-并且每个对象都提供了很多方法与属性。" tabindex="-1"><a class="header-anchor" href="#bom-由一系列相关的对象构成-并且每个对象都提供了很多方法与属性。" aria-hidden="true">#</a> BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;search&quot;&gt;
&lt;div class=&quot;con&quot;&gt; 123 &lt;/div&gt;
&lt;input type=&quot;text&quot; placeholder=&quot;请输入您的快递单号&quot; class=&quot;jd&quot;&gt;
&lt;/div&gt;
&lt;script&gt;
// 获取要操作的元素
var con = document.querySelector(&#39;.con&#39;);
var jd_input = document.querySelector(&#39;.jd&#39;);
// 给输入框注册keyup事件
jd_input.addEventListener(&#39;keyup&#39;, function() {
// 判断输入框内容是否为空
if (this.value == &#39;&#39;) {
// 为空，隐藏放大提示盒子
con.style.display = &#39;none&#39;;
                } else {
// 不为空，显示放大提示盒子，设置盒子的内容
con.style.display = &#39;block&#39;;
con.innerText = this.value;
                }
            })
// 给输入框注册失去焦点事件，隐藏放大提示盒子
jd_input.addEventListener(&#39;blur&#39;, function() {
con.style.display = &#39;none&#39;;
            })
// 给输入框注册获得焦点事件
jd_input.addEventListener(&#39;focus&#39;, function() {
// 判断输入框内容是否为空
if (this.value !== &#39;&#39;) {
// 不为空则显示提示盒子
con.style.display = &#39;block&#39;;
            }
        })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="bom-缺乏标准-javascript-语法的标准化组织是-ecma-dom-的标准化组织是-w3c-bom-最初是netscape-浏" tabindex="-1"><a class="header-anchor" href="#bom-缺乏标准-javascript-语法的标准化组织是-ecma-dom-的标准化组织是-w3c-bom-最初是netscape-浏" aria-hidden="true">#</a> BOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C，BOM 最初是Netscape 浏</h5><h5 id="览器标准的一部分。" tabindex="-1"><a class="header-anchor" href="#览器标准的一部分。" aria-hidden="true">#</a> 览器标准的一部分。</h5><h3 id="_1-2-2-bom的构成" tabindex="-1"><a class="header-anchor" href="#_1-2-2-bom的构成" aria-hidden="true">#</a> 1.2.2. BOM的构成</h3><h5 id="bom-比-dom-更大-它包含-dom。" tabindex="-1"><a class="header-anchor" href="#bom-比-dom-更大-它包含-dom。" aria-hidden="true">#</a> BOM 比 DOM 更大，它包含 DOM。</h5><h3 id="_1-2-3-顶级对象window" tabindex="-1"><a class="header-anchor" href="#_1-2-3-顶级对象window" aria-hidden="true">#</a> 1.2.3. 顶级对象window</h3><h3 id="_1-2-4-window对象的常见事件" tabindex="-1"><a class="header-anchor" href="#_1-2-4-window对象的常见事件" aria-hidden="true">#</a> 1.2.4. window对象的常见事件</h3><h4 id="页面-窗口-加载事件-2-种" tabindex="-1"><a class="header-anchor" href="#页面-窗口-加载事件-2-种" aria-hidden="true">#</a> 页面（窗口）加载事件（ 2 种）</h4><h5 id="第-1-种" tabindex="-1"><a class="header-anchor" href="#第-1-种" aria-hidden="true">#</a> 第 1 种</h5><h5 id="window-onload-是窗口-页面-加载事件-当文档内容完全加载完成会触发该事件-包括图像、脚本文件、css-文" tabindex="-1"><a class="header-anchor" href="#window-onload-是窗口-页面-加载事件-当文档内容完全加载完成会触发该事件-包括图像、脚本文件、css-文" aria-hidden="true">#</a> window.onload 是窗口 (页面）加载事件，当文档内容完全加载完成会触发该事件(包括图像、脚本文件、CSS 文</h5><h5 id="件等-就调用的处理函数。" tabindex="-1"><a class="header-anchor" href="#件等-就调用的处理函数。" aria-hidden="true">#</a> 件等), 就调用的处理函数。</h5><h5 id="第-2-种" tabindex="-1"><a class="header-anchor" href="#第-2-种" aria-hidden="true">#</a> 第 2 种</h5><h5 id="domcontentloaded-事件触发时-仅当dom加载完成-不包括样式表-图片-flash等等。" tabindex="-1"><a class="header-anchor" href="#domcontentloaded-事件触发时-仅当dom加载完成-不包括样式表-图片-flash等等。" aria-hidden="true">#</a> DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等。</h5><h5 id="ie9以上才支持" tabindex="-1"><a class="header-anchor" href="#ie9以上才支持" aria-hidden="true">#</a> IE9以上才支持！！！</h5><h5 id="如果页面的图片很多的话-从用户访问到onload触发可能需要较长的时间-交互效果就不能实现-必然影响用户的" tabindex="-1"><a class="header-anchor" href="#如果页面的图片很多的话-从用户访问到onload触发可能需要较长的时间-交互效果就不能实现-必然影响用户的" aria-hidden="true">#</a> 如果页面的图片很多的话, 从用户访问到onload触发可能需要较长的时间, 交互效果就不能实现，必然影响用户的</h5><h5 id="体验-此时用-domcontentloaded-事件比较合适。" tabindex="-1"><a class="header-anchor" href="#体验-此时用-domcontentloaded-事件比较合适。" aria-hidden="true">#</a> 体验，此时用 DOMContentLoaded 事件比较合适。</h5><h4 id="调整窗口大小事件" tabindex="-1"><a class="header-anchor" href="#调整窗口大小事件" aria-hidden="true">#</a> 调整窗口大小事件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
window.addEventListener(&#39;load&#39;, function() {
var btn = document.querySelector(&#39;button&#39;);
btn.addEventListener(&#39;click&#39;, function() {
alert(&#39;点击我&#39;);
            })
        })
window.addEventListener(&#39;load&#39;, function() {
alert( 22 );
        })
document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
alert( 33 );
        })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="window-onresize-是调整窗口大小加载事件-当触发时就调用的处理函数。" tabindex="-1"><a class="header-anchor" href="#window-onresize-是调整窗口大小加载事件-当触发时就调用的处理函数。" aria-hidden="true">#</a> window.onresize 是调整窗口大小加载事件, 当触发时就调用的处理函数。</h5><h5 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h5><h5 id="_1-只要窗口大小发生像素变化-就会触发这个事件。" tabindex="-1"><a class="header-anchor" href="#_1-只要窗口大小发生像素变化-就会触发这个事件。" aria-hidden="true">#</a> 1. 只要窗口大小发生像素变化，就会触发这个事件。</h5><h5 id="_2-我们经常利用这个事件完成响应式布局。-window-innerwidth-当前屏幕的宽度" tabindex="-1"><a class="header-anchor" href="#_2-我们经常利用这个事件完成响应式布局。-window-innerwidth-当前屏幕的宽度" aria-hidden="true">#</a> 2. 我们经常利用这个事件完成响应式布局。 window.innerWidth 当前屏幕的宽度</h5><h3 id="_1-2-5-定时器-两种" tabindex="-1"><a class="header-anchor" href="#_1-2-5-定时器-两种" aria-hidden="true">#</a> 1.2.5. 定时器（两种）</h3><h5 id="window-对象给我们提供了-2-个非常好用的方法-定时器。" tabindex="-1"><a class="header-anchor" href="#window-对象给我们提供了-2-个非常好用的方法-定时器。" aria-hidden="true">#</a> window 对象给我们提供了 2 个非常好用的方法-定时器。</h5><h5 id="settimeout" tabindex="-1"><a class="header-anchor" href="#settimeout" aria-hidden="true">#</a> setTimeout()</h5><h5 id="setinterval" tabindex="-1"><a class="header-anchor" href="#setinterval" aria-hidden="true">#</a> setInterval()</h5><h4 id="settimeout-炸弹定时器" tabindex="-1"><a class="header-anchor" href="#settimeout-炸弹定时器" aria-hidden="true">#</a> setTimeout() 炸弹定时器</h4><h5 id="开启定时器" tabindex="-1"><a class="header-anchor" href="#开启定时器" aria-hidden="true">#</a> 开启定时器</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 注册页面加载事件
window.addEventListener(&#39;load&#39;, function() {
var div = document.querySelector(&#39;div&#39;);
// 注册调整窗口大小事件
window.addEventListener(&#39;resize&#39;, function() {
// window.innerWidth 获取窗口大小
console.log(&#39;变化了&#39;);
if (window.innerWidth &lt;=  800 ) {
div.style.display = &#39;none&#39;;
                } else {
div.style.display = &#39;block&#39;;
                }
            })
        })
&lt;/script&gt;
&lt;div&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="普通函数是按照代码顺序直接调用。" tabindex="-1"><a class="header-anchor" href="#普通函数是按照代码顺序直接调用。" aria-hidden="true">#</a> 普通函数是按照代码顺序直接调用。</h6><h6 id="简单理解-回调-就是回头调用的意思。上一件事干完-再回头再调用这个函数。" tabindex="-1"><a class="header-anchor" href="#简单理解-回调-就是回头调用的意思。上一件事干完-再回头再调用这个函数。" aria-hidden="true">#</a> 简单理解： 回调，就是回头调用的意思。上一件事干完，再回头再调用这个函数。</h6><h6 id="例如-定时器中的调用函数-事件处理函数-也是回调函数。" tabindex="-1"><a class="header-anchor" href="#例如-定时器中的调用函数-事件处理函数-也是回调函数。" aria-hidden="true">#</a> 例如：定时器中的调用函数，事件处理函数，也是回调函数。</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>以前我们讲的   element.onclick = function(){}   或者  element.addEventListener(“click”,
fn);   里面的 函数也是回调函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例-5-秒后关闭广告" tabindex="-1"><a class="header-anchor" href="#案例-5-秒后关闭广告" aria-hidden="true">#</a> 案例： 5 秒后关闭广告</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 回调函数是一个匿名函数
setTimeout(function() {
console.log(&#39;时间到了&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2000" tabindex="-1"><a class="header-anchor" href="#_2000" aria-hidden="true">#</a> },  2000 );</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function callback() {
console.log(&#39;爆炸了&#39;);
        }
// 回调函数是一个有名函数
var timer1 = setTimeout(callback,  3000 );
var timer2 = setTimeout(callback,  5000 );
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="停止定时器" tabindex="-1"><a class="header-anchor" href="#停止定时器" aria-hidden="true">#</a> 停止定时器</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;img src=&quot;images/ad.jpg&quot; alt=&quot;&quot; class=&quot;ad&quot;&gt;
&lt;script&gt;
// 获取要操作的元素
var ad = document.querySelector(&#39;.ad&#39;);
// 开启定时器
setTimeout(function() {
ad.style.display = &#39;none&#39;;
        },  5000 );
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button&gt;点击停止定时器&lt;/button&gt;
&lt;script&gt;
var btn = document.querySelector(&#39;button&#39;);
// 开启定时器
var timer = setTimeout(function() {
console.log(&#39;爆炸了&#39;);
        },  5000 );
// 给按钮注册单击事件
btn.addEventListener(&#39;click&#39;, function() {
// 停止定时器
clearTimeout(timer);
        })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setinterval-闹钟定时器" tabindex="-1"><a class="header-anchor" href="#setinterval-闹钟定时器" aria-hidden="true">#</a> setInterval() 闹钟定时器</h4><h5 id="开启定时器-1" tabindex="-1"><a class="header-anchor" href="#开启定时器-1" aria-hidden="true">#</a> 开启定时器</h5><h5 id="案例-倒计时" tabindex="-1"><a class="header-anchor" href="#案例-倒计时" aria-hidden="true">#</a> 案例：倒计时</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
// 1. setInterval
setInterval(function() {
console.log(&#39;继续输出&#39;);
        },  1000 );
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="停止定时器-1" tabindex="-1"><a class="header-anchor" href="#停止定时器-1" aria-hidden="true">#</a> 停止定时器</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;
&lt;span class=&quot;hour&quot;&gt; 1 &lt;/span&gt;
&lt;span class=&quot;minute&quot;&gt; 2 &lt;/span&gt;
&lt;span class=&quot;second&quot;&gt; 3 &lt;/span&gt;
&lt;/div&gt;
&lt;script&gt;
// 1. 获取元素（时分秒盒子）
var hour = document.querySelector(&#39;.hour&#39;); // 小时的黑色盒子
var minute = document.querySelector(&#39;.minute&#39;); // 分钟的黑色盒子
var second = document.querySelector(&#39;.second&#39;); // 秒数的黑色盒子
var inputTime = +new Date(&#39;2019­5­1 18:00:00&#39;); // 返回的是用户输入时间总的毫秒数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_2-开启定时器" tabindex="-1"><a class="header-anchor" href="#_2-开启定时器" aria-hidden="true">#</a> // 2. 开启定时器</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setInterval(countDown,  1000 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function countDown() {
var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
var times = (inputTime ­ nowTime) /  1000 ; // times是剩余时间总的秒数
var h = parseInt(times /  60  /  60  %  24 ); //时
h = h &lt;  10 ? &#39;0&#39; + h : h;
hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
var m = parseInt(times /  60  %  60 ); // 分
m = m &lt;  10 ? &#39;0&#39; + m : m;
minute.innerHTML = m;
var s = parseInt(times %  60 ); // 当前的秒
s = s &lt;  10 ? &#39;0&#39; + s : s;
second.innerHTML = s;
        }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例-发送短信倒计时" tabindex="-1"><a class="header-anchor" href="#案例-发送短信倒计时" aria-hidden="true">#</a> 案例：发送短信倒计时</h4><h5 id="点击按钮后-该按钮-60-秒之内不能再次点击-防止重复发送短信。" tabindex="-1"><a class="header-anchor" href="#点击按钮后-该按钮-60-秒之内不能再次点击-防止重复发送短信。" aria-hidden="true">#</a> 点击按钮后，该按钮 60 秒之内不能再次点击，防止重复发送短信。</h5><h3 id="_1-2-6-this指向问题" tabindex="-1"><a class="header-anchor" href="#_1-2-6-this指向问题" aria-hidden="true">#</a> 1.2.6. this指向问题</h3><h5 id="this的指向在函数定义的时候是确定不了的-只有函数执行的时候才能确定this到底指向谁-一般情况下this的最" tabindex="-1"><a class="header-anchor" href="#this的指向在函数定义的时候是确定不了的-只有函数执行的时候才能确定this到底指向谁-一般情况下this的最" aria-hidden="true">#</a> this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般情况下this的最</h5><h5 id="终指向的是那个调用它的对象。" tabindex="-1"><a class="header-anchor" href="#终指向的是那个调用它的对象。" aria-hidden="true">#</a> 终指向的是那个调用它的对象。</h5><h5 id="现阶段-我们先了解一下几个this指向" tabindex="-1"><a class="header-anchor" href="#现阶段-我们先了解一下几个this指向" aria-hidden="true">#</a> 现阶段，我们先了解一下几个this指向</h5><h5 id="_1-全局作用域或者普通函数中this指向全局对象window-注意定时器里面的this指向window" tabindex="-1"><a class="header-anchor" href="#_1-全局作用域或者普通函数中this指向全局对象window-注意定时器里面的this指向window" aria-hidden="true">#</a> 1. 全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window）</h5><h5 id="_2-方法调用中谁调用this指向谁" tabindex="-1"><a class="header-anchor" href="#_2-方法调用中谁调用this指向谁" aria-hidden="true">#</a> 2. 方法调用中谁调用this指向谁</h5><h5 id="_3-构造函数中this指向构造函数的实例" tabindex="-1"><a class="header-anchor" href="#_3-构造函数中this指向构造函数的实例" aria-hidden="true">#</a> 3. 构造函数中this指向构造函数的实例</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>手机号码： &lt;input type=&quot;number&quot;&gt; &lt;button&gt;发送&lt;/button&gt;
&lt;script&gt;
var btn = document.querySelector(&#39;button&#39;);
// 全局变量，定义剩下的秒数
var time =  3 ;
// 注册单击事件
btn.addEventListener(&#39;click&#39;, function() {
// 禁用按钮
btn.disabled = true;
// 开启定时器
var timer = setInterval(function() {
// 判断剩余秒数
if (time ==  0 ) {
// 清除定时器和复原按钮
clearInterval(timer);
btn.disabled = false;
btn.innerHTML = &#39;发送&#39;;
                } else {
btn.innerHTML = &#39;还剩下&#39; + time + &#39;秒&#39;;
time­­;
                }
            },  1000 );
        });
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-7-location对象" tabindex="-1"><a class="header-anchor" href="#_1-2-7-location对象" aria-hidden="true">#</a> 1.2.7. location对象</h3><h4 id="什么是-location-对象" tabindex="-1"><a class="header-anchor" href="#什么是-location-对象" aria-hidden="true">#</a> 什么是 location 对象</h4><h4 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button&gt;点击&lt;/button&gt;
&lt;script&gt;
// this 指向问题 一般情况下this的最终指向的是那个调用它的对象
// 1. 全局作用域或者普通函数中this指向全局对象window（ 注意定时器里面的this指向window）
console.log(this);
function fn() {
console.log(this);
        }
window.fn();
window.setTimeout(function() {
console.log(this);
        },  1000 );
// 2. 方法调用中谁调用this指向谁
var o = {
sayHi: function() {
console.log(this); // this指向的是 o 这个对象
            }
        }
o.sayHi();
var btn = document.querySelector(&#39;button&#39;);
btn.addEventListener(&#39;click&#39;, function() {
console.log(this); // 事件处理函数中的this指向的是btn这个按钮对象
            })
// 3. 构造函数中this指向构造函数的实例
function Fun() {
console.log(this); // this 指向的是fun 实例对象
        }
var fun = new Fun();
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="location-对象的属性" tabindex="-1"><a class="header-anchor" href="#location-对象的属性" aria-hidden="true">#</a> location 对象的属性</h4><h4 id="案例-5-分钟自动跳转页面" tabindex="-1"><a class="header-anchor" href="#案例-5-分钟自动跳转页面" aria-hidden="true">#</a> 案例： 5 分钟自动跳转页面</h4><h4 id="案例-获取url参数" tabindex="-1"><a class="header-anchor" href="#案例-获取url参数" aria-hidden="true">#</a> 案例：获取URL参数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button&gt;点击&lt;/button&gt;
&lt;div&gt;&lt;/div&gt;
&lt;script&gt;
var btn = document.querySelector(&#39;button&#39;);
var div = document.querySelector(&#39;div&#39;);
btn.addEventListener(&#39;click&#39;, function() {
// console.log(location.href);
location.href = &#39;http://www.itcast.cn&#39;;
        })
var timer =  5 ;
setInterval(function() {
if (timer ==  0 ) {
location.href = &#39;http://www.itcast.cn&#39;;
            } else {
div.innerHTML = &#39;您将在&#39; + timer + &#39;秒钟之后跳转到首页&#39;;
timer­­;
            }
        },  1000 );
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="location对象的常见方法" tabindex="-1"><a class="header-anchor" href="#location对象的常见方法" aria-hidden="true">#</a> location对象的常见方法</h4><h3 id="_1-2-8-navigator对象" tabindex="-1"><a class="header-anchor" href="#_1-2-8-navigator对象" aria-hidden="true">#</a> 1.2.8. navigator对象</h3><h5 id="navigator-对象包含有关浏览器的信息-它有很多属性-我们最常用的是-useragent-该属性可以返回由客户机发" tabindex="-1"><a class="header-anchor" href="#navigator-对象包含有关浏览器的信息-它有很多属性-我们最常用的是-useragent-该属性可以返回由客户机发" aria-hidden="true">#</a> navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，该属性可以返回由客户机发</h5><h5 id="送服务器的-user-agent-头部的值。" tabindex="-1"><a class="header-anchor" href="#送服务器的-user-agent-头部的值。" aria-hidden="true">#</a> 送服务器的 user-agent 头部的值。</h5><h5 id="下面前端代码可以判断用户那个终端打开页面-实现跳转" tabindex="-1"><a class="header-anchor" href="#下面前端代码可以判断用户那个终端打开页面-实现跳转" aria-hidden="true">#</a> 下面前端代码可以判断用户那个终端打开页面，实现跳转</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;&lt;/div&gt;
&lt;script&gt;
console.log(location.search); // ?uname=andy
// 1.先去掉？  substr(&#39;起始的位置&#39;，截取几个字符);
var params = location.search.substr( 1 ); // uname=andy
console.log(params);
// 2. 利用=把字符串分割为数组 split(&#39;=&#39;);
var arr = params.split(&#39;=&#39;);
console.log(arr); // [&quot;uname&quot;, &quot;ANDY&quot;]
var div = document.querySelector(&#39;div&#39;);
// 3.把数据写入div中
div.innerHTML = arr[ 1 ] + &#39;欢迎您&#39;;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button&gt;点击&lt;/button&gt;
&lt;script&gt;
var btn = document.querySelector(&#39;button&#39;);
btn.addEventListener(&#39;click&#39;, function() {
// 记录浏览历史，所以可以实现后退功能
// location.assign(&#39;http://www.itcast.cn&#39;);
// 不记录浏览历史，所以不可以实现后退功能
// location.replace(&#39;http://www.itcast.cn&#39;);
location.reload(true);
        })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-9-history对象" tabindex="-1"><a class="header-anchor" href="#_1-2-9-history对象" aria-hidden="true">#</a> 1.2.9 history对象</h3><h5 id="window对象给我们提供了一个-history对象-与浏览器历史记录进行交互。该对象包含用户-在浏览器窗口中" tabindex="-1"><a class="header-anchor" href="#window对象给我们提供了一个-history对象-与浏览器历史记录进行交互。该对象包含用户-在浏览器窗口中" aria-hidden="true">#</a> window对象给我们提供了一个 history对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）</h5><h5 id="访问过的url。" tabindex="-1"><a class="header-anchor" href="#访问过的url。" aria-hidden="true">#</a> 访问过的URL。</h5><h5 id="history对象一般在实际开发中比较少用-但是会在一些-oa-办公系统中见到。" tabindex="-1"><a class="header-anchor" href="#history对象一般在实际开发中比较少用-但是会在一些-oa-办公系统中见到。" aria-hidden="true">#</a> history对象一般在实际开发中比较少用，但是会在一些 OA 办公系统中见到。</h5><h2 id="_1-3-js执行机制" tabindex="-1"><a class="header-anchor" href="#_1-3-js执行机制" aria-hidden="true">#</a> 1.3. JS执行机制</h2><h5 id="以下代码执行的结果是什么" tabindex="-1"><a class="header-anchor" href="#以下代码执行的结果是什么" aria-hidden="true">#</a> 以下代码执行的结果是什么？</h5><h5 id="以下代码执行的结果是什么-1" tabindex="-1"><a class="header-anchor" href="#以下代码执行的结果是什么-1" aria-hidden="true">#</a> 以下代码执行的结果是什么？</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBer
ry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
window.location.href = &quot;&quot;;     //手机
 } else {
window.location.href = &quot;&quot;;     //电脑
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log( 1 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout(function () {
console.log( 3 );
 },  1000 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log( 2 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-1-js-是单线程" tabindex="-1"><a class="header-anchor" href="#_1-3-1-js-是单线程" aria-hidden="true">#</a> 1.3.1 JS 是单线程</h3><h3 id="_1-3-2-同步任务和异步任务" tabindex="-1"><a class="header-anchor" href="#_1-3-2-同步任务和异步任务" aria-hidden="true">#</a> 1.3.2 同步任务和异步任务</h3><h5 id="单线程导致的问题就是后面的任务等待前面任务完成-如果前面任务很耗时-比如读取网络数据-后面任务不得" tabindex="-1"><a class="header-anchor" href="#单线程导致的问题就是后面的任务等待前面任务完成-如果前面任务很耗时-比如读取网络数据-后面任务不得" aria-hidden="true">#</a> 单线程导致的问题就是后面的任务等待前面任务完成，如果前面任务很耗时（比如读取网络数据），后面任务不得</h5><h5 id="不一直等待" tabindex="-1"><a class="header-anchor" href="#不一直等待" aria-hidden="true">#</a> 不一直等待！！</h5><h5 id="为了解决这个问题-利用多核-cpu-的计算能力-html5-提出-web-worker-标准-允许-javascript-脚本创建多个" tabindex="-1"><a class="header-anchor" href="#为了解决这个问题-利用多核-cpu-的计算能力-html5-提出-web-worker-标准-允许-javascript-脚本创建多个" aria-hidden="true">#</a> 为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个</h5><h5 id="线程-但是子线程完全受主线程控制。于是-js-中出现了同步任务和异步任务。" tabindex="-1"><a class="header-anchor" href="#线程-但是子线程完全受主线程控制。于是-js-中出现了同步任务和异步任务。" aria-hidden="true">#</a> 线程，但是子线程完全受主线程控制。于是，JS 中出现了同步任务和异步任务。</h5><h4 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h4><h5 id="前一个任务结束后再执行后一个任务-程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做" tabindex="-1"><a class="header-anchor" href="#前一个任务结束后再执行后一个任务-程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做" aria-hidden="true">#</a> 前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做</h5><h5 id="法-我们要烧水煮饭-等水开了-10-分钟之后-再去切菜-炒菜。" tabindex="-1"><a class="header-anchor" href="#法-我们要烧水煮饭-等水开了-10-分钟之后-再去切菜-炒菜。" aria-hidden="true">#</a> 法：我们要烧水煮饭，等水开了（ 10 分钟之后），再去切菜，炒菜。</h5><h4 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h4><h5 id="你在做一件事情时-因为这件事情会花费很长时间-在做这件事的同时-你还可以去处理其他事情。比如做饭的异" tabindex="-1"><a class="header-anchor" href="#你在做一件事情时-因为这件事情会花费很长时间-在做这件事的同时-你还可以去处理其他事情。比如做饭的异" aria-hidden="true">#</a> 你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。比如做饭的异</h5><h5 id="步做法-我们在烧水的同时-利用这-10-分钟-去切菜-炒菜。" tabindex="-1"><a class="header-anchor" href="#步做法-我们在烧水的同时-利用这-10-分钟-去切菜-炒菜。" aria-hidden="true">#</a> 步做法，我们在烧水的同时，利用这 10 分钟，去切菜，炒菜。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log( 1 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout(function () {
console.log( 3 );
 },  0 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log( 2 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="单线程就意味着-所有任务需要排队-前一个任务结束-才会执行后一个任务。如果前一个任务耗时很长-后一个" tabindex="-1"><a class="header-anchor" href="#单线程就意味着-所有任务需要排队-前一个任务结束-才会执行后一个任务。如果前一个任务耗时很长-后一个" aria-hidden="true">#</a> 单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个</h6><h6 id="任务就不得不一直等着。" tabindex="-1"><a class="header-anchor" href="#任务就不得不一直等着。" aria-hidden="true">#</a> 任务就不得不一直等着。</h6><h6 id="这样所导致的问题是-如果-js-执行的时间过长-这样就会造成页面的渲染不连贯-导致页面渲染加载阻塞的感" tabindex="-1"><a class="header-anchor" href="#这样所导致的问题是-如果-js-执行的时间过长-这样就会造成页面的渲染不连贯-导致页面渲染加载阻塞的感" aria-hidden="true">#</a> 这样所导致的问题是： 如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感</h6><h6 id="觉。" tabindex="-1"><a class="header-anchor" href="#觉。" aria-hidden="true">#</a> 觉。</h6><h3 id="_1-3-3-js执行机制-事件循环" tabindex="-1"><a class="header-anchor" href="#_1-3-3-js执行机制-事件循环" aria-hidden="true">#</a> 1.3.3 JS执行机制（事件循环）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JS中所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="同步任务指的是" tabindex="-1"><a class="header-anchor" href="#同步任务指的是" aria-hidden="true">#</a> 同步任务指的是：</h6><h6 id="在主线程上排队执行的任务-只有前一个任务执行完毕-才能执行后一个任务" tabindex="-1"><a class="header-anchor" href="#在主线程上排队执行的任务-只有前一个任务执行完毕-才能执行后一个任务" aria-hidden="true">#</a> 在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；</h6><h6 id="异步任务指的是" tabindex="-1"><a class="header-anchor" href="#异步任务指的是" aria-hidden="true">#</a> 异步任务指的是：</h6><h6 id="不进入主线程、而进入-任务队列-的任务-当主线程中的任务运行完了-才会从-任务队列-取出异步任务放" tabindex="-1"><a class="header-anchor" href="#不进入主线程、而进入-任务队列-的任务-当主线程中的任务运行完了-才会从-任务队列-取出异步任务放" aria-hidden="true">#</a> 不进入主线程、而进入”任务队列”的任务，当主线程中的任务运行完了，才会从”任务队列”取出异步任务放</h6><h6 id="入主线程执行。" tabindex="-1"><a class="header-anchor" href="#入主线程执行。" aria-hidden="true">#</a> 入主线程执行。</h6><h3 id="_1-3-4-代码思考题" tabindex="-1"><a class="header-anchor" href="#_1-3-4-代码思考题" aria-hidden="true">#</a> 1.3.4 代码思考题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log( 1 );
document.onclick = function() {
console.log(&#39;click&#39;);
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout(function() {
console.log( 3 )
 },  3000 )
console.log( 2 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,145),r=[s];function l(t,c){return i(),n("div",null,r)}const u=e(d,[["render",l],["__file","04-webapis.html.vue"]]);export{u as default};

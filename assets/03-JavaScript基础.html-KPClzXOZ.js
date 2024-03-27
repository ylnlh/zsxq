import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,f as n}from"./app-hz3rNBT8.js";const d={},s=n(`<h1 id="javascript高级第-03-天笔记" tabindex="-1"><a class="header-anchor" href="#javascript高级第-03-天笔记" aria-hidden="true">#</a> JavaScript高级第 03 天笔记</h1><h2 id="_1-函数的定义和调用" tabindex="-1"><a class="header-anchor" href="#_1-函数的定义和调用" aria-hidden="true">#</a> 1 .函数的定义和调用</h2><h2 id="_1-1-函数的定义方式" tabindex="-1"><a class="header-anchor" href="#_1-1-函数的定义方式" aria-hidden="true">#</a> 1. 1 函数的定义方式</h2><h5 id="_1-方式-1-函数声明方式-function-关键字-命名函数" tabindex="-1"><a class="header-anchor" href="#_1-方式-1-函数声明方式-function-关键字-命名函数" aria-hidden="true">#</a> 1. 方式 1 函数声明方式 function 关键字 (命名函数)</h5><h5 id="_2-方式-2-函数表达式-匿名函数" tabindex="-1"><a class="header-anchor" href="#_2-方式-2-函数表达式-匿名函数" aria-hidden="true">#</a> 2. 方式 2 函数表达式(匿名函数)</h5><h5 id="_3-方式-3-new-function" tabindex="-1"><a class="header-anchor" href="#_3-方式-3-new-function" aria-hidden="true">#</a> 3. 方式 3 new Function()</h5><h2 id="_1-2-函数的调用" tabindex="-1"><a class="header-anchor" href="#_1-2-函数的调用" aria-hidden="true">#</a> 1. 2 函数的调用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn(){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var fn = function(){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var f = new Function(&#39;a&#39;, &#39;b&#39;, &#39;console.log(a + b)&#39;);
f( 1 ,  2 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var fn = new Function(&#39;参数 1 &#39;,&#39;参数 2 &#39;..., &#39;函数体&#39;)
注意
/*Function 里面参数都必须是字符串格式
第三种方式执行效率低，也不方便书写，因此较少使用
所有函数都是 Function 的实例(对象)
函数也属于对象
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-this" tabindex="-1"><a class="header-anchor" href="#_2-this" aria-hidden="true">#</a> 2 .this</h2><h3 id="_2-1-函数内部的this指向" tabindex="-1"><a class="header-anchor" href="#_2-1-函数内部的this指向" aria-hidden="true">#</a> 2. 1 函数内部的this指向</h3><h5 id="这些-this-的指向-是当我们调用函数的时候确定的。调用方式的不同决定了this-的指向" tabindex="-1"><a class="header-anchor" href="#这些-this-的指向-是当我们调用函数的时候确定的。调用方式的不同决定了this-的指向" aria-hidden="true">#</a> 这些 this 的指向，是当我们调用函数的时候确定的。调用方式的不同决定了this 的指向</h5><h5 id="不同" tabindex="-1"><a class="header-anchor" href="#不同" aria-hidden="true">#</a> 不同</h5><h5 id="一般指向我们的调用者" tabindex="-1"><a class="header-anchor" href="#一般指向我们的调用者" aria-hidden="true">#</a> 一般指向我们的调用者.</h5><h6 id="_1-普通函数" tabindex="-1"><a class="header-anchor" href="#_1-普通函数" aria-hidden="true">#</a> /*  1. 普通函数 */</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn() {
console.log(&#39;人生的巅峰&#39;);
}
fn();
/*  2. 对象的方法 */
var o = {
sayHi: function() {
console.log(&#39;人生的巅峰&#39;);
}
}
o.sayHi();
/*  3. 构造函数*/
function Star() {};
new Star();
/*  4. 绑定事件函数*/
btn.onclick = function() {}; // 点击了按钮就可以调用这个函数
/*  5. 定时器函数*/
setInterval(function() {},  1000 ); 这个函数是定时器自动 1 秒钟调用一次
/*  6. 立即执行函数(自调用函数)*/
(function() {
console.log(&#39;人生的巅峰&#39;);
})();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-改变函数内部-this-指向" tabindex="-1"><a class="header-anchor" href="#_2-2-改变函数内部-this-指向" aria-hidden="true">#</a> 2. 2 改变函数内部 this 指向</h3><h4 id="_2-2-1-call方法" tabindex="-1"><a class="header-anchor" href="#_2-2-1-call方法" aria-hidden="true">#</a> 2. 2. 1 call方法</h4><h5 id="call-方法调用一个对象。简单理解为调用函数的方式-但是它可以改变函数的-this-指向" tabindex="-1"><a class="header-anchor" href="#call-方法调用一个对象。简单理解为调用函数的方式-但是它可以改变函数的-this-指向" aria-hidden="true">#</a> call()方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的 this 指向</h5><h5 id="应用场景-经常做继承" tabindex="-1"><a class="header-anchor" href="#应用场景-经常做继承" aria-hidden="true">#</a> 应用场景: 经常做继承.</h5><h5 id="以上代码运行结果为" tabindex="-1"><a class="header-anchor" href="#以上代码运行结果为" aria-hidden="true">#</a> 以上代码运行结果为:</h5><h4 id="_2-2-2-apply方法" tabindex="-1"><a class="header-anchor" href="#_2-2-2-apply方法" aria-hidden="true">#</a> 2. 2. 2 apply方法</h4><h5 id="apply-方法调用一个函数。简单理解为调用函数的方式-但是它可以改变函数的-this-指" tabindex="-1"><a class="header-anchor" href="#apply-方法调用一个函数。简单理解为调用函数的方式-但是它可以改变函数的-this-指" aria-hidden="true">#</a> apply() 方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的 this 指</h5><h5 id="向。" tabindex="-1"><a class="header-anchor" href="#向。" aria-hidden="true">#</a> 向。</h5><h5 id="应用场景-经常跟数组有关系" tabindex="-1"><a class="header-anchor" href="#应用场景-经常跟数组有关系" aria-hidden="true">#</a> 应用场景: 经常跟数组有关系</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var o = {
name: &#39;andy&#39;
}
function fn(a, b) {
console.log(this);
console.log(a+b)
};
fn( 1 , 2 )// 此时的this指向的是window 运行结果为 3
fn.call(o, 1 , 2 )//此时的this指向的是对象o,参数使用逗号隔开,运行结果为 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-bind方法" tabindex="-1"><a class="header-anchor" href="#_2-2-3-bind方法" aria-hidden="true">#</a> 2. 2. 3 bind方法</h4><h5 id="bind-方法不会调用函数-但是能改变函数内部this-指向-返回的是原函数改变this之后产" tabindex="-1"><a class="header-anchor" href="#bind-方法不会调用函数-但是能改变函数内部this-指向-返回的是原函数改变this之后产" aria-hidden="true">#</a> bind() 方法不会调用函数,但是能改变函数内部this 指向,返回的是原函数改变this之后产</h5><h5 id="生的新函数" tabindex="-1"><a class="header-anchor" href="#生的新函数" aria-hidden="true">#</a> 生的新函数</h5><h5 id="如果只是想改变-this-指向-并且不想调用这个函数的时候-可以使用bind" tabindex="-1"><a class="header-anchor" href="#如果只是想改变-this-指向-并且不想调用这个函数的时候-可以使用bind" aria-hidden="true">#</a> 如果只是想改变 this 指向，并且不想调用这个函数的时候，可以使用bind</h5><h5 id="应用场景-不调用函数-但是还想改变this指向" tabindex="-1"><a class="header-anchor" href="#应用场景-不调用函数-但是还想改变this指向" aria-hidden="true">#</a> 应用场景:不调用函数,但是还想改变this指向</h5><h4 id="_2-2-4-call、apply、bind三者的异同" tabindex="-1"><a class="header-anchor" href="#_2-2-4-call、apply、bind三者的异同" aria-hidden="true">#</a> 2. 2. 4 call、apply、bind三者的异同</h4><h5 id="共同点-都可以改变this指向" tabindex="-1"><a class="header-anchor" href="#共同点-都可以改变this指向" aria-hidden="true">#</a> 共同点 : 都可以改变this指向</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var o = {
name: &#39;andy&#39;
}
function fn(a, b) {
console.log(this);
console.log(a+b)
};
fn()// 此时的this指向的是window 运行结果为 3
fn.apply(o,[ 1 , 2 ])//此时的this指向的是对象o,参数使用数组传递 运行结果为 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var o = {
name: &#39;andy&#39;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn(a, b) {
console.log(this);
console.log(a + b);
};
var f = fn.bind(o,  1 ,  2 ); //此处的f是bind返回的新函数
f();//调用新函数 this指向的是对象o 参数使用逗号隔开
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点:</h5><h5 id="call-和-apply-会调用函数-并且改变函数内部this指向" tabindex="-1"><a class="header-anchor" href="#call-和-apply-会调用函数-并且改变函数内部this指向" aria-hidden="true">#</a> call 和 apply 会调用函数, 并且改变函数内部this指向.</h5><h5 id="call-和-apply传递的参数不一样-call传递参数使用逗号隔开-apply使用数组传递" tabindex="-1"><a class="header-anchor" href="#call-和-apply传递的参数不一样-call传递参数使用逗号隔开-apply使用数组传递" aria-hidden="true">#</a> call 和 apply传递的参数不一样,call传递参数使用逗号隔开,apply使用数组传递</h5><h5 id="bind-不会调用函数-可以改变函数内部this指向" tabindex="-1"><a class="header-anchor" href="#bind-不会调用函数-可以改变函数内部this指向" aria-hidden="true">#</a> bind 不会调用函数, 可以改变函数内部this指向.</h5><h5 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h5><h5 id="_1-call-经常做继承" tabindex="-1"><a class="header-anchor" href="#_1-call-经常做继承" aria-hidden="true">#</a> 1. call 经常做继承.</h5><h5 id="_2-apply经常跟数组有关系-比如借助于数学对象实现数组最大值最小值" tabindex="-1"><a class="header-anchor" href="#_2-apply经常跟数组有关系-比如借助于数学对象实现数组最大值最小值" aria-hidden="true">#</a> 2. apply经常跟数组有关系. 比如借助于数学对象实现数组最大值最小值</h5><h5 id="_3-bind-不调用函数-但是还想改变this指向-比如改变定时器内部的this指向" tabindex="-1"><a class="header-anchor" href="#_3-bind-不调用函数-但是还想改变this指向-比如改变定时器内部的this指向" aria-hidden="true">#</a> 3. bind 不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向.</h5><h2 id="_3-严格模式" tabindex="-1"><a class="header-anchor" href="#_3-严格模式" aria-hidden="true">#</a> 3 .严格模式</h2><h3 id="_3-1-什么是严格模式" tabindex="-1"><a class="header-anchor" href="#_3-1-什么是严格模式" aria-hidden="true">#</a> 3. 1 什么是严格模式</h3><h5 id="javascript-除了提供正常模式外-还提供了严格模式-strict-mode-。es-5-的严格模式" tabindex="-1"><a class="header-anchor" href="#javascript-除了提供正常模式外-还提供了严格模式-strict-mode-。es-5-的严格模式" aria-hidden="true">#</a> JavaScript 除了提供正常模式外，还提供了严格模式（strict mode）。ES 5 的严格模式</h5><h5 id="是采用具有限制性-javascript变体的一种方式-即在严格的条件下运行-js-代码。" tabindex="-1"><a class="header-anchor" href="#是采用具有限制性-javascript变体的一种方式-即在严格的条件下运行-js-代码。" aria-hidden="true">#</a> 是采用具有限制性 JavaScript变体的一种方式，即在严格的条件下运行 JS 代码。</h5><h5 id="严格模式在-ie-10-以上版本的浏览器中才会被支持-旧版本浏览器中会被忽略。" tabindex="-1"><a class="header-anchor" href="#严格模式在-ie-10-以上版本的浏览器中才会被支持-旧版本浏览器中会被忽略。" aria-hidden="true">#</a> 严格模式在 IE 10 以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略。</h5><h5 id="严格模式对正常的-javascript-语义做了一些更改" tabindex="-1"><a class="header-anchor" href="#严格模式对正常的-javascript-语义做了一些更改" aria-hidden="true">#</a> 严格模式对正常的 JavaScript 语义做了一些更改：</h5><h5 id="_1-消除了-javascript-语法的一些不合理、不严谨之处-减少了一些怪异行为。" tabindex="-1"><a class="header-anchor" href="#_1-消除了-javascript-语法的一些不合理、不严谨之处-减少了一些怪异行为。" aria-hidden="true">#</a> 1 .消除了 Javascript 语法的一些不合理、不严谨之处，减少了一些怪异行为。</h5><h5 id="_2-消除代码运行的一些不安全之处-保证代码运行的安全。" tabindex="-1"><a class="header-anchor" href="#_2-消除代码运行的一些不安全之处-保证代码运行的安全。" aria-hidden="true">#</a> 2 .消除代码运行的一些不安全之处，保证代码运行的安全。</h5><h5 id="_3-提高编译器效率-增加运行速度。" tabindex="-1"><a class="header-anchor" href="#_3-提高编译器效率-增加运行速度。" aria-hidden="true">#</a> 3 .提高编译器效率，增加运行速度。</h5><h5 id="_4-禁用了在-ecmascript-的未来版本中可能会定义的一些语法-为未来新版本的" tabindex="-1"><a class="header-anchor" href="#_4-禁用了在-ecmascript-的未来版本中可能会定义的一些语法-为未来新版本的" aria-hidden="true">#</a> 4 .禁用了在 ECMAScript 的未来版本中可能会定义的一些语法，为未来新版本的</h5><h5 id="javascript-做好铺垫。比如一些保留字如-class-enum-export-extends-import-super" tabindex="-1"><a class="header-anchor" href="#javascript-做好铺垫。比如一些保留字如-class-enum-export-extends-import-super" aria-hidden="true">#</a> Javascript 做好铺垫。比如一些保留字如：class,enum,export, extends, import, super</h5><h5 id="不能做变量名" tabindex="-1"><a class="header-anchor" href="#不能做变量名" aria-hidden="true">#</a> 不能做变量名</h5><h3 id="_3-2-开启严格模式" tabindex="-1"><a class="header-anchor" href="#_3-2-开启严格模式" aria-hidden="true">#</a> 3. 2 开启严格模式</h3><h5 id="严格模式可以应用到整个脚本或个别函数中。因此在使用时-我们可以将严格模式分为" tabindex="-1"><a class="header-anchor" href="#严格模式可以应用到整个脚本或个别函数中。因此在使用时-我们可以将严格模式分为" aria-hidden="true">#</a> 严格模式可以应用到整个脚本或个别函数中。因此在使用时，我们可以将严格模式分为</h5><h5 id="为脚本开启严格模式和为函数开启严格模式两种情况。" tabindex="-1"><a class="header-anchor" href="#为脚本开启严格模式和为函数开启严格模式两种情况。" aria-hidden="true">#</a> 为脚本开启严格模式和为函数开启严格模式两种情况。</h5><h5 id="情况一-为脚本开启严格模式" tabindex="-1"><a class="header-anchor" href="#情况一-为脚本开启严格模式" aria-hidden="true">#</a> 情况一 :为脚本开启严格模式</h5><h5 id="有的-script-脚本是严格模式-有的-script-脚本是正常模式-这样不利于文件合" tabindex="-1"><a class="header-anchor" href="#有的-script-脚本是严格模式-有的-script-脚本是正常模式-这样不利于文件合" aria-hidden="true">#</a> 有的 script 脚本是严格模式，有的 script 脚本是正常模式，这样不利于文件合</h5><h5 id="并-所以可以将整个脚本文件放在一个立即执行的匿名函数之中。这样独立创建" tabindex="-1"><a class="header-anchor" href="#并-所以可以将整个脚本文件放在一个立即执行的匿名函数之中。这样独立创建" aria-hidden="true">#</a> 并，所以可以将整个脚本文件放在一个立即执行的匿名函数之中。这样独立创建</h5><h5 id="一个作用域而不影响其他" tabindex="-1"><a class="header-anchor" href="#一个作用域而不影响其他" aria-hidden="true">#</a> 一个作用域而不影响其他</h5><h5 id="script-脚本文件。" tabindex="-1"><a class="header-anchor" href="#script-脚本文件。" aria-hidden="true">#</a> script 脚本文件。</h5><h5 id="情况二-为函数开启严格模式" tabindex="-1"><a class="header-anchor" href="#情况二-为函数开启严格模式" aria-hidden="true">#</a> 情况二: 为函数开启严格模式</h5><h5 id="要给某个函数开启严格模式-需要把-use-strict-或-use-strict-声明放在函数" tabindex="-1"><a class="header-anchor" href="#要给某个函数开启严格模式-需要把-use-strict-或-use-strict-声明放在函数" aria-hidden="true">#</a> 要给某个函数开启严格模式，需要把“use strict”; (或 &#39;use strict&#39;; ) 声明放在函数</h5><h5 id="体所有语句之前。" tabindex="-1"><a class="header-anchor" href="#体所有语句之前。" aria-hidden="true">#</a> 体所有语句之前。</h5><h3 id="_3-3-严格模式中的变化" tabindex="-1"><a class="header-anchor" href="#_3-3-严格模式中的变化" aria-hidden="true">#</a> 3. 3 严格模式中的变化</h3><h5 id="严格模式对-javascript-的语法和行为-都做了一些改变。" tabindex="-1"><a class="header-anchor" href="#严格模式对-javascript-的语法和行为-都做了一些改变。" aria-hidden="true">#</a> 严格模式对 Javascript 的语法和行为，都做了一些改变。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function (){
//在当前的这个自调用函数中有开启严格模式，当前函数之外还是普通模式
&quot;use strict&quot;;
var num =  10 ;
function fn() {}
})();
//或者
&lt;script&gt;
&quot;use strict&quot;; //当前script标签开启了严格模式
&lt;/script&gt;
&lt;script&gt;
//当前script标签未开启严格模式
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn(){
&quot;use strict&quot;;
return &quot; 123 &quot;;
}
//当前fn函数开启了严格模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="更多严格模式要求参考" tabindex="-1"><a class="header-anchor" href="#更多严格模式要求参考" aria-hidden="true">#</a> 更多严格模式要求参考</h5><h2 id="_4-高阶函数" tabindex="-1"><a class="header-anchor" href="#_4-高阶函数" aria-hidden="true">#</a> 4 .高阶函数</h2><h5 id="高阶函数是对其他函数进行操作的函数-它接收函数作为参数或将函数作为返回值输" tabindex="-1"><a class="header-anchor" href="#高阶函数是对其他函数进行操作的函数-它接收函数作为参数或将函数作为返回值输" aria-hidden="true">#</a> 高阶函数是对其他函数进行操作的函数，它接收函数作为参数或将函数作为返回值输</h5><h5 id="出。" tabindex="-1"><a class="header-anchor" href="#出。" aria-hidden="true">#</a> 出。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;use strict&#39;
num =  10 
console.log(num)//严格模式后使用未声明的变量
‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐
‐‐‐‐‐‐‐
var num 2  =  1 ;
delete num 2 ;//严格模式不允许删除变量
‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐
‐‐‐‐‐‐‐
function fn() {
console.log(this); // 严格模式下全局作用域中函数中的 this 是 undefined
}
fn();
‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐
‐‐‐‐‐‐‐‐
function Star() {
this.sex = &#39;男&#39;;
}
// Star();严格模式下,如果 构造函数不加new调用, this 指向的是undefined 如果给
他赋值则 会报错.
var ldh = new Star();
console.log(ldh.sex);
‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐
‐‐‐‐‐‐‐‐‐
setTimeout(function() {
console.log(this); //严格模式下，定时器 this 还是指向 window
},  2000 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="此时fn-就是一个高阶函数" tabindex="-1"><a class="header-anchor" href="#此时fn-就是一个高阶函数" aria-hidden="true">#</a> 此时fn 就是一个高阶函数</h5><h5 id="函数也是一种数据类型-同样可以作为参数-传递给另外一个参数使用。最典型的就是" tabindex="-1"><a class="header-anchor" href="#函数也是一种数据类型-同样可以作为参数-传递给另外一个参数使用。最典型的就是" aria-hidden="true">#</a> 函数也是一种数据类型，同样可以作为参数，传递给另外一个参数使用。最典型的就是</h5><h5 id="作为回调函数。" tabindex="-1"><a class="header-anchor" href="#作为回调函数。" aria-hidden="true">#</a> 作为回调函数。</h5><h5 id="同理函数也可以作为返回值传递回来" tabindex="-1"><a class="header-anchor" href="#同理函数也可以作为返回值传递回来" aria-hidden="true">#</a> 同理函数也可以作为返回值传递回来</h5><h2 id="_5-闭包" tabindex="-1"><a class="header-anchor" href="#_5-闭包" aria-hidden="true">#</a> 5 .闭包</h2><h3 id="_5-1-变量的作用域复习" tabindex="-1"><a class="header-anchor" href="#_5-1-变量的作用域复习" aria-hidden="true">#</a> 5. 1 变量的作用域复习</h3><h5 id="变量根据作用域的不同分为两种-全局变量和局部变量。" tabindex="-1"><a class="header-anchor" href="#变量根据作用域的不同分为两种-全局变量和局部变量。" aria-hidden="true">#</a> 变量根据作用域的不同分为两种：全局变量和局部变量。</h5><h5 id="_1-函数内部可以使用全局变量。" tabindex="-1"><a class="header-anchor" href="#_1-函数内部可以使用全局变量。" aria-hidden="true">#</a> 1. 函数内部可以使用全局变量。</h5><h5 id="_2-函数外部不可以使用局部变量。" tabindex="-1"><a class="header-anchor" href="#_2-函数外部不可以使用局部变量。" aria-hidden="true">#</a> 2. 函数外部不可以使用局部变量。</h5><h5 id="_3-当函数执行完毕-本作用域内的局部变量会销毁。" tabindex="-1"><a class="header-anchor" href="#_3-当函数执行完毕-本作用域内的局部变量会销毁。" aria-hidden="true">#</a> 3. 当函数执行完毕，本作用域内的局部变量会销毁。</h5><h3 id="_5-2-什么是闭包" tabindex="-1"><a class="header-anchor" href="#_5-2-什么是闭包" aria-hidden="true">#</a> 5. 2 什么是闭包</h3><h5 id="闭包-closure-指有权访问另一个函数作用域中变量的函数。简单理解就是-一个作用" tabindex="-1"><a class="header-anchor" href="#闭包-closure-指有权访问另一个函数作用域中变量的函数。简单理解就是-一个作用" aria-hidden="true">#</a> 闭包（closure）指有权访问另一个函数作用域中变量的函数。简单理解就是 ，一个作用</h5><h5 id="域可以访问另外一个函数内部的局部变量。" tabindex="-1"><a class="header-anchor" href="#域可以访问另外一个函数内部的局部变量。" aria-hidden="true">#</a> 域可以访问另外一个函数内部的局部变量。</h5><h3 id="_5-3-闭包的作用" tabindex="-1"><a class="header-anchor" href="#_5-3-闭包的作用" aria-hidden="true">#</a> 5. 3 闭包的作用</h3><h5 id="作用-延伸变量的作用范围。" tabindex="-1"><a class="header-anchor" href="#作用-延伸变量的作用范围。" aria-hidden="true">#</a> 作用：延伸变量的作用范围。</h5><h3 id="_5-4-闭包的案例" tabindex="-1"><a class="header-anchor" href="#_5-4-闭包的案例" aria-hidden="true">#</a> 5. 4 闭包的案例</h3><h5 id="_1-利用闭包的方式得到当前li-的索引号" tabindex="-1"><a class="header-anchor" href="#_1-利用闭包的方式得到当前li-的索引号" aria-hidden="true">#</a> 1. 利用闭包的方式得到当前li 的索引号</h5><h5 id="_1-闭包应用-3-秒钟之后-打印所有li元素的内容" tabindex="-1"><a class="header-anchor" href="#_1-闭包应用-3-秒钟之后-打印所有li元素的内容" aria-hidden="true">#</a> 1. 闭包应用- 3 秒钟之后,打印所有li元素的内容</h5><h5 id="_1-闭包应用-计算打车价格" tabindex="-1"><a class="header-anchor" href="#_1-闭包应用-计算打车价格" aria-hidden="true">#</a> 1. 闭包应用-计算打车价格</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn() {
var num =  10 ;
function fun() {
console.log(num);
}
return fun;
}
var f = fn();
f();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (var i =  0 ; i &lt; lis.length; i++) {
// 利用for循环创建了 4 个立即执行函数
// 立即执行函数也成为小闭包因为立即执行函数里面的任何一个函数都可以使用它的i这变
量
(function(i) {
lis[i].onclick = function() {
console.log(i);
}
})(i);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (var i =  0 ; i &lt; lis.length; i++) {
(function(i) {
setTimeout(function() {
console.log(lis[i].innerHTML);
},  3000 )
})(i);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-案例" tabindex="-1"><a class="header-anchor" href="#_5-5-案例" aria-hidden="true">#</a> 5. 5 案例</h3><h6 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> /*需求分析</h6><h6 id="打车起步价-13-3-公里内-之后每多一公里增加-5-块钱-用户输入公里数就可以计算打车" tabindex="-1"><a class="header-anchor" href="#打车起步价-13-3-公里内-之后每多一公里增加-5-块钱-用户输入公里数就可以计算打车" aria-hidden="true">#</a> 打车起步价 13 ( 3 公里内), 之后每多一公里增加  5 块钱. 用户输入公里数就可以计算打车</h6><h6 id="价格" tabindex="-1"><a class="header-anchor" href="#价格" aria-hidden="true">#</a> 价格</h6><h6 id="如果有拥堵情况-总价格多收取-10-块钱拥堵费" tabindex="-1"><a class="header-anchor" href="#如果有拥堵情况-总价格多收取-10-块钱拥堵费" aria-hidden="true">#</a> 如果有拥堵情况,总价格多收取 10 块钱拥堵费*/</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var car = (function() {
var start =  13 ; // 起步价 局部变量
var total =  0 ; // 总价 局部变量
return {
// 正常的总价
price: function(n) {
if (n &lt;=  3 ) {
total = start;
} else {
total = start + (n ‐  3 ) *  
}
return total;
},
// 拥堵之后的费用
yd: function(flag) {
return flag? total +  10  : total;
}
}
})();
console.log(car.price( 5 )); //  
console.log(car.yd(true)); //  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-递归" tabindex="-1"><a class="header-anchor" href="#_6-递归" aria-hidden="true">#</a> 6 .递归</h2><h3 id="_6-1-什么是递归" tabindex="-1"><a class="header-anchor" href="#_6-1-什么是递归" aria-hidden="true">#</a> 6. 1 什么是递归</h3><h5 id="递归-如果一个函数在内部可以调用其本身-那么这个函数就是递归函数。简单理解-函" tabindex="-1"><a class="header-anchor" href="#递归-如果一个函数在内部可以调用其本身-那么这个函数就是递归函数。简单理解-函" aria-hidden="true">#</a> 递归：如果一个函数在内部可以调用其本身，那么这个函数就是递归函数。简单理解:函</h5><h5 id="数内部自己调用自己-这个函数就是递归函数" tabindex="-1"><a class="header-anchor" href="#数内部自己调用自己-这个函数就是递归函数" aria-hidden="true">#</a> 数内部自己调用自己, 这个函数就是递归函数</h5><h5 id="注意-递归函数的作用和循环效果一样-由于递归很容易发生-栈溢出-错误-stack" tabindex="-1"><a class="header-anchor" href="#注意-递归函数的作用和循环效果一样-由于递归很容易发生-栈溢出-错误-stack" aria-hidden="true">#</a> 注意：递归函数的作用和循环效果一样，由于递归很容易发生“栈溢出”错误（stack</h5><h5 id="overflow-所以必须要加退出条件return。" tabindex="-1"><a class="header-anchor" href="#overflow-所以必须要加退出条件return。" aria-hidden="true">#</a> overflow），所以必须要加退出条件return。</h5><h3 id="_6-2-利用递归求-1-n的阶乘" tabindex="-1"><a class="header-anchor" href="#_6-2-利用递归求-1-n的阶乘" aria-hidden="true">#</a> 6. 2 利用递归求 1 ~n的阶乘</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var name = &quot;The Window&quot;;
var object = {
name: &quot;My Object&quot;,
getNameFunc: function() {
return function() {
return this.name;
};
}
};
console.log(object.getNameFunc()())
‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐
‐‐‐‐‐‐‐‐‐‐
var name = &quot;The Window&quot;;
var object = {
name: &quot;My Object&quot;,
getNameFunc: function() {
var that = this;
return function() {
return that.name;
};
}
};
console.log(object.getNameFunc()())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-利用递归求斐波那契数列" tabindex="-1"><a class="header-anchor" href="#_6-3-利用递归求斐波那契数列" aria-hidden="true">#</a> 6. 3 利用递归求斐波那契数列</h3><h3 id="_6-4-利用递归遍历数据" tabindex="-1"><a class="header-anchor" href="#_6-4-利用递归遍历数据" aria-hidden="true">#</a> 6. 4 利用递归遍历数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//利用递归函数求 1 ~n的阶乘  1  *  2  *  3  *  4  * ..n
function fn(n) {
if (n ==  1 ) { //结束条件
return  1 ;
}
return n * fn(n ‐  1 );
}
console.log(fn( 3 ));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="利用递归函数求斐波那契数列-兔子序列-1-、-1-、-2-、-3-、-5-、-8-、-13-、-21" tabindex="-1"><a class="header-anchor" href="#利用递归函数求斐波那契数列-兔子序列-1-、-1-、-2-、-3-、-5-、-8-、-13-、-21" aria-hidden="true">#</a> // 利用递归函数求斐波那契数列(兔子序列)   1 、 1 、 2 、 3 、 5 、 8 、 13 、 21 ...</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 用户输入一个数字 n 就可以求出 这个数字对应的兔子序列值
// 我们只需要知道用户输入的n 的前面两项(n‐ 1  n‐ 2 )就可以计算出n 对应的序列值
function fb(n) {
if (n ===  1  || n ===  2 ) {
return  1 ;
}
return fb(n ‐  1 ) + fb(n ‐  2 );
}
console.log(fb( 3 ));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//^ 我们想要做输入id号,就可以返回的数据对象 var data = [{ id:  1 , name: &#39;家电&#39;, goods: [{ id:  11 , gname: &#39;冰箱&#39;, goods: [{ id:  111 , gname: &#39;海尔&#39; }, { id:  112 , gname: &#39;美的&#39; },</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>}, {
id:  12 ,
gname: &#39;洗衣机&#39;
}]
}, {
id:  2 ,
name: &#39;服饰&#39;
}];
// 1 .利用 forEach 去遍历里面的每一个对象
function getID(json, id) {
var o = {};
json.forEach(function(item) {
// console.log(item); //  2 个数组元素
if (item.id == id) {
// console.log(item);
o = item;
return o;
//  2. 我们想要得里层的数据  11 12  可以利用递归函数
// 里面应该有goods这个数组并且数组的长度不为  0 
} else if (item.goods &amp;&amp; item.goods.length &gt;  0 ) {
o = getID(item.goods, id);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>return o; }</p>`,124),r=[s];function l(c,t){return i(),a("div",null,r)}const u=e(d,[["render",l],["__file","03-JavaScript基础.html.vue"]]);export{u as default};

import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,f as n}from"./app-hz3rNBT8.js";const d={},r=n(`<h1 id="javascript高级第-02-天笔记" tabindex="-1"><a class="header-anchor" href="#javascript高级第-02-天笔记" aria-hidden="true">#</a> JavaScript高级第 02 天笔记</h1><h2 id="_1-构造函数和原型" tabindex="-1"><a class="header-anchor" href="#_1-构造函数和原型" aria-hidden="true">#</a> 1 .构造函数和原型</h2><h2 id="_1-1-对象的三种创建方式-复习" tabindex="-1"><a class="header-anchor" href="#_1-1-对象的三种创建方式-复习" aria-hidden="true">#</a> 1. 1 对象的三种创建方式--复习</h2><h5 id="_1-字面量方式" tabindex="-1"><a class="header-anchor" href="#_1-字面量方式" aria-hidden="true">#</a> 1. 字面量方式</h5><h5 id="_2-new关键字" tabindex="-1"><a class="header-anchor" href="#_2-new关键字" aria-hidden="true">#</a> 2. new关键字</h5><h5 id="_3-构造函数方式" tabindex="-1"><a class="header-anchor" href="#_3-构造函数方式" aria-hidden="true">#</a> 3. 构造函数方式</h5><h2 id="_1-2-静态成员和实例成员" tabindex="-1"><a class="header-anchor" href="#_1-2-静态成员和实例成员" aria-hidden="true">#</a> 1. 2 静态成员和实例成员</h2><h4 id="_1-2-1-实例成员" tabindex="-1"><a class="header-anchor" href="#_1-2-1-实例成员" aria-hidden="true">#</a> 1. 2. 1 实例成员</h4><h5 id="实例成员就是构造函数内部通过this添加的成员-如下列代码中uname-age-sing-就是实例" tabindex="-1"><a class="header-anchor" href="#实例成员就是构造函数内部通过this添加的成员-如下列代码中uname-age-sing-就是实例" aria-hidden="true">#</a> 实例成员就是构造函数内部通过this添加的成员 如下列代码中uname age sing 就是实例</h5><h5 id="成员-实例成员只能通过实例化的对象来访问" tabindex="-1"><a class="header-anchor" href="#成员-实例成员只能通过实例化的对象来访问" aria-hidden="true">#</a> 成员,实例成员只能通过实例化的对象来访问</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = new Object();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person(name,age){
this.name = name;
this.age = age;
}
var obj = new Person(&#39;zs&#39;, 12 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-静态成员" tabindex="-1"><a class="header-anchor" href="#_1-2-2-静态成员" aria-hidden="true">#</a> 1. 2. 2 静态成员</h4><h5 id="静态成员-在构造函数本身上添加的成员-如下列代码中-sex-就是静态成员-静态成员只能" tabindex="-1"><a class="header-anchor" href="#静态成员-在构造函数本身上添加的成员-如下列代码中-sex-就是静态成员-静态成员只能" aria-hidden="true">#</a> 静态成员 在构造函数本身上添加的成员 如下列代码中 sex 就是静态成员,静态成员只能</h5><h5 id="通过构造函数来访问" tabindex="-1"><a class="header-anchor" href="#通过构造函数来访问" aria-hidden="true">#</a> 通过构造函数来访问</h5><h3 id="_1-3-构造函数的问题" tabindex="-1"><a class="header-anchor" href="#_1-3-构造函数的问题" aria-hidden="true">#</a> 1. 3 构造函数的问题</h3><h5 id="构造函数方法很好用-但是存在浪费内存的问题。" tabindex="-1"><a class="header-anchor" href="#构造函数方法很好用-但是存在浪费内存的问题。" aria-hidden="true">#</a> 构造函数方法很好用，但是存在浪费内存的问题。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Star(uname, age) {
this.uname = uname;
this.age = age;
this.sing = function() {
console.log(&#39;我会唱歌&#39;);
}
}
var ldh = new Star(&#39;刘德华&#39;,  18 );
console.log(ldh.uname);//实例成员只能通过实例化的对象来访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Star(uname, age) {
this.uname = uname;
this.age = age;
this.sing = function() {
console.log(&#39;我会唱歌&#39;);
}
}
Star.sex = &#39;男&#39;;
var ldh = new Star(&#39;刘德华&#39;,  18 );
console.log(Star.sex);//静态成员只能通过构造函数来访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-构造函数原型prototype" tabindex="-1"><a class="header-anchor" href="#_1-4-构造函数原型prototype" aria-hidden="true">#</a> 1. 4 构造函数原型prototype</h3><h5 id="构造函数通过原型分配的函数是所有对象所共享的。" tabindex="-1"><a class="header-anchor" href="#构造函数通过原型分配的函数是所有对象所共享的。" aria-hidden="true">#</a> 构造函数通过原型分配的函数是所有对象所共享的。</h5><h5 id="javascript-规定-每一个构造函数都有一个prototype-属性-指向另一个对象。注意这个" tabindex="-1"><a class="header-anchor" href="#javascript-规定-每一个构造函数都有一个prototype-属性-指向另一个对象。注意这个" aria-hidden="true">#</a> JavaScript 规定，每一个构造函数都有一个prototype 属性，指向另一个对象。注意这个</h5><h5 id="prototype就是一个对象-这个对象的所有属性和方法-都会被构造函数所拥有。" tabindex="-1"><a class="header-anchor" href="#prototype就是一个对象-这个对象的所有属性和方法-都会被构造函数所拥有。" aria-hidden="true">#</a> prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。</h5><h5 id="我们可以把那些不变的方法-直接定义在-prototype-对象上-这样所有对象的实例就可" tabindex="-1"><a class="header-anchor" href="#我们可以把那些不变的方法-直接定义在-prototype-对象上-这样所有对象的实例就可" aria-hidden="true">#</a> 我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可</h5><h5 id="以共享这些方法。" tabindex="-1"><a class="header-anchor" href="#以共享这些方法。" aria-hidden="true">#</a> 以共享这些方法。</h5><h3 id="_1-5-对象原型" tabindex="-1"><a class="header-anchor" href="#_1-5-对象原型" aria-hidden="true">#</a> 1. 5 对象原型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Star(uname, age) {
this.uname = uname;
this.age = age;
}
Star.prototype.sing = function() {
console.log(&#39;我会唱歌&#39;);
}
var ldh = new Star(&#39;刘德华&#39;,  18 );
var zxy = new Star(&#39;张学友&#39;,  19 );
ldh.sing();//我会唱歌
zxy.sing();//我会唱歌
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-constructor构造函数" tabindex="-1"><a class="header-anchor" href="#_1-6-constructor构造函数" aria-hidden="true">#</a> 1. 6 constructor构造函数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>对象都会有一个属性 __proto__ 指向构造函数的 prototype 原型对象，之所以我们对象
可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有 __proto__ 原型
的存在。
__proto__对象原型和原型对象 prototype 是等价的
__proto__对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线，但是
它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象
prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="如果我们修改了原来的原型对象-给原型对象赋值的是一个对象-则必须手动的利用" tabindex="-1"><a class="header-anchor" href="#如果我们修改了原来的原型对象-给原型对象赋值的是一个对象-则必须手动的利用" aria-hidden="true">#</a> 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用</h5><h5 id="constructor指回原来的构造函数如" tabindex="-1"><a class="header-anchor" href="#constructor指回原来的构造函数如" aria-hidden="true">#</a> constructor指回原来的构造函数如:</h5><h5 id="以上代码运行结果-设置constructor属性如图" tabindex="-1"><a class="header-anchor" href="#以上代码运行结果-设置constructor属性如图" aria-hidden="true">#</a> 以上代码运行结果,设置constructor属性如图:</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>对象原型（ __proto__）和构造函数（prototype）原型对象里面都有一个属性
constructor 属性 ，constructor 我们称为构造函数，因为它指回构造函数本身。
constructor 主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来
的构造函数。
一般情况下，对象的方法都在构造函数的原型对象中设置。如果有多个对象的方法，我们可
以给原型对象采取对象形式赋值，但是这样就会覆盖构造函数原型对象原来的内容，这样修
改后的原型对象 constructor 就不再指向当前构造函数了。此时，我们可以在修改后的
原型对象中，添加一个 constructor 指向原来的构造函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Star(uname, age) {
this.uname = uname;
this.age = age;
}
// 很多情况下,我们需要手动的利用constructor 这个属性指回 原来的构造函数
Star.prototype = {
// 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用
constructor指回原来的构造函数
constructor: Star, // 手动设置指回原来的构造函数
sing: function() {
console.log(&#39;我会唱歌&#39;);
},
movie: function() {
console.log(&#39;我会演电影&#39;);
}
}
var zxy = new Star(&#39;张学友&#39;,  19 );
console.log(zxy)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="如果未设置constructor属性-如图" tabindex="-1"><a class="header-anchor" href="#如果未设置constructor属性-如图" aria-hidden="true">#</a> 如果未设置constructor属性,如图:</h5><h3 id="_1-7-原型链" tabindex="-1"><a class="header-anchor" href="#_1-7-原型链" aria-hidden="true">#</a> 1. 7 原型链</h3><h5 id="​-每一个实例对象又有一个proto属性-指向的构造函数的原型对象-构造函数的原型" tabindex="-1"><a class="header-anchor" href="#​-每一个实例对象又有一个proto属性-指向的构造函数的原型对象-构造函数的原型" aria-hidden="true">#</a> ​ 每一个实例对象又有一个proto属性，指向的构造函数的原型对象，构造函数的原型</h5><h5 id="对象也是一个对象-也有proto属性-这样一层一层往上找就形成了原型链。" tabindex="-1"><a class="header-anchor" href="#对象也是一个对象-也有proto属性-这样一层一层往上找就形成了原型链。" aria-hidden="true">#</a> 对象也是一个对象，也有proto属性，这样一层一层往上找就形成了原型链。</h5><h3 id="_1-8-构造函数实例和原型对象三角关系" tabindex="-1"><a class="header-anchor" href="#_1-8-构造函数实例和原型对象三角关系" aria-hidden="true">#</a> 1. 8 构造函数实例和原型对象三角关系</h3><h3 id="_1-9-原型链和成员的查找机制" tabindex="-1"><a class="header-anchor" href="#_1-9-原型链和成员的查找机制" aria-hidden="true">#</a> 1. 9 原型链和成员的查找机制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 .构造函数的prototype属性指向了构造函数原型对象
2 .实例对象是由构造函数创建的,实例对象的__proto__属性指向了构造函数的原型对象
3 .构造函数的原型对象的constructor属性指向了构造函数,实例对象的原型的
constructor属性也指向了构造函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="任何对象都有原型对象-也就是prototype属性-任何原型对象也是一个对象-该对象就" tabindex="-1"><a class="header-anchor" href="#任何对象都有原型对象-也就是prototype属性-任何原型对象也是一个对象-该对象就" aria-hidden="true">#</a> 任何对象都有原型对象,也就是prototype属性,任何原型对象也是一个对象,该对象就</h5><h5 id="有proto属性-这样一层一层往上找-就形成了一条链-我们称此为原型链" tabindex="-1"><a class="header-anchor" href="#有proto属性-这样一层一层往上找-就形成了一条链-我们称此为原型链" aria-hidden="true">#</a> 有proto属性,这样一层一层往上找,就形成了一条链,我们称此为原型链;</h5><h3 id="_1-10-原型对象中this指向" tabindex="-1"><a class="header-anchor" href="#_1-10-原型对象中this指向" aria-hidden="true">#</a> 1. 10 原型对象中this指向</h3><h5 id="构造函数中的this和原型对象的this-都指向我们new出来的实例对象" tabindex="-1"><a class="header-anchor" href="#构造函数中的this和原型对象的this-都指向我们new出来的实例对象" aria-hidden="true">#</a> 构造函数中的this和原型对象的this,都指向我们new出来的实例对象</h5><h3 id="_1-11-通过原型为数组扩展内置方法" tabindex="-1"><a class="header-anchor" href="#_1-11-通过原型为数组扩展内置方法" aria-hidden="true">#</a> 1. 11 通过原型为数组扩展内置方法</h3><h6 id="当访问一个对象的属性-包括方法-时-首先查找这个对象自身有没有该属性。" tabindex="-1"><a class="header-anchor" href="#当访问一个对象的属性-包括方法-时-首先查找这个对象自身有没有该属性。" aria-hidden="true">#</a> 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果没有就查找它的原型（也就是 __proto__指向的 prototype 原型对象）。
如果还没有就查找原型对象的原型（Object的原型对象）。
依此类推一直找到 Object 为止（null）。
__proto__对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Star(uname, age) {
this.uname = uname;
this.age = age;
}
var that;
Star.prototype.sing = function() {
console.log(&#39;我会唱歌&#39;);
that = this;
}
var ldh = new Star(&#39;刘德华&#39;,  18 );
//  1. 在构造函数中,里面this指向的是对象实例 ldh
console.log(that === ldh);//true
//  2 .原型对象函数里面的this 指向的是 实例对象 ldh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-继承" tabindex="-1"><a class="header-anchor" href="#_2-继承" aria-hidden="true">#</a> 2 .继承</h2><h3 id="_2-1-call" tabindex="-1"><a class="header-anchor" href="#_2-1-call" aria-hidden="true">#</a> 2. 1 call()</h3><h5 id="call-可以调用函数" tabindex="-1"><a class="header-anchor" href="#call-可以调用函数" aria-hidden="true">#</a> call()可以调用函数</h5><h5 id="call-可以修改this的指向-使用call-的时候-参数一是修改后的this指向-参数-2-参数-3" tabindex="-1"><a class="header-anchor" href="#call-可以修改this的指向-使用call-的时候-参数一是修改后的this指向-参数-2-参数-3" aria-hidden="true">#</a> call()可以修改this的指向,使用call()的时候 参数一是修改后的this指向,参数 2 ,参数 3 ..</h5><h5 id="使用逗号隔开连接" tabindex="-1"><a class="header-anchor" href="#使用逗号隔开连接" aria-hidden="true">#</a> 使用逗号隔开连接</h5><h3 id="_2-2-子构造函数继承父构造函数中的属性" tabindex="-1"><a class="header-anchor" href="#_2-2-子构造函数继承父构造函数中的属性" aria-hidden="true">#</a> 2. 2 子构造函数继承父构造函数中的属性</h3><h5 id="_1-先定义一个父构造函数" tabindex="-1"><a class="header-anchor" href="#_1-先定义一个父构造函数" aria-hidden="true">#</a> 1. 先定义一个父构造函数</h5><h5 id="_2-再定义一个子构造函数" tabindex="-1"><a class="header-anchor" href="#_2-再定义一个子构造函数" aria-hidden="true">#</a> 2. 再定义一个子构造函数</h5><h5 id="_3-子构造函数继承父构造函数的属性-使用call方法" tabindex="-1"><a class="header-anchor" href="#_3-子构造函数继承父构造函数的属性-使用call方法" aria-hidden="true">#</a> 3. 子构造函数继承父构造函数的属性(使用call方法)</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.sum = function() {
var sum =  0 ;
for (var i =  0 ; i &lt; this.length; i++) {
sum += this[i];
}
return sum;
};
//此时数组对象中已经存在sum()方法了 可以始终 数组.sum()进行数据的求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn(x, y) {
console.log(this);
console.log(x + y);
}
var o = {
name: &#39;andy&#39;
};
fn.call(o,  1 ,  2 );//调用了函数此时的this指向了对象o,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-借用原型对象继承方法" tabindex="-1"><a class="header-anchor" href="#_2-3-借用原型对象继承方法" aria-hidden="true">#</a> 2. 3 借用原型对象继承方法</h3><h5 id="_1-先定义一个父构造函数-1" tabindex="-1"><a class="header-anchor" href="#_1-先定义一个父构造函数-1" aria-hidden="true">#</a> 1. 先定义一个父构造函数</h5><h5 id="_2-再定义一个子构造函数-1" tabindex="-1"><a class="header-anchor" href="#_2-再定义一个子构造函数-1" aria-hidden="true">#</a> 2. 再定义一个子构造函数</h5><h5 id="_3-子构造函数继承父构造函数的属性-使用call方法-1" tabindex="-1"><a class="header-anchor" href="#_3-子构造函数继承父构造函数的属性-使用call方法-1" aria-hidden="true">#</a> 3. 子构造函数继承父构造函数的属性(使用call方法)</h5><h6 id="_1-父构造函数" tabindex="-1"><a class="header-anchor" href="#_1-父构造函数" aria-hidden="true">#</a> //  1. 父构造函数</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Father(uname, age) {
// this 指向父构造函数的对象实例
this.uname = uname;
this.age = age;
}
//  2  .子构造函数
function Son(uname, age, score) {
// this 指向子构造函数的对象实例
  3 .使用call方式实现子继承父的属性
Father.call(this, uname, age);
this.score = score;
}
var son = new Son(&#39;刘德华&#39;,  18 ,  100 );
console.log(son);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="如上代码结果如图" tabindex="-1"><a class="header-anchor" href="#如上代码结果如图" aria-hidden="true">#</a> 如上代码结果如图:</h5><h6 id="_1-父构造函数-1" tabindex="-1"><a class="header-anchor" href="#_1-父构造函数-1" aria-hidden="true">#</a> //  1. 父构造函数</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Father(uname, age) {
// this 指向父构造函数的对象实例
this.uname = uname;
this.age = age;
}
Father.prototype.money = function() {
console.log( 100000 );
};
//  2  .子构造函数
function Son(uname, age, score) {
// this 指向子构造函数的对象实例
Father.call(this, uname, age);
this.score = score;
}
// Son.prototype = Father.prototype; 这样直接赋值会有问题,如果修改了子原型对
象,父原型对象也会跟着一起变化
Son.prototype = new Father();
// 如果利用对象的形式修改了原型对象,别忘了利用constructor 指回原来的构造函数
Son.prototype.constructor = Son;
// 这个是子构造函数专门的方法
Son.prototype.exam = function() {
console.log(&#39;孩子要考试&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>}
var son = new Son(&#39;刘德华&#39;,  18 ,  100 );
console.log(son);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-es-5-新增方法" tabindex="-1"><a class="header-anchor" href="#_3-es-5-新增方法" aria-hidden="true">#</a> 3 .ES 5 新增方法</h2><h3 id="_3-1-数组方法foreach遍历数组" tabindex="-1"><a class="header-anchor" href="#_3-1-数组方法foreach遍历数组" aria-hidden="true">#</a> 3. 1 数组方法forEach遍历数组</h3><h3 id="_3-2-数组方法filter过滤数组" tabindex="-1"><a class="header-anchor" href="#_3-2-数组方法filter过滤数组" aria-hidden="true">#</a> 3. 2 数组方法filter过滤数组</h3><h3 id="_3-3-数组方法some" tabindex="-1"><a class="header-anchor" href="#_3-3-数组方法some" aria-hidden="true">#</a> 3. 3 数组方法some</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>arr.forEach(function(value, index, array) {
//参数一是:数组元素
//参数二是:数组元素的索引
//参数三是:当前的数组
})
//相当于数组遍历的 for循环 没有返回值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [ 12 ,  66 ,  4 ,  88 ,  3 ,  7 ];
var newArr = arr.filter(function(value, index,array) {
//参数一是:数组元素
//参数二是:数组元素的索引
//参数三是:当前的数组
return value &gt;=  20 ;
});
console.log(newArr);//[ 66 , 88 ] //返回值是一个新数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-筛选商品案例" tabindex="-1"><a class="header-anchor" href="#_3-4-筛选商品案例" aria-hidden="true">#</a> 3. 4 筛选商品案例</h3><h5 id="_1-定义数组对象数据" tabindex="-1"><a class="header-anchor" href="#_1-定义数组对象数据" aria-hidden="true">#</a> 1. 定义数组对象数据</h5><h5 id="_2-使用foreach遍历数据并渲染到页面中" tabindex="-1"><a class="header-anchor" href="#_2-使用foreach遍历数据并渲染到页面中" aria-hidden="true">#</a> 2. 使用forEach遍历数据并渲染到页面中</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>some 查找数组中是否有满足条件的元素
var arr = [ 10 ,  30 ,  4 ];
var flag = arr.some(function(value,index,array) {
//参数一是:数组元素
//参数二是:数组元素的索引
//参数三是:当前的数组
return value &lt;  3 ;
});
console.log(flag);//false返回值是布尔值,只要查找到满足条件的一个元素就立马终止
循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var data = [{
id:  1 ,
pname: &#39;小米&#39;,
price:  
}, {
id:  2 ,
pname: &#39;oppo&#39;,
price:  
}, {
id:  3 ,
pname: &#39;荣耀&#39;,
price:  
}, {
id:  4 ,
pname: &#39;华为&#39;,
price:  
}, ];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-根据价格筛选数据" tabindex="-1"><a class="header-anchor" href="#_3-根据价格筛选数据" aria-hidden="true">#</a> 3. 根据价格筛选数据</h5><h5 id="_1-获取到搜索按钮并为其绑定点击事件" tabindex="-1"><a class="header-anchor" href="#_1-获取到搜索按钮并为其绑定点击事件" aria-hidden="true">#</a> 1. 获取到搜索按钮并为其绑定点击事件</h5><h5 id="_2-使用filter将用户输入的价格信息筛选出来" tabindex="-1"><a class="header-anchor" href="#_2-使用filter将用户输入的价格信息筛选出来" aria-hidden="true">#</a> 2. 使用filter将用户输入的价格信息筛选出来</h5><h5 id="_3-将筛选出来的数据重新渲染到表格中" tabindex="-1"><a class="header-anchor" href="#_3-将筛选出来的数据重新渲染到表格中" aria-hidden="true">#</a> 3. 将筛选出来的数据重新渲染到表格中</h5><h5 id="_1-将渲染数据的逻辑封装到一个函数中" tabindex="-1"><a class="header-anchor" href="#_1-将渲染数据的逻辑封装到一个函数中" aria-hidden="true">#</a> 1. 将渲染数据的逻辑封装到一个函数中</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data.forEach(function(value) {
var tr = document.createElement(&#39;tr&#39;);
tr.innerHTML = &#39;&lt;td&gt;&#39; + value.id + &#39;&lt;/td&gt;&lt;td&gt;&#39; + value.pname +
&#39;&lt;/td&gt;&lt;td&gt;&#39; + value.price + &#39;&lt;/td&gt;&#39;;
tbody.appendChild(tr);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>search_price.addEventListener(&#39;click&#39;, function() {
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>search_price.addEventListener(&#39;click&#39;, function() {
var newDate = data.filter(function(value) {
//start.value是开始区间
//end.value是结束的区间
return value.price &gt;= start.value &amp;&amp; value.price &lt;=
end.value;
});
console.log(newDate);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function setDate(mydata) {
// 先清空原来tbody 里面的数据
tbody.innerHTML = &#39;&#39;;
mydata.forEach(function(value) {
var tr = document.createElement(&#39;tr&#39;);
tr.innerHTML = &#39;&lt;td&gt;&#39; + value.id + &#39;&lt;/td&gt;&lt;td&gt;&#39; +
value.pname + &#39;&lt;/td&gt;&lt;td&gt;&#39; + value.price + &#39;&lt;/td&gt;&#39;;
tbody.appendChild(tr);
});
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-将筛选之后的数据重新渲染" tabindex="-1"><a class="header-anchor" href="#_2-将筛选之后的数据重新渲染" aria-hidden="true">#</a> 2. 将筛选之后的数据重新渲染</h5><h5 id="_4-根据商品名称筛选" tabindex="-1"><a class="header-anchor" href="#_4-根据商品名称筛选" aria-hidden="true">#</a> 4. 根据商品名称筛选</h5><h5 id="_1-获取用户输入的商品名称" tabindex="-1"><a class="header-anchor" href="#_1-获取用户输入的商品名称" aria-hidden="true">#</a> 1. 获取用户输入的商品名称</h5><h5 id="_2-为查询按钮绑定点击事件-将输入的商品名称与这个数据进行筛选" tabindex="-1"><a class="header-anchor" href="#_2-为查询按钮绑定点击事件-将输入的商品名称与这个数据进行筛选" aria-hidden="true">#</a> 2. 为查询按钮绑定点击事件,将输入的商品名称与这个数据进行筛选</h5><h3 id="_3-5-some和foreach区别" tabindex="-1"><a class="header-anchor" href="#_3-5-some和foreach区别" aria-hidden="true">#</a> 3. 5 some和forEach区别</h3><h5 id="如果查询数组中唯一的元素-用some方法更合适-在some-里面-遇到-return-true-就" tabindex="-1"><a class="header-anchor" href="#如果查询数组中唯一的元素-用some方法更合适-在some-里面-遇到-return-true-就" aria-hidden="true">#</a> 如果查询数组中唯一的元素, 用some方法更合适,在some 里面 遇到 return true 就</h5><h5 id="是终止遍历-迭代效率更高" tabindex="-1"><a class="header-anchor" href="#是终止遍历-迭代效率更高" aria-hidden="true">#</a> 是终止遍历 迭代效率更高</h5><h5 id="在foreach-里面-return-不会终止迭代" tabindex="-1"><a class="header-anchor" href="#在foreach-里面-return-不会终止迭代" aria-hidden="true">#</a> 在forEach 里面 return 不会终止迭代</h5><h3 id="_3-6-trim方法去除字符串两端的空格" tabindex="-1"><a class="header-anchor" href="#_3-6-trim方法去除字符串两端的空格" aria-hidden="true">#</a> 3. 6 trim方法去除字符串两端的空格</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>search_price.addEventListener(&#39;click&#39;, function() {
var newDate = data.filter(function(value) {
return value.price &gt;= start.value &amp;&amp; value.price &lt;=
end.value;
});
console.log(newDate);
// 把筛选完之后的对象渲染到页面中
setDate(newDate);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>search_pro.addEventListener(&#39;click&#39;, function() {
var arr = [];
data.some(function(value) {
if (value.pname === product.value) {
// console.log(value);
arr.push(value);
return true; // return 后面必须写true
}
});
// 把拿到的数据渲染到页面中
setDate(arr);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-获取对象的属性名" tabindex="-1"><a class="header-anchor" href="#_3-7-获取对象的属性名" aria-hidden="true">#</a> 3. 7 获取对象的属性名</h3><h5 id="object-keys-对象-获取到当前对象中的属性名-返回值是一个数组" tabindex="-1"><a class="header-anchor" href="#object-keys-对象-获取到当前对象中的属性名-返回值是一个数组" aria-hidden="true">#</a> Object.keys(对象) 获取到当前对象中的属性名 ，返回值是一个数组</h5><h3 id="_3-8-object-defineproperty" tabindex="-1"><a class="header-anchor" href="#_3-8-object-defineproperty" aria-hidden="true">#</a> 3. 8 Object.defineProperty</h3><h5 id="object-defineproperty设置或修改对象中的属性" tabindex="-1"><a class="header-anchor" href="#object-defineproperty设置或修改对象中的属性" aria-hidden="true">#</a> Object.defineProperty设置或修改对象中的属性</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39; hello &#39;
console.log(str.trim()） //hello 去除两端空格
var str 1  = &#39; he l l o &#39;
console.log(str.trim()） //he l l o 去除两端空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {
id:  1 ,
pname: &#39;小米&#39;,
price:  1999 ,
num:  
};
var result = Object.keys(obj)
console.log(result)//[id，pname,price,num]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.defineProperty(对象，修改或新增的属性名，{
value:修改或新增的属性的值,
writable:true/false,//如果值为false 不允许修改这个属性值
enumerable: false,//enumerable 如果值为false 则不允许遍历
configurable: false //configurable 如果为false 则不允许删除这个属性
属性是否可以被删除或是否可以再次修改特性
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>`,110),s=[r];function l(t,c){return a(),i("div",null,s)}const h=e(d,[["render",l],["__file","02-JavaScript基础.html.vue"]]);export{h as default};

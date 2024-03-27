import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,f as n}from"./app-tt0ZouaX.js";const d={},r=n(`<h1 id="javascript高级第-04-天笔记" tabindex="-1"><a class="header-anchor" href="#javascript高级第-04-天笔记" aria-hidden="true">#</a> JavaScript高级第 04 天笔记</h1><h2 id="_1-正则表达式概述" tabindex="-1"><a class="header-anchor" href="#_1-正则表达式概述" aria-hidden="true">#</a> 1 .正则表达式概述</h2><h2 id="_1-1-什么是正则表达式" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是正则表达式" aria-hidden="true">#</a> 1. 1 什么是正则表达式</h2><h5 id="正则表达式-regular-expression-是用于匹配字符串中字符组合的模式。在" tabindex="-1"><a class="header-anchor" href="#正则表达式-regular-expression-是用于匹配字符串中字符组合的模式。在" aria-hidden="true">#</a> 正则表达式（ Regular Expression ）是用于匹配字符串中字符组合的模式。在</h5><h5 id="javascript中-正则表达式也是对象。" tabindex="-1"><a class="header-anchor" href="#javascript中-正则表达式也是对象。" aria-hidden="true">#</a> JavaScript中，正则表达式也是对象。</h5><h5 id="正则表通常被用来检索、替换那些符合某个模式-规则-的文本-例如验证表单-用户" tabindex="-1"><a class="header-anchor" href="#正则表通常被用来检索、替换那些符合某个模式-规则-的文本-例如验证表单-用户" aria-hidden="true">#</a> 正则表通常被用来检索、替换那些符合某个模式（规则）的文本，例如验证表单：用户</h5><h5 id="名表单只能输入英文字母、数字或者下划线-昵称输入框中可以输入中文-匹配-。此外" tabindex="-1"><a class="header-anchor" href="#名表单只能输入英文字母、数字或者下划线-昵称输入框中可以输入中文-匹配-。此外" aria-hidden="true">#</a> 名表单只能输入英文字母、数字或者下划线， 昵称输入框中可以输入中文(匹配)。此外，</h5><h5 id="正则表达式还常用于过滤掉页面内容中的一些敏感词-替换-或从字符串中获取我们想要" tabindex="-1"><a class="header-anchor" href="#正则表达式还常用于过滤掉页面内容中的一些敏感词-替换-或从字符串中获取我们想要" aria-hidden="true">#</a> 正则表达式还常用于过滤掉页面内容中的一些敏感词(替换)，或从字符串中获取我们想要</h5><h5 id="的特定部分-提取-等-。" tabindex="-1"><a class="header-anchor" href="#的特定部分-提取-等-。" aria-hidden="true">#</a> 的特定部分(提取)等 。</h5><h5 id="其他语言也会使用正则表达式-本阶段我们主要是利用javascript-正则表达式完成表单验" tabindex="-1"><a class="header-anchor" href="#其他语言也会使用正则表达式-本阶段我们主要是利用javascript-正则表达式完成表单验" aria-hidden="true">#</a> 其他语言也会使用正则表达式，本阶段我们主要是利用JavaScript 正则表达式完成表单验</h5><h5 id="证。" tabindex="-1"><a class="header-anchor" href="#证。" aria-hidden="true">#</a> 证。</h5><h2 id="_1-2-正则表达式的特点" tabindex="-1"><a class="header-anchor" href="#_1-2-正则表达式的特点" aria-hidden="true">#</a> 1. 2 正则表达式的特点</h2><h5 id="_1-灵活性、逻辑性和功能性非常的强。" tabindex="-1"><a class="header-anchor" href="#_1-灵活性、逻辑性和功能性非常的强。" aria-hidden="true">#</a> 1. 灵活性、逻辑性和功能性非常的强。</h5><h5 id="_2-可以迅速地用极简单的方式达到字符串的复杂控制。" tabindex="-1"><a class="header-anchor" href="#_2-可以迅速地用极简单的方式达到字符串的复杂控制。" aria-hidden="true">#</a> 2. 可以迅速地用极简单的方式达到字符串的复杂控制。</h5><h5 id="_3-对于刚接触的人来说-比较晦涩难懂。比如-w-w-w-w-w" tabindex="-1"><a class="header-anchor" href="#_3-对于刚接触的人来说-比较晦涩难懂。比如-w-w-w-w-w" aria-hidden="true">#</a> 3. 对于刚接触的人来说，比较晦涩难懂。比如：^\\w+([-+.]\\w+)@\\w+([-.]\\w+).\\w+</h5><h5 id="w" tabindex="-1"><a class="header-anchor" href="#w" aria-hidden="true">#</a> ([-.]\\w+)*$</h5><h5 id="_4-实际开发-一般都是直接复制写好的正则表达式-但是要求会使用正则表达式并且根据" tabindex="-1"><a class="header-anchor" href="#_4-实际开发-一般都是直接复制写好的正则表达式-但是要求会使用正则表达式并且根据" aria-hidden="true">#</a> 4. 实际开发,一般都是直接复制写好的正则表达式. 但是要求会使用正则表达式并且根据</h5><h5 id="实际情况修改正则表达式-比如用户名-a-z-0-9-3-16" tabindex="-1"><a class="header-anchor" href="#实际情况修改正则表达式-比如用户名-a-z-0-9-3-16" aria-hidden="true">#</a> 实际情况修改正则表达式. 比如用户名: /^[a-z 0 - 9 _-]{ 3 , 16 }$/</h5><h2 id="_2-正则表达式在js中的使用" tabindex="-1"><a class="header-anchor" href="#_2-正则表达式在js中的使用" aria-hidden="true">#</a> 2 .正则表达式在js中的使用</h2><h2 id="_2-1-正则表达式的创建" tabindex="-1"><a class="header-anchor" href="#_2-1-正则表达式的创建" aria-hidden="true">#</a> 2. 1 正则表达式的创建</h2><h5 id="在-javascript-中-可以通过两种方式创建一个正则表达式。" tabindex="-1"><a class="header-anchor" href="#在-javascript-中-可以通过两种方式创建一个正则表达式。" aria-hidden="true">#</a> 在 JavaScript 中，可以通过两种方式创建一个正则表达式。</h5><h5 id="方式一-通过调用regexp对象的构造函数创建" tabindex="-1"><a class="header-anchor" href="#方式一-通过调用regexp对象的构造函数创建" aria-hidden="true">#</a> 方式一：通过调用RegExp对象的构造函数创建</h5><h5 id="方式二-利用字面量创建-正则表达式" tabindex="-1"><a class="header-anchor" href="#方式二-利用字面量创建-正则表达式" aria-hidden="true">#</a> 方式二：利用字面量创建 正则表达式</h5><h3 id="_2-2-测试正则表达式" tabindex="-1"><a class="header-anchor" href="#_2-2-测试正则表达式" aria-hidden="true">#</a> 2. 2 测试正则表达式</h3><h5 id="test-正则对象方法-用于检测字符串是否符合该规则-该对象会返回-true-或-false-其" tabindex="-1"><a class="header-anchor" href="#test-正则对象方法-用于检测字符串是否符合该规则-该对象会返回-true-或-false-其" aria-hidden="true">#</a> test() 正则对象方法，用于检测字符串是否符合该规则，该对象会返回 true 或 false，其</h5><h5 id="参数是测试字符串。" tabindex="-1"><a class="header-anchor" href="#参数是测试字符串。" aria-hidden="true">#</a> 参数是测试字符串。</h5><h2 id="_3-正则表达式中的特殊字符" tabindex="-1"><a class="header-anchor" href="#_3-正则表达式中的特殊字符" aria-hidden="true">#</a> 3 .正则表达式中的特殊字符</h2><h3 id="_3-1-正则表达式的组成" tabindex="-1"><a class="header-anchor" href="#_3-1-正则表达式的组成" aria-hidden="true">#</a> 3. 1 正则表达式的组成</h3><h5 id="一个正则表达式可以由简单的字符构成-比如-abc-也可以是简单和特殊字符的组合" tabindex="-1"><a class="header-anchor" href="#一个正则表达式可以由简单的字符构成-比如-abc-也可以是简单和特殊字符的组合" aria-hidden="true">#</a> 一个正则表达式可以由简单的字符构成，比如 /abc/，也可以是简单和特殊字符的组合，</h5><h5 id="比如-ab-c-。其中特殊字符也被称为元字符-在正则表达式中是具有特殊意义的专用符" tabindex="-1"><a class="header-anchor" href="#比如-ab-c-。其中特殊字符也被称为元字符-在正则表达式中是具有特殊意义的专用符" aria-hidden="true">#</a> 比如 /ab*c/ 。其中特殊字符也被称为元字符，在正则表达式中是具有特殊意义的专用符</h5><h5 id="号-如-、-、-等。" tabindex="-1"><a class="header-anchor" href="#号-如-、-、-等。" aria-hidden="true">#</a> 号，如 ^ 、$ 、+ 等。</h5><h5 id="特殊字符非常多-可以参考" tabindex="-1"><a class="header-anchor" href="#特殊字符非常多-可以参考" aria-hidden="true">#</a> 特殊字符非常多，可以参考：</h5><h5 id="mdn" tabindex="-1"><a class="header-anchor" href="#mdn" aria-hidden="true">#</a> MDN</h5><h5 id="jquery-手册-正则表达式部分" tabindex="-1"><a class="header-anchor" href="#jquery-手册-正则表达式部分" aria-hidden="true">#</a> jQuery 手册：正则表达式部分</h5><h5 id="正则测试工具" tabindex="-1"><a class="header-anchor" href="#正则测试工具" aria-hidden="true">#</a> 正则测试工具</h5><h3 id="_3-2-边界符" tabindex="-1"><a class="header-anchor" href="#_3-2-边界符" aria-hidden="true">#</a> 3. 2 边界符</h3><h5 id="正则表达式中的边界符-位置符-用来提示字符所处的位置-主要有两个字符" tabindex="-1"><a class="header-anchor" href="#正则表达式中的边界符-位置符-用来提示字符所处的位置-主要有两个字符" aria-hidden="true">#</a> 正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var regexp = new RegExp(/ 123 /);
console.log(regexp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var rg = / 123 /;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var rg = / 123 /;
console.log(rg.test( 123 ));//匹配字符中是否出现 123   出现结果为true
console.log(rg.test(&#39;abc&#39;));//匹配字符中是否出现 123  未出现结果为false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="边界符-说明" tabindex="-1"><a class="header-anchor" href="#边界符-说明" aria-hidden="true">#</a> 边界符 说明</h5><h5 id="表示匹配行首的文本-以谁开始" tabindex="-1"><a class="header-anchor" href="#表示匹配行首的文本-以谁开始" aria-hidden="true">#</a> ^ 表示匹配行首的文本（以谁开始）</h5><h5 id="表示匹配行尾的文本-以谁结束" tabindex="-1"><a class="header-anchor" href="#表示匹配行尾的文本-以谁结束" aria-hidden="true">#</a> $ 表示匹配行尾的文本（以谁结束）</h5><h5 id="如果-和-在一起-表示必须是精确匹配。" tabindex="-1"><a class="header-anchor" href="#如果-和-在一起-表示必须是精确匹配。" aria-hidden="true">#</a> 如果 ^和 $ 在一起，表示必须是精确匹配。</h5><h3 id="_3-3-字符类" tabindex="-1"><a class="header-anchor" href="#_3-3-字符类" aria-hidden="true">#</a> 3. 3 字符类</h3><h5 id="字符类表示有一系列字符可供选择-只要匹配其中一个就可以了。所有可供选择的字符" tabindex="-1"><a class="header-anchor" href="#字符类表示有一系列字符可供选择-只要匹配其中一个就可以了。所有可供选择的字符" aria-hidden="true">#</a> 字符类表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符</h5><h5 id="都放在方括号内。" tabindex="-1"><a class="header-anchor" href="#都放在方括号内。" aria-hidden="true">#</a> 都放在方括号内。</h5><h4 id="_3-3-1-方括号" tabindex="-1"><a class="header-anchor" href="#_3-3-1-方括号" aria-hidden="true">#</a> 3. 3. 1 [] 方括号</h4><h5 id="表示有一系列字符可供选择-只要匹配其中一个就可以了" tabindex="-1"><a class="header-anchor" href="#表示有一系列字符可供选择-只要匹配其中一个就可以了" aria-hidden="true">#</a> 表示有一系列字符可供选择，只要匹配其中一个就可以了</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var rg = /abc/; // 正则表达式里面不需要加引号 不管是数字型还是字符串型
// /abc/ 只要包含有abc这个字符串返回的都是true
console.log(rg.test(&#39;abc&#39;));
console.log(rg.test(&#39;abcd&#39;));
console.log(rg.test(&#39;aabcd&#39;));
console.log(&#39;‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐&#39;);
var reg = /^abc/;
console.log(reg.test(&#39;abc&#39;)); // true
console.log(reg.test(&#39;abcd&#39;)); // true
console.log(reg.test(&#39;aabcd&#39;)); // false
console.log(&#39;‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐&#39;);
var reg 1  = /^abc$/; // 精确匹配 要求必须是 abc字符串才符合规范
console.log(reg 1 .test(&#39;abc&#39;)); // true
console.log(reg 1 .test(&#39;abcd&#39;)); // false
console.log(reg 1 .test(&#39;aabcd&#39;)); // false
console.log(reg 1 .test(&#39;abcabc&#39;)); // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-2-量词符" tabindex="-1"><a class="header-anchor" href="#_3-3-2-量词符" aria-hidden="true">#</a> 3. 3. 2 量词符</h4><h5 id="量词符用来设定某个模式出现的次数。" tabindex="-1"><a class="header-anchor" href="#量词符用来设定某个模式出现的次数。" aria-hidden="true">#</a> 量词符用来设定某个模式出现的次数。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var rg = /[abc]/; // 只要包含有a 或者 包含有b 或者包含有c 都返回为true
console.log(rg.test(&#39;andy&#39;));//true
console.log(rg.test(&#39;baby&#39;));//true
console.log(rg.test(&#39;color&#39;));//true
console.log(rg.test(&#39;red&#39;));//false
var rg 1  = /^[abc]$/; // 三选一 只有是a 或者是 b 或者是c 这三个字母才返回
true
console.log(rg 1 .test(&#39;aa&#39;));//false
console.log(rg 1 .test(&#39;a&#39;));//true
console.log(rg 1 .test(&#39;b&#39;));//true
console.log(rg 1 .test(&#39;c&#39;));//true
console.log(rg 1 .test(&#39;abc&#39;));//true
‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐
‐‐‐‐‐‐‐‐‐
var reg = /^[a‐z]$/ // 26 个英文字母任何一个字母返回 true ‐ 表示的是a 到z 的范
围
console.log(reg.test(&#39;a&#39;));//true
console.log(reg.test(&#39;z&#39;));//true
console.log(reg.test(&#39;A&#39;));//false
‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐
‐‐‐‐‐‐‐‐‐‐
//字符组合
var reg 1  = /^[a‐zA‐Z 0 ‐ 9 ]$/; //  26 个英文字母(大写和小写都可以)任何一个字母返回
true
‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐
‐‐‐‐‐‐‐‐‐‐‐
//取反 方括号内部加上 ^ 表示取反，只要包含方括号内的字符，都返回 false 。
var reg 2  = /^[^a‐zA‐Z 0 ‐ 9 ]$/;
console.log(reg 2 .test(&#39;a&#39;));//false
console.log(reg 2 .test(&#39;B&#39;));//false
console.log(reg 2 .test( 8 ));//false
console.log(reg 2 .test(&#39;!&#39;));//true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="量词-说明" tabindex="-1"><a class="header-anchor" href="#量词-说明" aria-hidden="true">#</a> 量词 说明</h5><h5 id="重复-0-次或更多次" tabindex="-1"><a class="header-anchor" href="#重复-0-次或更多次" aria-hidden="true">#</a> * 重复 0 次或更多次</h5><h5 id="重复-1-次或更多次" tabindex="-1"><a class="header-anchor" href="#重复-1-次或更多次" aria-hidden="true">#</a> + 重复 1 次或更多次</h5><h5 id="重复-0-次或-1-次" tabindex="-1"><a class="header-anchor" href="#重复-0-次或-1-次" aria-hidden="true">#</a> ? 重复 0 次或 1 次</h5><h5 id="n-重复n次" tabindex="-1"><a class="header-anchor" href="#n-重复n次" aria-hidden="true">#</a> {n} 重复n次</h5><h5 id="n-重复n次或更多次" tabindex="-1"><a class="header-anchor" href="#n-重复n次或更多次" aria-hidden="true">#</a> {n,} 重复n次或更多次</h5><h5 id="n-m-重复n到m次" tabindex="-1"><a class="header-anchor" href="#n-m-重复n到m次" aria-hidden="true">#</a> {n,m} 重复n到m次</h5><h4 id="_3-3-3-用户名表单验证" tabindex="-1"><a class="header-anchor" href="#_3-3-3-用户名表单验证" aria-hidden="true">#</a> 3. 3. 3 用户名表单验证</h4><h5 id="功能需求" tabindex="-1"><a class="header-anchor" href="#功能需求" aria-hidden="true">#</a> 功能需求:</h5><h5 id="_1-如果用户名输入合法-则后面提示信息为-用户名合法-并且颜色为绿色" tabindex="-1"><a class="header-anchor" href="#_1-如果用户名输入合法-则后面提示信息为-用户名合法-并且颜色为绿色" aria-hidden="true">#</a> 1. 如果用户名输入合法, 则后面提示信息为: 用户名合法,并且颜色为绿色</h5><h5 id="_2-如果用户名输入不合法-则后面提示信息为-用户名不符合规范-并且颜色为红色" tabindex="-1"><a class="header-anchor" href="#_2-如果用户名输入不合法-则后面提示信息为-用户名不符合规范-并且颜色为红色" aria-hidden="true">#</a> 2. 如果用户名输入不合法, 则后面提示信息为: 用户名不符合规范, 并且颜色为红色</h5><h5 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析:</h5><h5 id="_1-用户名只能为英文字母-数字-下划线或者短横线组成-并且用户名长度为-6-16-位" tabindex="-1"><a class="header-anchor" href="#_1-用户名只能为英文字母-数字-下划线或者短横线组成-并且用户名长度为-6-16-位" aria-hidden="true">#</a> 1. 用户名只能为英文字母,数字,下划线或者短横线组成, 并且用户名长度为 6 ~ 16 位.</h5><h5 id="_2-首先准备好这种正则表达式模式-a-za-z-0-9-6-16" tabindex="-1"><a class="header-anchor" href="#_2-首先准备好这种正则表达式模式-a-za-z-0-9-6-16" aria-hidden="true">#</a> 2. 首先准备好这种正则表达式模式/$[a-zA-Z 0 - 9 - _]{ 6 , 16 }^/</h5><h5 id="_3-当表单失去焦点就开始验证" tabindex="-1"><a class="header-anchor" href="#_3-当表单失去焦点就开始验证" aria-hidden="true">#</a> 3. 当表单失去焦点就开始验证.</h5><h5 id="_4-如果符合正则规范-则让后面的span标签添加-right类" tabindex="-1"><a class="header-anchor" href="#_4-如果符合正则规范-则让后面的span标签添加-right类" aria-hidden="true">#</a> 4. 如果符合正则规范, 则让后面的span标签添加 right类.</h5><h5 id="_5-如果不符合正则规范-则让后面的span标签添加-wrong类" tabindex="-1"><a class="header-anchor" href="#_5-如果不符合正则规范-则让后面的span标签添加-wrong类" aria-hidden="true">#</a> 5. 如果不符合正则规范, 则让后面的span标签添加 wrong类.</h5><h4 id="_3-3-4-括号总结" tabindex="-1"><a class="header-anchor" href="#_3-3-4-括号总结" aria-hidden="true">#</a> 3. 3. 4 括号总结</h4><h5 id="_1-大括号-量词符-里面表示重复次数" tabindex="-1"><a class="header-anchor" href="#_1-大括号-量词符-里面表示重复次数" aria-hidden="true">#</a> 1 .大括号 量词符. 里面表示重复次数</h5><h5 id="_2-中括号-字符集合。匹配方括号中的任意字符" tabindex="-1"><a class="header-anchor" href="#_2-中括号-字符集合。匹配方括号中的任意字符" aria-hidden="true">#</a> 2 .中括号 字符集合。匹配方括号中的任意字符.</h5><h5 id="_3-小括号表示优先级" tabindex="-1"><a class="header-anchor" href="#_3-小括号表示优先级" aria-hidden="true">#</a> 3 .小括号表示优先级</h5><h5 id="正则表达式在线测试" tabindex="-1"><a class="header-anchor" href="#正则表达式在线测试" aria-hidden="true">#</a> 正则表达式在线测试</h5><h3 id="_3-4-预定义类" tabindex="-1"><a class="header-anchor" href="#_3-4-预定义类" aria-hidden="true">#</a> 3. 4 预定义类</h3><h5 id="预定义类指的是某些常见模式的简写方式" tabindex="-1"><a class="header-anchor" href="#预定义类指的是某些常见模式的简写方式" aria-hidden="true">#</a> 预定义类指的是某些常见模式的简写方式.</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; class=&quot;uname&quot;&gt; &lt;span&gt;请输入用户名&lt;/span&gt;
&lt;script&gt;
// 量词是设定某个模式出现的次数
var reg = /^[a‐zA‐Z 0 ‐ 9 _‐]{ 6 , 16 }$/; // 这个模式用户只能输入英文字母 数字 下划
线 中划线
var uname = document.querySelector(&#39;.uname&#39;);
var span = document.querySelector(&#39;span&#39;);
uname.onblur = function() {
if (reg.test(this.value)) {
console.log(&#39;正确的&#39;);
span.className = &#39;right&#39;;
span.innerHTML = &#39;用户名格式输入正确&#39;;
} else {
console.log(&#39;错误的&#39;);
span.className = &#39;wrong&#39;;
span.innerHTML = &#39;用户名格式输入不正确&#39;;
}
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例-验证座机号码" tabindex="-1"><a class="header-anchor" href="#案例-验证座机号码" aria-hidden="true">#</a> 案例:验证座机号码</h5><h5 id="表单验证案例" tabindex="-1"><a class="header-anchor" href="#表单验证案例" aria-hidden="true">#</a> 表单验证案例</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var reg = /^\\d{ 3 }‐\\d{ 8 }|\\d{ 4 }‐\\d{ 7 }$/;
var reg = /^\\d{ 3 , 4 }‐\\d{ 7 , 8 }$/;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="手机号验证-1-3-4-5-7-8-0-‐-9-9" tabindex="-1"><a class="header-anchor" href="#手机号验证-1-3-4-5-7-8-0-‐-9-9" aria-hidden="true">#</a> //手机号验证:/^ 1 [ 3 | 4 | 5 | 7 | 8 ][ 0 ‐ 9 ]{ 9 }$/;</h6><h6 id="验证通过与不通过更换元素的类名与元素中的内容" tabindex="-1"><a class="header-anchor" href="#验证通过与不通过更换元素的类名与元素中的内容" aria-hidden="true">#</a> //验证通过与不通过更换元素的类名与元素中的内容</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (reg.test(this.value)) {
// console.log(&#39;正确的&#39;);
this.nextElementSibling.className = &#39;success&#39;;
this.nextElementSibling.innerHTML = &#39;&lt;i class=&quot;success_icon&quot;&gt;&lt;/i&gt; 恭喜
您输入正确&#39;;
} else {
// console.log(&#39;不正确&#39;);
this.nextElementSibling.className = &#39;error&#39;;
this.nextElementSibling.innerHTML = &#39;&lt;i class=&quot;error_icon&quot;&gt;&lt;/i&gt;格式
不正确,请从新输入 &#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-正则替换replace" tabindex="-1"><a class="header-anchor" href="#_3-5-正则替换replace" aria-hidden="true">#</a> 3. 5 正则替换replace</h3><h5 id="replace-方法可以实现替换字符串操作-用来替换的参数可以是一个字符串或是一个正" tabindex="-1"><a class="header-anchor" href="#replace-方法可以实现替换字符串操作-用来替换的参数可以是一个字符串或是一个正" aria-hidden="true">#</a> replace() 方法可以实现替换字符串操作，用来替换的参数可以是一个字符串或是一个正</h5><h5 id="则表达式。" tabindex="-1"><a class="header-anchor" href="#则表达式。" aria-hidden="true">#</a> 则表达式。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//QQ号验证: /^[ 1 ‐ 9 ]\\d{ 4 ,}$/;
//昵称验证:/^[\\u 4 e 00 ‐\\u 9 fa 5 ]{ 2 , 8 }$/
//验证通过与不通过更换元素的类名与元素中的内容 ,将上一步的匹配代码进行封装,多次
调用即可
function regexp(ele, reg) {
ele.onblur = function() {
if (reg.test(this.value)) {
// console.log(&#39;正确的&#39;);
this.nextElementSibling.className = &#39;success&#39;;
this.nextElementSibling.innerHTML = &#39;&lt;i class=&quot;success_icon&quot;&gt;&lt;/i&gt;
恭喜您输入正确&#39;;
} else {
// console.log(&#39;不正确&#39;);
this.nextElementSibling.className = &#39;error&#39;;
this.nextElementSibling.innerHTML = &#39;&lt;i class=&quot;error_icon&quot;&gt;&lt;/i&gt; 格式
不正确,请从新输入 &#39;;
}
}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//密码验证:/^[a‐zA‐Z 0 ‐ 9 _‐]{ 6 , 16 }$/
//再次输入密码只需匹配与上次输入的密码值 是否一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例-过滤敏感词汇" tabindex="-1"><a class="header-anchor" href="#案例-过滤敏感词汇" aria-hidden="true">#</a> 案例:过滤敏感词汇</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;andy和red&#39;;
var newStr = str.replace(&#39;andy&#39;, &#39;baby&#39;);
console.log(newStr)//baby和red
//等同于 此处的andy可以写在正则表达式内
var newStr 2  = str.replace(/andy/, &#39;baby&#39;);
console.log(newStr 2 )//baby和red
//全部替换
var str = &#39;abcabc&#39;
var nStr = str.replace(/a/,&#39;哈哈&#39;)
console.log(nStr) //哈哈bcabc
//全部替换g
var nStr = str.replace(/a/a,&#39;哈哈&#39;)
console.log(nStr) //哈哈bc哈哈bc
//忽略大小写i
var str = &#39;aAbcAba&#39;;
var newStr = str.replace(/a/gi,&#39;哈哈&#39;)//&quot;哈哈哈哈bc哈哈b哈哈&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;textarea name=&quot;&quot; id=&quot;message&quot;&gt;&lt;/textarea&gt; &lt;button&gt;提交&lt;/button&gt;
&lt;div&gt;&lt;/div&gt;
&lt;script&gt;
var text = document.querySelector(&#39;textarea&#39;);
var btn = document.querySelector(&#39;button&#39;);
var div = document.querySelector(&#39;div&#39;);
btn.onclick = function() {
div.innerHTML = text.value.replace(/激情|gay/g, &#39;**&#39;);
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>`,93),s=[r];function l(t,c){return a(),i("div",null,s)}const u=e(d,[["render",l],["__file","04-JavaScript进阶.html.vue"]]);export{u as default};

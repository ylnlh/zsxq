import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-rpFDZqdF.js";const e={},p=t(`<h1 id="php简要札记" tabindex="-1"><a class="header-anchor" href="#php简要札记" aria-hidden="true">#</a> php简要札记</h1><hr><p>1， HTML里面不能直接写php代码</p><p>2， php文件里面可以写html标签，但是php代码里面不能写html</p><p>3， php里面负责解析字符串，但是最终执行环境在浏览器</p><p>4， 如果混编php和html的话，只要是php的代码就必须要通过标记给包裹起来</p><h2 id="_1-0-数组的操作" tabindex="-1"><a class="header-anchor" href="#_1-0-数组的操作" aria-hidden="true">#</a> 1.0 数组的操作</h2><p>​ 数组分为两种类型</p><h4 id="索引数组" tabindex="-1"><a class="header-anchor" href="#索引数组" aria-hidden="true">#</a> 索引数组</h4><p>​ 通过索引来操作数组</p><p>​ 1， array(添加数组的成员， 成员类型不限)</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 通过索引取值</span>
	<span class="token keyword">echo</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;abc&quot;</span>
	<span class="token keyword">echo</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 本来应该是true，但是输出为了1</span>

	<span class="token comment">// php中遍历数组</span>
	<span class="token comment">// 在php中小数点是拼接字符的意思  这里的length调用错误</span>
	<span class="token comment">/* for($i = 0; $i &lt; $arr.length; $i++) { */</span>
	<span class="token comment">// 使用count方法能够计算当前数组的长度</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token comment">// 打印每一项的值</span>
      	<span class="token keyword">echo</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot; &quot;</span><span class="token punctuation">;</span> <span class="token comment">// 使内容之间有些距离</span>
	<span class="token punctuation">}</span>

	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/*
		Array(
			[0] =&gt; 1
			[1] =&gt; 2
			[3] =&gt; 3
			[4] =&gt; 1
			[5] =&gt; abc
		)
	*/</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2，中括号的方式，[ ]</p><p>​ 与上面没有太大的差异</p><p>​</p><h4 id="关联数组" tabindex="-1"><a class="header-anchor" href="#关联数组" aria-hidden="true">#</a> 关联数组</h4><p>​ 以键值对的方式描述数据，类似于js中的字面量对象</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>// 语法： array($key =&gt; $value, $key =&gt; $value)

<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token keyword">array</span> <span class="token punctuation">(</span>
  		<span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;yiyang&quot;</span><span class="token punctuation">,</span>
  		<span class="token string double-quoted-string">&quot;age&quot;</span> <span class="token operator">=&gt;</span> <span class="token number">20</span><span class="token punctuation">,</span>
  		<span class="token string double-quoted-string">&quot;gender&quot;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;gender&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

	<span class="token comment">// 打印数组，使用print_r( )的方法</span>
	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
		Array(
			[name] =&gt; yiyang
			[age] =&gt; 20
			[gender] =&gt; 1
		)
	*/</span>

	<span class="token comment">/* 遍历关联数组的方法 */</span>
	<span class="token comment">/* 
    	foreach(数组对象 as 键 =&gt; 值) {
          ...
    	}
    */</span>
	<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$arr</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token keyword">echo</span> <span class="token variable">$key</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;:&quot;</span> <span class="token operator">.</span> <span class="token variable">$value</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;/br&gt;&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/*	=&gt; 输出
		name:yiyang
		age:20
		gender:1
	*/</span>

	<span class="token comment">// 简洁语法</span>
	<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$arr</span> <span class="token keyword">as</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">echo</span> <span class="token variable">$value</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;/br&gt;&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><p>​ ** 所有的数组本质上都是关联数组, foreach方法也可以操作索引数组;</p><p>​ ** 如果通过空的中括号赋值，会自动追加和排序，还会变成混合数组</p><h4 id="操作数组的方法" tabindex="-1"><a class="header-anchor" href="#操作数组的方法" aria-hidden="true">#</a> 操作数组的方法</h4><p>​ count( ) 计算数组的长度length</p><p>​ unset( ) 使用数组删除某一项会有一点点小问题</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">unset</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;hr/&gt;&#39;</span><span class="token punctuation">;</span>
	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/*
		之前： Array([0] =&gt; 1 [1] =&gt; 2 [2] =&gt; 3 [3] =&gt; 4 [4] =&gt; 5)
		现在： Array([0] =&gt; 1 [1] =&gt; 2 [3] =&gt; 4 [4] =&gt; 5)
	*/</span>
	<span class="token comment">// 索引和值都没有，变成了稀疏的了</span>
<span class="token delimiter important">?&gt;</span></span>
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="深度数组-二维数组" tabindex="-1"><a class="header-anchor" href="#深度数组-二维数组" aria-hidden="true">#</a> 深度数组 / 二维数组</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">/* $arr = array(
		1, 2, 3,
  		&quot;name&quot; =&gt; &quot;tylor&quot;,
  		array()
	); */</span>
  
  	<span class="token comment">// 描述学生对象</span>
  	<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
		<span class="token comment">// 描述第一个学生对象的数据</span>
  		<span class="token string double-quoted-string">&quot;name&quot;</span><span class="token operator">=&gt;</span><span class="token keyword">array</span><span class="token punctuation">(</span>
        	<span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;tylor&quot;</span><span class="token punctuation">,</span>
          	<span class="token string double-quoted-string">&quot;age&quot;</span> <span class="token operator">=&gt;</span> <span class="token number">20</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
  		<span class="token keyword">array</span><span class="token punctuation">(</span>
        	<span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;Bluce&quot;</span><span class="token punctuation">,</span>
          	<span class="token string double-quoted-string">&quot;age&quot;</span> <span class="token operator">=&gt;</span> <span class="token number">18</span>
        <span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* Array(
			[0] =&gt; Array(
					[name] =&gt; tylor 
					[age] =&gt; 20
					) 
			[1] =&gt; Array(
					[name] =&gt; Bluce
					[age] =&gt; 18 
					)
			)
	*/</span>

	<span class="token comment">// 通过嵌套循环输出当前的数组</span>
	<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$arr</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token comment">// 二维数组的遍历</span>
      	<span class="token comment">// print_r($value); 两个内层数组</span>
      	<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$value</span> <span class="token keyword">as</span> <span class="token variable">$subkey</span> <span class="token operator">=&gt;</span> <span class="token variable">$subvalue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          	<span class="token keyword">echo</span> <span class="token variable">$subkey</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;:&quot;</span> <span class="token operator">.</span> <span class="token variable">$subvalue</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">;</span>
      	<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* ==&gt; 输出
		name：tylor
		age:20
		name:Bluce
		age:18
	*/</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_2-0-数据类型的转换和运算符" tabindex="-1"><a class="header-anchor" href="#_2-0-数据类型的转换和运算符" aria-hidden="true">#</a> 2.0 数据类型的转换和运算符</h2><p>​ 主要分为两种，自动转换和强制类型转换，也就是显式转换和隐式转换，自动转换用的多</p><h4 id="php中强制类型转换" tabindex="-1"><a class="header-anchor" href="#php中强制类型转换" aria-hidden="true">#</a> php中强制类型转换</h4><p>​ bool( ) string( ) object( )</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;123&#39;</span><span class="token punctuation">;</span>
	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string(3) &#39;123&#39;</span>
	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// int(123)</span>
	
	<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;br/&gt;&#39;</span><span class="token punctuation">;</span>
	<span class="token comment">// 转换成数组</span>
	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Array {[0] =&gt; string(3) &#39;123&#39;}</span>

	<span class="token variable">$abc</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;jackey&#39;</span><span class="token punctuation">;</span>
	<span class="token variable">$num</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span><span class="token variable">$abc</span><span class="token punctuation">;</span>
	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// int(0)</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h4><ul><li><p>+号只能是运算符，系统默认会隐式转换成数值，如果转换不了，就会给一个默认值</p><p>​ 默认值类型</p><table><thead><tr><th>数据类型</th><th>默认值</th></tr></thead><tbody><tr><td>int</td><td>0</td></tr><tr><td>object</td><td>null</td></tr><tr><td>bool</td><td>false</td></tr><tr><td>float</td><td>0.0</td></tr></tbody></table></li><li><p>在php中，拼接的运算符，是小数点.</p></li></ul><p>运算符类型</p><table><thead><tr><th>算术运算符</th><th>赋值运算符</th><th>逻辑运算符</th><th>比较运算符</th></tr></thead><tbody><tr><td>+ 加 - 减 * 乘 / 除</td><td>= 一般赋值</td><td>！取反</td><td>&gt; 大于 &lt; 小于</td></tr><tr><td>% 求余，相除完剩余的结果</td><td>+= 在本身追加</td><td>&amp;&amp; 与，严格要求</td><td>&gt;= 大于等于 &lt;=小于等于</td></tr><tr><td>++ 自加单独没区别</td><td>-= 在本身扣除</td><td>|| 或，满足一项</td><td>== 是否相等 === 是否全等</td></tr><tr><td>-- 同上</td><td>*= /= 同上逻辑</td><td></td><td>!= 不相等 !== 不全等</td></tr></tbody></table><p><strong>三元运算符</strong> 表达式会返回true或者false <strong>?</strong> 如果为true返回值1 <strong>:</strong> 如果为false返回值2</p><hr><h2 id="_3-0-php常用语法" tabindex="-1"><a class="header-anchor" href="#_3-0-php常用语法" aria-hidden="true">#</a> 3.0 php常用语法</h2><p>​ 顺序结构 =&gt; 流程控制 =&gt; 循环</p><h4 id="流程控制和循环" tabindex="-1"><a class="header-anchor" href="#流程控制和循环" aria-hidden="true">#</a> 流程控制和循环</h4><h5 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h5><ul><li>if...else</li><li>switch...case</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token variable">$age</span> <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$age</span> <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;您已成年&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      	<span class="token keyword">echo</span>  <span class="token string single-quoted-string">&#39;您未成年&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  	<span class="token comment">// 简写</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$age</span> <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>
		<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;您已成年&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token punctuation">:</span>
		<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;您未成年&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">endif</span><span class="token punctuation">;</span>
	<span class="token comment">/*
		if():
		elseif():
		elseif():
		else:
		endif;
	*/</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token comment">// 正常循环</span>
  	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token comment">// 输出语句</span>
  	<span class="token punctuation">}</span>

	<span class="token comment">// 指令式循环</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>
		<span class="token comment">// 输出语句</span>
	<span class="token keyword">endfor</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>习惯使然，没有什么强制要求;</p><h4 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
    <span class="token comment">// 函数声明</span>
    <span class="token keyword">function</span> <span class="token function-definition function">getSum</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token variable">$sum</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token variable">$num</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token variable">$sum</span> <span class="token operator">+=</span> <span class="token variable">$i</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token variable">$sum</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">echo</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
      !!!!!  在函数中没有作用域链，访问不到外部的变量值,
      如果找不到当前变量或者当前变量没有赋值，则转换为int类型就是0,
      如果确实需要访问外部数据，可以使用global，添加对外部成员的引用
    */</span>
	<span class="token variable">$num</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
	<span class="token keyword">function</span> <span class="token function-definition function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 添加到全局中</span>
      <span class="token keyword">global</span> <span class="token variable">$num</span><span class="token punctuation">;</span><span class="token comment">// 引用的同时不能赋值</span>
      <span class="token variable">$num</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
      <span class="token keyword">echo</span> <span class="token variable">$num</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="超全局变量" tabindex="-1"><a class="header-anchor" href="#超全局变量" aria-hidden="true">#</a> 超全局变量</h4><table><thead><tr><th>超全局变量名称</th><th>作用</th></tr></thead><tbody><tr><td>$GLOBALS</td><td>引用全局作用域中可用的全部变量</td></tr><tr><td>$_SERVER</td><td>获取服务端相关信息</td></tr><tr><td>$_REQUEST</td><td>获取提交参数</td></tr><tr><td>$_POST</td><td>获取post提交参数</td></tr><tr><td>$_GET</td><td>获取get提交参数</td></tr><tr><td>$_FILES</td><td>获取上传文件</td></tr><tr><td>$_ENV</td><td>操作环境变量</td></tr><tr><td>$_COOKIE</td><td>操作cookie</td></tr><tr><td>$_SESSION</td><td>操作session</td></tr></tbody></table><h5 id="globals" tabindex="-1"><a class="header-anchor" href="#globals" aria-hidden="true">#</a> $GLOBALS</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;jack Ma&#39;</span><span class="token punctuation">;</span>
	<span class="token variable">$age</span> <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>

	<span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token comment">// echo $GLOBALS;</span>
      	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$GLOBALS</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/*
		Array(
			[_GET] =&gt; Array()
			[_POST] =&gt; Array()
			[_COOKIE] =&gt; Array()
			[_FILES] =&gt; Array()
			[GLOBALS] =&gt; Array
			* RECURSION（递归） *
			[name] =&gt; jack Ma
			[age] =&gt; 40
		)
	*/</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// ！！！定义说明  不可修改，区分大小写，一般用大写</span>
  	<span class="token comment">// define(name, value, insensitive); insensitive -&gt; 不敏感，迟钝的</span>
  	<span class="token function">define</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;PI&quot;</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置为true则代表不区分大小写</span>

	<span class="token keyword">echo</span> <span class="token constant">PI</span><span class="token punctuation">;</span> <span class="token comment">// 3.14</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预设常量（魔术常量）</p><p>​ 在不同的使用场景下，代表不同的值</p><table><thead><tr><th>常量名称</th><th>作用</th></tr></thead><tbody><tr><td>_<em>LINE</em>_</td><td>可以获取当前的代码行</td></tr><tr><td>_<em>FILE</em>_</td><td>可以获取当前文件的路径 目录+文件名</td></tr><tr><td>_<em>DIR</em>_</td><td>可以获取当前文件的目录</td></tr><tr><td>_<em>FUNCTION</em>_</td><td>可以获取当前魔术常量所在的函数</td></tr></tbody></table><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>09
10  <span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token number">11</span>    <span class="token keyword">echo</span> <span class="token constant">__LINE__</span><span class="token punctuation">;</span>  <span class="token comment">// 11  返回当前的行号</span>
<span class="token number">12</span>  <span class="token delimiter important">?&gt;</span></span>
13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-0-php中的文件载入" tabindex="-1"><a class="header-anchor" href="#_4-0-php中的文件载入" aria-hidden="true">#</a> 4.0 php中的文件载入</h2><p>​ 说明： 在一个文件中引入另外一个文件的方法</p><p>​ <strong>html,css都有类似的方法，但是javascript不行，所以才有了后期的模块化</strong></p><p>​ 01-constant.php 用来描述一些固定的信息</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token function">define</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;__SCHOOL_NAME&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;传智播客&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">define</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;__ADDRESS__&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;首都北京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;下面是被入的代码块&quot;</span><span class="token punctuation">;</span>	
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 02-require.php 用来载入上面的文件</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// include 相当于在这里复制粘贴了一份</span>
  	<span class="token keyword">include</span> <span class="token string single-quoted-string">&#39;constant.php&#39;</span><span class="token punctuation">;</span> 
	<span class="token keyword">echo</span> <span class="token constant">SCHOOL_NAME</span><span class="token punctuation">;</span> <span class="token comment">// 传智播客</span>

  	<span class="token comment">// include_once   只会载入一次</span>
  	<span class="token keyword">include_once</span> <span class="token string single-quoted-string">&#39;constant.php&#39;</span><span class="token punctuation">;</span> <span class="token comment">// </span>
	<span class="token keyword">echo</span> <span class="token constant">SCHOOL_NAME</span><span class="token punctuation">;</span> <span class="token comment">// 传智播客 </span>

  	<span class="token comment">// require  </span>
  	<span class="token keyword">require</span> <span class="token string single-quoted-string">&#39;constant.php&#39;</span><span class="token punctuation">;</span> 
	<span class="token keyword">echo</span> <span class="token constant">SCHOOL_NAME</span><span class="token punctuation">;</span> <span class="token comment">// 传智播客</span>

  	<span class="token comment">// require_once</span>
	<span class="token keyword">require_once</span> <span class="token string single-quoted-string">&#39;constant.php&#39;</span><span class="token punctuation">;</span> 
  	<span class="token keyword">echo</span> <span class="token constant">SCHOOL_NAME</span><span class="token punctuation">;</span> <span class="token comment">// 传智播客</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th></th><th>require</th><th>require_once</th><th>include</th><th>include_once</th></tr></thead><tbody><tr><td>载入文件不存在是否影响后续代码执行</td><td>会</td><td>会</td><td>不会</td><td>不会</td></tr><tr><td>多次调用是否重复执行被载入的文件</td><td>会</td><td>不会</td><td>会</td><td>不会</td></tr></tbody></table><p>总结：</p><ul><li>include一般用于载入公共文件，这个文件的存在与否不能影响后续代码执行</li><li>require用于载入不可或缺的文件</li><li>至于是否采用一次载入这种方式取决于被载入的文件</li></ul><hr><h2 id="_5-0-常用api" tabindex="-1"><a class="header-anchor" href="#_5-0-常用api" aria-hidden="true">#</a> 5.0 常用API</h2><p>​ 这里的api指的就是一些方法，或者内置函数</p><h4 id="字符串与数组的处理" tabindex="-1"><a class="header-anchor" href="#字符串与数组的处理" aria-hidden="true">#</a> 字符串与数组的处理</h4><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>strlen( )</td><td>获取字符串的长度</td></tr><tr><td>mb_strlen( )</td><td>没有设置编码，就使用php默认的编码</td></tr><tr><td>mb_internal_encoding( )</td><td>获取php内部默认的编码</td></tr></tbody></table><p>strlen( )</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;hello world&quot;</span><span class="token punctuation">;</span>
	<span class="token comment">// 获取字符串的长度</span>
	<span class="token comment">// 无法正确处理中文字符（宽字符集：php默认不支持的字符-中文、韩文、日文）</span>
	<span class="token keyword">echo</span> <span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11  加两个中文就变17  一个中文3个字节</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// 获取函数内部默认的编码</span>
	<span class="token keyword">echo</span> <span class="token function">mb_internal_encoding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// UTF-8</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mb_strlen( )</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;hello world你好&quot;</span><span class="token punctuation">;</span>
	<span class="token comment">// 没有变化就使用默认编码</span>
	<span class="token comment">// 默认不能使用，如果想使用，就需要添加一个引用</span>
	<span class="token keyword">echo</span> <span class="token function">mb_strlen</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 13</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解开注释掉的那个引用</p><p>使用搜索查找到当前那个位置， 选择记事本打开，按住ctrl+f查找</p><p><strong>去掉前面的分号，！！！！！一定要记得手动重启一下服务器;</strong></p><p>备注：只有php5.6版本以上才支持，切换后点击应用</p><h4 id="时间处理函数" tabindex="-1"><a class="header-anchor" href="#时间处理函数" aria-hidden="true">#</a> 时间处理函数</h4><table><thead><tr><th>方法</th><th>名词</th><th>释义</th></tr></thead><tbody><tr><td>time( )</td><td>时间戳</td><td>从Unix纪元(格林威治 1970-01-01 00:00:00)到现在的秒数</td></tr><tr><td>date( )</td><td>格式化日期</td><td>date(&quot;Y-m-d H:i:s&quot;) 或者 date(&quot;Y-m-d H-i-s&quot;, $time)</td></tr><tr><td>strtotime( )</td><td>转换时间为秒数</td><td>把日期格式转换为秒数的时间戳</td></tr></tbody></table><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// 输出从1970-1-1 00:00:00到现在的秒数</span>
  	<span class="token keyword">echo</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 1520697202</span>

	<span class="token keyword">echo</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-d H:i:s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2018-11-12 05-14-52</span>
	<span class="token comment">// !!!!  这里的时间与正常时间不同，有8个小时的误差</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件</p><p>搜索timezone</p><p>点击查找下一个，找到属于这个开头的</p><p>！！！！手动重启服务器</p><p>​ strtotime( )</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token keyword">echo</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;1970-1-2 00:00:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 57600</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h4><table><thead><tr><th>方法</th><th>功能</th><th>PHP</th></tr></thead><tbody><tr><td>file_get_contents( )</td><td>将文件读入字符串</td><td>4</td></tr><tr><td>file_put_contents( )</td><td>将文件写入字符串</td><td>5</td></tr></tbody></table><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// 设置当前页面的返回值是图片类型</span>
  	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Content-Type:image/jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token comment">// file_get_contents( )</span>
  	<span class="token comment">// 读取文件成功，返回一个字符串类型的值， 如果失败，返回false</span>
  	<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;data.text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bool(false)</span>
	<span class="token comment">/*
		1, 读取任意类型的文件
		2, 如果读取图片，要在最前面加上一句代码
			header(&quot;Content-Type:image/jpg&quot;);
	*/</span>
	<span class="token variable">$res1</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;./images/monkey.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token variable">$res1</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// file_put_contents(文件路径, 需要写入的内容) 指定的内容写入文件，同时返回字符的长度</span>
  	<span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;data.txt&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;这是我写入的内容&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 24</span>

	<span class="token comment">// 上一种写法会覆盖之前原本的内容</span>
	<span class="token comment">// 需要加入一个参数 FILE_APPEND</span>
	<span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;data.txt&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;这是我写入的内容&quot;</span><span class="token punctuation">,</span> <span class="token constant">FILE_APPEND</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_6-0-水果案例动态生成" tabindex="-1"><a class="header-anchor" href="#_6-0-水果案例动态生成" aria-hidden="true">#</a> 6.0 水果案例动态生成</h2><p>静态网页生成：</p><p>​ 1，在html文件中写入结构，</p><p>​ 2，在css文件中写入样式</p><p>​ 3，在js中完成页面基本效果</p><p>​ 4，双击在浏览器中浏览网页</p><p>使用php将网页修改为动态网站：</p><p>​ 1，将html文件修改为php格式</p><p>​ 2，将主体的规律的数据，规律的存储到php语法的数组中</p><p>​ 3，使用php中的遍历，得到数组中每一项的数据</p><p>​ 4，生成页面结构，打印到页面中</p><p>​ 5，通过ip地址访问当前的网页</p><p>​ <strong>使用html书写的静态页面结构</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>香蕉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>苹果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>橘子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  	...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤1-整理主体内容数据" tabindex="-1"><a class="header-anchor" href="#步骤1-整理主体内容数据" aria-hidden="true">#</a> 步骤1： 整理主体内容数据</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
    <span class="token comment">// 将图片的路径和a链接的内容整理到数组中</span>
    <span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
		<span class="token keyword">array</span><span class="token punctuation">(</span>
        	<span class="token string double-quoted-string">&quot;src&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;img/banana1.jpg&quot;</span><span class="token punctuation">,</span>
          	<span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;香蕉&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
  		<span class="token keyword">array</span><span class="token punctuation">(</span>
        	<span class="token string double-quoted-string">&quot;src&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;img/apple.jpg&quot;</span><span class="token punctuation">,</span>
          	<span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;苹果&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
  		<span class="token keyword">array</span><span class="token punctuation">(</span>
        	<span class="token string double-quoted-string">&quot;src&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;img/orange.jpg&quot;</span><span class="token punctuation">,</span>
          	<span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;橘子&quot;</span>
        <span class="token punctuation">)</span>
  		<span class="token comment">//...</span>
  	<span class="token punctuation">)</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤2-php和html代码混编" tabindex="-1"><a class="header-anchor" href="#步骤2-php和html代码混编" aria-hidden="true">#</a> 步骤2：php和html代码混编</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$arr</span> <span class="token keyword">as</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token delimiter important">?&gt;</span></span>
  
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;src&#39;</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

<span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token punctuation">}</span> <span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤3-将数据存放在php文件" tabindex="-1"><a class="header-anchor" href="#步骤3-将数据存放在php文件" aria-hidden="true">#</a> 步骤3：将数据存放在php文件</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>// 新建 get_data.php 文件

<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">/*
  		1, 如果还是直接用数组存起来，那么与上面的内容则无异
  		2, 而以后究竟以什么形式传入，或者传入的内容是什么方式补丁
  		3, 假设传入的方式为字符串，如何拆解想要的信息，映射到数组中
  	*/</span>
  	<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;img/pineapple1.jpg|菠萝&quot;</span><span class="token punctuation">;</span>

	<span class="token comment">// ？？？ 如果是在php中该如何处理</span>
	<span class="token comment">// 使用 explode( ) 方法</span>
	<span class="token comment">// print_r(explode(&quot;|&quot;, $str)); Array([0] =&gt; img/pineapple1.jpg [1] =&gt; 菠萝)</span>
	<span class="token variable">$value</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;|&quot;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用javascript可以依照如下代码结构</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;img/pineapple1.jpg|菠萝&quot;</span><span class="token punctuation">;</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token comment">// [&quot;img/pineapple1.jpg&quot;, &quot;菠萝&quot;]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤4-完成单个标签的拼接" tabindex="-1"><a class="header-anchor" href="#步骤4-完成单个标签的拼接" aria-hidden="true">#</a> 步骤4：完成单个标签的拼接</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;img/pineapple1.jpg|菠萝&quot;</span><span class="token punctuation">;</span>
	<span class="token variable">$value</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;|&quot;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// [&quot;img/pineapple1.jpg&quot;, &quot;菠萝&quot;]</span>
<span class="token delimiter important">?&gt;</span></span>
  
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤5-数据和结构相分离" tabindex="-1"><a class="header-anchor" href="#步骤5-数据和结构相分离" aria-hidden="true">#</a> 步骤5：数据和结构相分离</h4><p>新建一个 data.txt 文件存入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>img/pineapple1.jpg|菠萝
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在php文件中引入数据</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// !!!! 在这里引入了数据文件</span>
  	<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;data.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
	<span class="token variable">$value</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;|&quot;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
  
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;src&#39;</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤6-添加更多数据完成效果" tabindex="-1"><a class="header-anchor" href="#步骤6-添加更多数据完成效果" aria-hidden="true">#</a> 步骤6：添加更多数据完成效果</h4><ul><li>通过换行存储数据</li><li>通过换行分割数据，再通过“|”分割数据</li></ul><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>img/pineapple1.jpg|菠萝
img/orange1.jpg|橘子
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>读取文件内容，分割字符串</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
 	<span class="token comment">// 引入文件</span>
 	<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;fruit.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 拆分每一行数据</span>
	<span class="token comment">// print_r(explode(&quot;\\n&quot;, $str));</span>
	<span class="token comment">/*
		Array(
			[0] =&gt;  img/pineapple1.jpg|菠萝
			[1] =&gt;  img/orange1.jpg|橘子
		)
	*/</span>
	<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  	<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$arr</span> <span class="token keyword">as</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token comment">// 继续拆分得到的每一行字符串</span>
    	<span class="token variable">$result</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;|&quot;</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token punctuation">}</span>
	<span class="token comment">// print_r($result);  能够得到最终的数组</span>

	<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$result</span> <span class="token keyword">as</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token delimiter important">?&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
   
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在文件结构首页引入php功能的文件</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token keyword">include</span> <span class="token string single-quoted-string">&#39;getList.php&#39;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入最终的完整的txt文档，改变内层拆分的索引</p>`,136),l=[p];function i(o,c){return s(),a("div",null,l)}const r=n(e,[["render",i],["__file","02-php基础.html.vue"]]);export{r as default};

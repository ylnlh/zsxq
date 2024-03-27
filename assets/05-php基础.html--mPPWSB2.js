import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-hz3rNBT8.js";const t={},p=e(`<p>​</p><h1 id="mysql简要札记" tabindex="-1"><a class="header-anchor" href="#mysql简要札记" aria-hidden="true">#</a> MySQL简要札记</h1><hr><p>​ $$ 在学习过程中，一定要记住不要被知识点弄的眼花缭乱，要分清主次，划分重难点 $$</p><h2 id="_1-0-navicat的使用" tabindex="-1"><a class="header-anchor" href="#_1-0-navicat的使用" aria-hidden="true">#</a> 1.0 navicat的使用</h2><p>​ 关于使用命令行创建和操作数据库，这个不必要掌握，不必要给自己增加学习难度；</p><p>​ 使用图形化软件来操作，更加直观和清晰，而且简单容易上手；</p><p><strong>离线激活</strong></p><p>​ 安装好的软件，需要注册或者购买激活码，课程提供的是有激活的软件</p><p>​ 需要在离线的状态下，打开激活软件，选中安装好的软件，点击打开即可</p><h4 id="图形软件的使用" tabindex="-1"><a class="header-anchor" href="#图形软件的使用" aria-hidden="true">#</a> 图形软件的使用</h4><p>​ *** 在打开软件进行操作的时候，一定要运行phpstudy软件，因为它内部集成了MySQL的服务</p><h5 id="创建数据库的连接" tabindex="-1"><a class="header-anchor" href="#创建数据库的连接" aria-hidden="true">#</a> 创建数据库的连接</h5><h5 id="设置连接的信息" tabindex="-1"><a class="header-anchor" href="#设置连接的信息" aria-hidden="true">#</a> 设置连接的信息</h5><p>​ 连接名称没有特殊的限制（尽量不要中文），其他的信息不用改，密码默认是root</p><h5 id="打开连接" tabindex="-1"><a class="header-anchor" href="#打开连接" aria-hidden="true">#</a> 打开连接</h5><h5 id="新建数据库" tabindex="-1"><a class="header-anchor" href="#新建数据库" aria-hidden="true">#</a> 新建数据库</h5><p>​ 确认新建完成</p><h5 id="打开数据库连接" tabindex="-1"><a class="header-anchor" href="#打开数据库连接" aria-hidden="true">#</a> 打开数据库连接</h5><p>​ 右键打开连接，或者双击连接，当前数据库变为绿色亮起</p><p>​ 在表的位置，右键新建表</p><h5 id="新建表" tabindex="-1"><a class="header-anchor" href="#新建表" aria-hidden="true">#</a> 新建表</h5><p>​ 如果主键为id，在底下可以设置 <strong>自动递增</strong></p><h5 id="创建数据" tabindex="-1"><a class="header-anchor" href="#创建数据" aria-hidden="true">#</a> 创建数据</h5><p>​ 建立好表头之后，就可以开始添加具体的数据了</p><hr><h2 id="_2-0-mysql语句的基本操作" tabindex="-1"><a class="header-anchor" href="#_2-0-mysql语句的基本操作" aria-hidden="true">#</a> 2.0 MySQL语句的基本操作</h2><p>​</p><p>​ SQL语句是所有数据同通用的操作语言</p><h4 id="打开编辑面板" tabindex="-1"><a class="header-anchor" href="#打开编辑面板" aria-hidden="true">#</a> 打开编辑面板</h4><p>​ 在当前面板可以打开编辑，输入执行的语句，查询到相关数据</p><h5 id="打开查询面板" tabindex="-1"><a class="header-anchor" href="#打开查询面板" aria-hidden="true">#</a> 打开查询面板</h5><h5 id="编辑查询语句" tabindex="-1"><a class="header-anchor" href="#编辑查询语句" aria-hidden="true">#</a> 编辑查询语句</h5><p>​ -- 双横线表示注释</p><p>​ 常用的关键字如下</p><table><thead><tr><th>关键字</th><th>解释</th></tr></thead><tbody><tr><td>select *</td><td>字段列表</td></tr><tr><td>from</td><td>表列表</td></tr><tr><td>where</td><td>条件</td></tr><tr><td>and</td><td>多个条件</td></tr></tbody></table><h4 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h4><p>​ 查询可以返回一个结果集，是一个列表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询在这张表里面的所有id列和name列</span>
<span class="token keyword">select</span> id<span class="token punctuation">,</span>name <span class="token keyword">from</span> mytable

<span class="token comment">-- 带条件的查询</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">3</span>

<span class="token comment">-- 查询年龄小于20岁的</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable <span class="token keyword">where</span> age <span class="token operator">&lt;</span> <span class="token number">20</span>

<span class="token comment">-- 查询年龄小于20岁，性别为女生</span>
<span class="token comment">-- and or not</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable <span class="token keyword">where</span> age <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token operator">and</span> gender <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="增加" tabindex="-1"><a class="header-anchor" href="#增加" aria-hidden="true">#</a> 增加</h4><p>​ insert [into] 表名[(字段1， 字段2，...)] values(值1，值2)</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 表名后没有指定字段，那么必须设置对应数量的值，并且主键不能重复</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> mytable <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;lili&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">-- 没有id的值，所以报错</span>

<span class="token comment">-- 如果有标识列，一般可以给null值，系统会自动生成</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> mytable <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;lili&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">-- 指定需要添加数据的字段</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> mytable<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;lili&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">-- 对于值为null的值，可以不写</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> mytable<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span>

<span class="token comment">-- 非空字段需要赋值，否则系统也不会自动为其生成默认值</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> mytable<span class="token punctuation">(</span>age<span class="token punctuation">,</span>gender<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">-- 虽然可以，但是不建议漏掉非空字段</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 修改的语法 update 表名  set 字段1 = 值1， 字段2 = 值2 ...</span>
<span class="token keyword">update</span> mytable <span class="token keyword">set</span> age <span class="token operator">=</span> age <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">-- 会把所有的都改变</span>

<span class="token comment">-- 带条件的写法,只会改变第5条</span>
<span class="token keyword">update</span> mytable <span class="token keyword">set</span> age <span class="token operator">=</span> age <span class="token operator">+</span> <span class="token number">10</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">5</span>

<span class="token comment">-- 同样支持  or  and  not</span>

<span class="token comment">-- 修改多个内容</span>
<span class="token keyword">update</span> mytable <span class="token keyword">set</span> age <span class="token operator">=</span> age <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>gender <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4><p>​ 不要轻易删除内容！！！！</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除语句的语法 delete [from] 表名 where 条件</span>
<span class="token comment">-- 删除的操作不能还原，要删除的话，就需要提前备份</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> mytable <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">8</span>

<span class="token comment">-- 同时删除多个</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> mytable <span class="token keyword">where</span> id <span class="token operator">in</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h4><p>​ ==&gt; 查询是返回受影响的内容</p><p>​ ==&gt; 增加、删除和修改是返回受影响的行数</p><h2 id="_3-0-常见的函数说明" tabindex="-1"><a class="header-anchor" href="#_3-0-常见的函数说明" aria-hidden="true">#</a> 3.0 常见的函数说明</h2><p>总条数 count</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询可以满足条件的记录数</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> mytable

<span class="token comment">-- 选择符合条件的记录数</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> mytable

<span class="token comment">-- 如果当前空值，不会对null值进行计算</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最大值、最小值 max min</p><p>​ 得到当前的那个值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- max 获取最大值  min  获取最小值</span>
<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> mytable

<span class="token comment">-- 如果是字符，按照字符的ascll码来排序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>平均值 avg</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 一般都是数值</span>
<span class="token keyword">select</span> svg<span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> mytable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>排序 order by</p><p>​ select * | 字段列表 form 表列表 where order by asc 升序 desc 降序</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable

<span class="token comment">-- 降序</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable <span class="token keyword">order</span> <span class="token keyword">by</span> id <span class="token keyword">desc</span>

<span class="token comment">-- 按照name排序  a-z</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable <span class="token keyword">order</span> <span class="token keyword">by</span> name

<span class="token comment">-- null值会排在前面</span>

<span class="token comment">-- 实现按照性别，再按照年龄</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable <span class="token keyword">order</span> <span class="token keyword">by</span> gender<span class="token punctuation">,</span>age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取指定范围内的数据</p><p>​ limit 获取指定的前n条记录 只有一个参数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 前面3条数据</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable <span class="token keyword">limit</span> <span class="token number">3</span>

<span class="token comment">-- 后面五条</span>
<span class="token comment">-- 先做降序，然后再去筛选，并且一定要先排序，再获取，不然会报错</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable <span class="token keyword">order</span> <span class="token keyword">by</span> id <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">5</span>

<span class="token comment">-- 中间范围的记录   n 偏移量从0开始, m 能够获取的记录数</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable <span class="token keyword">limit</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span>

<span class="token comment">-- 第2种写法，和上面的一样</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable <span class="token keyword">limit</span> <span class="token number">4</span> <span class="token keyword">offset</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 制作分页</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">int</span> pageSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> pagecount <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mytable pageSize <span class="token number">4</span> <span class="token keyword">offset</span> <span class="token punctuation">(</span>pagecount <span class="token operator">-</span> <span class="token number">1</span>） <span class="token operator">*</span> pageSize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h4><p>​ 在数据中，防止重复存储数据，所以会把不同的数据放在不同的地方存储</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 返回初始的数据，没有内部关联的数据</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student

<span class="token comment">-- 用户需要的是最终的结果</span>
<span class="token comment">-- 1.0 采用from where的方式</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student<span class="token punctuation">,</span>class <span class="token keyword">where</span> student<span class="token punctuation">.</span>cid <span class="token operator">=</span> class<span class="token punctuation">.</span>classid  <span class="token comment">-- where后面的这个 = 表示判断</span>

<span class="token comment">-- 简写</span>
<span class="token keyword">select</span> studentId<span class="token punctuation">,</span>studentName<span class="token punctuation">,</span>age<span class="token punctuation">,</span>gender<span class="token punctuation">,</span>className <span class="token keyword">from</span> student<span class="token punctuation">,</span>class <span class="token keyword">where</span> student<span class="token punctuation">.</span>cid <span class="token operator">=</span> class<span class="token punctuation">.</span>classid 

<span class="token comment">-- 2.0  join 和 inner join都是一样的   on和where的意思也是差不多的</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">inner</span> <span class="token keyword">join</span> class <span class="token keyword">on</span> student<span class="token punctuation">.</span>cid <span class="token operator">=</span> class<span class="token punctuation">.</span>classid


<span class="token comment">-- left join   如果对应不上的时候，自动让对应的值为空   right join 与之相反</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">left</span> <span class="token keyword">join</span> class <span class="token keyword">on</span> student<span class="token punctuation">.</span>cid <span class="token operator">=</span> class<span class="token punctuation">.</span>classid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-0-php建立数据库连接" tabindex="-1"><a class="header-anchor" href="#_4-0-php建立数据库连接" aria-hidden="true">#</a> 4.0 PHP建立数据库连接</h2><h4 id="建立与服务器的连接" tabindex="-1"><a class="header-anchor" href="#建立与服务器的连接" aria-hidden="true">#</a> 建立与服务器的连接</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// 设置主机，用户名，密码，想操作的数据库</span>
  	<span class="token comment">// 这个函数会自动打开连接</span>
  	<span class="token comment">// 如果连接失败，返回false   如果连接成功就返回一个连接对象</span>
  	<span class="token variable">$conn</span> <span class="token operator">=</span> <span class="token function">mysqli_connect</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;mybase&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 出来一堆东西证明连接成功</span>
	
	<span class="token comment">// 假如出错了，错误信息会给详细的提示</span>
	

	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$conn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token comment">// echo &quot;连接失败&quot;;</span>
      	<span class="token comment">// return;</span>
      	<span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;连接失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token comment">// exit();</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;连接成功&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;这是连接之后的代码，如果有错误，将不会执行到这里&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决乱码的问题</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token comment">// 有效</span>
  	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Content-Type:text/html;chartset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	
	<span class="token comment">// 无效</span>
  	<span class="token comment">// 为了保证服务器编码，与当前php编码保持一致，可以设置服务器返回数据的编码</span>
  	<span class="token function">mysqli_set_chartset</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="php操作sql增加、修改和删除" tabindex="-1"><a class="header-anchor" href="#php操作sql增加、修改和删除" aria-hidden="true">#</a> PHP操作sql增加、修改和删除</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// 新增数据 创建sql语句</span>
  	<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;insert into mytable value(null, &#39;张三&#39;, 30, 1)&quot;</span><span class="token punctuation">;</span>
  
	<span class="token comment">// 执行sql语句  mysqli_query(连接对象， sql语句)</span>
	<span class="token comment">// 有返回值</span>
	<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">mysqli_query</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">,</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bool(true)    |    bool(false)</span>

	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;新增成功&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;新增失败&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      	
      	<span class="token comment">// 输出具体的报错信息</span>
      	<span class="token keyword">echo</span> <span class="token function">mysqli_error</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token punctuation">}</span>

	<span class="token comment">// 获取更加详细的信息</span>
	
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  
  	<span class="token comment">// 修改操作</span>
  	<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;update mytable set age = 20 where id = 3&quot;</span><span class="token punctuation">;</span>
  
	<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">mysqli_query</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">,</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;修改功&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;修改失败&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      
      	<span class="token comment">// 输出具体的报错信息</span>
      	<span class="token keyword">echo</span> <span class="token function">mysqli_error</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  
  	<span class="token comment">// 修改操作</span>
  	<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;delete from mytable where id = 4&quot;</span><span class="token punctuation">;</span>
  
	<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">mysqli_query</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">,</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;删除成功&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;删除失败&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      
      	<span class="token comment">// 输出具体的报错信息</span>
      	<span class="token keyword">echo</span> <span class="token function">mysqli_error</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="php查询结果集" tabindex="-1"><a class="header-anchor" href="#php查询结果集" aria-hidden="true">#</a> php查询结果集</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// 1.0 设置响应头</span>
  	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Content-Type:text/html;chartset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 2.0 创建数据库连接</span>
	<span class="token variable">$conn</span> <span class="token operator">=</span> <span class="token function">mysqli_connect</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;mybase&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 3.0 设置编码</span>
	<span class="token comment">// mysqli_set_chartset($conn, &quot;utf8&quot;);</span>
	<span class="token function">mysqli_query</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;set name as utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置编码格式为utf-8</span>

	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$conn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;连接失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> 

	<span class="token comment">// 4.0 创建sql语句</span>
	<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;select * from mytable&quot;</span><span class="token punctuation">;</span>
	
	<span class="token comment">// 5.0 执行sql语句   </span>
	<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">mysqli_query</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">,</span> <span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 获取到大致信息，几行几列，但是并不是具体的数据</span>
	
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="判断当前返回结果集的状态" tabindex="-1"><a class="header-anchor" href="#判断当前返回结果集的状态" aria-hidden="true">#</a> 判断当前返回结果集的状态</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;查询失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">mysqli_num_rows</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;结果集为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  	
  	<span class="token comment">// 1, 如果查询失败， 会返回false</span>
  	<span class="token comment">// 2，如果成功，有结果集，但是没有数据，     有结果集有数据</span>
  	<span class="token comment">// !!!! 判断当前结果集中是否有数据</span>
  	<span class="token comment">// mysqli_num_rows($result);</span>
  	
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="展示结果集中的内容" tabindex="-1"><a class="header-anchor" href="#展示结果集中的内容" aria-hidden="true">#</a> 展示结果集中的内容</h5><p>​ 获取数据的函数：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// 1.0   mysqli_fetch_array</span>
  	<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token function">mysqli_fetch_array</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
  	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 关联数组和索引数组，两份</span>
	<span class="token comment">// 数据以数组的方式返回</span>
 
  	<span class="token comment">// 2.0   mysqli_fetch_assoc</span>
	<span class="token variable">$arr1</span> <span class="token operator">=</span> <span class="token function">mysqli_fetch_assoc</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$arr1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 关联数组</span>
	<span class="token comment">// 数据以数组的方式返回</span>
  
  	<span class="token comment">// 3.0   mysqli_fetch_row</span>
	<span class="token variable">$arr2</span> <span class="token operator">=</span> <span class="token function">mysqli_fetch_row</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$arr2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 索引数组</span>
	<span class="token comment">// 数据以数组的方式返回</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// mysqli_fetch_array(结果集资源， 返回内容的形式 MYSQL_ASSOC | MYSQL_NUM | MYSQL_BOTH); 常量</span>
  	<span class="token comment">// 根据传值的不同，得到不同的结果，默认是both	</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="读取全部的数据" tabindex="-1"><a class="header-anchor" href="#读取全部的数据" aria-hidden="true">#</a> 读取全部的数据</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  	<span class="token comment">// 上面的函数都只会读取一行数据，但是在读取完毕之后，会将指针指向下一行 </span>
  	<span class="token comment">// 如果需要获取多行，则需要重复调用相同的方法，如果没有数据，则返回NULL</span>
  	
  	<span class="token comment">// ！！！！而数据到底有多少，则未可以，所以循环的话并不知道何时停止，while循环就比较适合</span>
  	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token function">mysqli_fetch_array</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">,</span> <span class="token constant">MYSQL_ASSOC</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token variable">$res</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$arr</span><span class="token punctuation">;</span>
  	<span class="token punctuation">}</span>
  	
	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>mysqli_connect(&quot;主机名称&quot;, &quot;用户名&quot;， “密码”， “数据库名”)</td><td>php连接MYSQL数据库</td></tr><tr><td>mysqli_set_charset(连接对象，“utf8”);</td><td>设置数据库和服务器编码相同</td></tr><tr><td>mysqli_query($conn, &quot;set name as utf-8&quot;);</td><td>设置数据库和服务器编码的另一种方式</td></tr><tr><td>mysqli_query(连接对象，sql语句)</td><td>执行sql语句</td></tr><tr><td>mysqli_num_rows(结果集[执行完sql语句之后的值])</td><td>返回结果集的条数</td></tr><tr><td>mysqli_fetch_array(结果集，MYSQL_ASSOC)</td><td>提取查询语句之后的内容，需要循环</td></tr><tr><td>mysqli_fetch_assoc(结果集)</td><td>提取到查询语句之后的关联数组</td></tr><tr><td>mysqli_fetch_row(结果集)</td><td>提取到查询语句之后的索引数组</td></tr><tr><td>mysqli_error(连接对象)</td><td>返回具体的连接错误信息</td></tr><tr><td>die(”提示错误信息“)</td><td>终止操作，提示错误信息</td></tr></tbody></table>`,92),l=[p];function o(i,c){return s(),a("div",null,l)}const u=n(t,[["render",o],["__file","05-php基础.html.vue"]]);export{u as default};

import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as d,f as i}from"./app-tt0ZouaX.js";const n={},r=i(`<p>​</p><h2 id="vue全家桶之vue基础" tabindex="-1"><a class="header-anchor" href="#vue全家桶之vue基础" aria-hidden="true">#</a> Vue全家桶之Vue基础</h2><h2 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h2><h1 id="目-◆-vue概述" tabindex="-1"><a class="header-anchor" href="#目-◆-vue概述" aria-hidden="true">#</a> 目 ◆ Vue概述</h1><h5 id="◆-vue基本使用" tabindex="-1"><a class="header-anchor" href="#◆-vue基本使用" aria-hidden="true">#</a> ◆ Vue基本使用</h5><h5 id="◆-vue模板语法" tabindex="-1"><a class="header-anchor" href="#◆-vue模板语法" aria-hidden="true">#</a> ◆ Vue模板语法</h5><h5 id="◆-基础案例" tabindex="-1"><a class="header-anchor" href="#◆-基础案例" aria-hidden="true">#</a> ◆ 基础案例</h5><h5 id="◆-vue常用特性" tabindex="-1"><a class="header-anchor" href="#◆-vue常用特性" aria-hidden="true">#</a> ◆ Vue常用特性</h5><h5 id="◆-综合案例" tabindex="-1"><a class="header-anchor" href="#◆-综合案例" aria-hidden="true">#</a> ◆ 综合案例</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ 表单操作
⚫ 自定义指令
⚫ 计算属性
⚫ 侦听器
⚫ 过滤器
⚫ 生命周期
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-vue常用特性" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-1-常用特性概览" tabindex="-1"><a class="header-anchor" href="#_5-1-常用特性概览" aria-hidden="true">#</a> 5.1 常用特性概览</h4><h5 id="_1-基于vue的表单操作" tabindex="-1"><a class="header-anchor" href="#_1-基于vue的表单操作" aria-hidden="true">#</a> 1. 基于Vue的表单操作</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ Input 单行文本
⚫ textarea 多行文本
⚫ select 下拉多选
⚫ radio 单选框
⚫ checkbox 多选框
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-vue常用特性-1" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-1" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-2-表单操作" tabindex="-1"><a class="header-anchor" href="#_5-2-表单操作" aria-hidden="true">#</a> 5.2 表单操作</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>服务器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>将表单数据提交到服务器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="send-an-email" tabindex="-1"><a class="header-anchor" href="#send-an-email" aria-hidden="true">#</a> Send an email</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*
*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Name
Email Address
Phone Number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Your Message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Submit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-vue常用特性-2" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-2" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-2-表单操作-1" tabindex="-1"><a class="header-anchor" href="#_5-2-表单操作-1" aria-hidden="true">#</a> 5.2 表单操作</h4><h5 id="_3-表单域修饰符" tabindex="-1"><a class="header-anchor" href="#_3-表单域修饰符" aria-hidden="true">#</a> 3. 表单域修饰符</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ number：转化为数值
⚫ trim：去掉开始和结尾的空格
⚫ lazy : 将input事件切换为change事件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input v-model.number=&quot;age&quot; type=&quot;number&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_1-为何需要自定义指令" tabindex="-1"><a class="header-anchor" href="#_1-为何需要自定义指令" aria-hidden="true">#</a> 1. 为何需要自定义指令？</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>内置指令不满足需求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-vue常用特性-3" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-3" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-3-自定义指令" tabindex="-1"><a class="header-anchor" href="#_5-3-自定义指令" aria-hidden="true">#</a> 5.3 自定义指令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.directive(&#39;focus&#39; {
inserted: function(el) {
// 获取元素的焦点
el.focus();
}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-自定义指令的语法规则-获取元素焦点" tabindex="-1"><a class="header-anchor" href="#_2-自定义指令的语法规则-获取元素焦点" aria-hidden="true">#</a> 2. 自定义指令的语法规则（获取元素焦点）</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; v-focus&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-自定义指令用法" tabindex="-1"><a class="header-anchor" href="#_3-自定义指令用法" aria-hidden="true">#</a> 3. 自定义指令用法</h5><h3 id="_5-vue常用特性-4" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-4" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-3-自定义指令-1" tabindex="-1"><a class="header-anchor" href="#_5-3-自定义指令-1" aria-hidden="true">#</a> 5.3 自定义指令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.directive(‘color&#39;, {
inserted: function(el, binding) {
el.style.backgroundColor = binding.value.color;
}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-带参数的自定义指令-改变元素背景色" tabindex="-1"><a class="header-anchor" href="#_3-带参数的自定义指令-改变元素背景色" aria-hidden="true">#</a> 3. 带参数的自定义指令（改变元素背景色）</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; v-color=&#39;{color:&quot;orange&quot;}&#39;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_4-指令的用法" tabindex="-1"><a class="header-anchor" href="#_4-指令的用法" aria-hidden="true">#</a> 4. 指令的用法</h5><h3 id="_5-vue常用特性-5" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-5" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-3-自定义指令-2" tabindex="-1"><a class="header-anchor" href="#_5-3-自定义指令-2" aria-hidden="true">#</a> 5.3 自定义指令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>directives: {
focus: {
// 指令的定义
inserted: function (el) {
el.focus()
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-局部指令" tabindex="-1"><a class="header-anchor" href="#_5-局部指令" aria-hidden="true">#</a> 5. 局部指令</h5><h5 id="_1-为何需要计算属性" tabindex="-1"><a class="header-anchor" href="#_1-为何需要计算属性" aria-hidden="true">#</a> 1. 为何需要计算属性？</h5><h5 id="表达式的计算逻辑可能会比较复杂-使用计算属性可以使模板内容更加简洁" tabindex="-1"><a class="header-anchor" href="#表达式的计算逻辑可能会比较复杂-使用计算属性可以使模板内容更加简洁" aria-hidden="true">#</a> 表达式的计算逻辑可能会比较复杂，使用计算属性可以使模板内容更加简洁</h5><h5 id="_2-计算属性的用法" tabindex="-1"><a class="header-anchor" href="#_2-计算属性的用法" aria-hidden="true">#</a> 2. 计算属性的用法</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>computed: {
reversedMessage: function () {
return this.msg.split(&#39;&#39;).reverse().join(&#39;&#39;)
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-vue常用特性-6" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-6" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-4-计算属性" tabindex="-1"><a class="header-anchor" href="#_5-4-计算属性" aria-hidden="true">#</a> 5.4 计算属性</h4><h5 id="_3-计算属性与方法的区别" tabindex="-1"><a class="header-anchor" href="#_3-计算属性与方法的区别" aria-hidden="true">#</a> 3. 计算属性与方法的区别</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ 计算属性是基于它们的依赖进行缓存的
⚫ 方法不存在缓存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-vue常用特性-7" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-7" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-4-计算属性-1" tabindex="-1"><a class="header-anchor" href="#_5-4-计算属性-1" aria-hidden="true">#</a> 5.4 计算属性</h4><h3 id="_5-vue常用特性-8" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-8" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-5-侦听器" tabindex="-1"><a class="header-anchor" href="#_5-5-侦听器" aria-hidden="true">#</a> 5.5 侦听器</h4><h5 id="_1-侦听器的应用场景" tabindex="-1"><a class="header-anchor" href="#_1-侦听器的应用场景" aria-hidden="true">#</a> 1. 侦听器的应用场景</h5><h5 id="数据变化时执行异步或开销较大的操作" tabindex="-1"><a class="header-anchor" href="#数据变化时执行异步或开销较大的操作" aria-hidden="true">#</a> 数据变化时执行异步或开销较大的操作</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch: {
firstName: function(val){
// val表示变化之后的值
this.fullName = val + this.lastName;
},
lastName: function(val) {
this.fullName = this.firstName + val;
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-侦听器的用法" tabindex="-1"><a class="header-anchor" href="#_2-侦听器的用法" aria-hidden="true">#</a> 2. 侦听器的用法</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>侦听器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数据一旦发生变化就通知
侦听器所绑定方法
侦听器绑定
方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例-验证用户名是否可用" tabindex="-1"><a class="header-anchor" href="#案例-验证用户名是否可用" aria-hidden="true">#</a> 案例：验证用户名是否可用</h5><h3 id="_5-vue常用特性-9" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-9" aria-hidden="true">#</a> 5. Vue常用特性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>需求：输入框中输入姓名， 失去焦点 时验证是否存在，如果已经存
在，提示从新输入，如果不存在，提示可以使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例-需求分析" tabindex="-1"><a class="header-anchor" href="#案例-需求分析" aria-hidden="true">#</a> 案例：需求分析</h5><h3 id="_5-vue常用特性-10" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-10" aria-hidden="true">#</a> 5. Vue常用特性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>① 通过v-model实现数据绑定
② 需要提供提示信息
③ 需要侦听器监听输入信息的变化
④ 需要修改触发的事件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-vue常用特性-11" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-11" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-6-过滤器" tabindex="-1"><a class="header-anchor" href="#_5-6-过滤器" aria-hidden="true">#</a> 5.6 过滤器</h4><h5 id="_1-过滤器的作用是什么" tabindex="-1"><a class="header-anchor" href="#_1-过滤器的作用是什么" aria-hidden="true">#</a> 1. 过滤器的作用是什么？</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>格式化数据，比如将字符串格式化为首字母大写，将日期格式化为指定的格式等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue
过滤器
Hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-vue常用特性-12" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-12" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-6-过滤器-1" tabindex="-1"><a class="header-anchor" href="#_5-6-过滤器-1" aria-hidden="true">#</a> 5.6 过滤器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.filter(‘过滤器名称’, function(value){
// 过滤器业务逻辑
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-自定义过滤器" tabindex="-1"><a class="header-anchor" href="#_2-自定义过滤器" aria-hidden="true">#</a> 2. 自定义过滤器</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;{{msg | upper}}&lt;/div&gt;
&lt;div&gt;{{msg | upper | lower}}&lt;/div&gt;
&lt;div v-bind:id=“id | formatId&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-过滤器的使用" tabindex="-1"><a class="header-anchor" href="#_3-过滤器的使用" aria-hidden="true">#</a> 3. 过滤器的使用</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filters:{
capitalize: function(){}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-局部过滤器" tabindex="-1"><a class="header-anchor" href="#_4-局部过滤器" aria-hidden="true">#</a> 4. 局部过滤器</h5><h3 id="_5-vue常用特性-13" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-13" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-6-过滤器-2" tabindex="-1"><a class="header-anchor" href="#_5-6-过滤器-2" aria-hidden="true">#</a> 5.6 过滤器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.filter(‘format’, function(value, arg1){
// value就是过滤器传递过来的参数
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-带参数的过滤器" tabindex="-1"><a class="header-anchor" href="#_5-带参数的过滤器" aria-hidden="true">#</a> 5. 带参数的过滤器</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;{{date | format(‘yyyy-MM-dd&#39;)}}&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_6-过滤器的使用" tabindex="-1"><a class="header-anchor" href="#_6-过滤器的使用" aria-hidden="true">#</a> 6. 过滤器的使用</h5><h5 id="案例-使用过滤器格式化日期" tabindex="-1"><a class="header-anchor" href="#案例-使用过滤器格式化日期" aria-hidden="true">#</a> 案例：使用过滤器格式化日期</h5><h3 id="_5-vue常用特性-14" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-14" aria-hidden="true">#</a> 5. Vue常用特性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>将时间格式化为 yyyy-MM-dd 格式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2018 - 09 - 27
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2018 - 11 - 15T09:20:15.004Z
y:年,
M:年中的月份(1-12),
d:月份中的天(1-31),
h:小时(0-23),
m:分(0-59),
s:秒(0-59),
S:毫秒(0-999),
q:季度(1-4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="日期格式化规则" tabindex="-1"><a class="header-anchor" href="#日期格式化规则" aria-hidden="true">#</a> 日期格式化规则</h5><h3 id="_5-vue常用特性-15" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-15" aria-hidden="true">#</a> 5. Vue常用特性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ 挂载（初始化相关属性）
① beforeCreate
② created
③ beforeMount
④ mounted
⚫ 更新（元素或组件的变更操作）
① beforeUpdate
② updated
⚫ 销毁（销毁相关属性）
① beforeDestroy
② destroyed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-7-生命周期" tabindex="-1"><a class="header-anchor" href="#_5-7-生命周期" aria-hidden="true">#</a> 5.7 生命周期</h4><h5 id="_1-主要阶段" tabindex="-1"><a class="header-anchor" href="#_1-主要阶段" aria-hidden="true">#</a> 1. 主要阶段</h5><h3 id="_5-vue常用特性-16" tabindex="-1"><a class="header-anchor" href="#_5-vue常用特性-16" aria-hidden="true">#</a> 5. Vue常用特性</h3><h4 id="_5-7-生命周期-1" tabindex="-1"><a class="header-anchor" href="#_5-7-生命周期-1" aria-hidden="true">#</a> 5.7 生命周期</h4><h5 id="_2-vue实例的产生过程" tabindex="-1"><a class="header-anchor" href="#_2-vue实例的产生过程" aria-hidden="true">#</a> 2. Vue实例的产生过程</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>① beforeCreate 在实例初始化之后，数据观测和事件配置之前被调用。
② created 在实例创建完成后被立即调用。
③ beforeMount 在挂载开始之前被调用。
④ mounted el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子。
⑤ beforeUpdate 数据更新时调用，发生在虚拟DOM打补丁之前。
⑥ updated 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。
⑦ beforeDestroy 实例销毁之前调用。
⑧ destroyed 实例销毁后调用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contents-1" tabindex="-1"><a class="header-anchor" href="#contents-1" aria-hidden="true">#</a> Contents</h2><h1 id="目-◆-vue概述-1" tabindex="-1"><a class="header-anchor" href="#目-◆-vue概述-1" aria-hidden="true">#</a> 目 ◆ Vue概述</h1><h5 id="◆-vue基本使用-1" tabindex="-1"><a class="header-anchor" href="#◆-vue基本使用-1" aria-hidden="true">#</a> ◆ Vue基本使用</h5><h5 id="◆-vue模板语法-1" tabindex="-1"><a class="header-anchor" href="#◆-vue模板语法-1" aria-hidden="true">#</a> ◆ Vue模板语法</h5><h5 id="◆-基础案例-1" tabindex="-1"><a class="header-anchor" href="#◆-基础案例-1" aria-hidden="true">#</a> ◆ 基础案例</h5><h5 id="◆-vue常用特性-1" tabindex="-1"><a class="header-anchor" href="#◆-vue常用特性-1" aria-hidden="true">#</a> ◆ Vue常用特性</h5><h5 id="◆-综合案例-1" tabindex="-1"><a class="header-anchor" href="#◆-综合案例-1" aria-hidden="true">#</a> ◆ 综合案例</h5><h5 id="案例-图书管理" tabindex="-1"><a class="header-anchor" href="#案例-图书管理" aria-hidden="true">#</a> 案例：图书管理</h5><h3 id="_6-综合案例" tabindex="-1"><a class="header-anchor" href="#_6-综合案例" aria-hidden="true">#</a> 6. 综合案例</h3><h3 id="_6-综合案例-1" tabindex="-1"><a class="header-anchor" href="#_6-综合案例-1" aria-hidden="true">#</a> 6. 综合案例</h3><h5 id="案例-补充知识-数组相关api" tabindex="-1"><a class="header-anchor" href="#案例-补充知识-数组相关api" aria-hidden="true">#</a> 案例：补充知识（数组相关API）</h5><h5 id="_1-变异方法-修改原有数据" tabindex="-1"><a class="header-anchor" href="#_1-变异方法-修改原有数据" aria-hidden="true">#</a> 1. 变异方法(修改原有数据)</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ push()
⚫ pop()
⚫ shift()
⚫ unshift()
⚫ splice()
⚫ sort()
⚫ reverse()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-替换数组-生成新的数组" tabindex="-1"><a class="header-anchor" href="#_2-替换数组-生成新的数组" aria-hidden="true">#</a> 2. 替换数组(生成新的数组)</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ filter()
⚫ concat()
⚫ slice()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-综合案例-2" tabindex="-1"><a class="header-anchor" href="#_6-综合案例-2" aria-hidden="true">#</a> 6. 综合案例</h3><h5 id="案例-补充知识-数组响应式变化" tabindex="-1"><a class="header-anchor" href="#案例-补充知识-数组响应式变化" aria-hidden="true">#</a> 案例：补充知识（数组响应式变化）</h5><h5 id="_3-修改响应式数据" tabindex="-1"><a class="header-anchor" href="#_3-修改响应式数据" aria-hidden="true">#</a> 3. 修改响应式数据</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ Vue.set(vm.items, indexOfItem, newValue)
⚫ vm.$set(vm.items, indexOfItem, newValue)
① 参数一表示要处理的数组名称
② 参数二表示要处理的数组的索引
③ 参数三表示要处理的数组的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-综合案例-3" tabindex="-1"><a class="header-anchor" href="#_6-综合案例-3" aria-hidden="true">#</a> 6. 综合案例</h3><h5 id="案例-图书管理-1" tabindex="-1"><a class="header-anchor" href="#案例-图书管理-1" aria-hidden="true">#</a> 案例：图书管理</h5><h5 id="_1-图书列表" tabindex="-1"><a class="header-anchor" href="#_1-图书列表" aria-hidden="true">#</a> 1. 图书列表</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ 实现静态列表效果
⚫ 基于数据实现模板效果
⚫ 处里每行的操作按钮
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-综合案例-4" tabindex="-1"><a class="header-anchor" href="#_6-综合案例-4" aria-hidden="true">#</a> 6. 综合案例</h3><h5 id="案例-图书管理-2" tabindex="-1"><a class="header-anchor" href="#案例-图书管理-2" aria-hidden="true">#</a> 案例：图书管理</h5><h5 id="_2-添加图书" tabindex="-1"><a class="header-anchor" href="#_2-添加图书" aria-hidden="true">#</a> 2. 添加图书</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ 实现表单的静态效果
⚫ 添加图书表单域数据绑定
⚫ 添加按钮事件绑定
⚫ 实现添加业务逻辑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-综合案例-5" tabindex="-1"><a class="header-anchor" href="#_6-综合案例-5" aria-hidden="true">#</a> 6. 综合案例</h3><h5 id="案例-图书管理-3" tabindex="-1"><a class="header-anchor" href="#案例-图书管理-3" aria-hidden="true">#</a> 案例：图书管理</h5><h5 id="_3-修改图书" tabindex="-1"><a class="header-anchor" href="#_3-修改图书" aria-hidden="true">#</a> 3. 修改图书</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ 修改信息填充到表单
⚫ 修改后重新提交表单
⚫ 重用添加和修改的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-综合案例-6" tabindex="-1"><a class="header-anchor" href="#_6-综合案例-6" aria-hidden="true">#</a> 6. 综合案例</h3><h5 id="案例-图书管理-4" tabindex="-1"><a class="header-anchor" href="#案例-图书管理-4" aria-hidden="true">#</a> 案例：图书管理</h5><h5 id="_4-删除图书" tabindex="-1"><a class="header-anchor" href="#_4-删除图书" aria-hidden="true">#</a> 4. 删除图书</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ 删除按钮绑定事件处理方法
⚫ 实现删除业务逻辑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-综合案例-7" tabindex="-1"><a class="header-anchor" href="#_6-综合案例-7" aria-hidden="true">#</a> 6. 综合案例</h3><h5 id="案例-图书管理-5" tabindex="-1"><a class="header-anchor" href="#案例-图书管理-5" aria-hidden="true">#</a> 案例：图书管理</h5><h5 id="_5-常用特性应用场景" tabindex="-1"><a class="header-anchor" href="#_5-常用特性应用场景" aria-hidden="true">#</a> 5. 常用特性应用场景</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⚫ 过滤器（格式化日期）
⚫ 自定义指令（获取表单焦点）
⚫ 计算属性（统计图书数量）
⚫ 侦听器（验证图书存在性）
⚫ 生命周期（图书数据处理）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,145),s=[r];function l(t,h){return a(),d("div",null,s)}const v=e(n,[["render",l],["__file","02-vue.html.vue"]]);export{v as default};

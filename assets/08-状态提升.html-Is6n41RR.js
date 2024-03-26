import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-rpFDZqdF.js";const p={},e=t(`<h1 id="_08-状态提升" tabindex="-1"><a class="header-anchor" href="#_08-状态提升" aria-hidden="true">#</a> 08 状态提升</h1><h2 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1.介绍</h2><p>所谓 <strong>状态提升</strong> 就是将各个子组件的 公共state 提升到它们的父组件进行统一存储、处理（这就是所谓的”单一数据源“），负责<code>setState</code>的函数传到下边的子级组件，然后再将父组件处理后的数据或函数props到各子组件中。</p><p>那么如果子组件 要 修改父组件的state该怎么办呢？我们的做法就是 将父组件中负责setState的函数，以props的形式传给子组件，然后子组件在需要改变state时调用即可。</p><p><strong>实现方式</strong></p><p>实现方式是 利用最近的共同的父级组件中，用props的方式传过去到两个子组件，props中传的是一个setState的方法，通过子组件触发props传过去的方法，进而调用父级组件的setState的方法，改变了父级组件的state，调用父级组件的render方法，进而同时改变了两个子级组件的render。</p><p>这是 两个有关连的同级组件的传值，因为react的单项数据流，所以不在两个组件中进行传值，而是提升到 最近的共同的父级组件中，改变父级的state,进而影响了两个子级组件的render。</p><blockquote><p>官网介绍</p><p>通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。</p></blockquote><h2 id="_2-案例" tabindex="-1"><a class="header-anchor" href="#_2-案例" aria-hidden="true">#</a> 2.案例</h2><p>先写一个温度输入组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">TemperatureInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">temperature</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">temperature</span> <span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>fieldset<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>legend<span class="token operator">&gt;</span>输入<span class="token punctuation">{</span>scaleNames<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>scale<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>legend<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;number&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>temperature<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>fieldset<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个组件就是一个普通的<strong>受控组件</strong>，有<code>state</code>和<code>props</code>以及处理函数。</p><p>我们在写另一个组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>TemperatureInput scale<span class="token operator">=</span><span class="token string">&#39;c&#39;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>TemperatureInput scale<span class="token operator">=</span><span class="token string">&#39;f&#39;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个组件现在没有什么存在的价值，我们仅仅是给两个温度输入组件提供一个父组件，以便我们进行后续的<strong>状态提升</strong>。</p><p>现在我们看看网页的样子：</p><figure><img src="https://i0.hdslb.com/bfs/album/a4228155682c5b7715204c99d704b8f4b9daf6a6.png" alt="image-20221025123600431" tabindex="0" loading="lazy"><figcaption>image-20221025123600431</figcaption></figure><p>我们可以输入摄氏度和华氏度，但是我们现在想要让这两个温度保持一致，就是我们如果输入摄氏度，那么下面的华氏度可以自动算出来，如果我们输入华氏度，那么摄氏度就可以自动算出来。</p><p>那么我们按照现在这种结构的话，是非常难以实现的，因为我们知道这两个组件之间没有任何关系，它们之间是不知道对方的存在，所以我们需要把它们的状态进行提升，提升到它们的父组件当中。</p><p>那我们看看如何做修改，首先把子组件（温度输入组件）的状态（state）全部删除，看看是什么样子:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">class</span> <span class="token class-name">TemperatureInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>

        <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>fieldset<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>legend<span class="token operator">&gt;</span>输入<span class="token punctuation">{</span>scaleNames<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>scale<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>legend<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;number&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>temperature<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>fieldset<span class="token operator">&gt;</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到所有与<code>state</code>有关的东西全部删掉了，然后<code>input</code>的<code>value</code>也变成了<code>props</code>，通过父组件传入。那么现在这个温度输入组件其实就是一个受控组件了，仔细回忆一下我们之前讲的受控组件，看看是不是这样意思？</p><p>我们通常会在受控组件发生改变的时候传入一个<code>onChange</code>函数来改变受控组件的状态，那么我们这里也是一样，我们通过给 温度输入组件 传入某个函数来让 温度输入组件 中的<code>input</code>发生变化的时候调用，当然这个函数我们可以随意命名，假如我们这里叫做<code>onTemperatureChange</code>函数，那么我们继续修改子组件：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>    <span class="token keyword">class</span> <span class="token class-name">TemperatureInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>

        <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">onTemperatureChange</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">输入</span><span class="token punctuation">{</span>scaleNames<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>scale<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token plain-text">:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>temperature<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，我们的子组件差不多就是这样了，当然我们可以省略那个<code>handleChange</code>函数，因为可以看到这个函数就是调用了一下那个<code>props</code>里的函数，所以我们完全把<code>input</code>的<code>onChange</code>这么写 <code>&lt;input type=&quot;number&quot; value={this.props.temperature} onChange={this.props.onTemperatureChange}/&gt;</code>这么写的话注意<code>onTemperatrueChange</code>函数的参数是那个事件，而不是我这里写的<code>e.target.value</code>。</p><p>再看看我们的父组件如何修改，我们首先补上<code>state</code>，以及子组件对应的<code>onChange</code>处理方法，以及子组件的值。写好之后大概是这个样子：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">celsius</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fahrenheit</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function-variable function">onCelsiusChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">celsius</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
            <span class="token literal-property property">fahrenheit</span><span class="token operator">:</span> <span class="token function">tryConvert</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> toFahrenheit<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function-variable function">onFahrenheitChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">celsius</span><span class="token operator">:</span> <span class="token function">tryConvert</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> toCelsius<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fahrenheit</span><span class="token operator">:</span> value
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TemperatureInput</span></span> <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>c<span class="token punctuation">&#39;</span></span> <span class="token attr-name">temperature</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>celsius<span class="token punctuation">}</span></span>
                                  <span class="token attr-name">onTemperatureChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onCelsiusChange<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TemperatureInput</span></span> <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>f<span class="token punctuation">&#39;</span></span> <span class="token attr-name">temperature</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fahrenheit<span class="token punctuation">}</span></span>
                                  <span class="token attr-name">onTemperatureChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onFahrenheitChange<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们省略的摄氏度与华氏度的转换函数，比较简单，大家自行搜索方法。</p>`,28),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","08-状态提升.html.vue"]]);export{k as default};

const e=JSON.parse('{"key":"v-cadc626e","path":"/pages/front-end/webapi/03-webapis.html","title":"03-webapis","lang":"zh-CN","frontmatter":{"title":"03-webapis","icon":"markdown","description":"学习目标： 能够使用removeChild()方法删除节点 能够完成动态生成表格案例 能够使用传统方式和监听方式给元素注册事件 能够说出事件流执行的三个阶段 能够在事件处理函数中获取事件对象 能够使用事件对象取消默认行为 能够使用事件对象阻止事件冒泡 能够使用事件对象获取鼠标的位置 能够完成跟随鼠标的天使案例 1.1. 节点操作 1.1.1 删除节点 ...","head":[["meta",{"property":"og:url","content":"https://ylnlh.github.io/zsxq/zsxq/pages/front-end/webapi/03-webapis.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"03-webapis"}],["meta",{"property":"og:description","content":"学习目标： 能够使用removeChild()方法删除节点 能够完成动态生成表格案例 能够使用传统方式和监听方式给元素注册事件 能够说出事件流执行的三个阶段 能够在事件处理函数中获取事件对象 能够使用事件对象取消默认行为 能够使用事件对象阻止事件冒泡 能够使用事件对象获取鼠标的位置 能够完成跟随鼠标的天使案例 1.1. 节点操作 1.1.1 删除节点 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:59:42.000Z"}],["meta",{"property":"article:author","content":"Mr.Yang"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:59:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03-webapis\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T09:59:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Yang\\",\\"url\\":\\"https://ylnlh.github.io/zsxq/\\"}]}"]]},"headers":[{"level":2,"title":"1.1. 节点操作","slug":"_1-1-节点操作","link":"#_1-1-节点操作","children":[]},{"level":2,"title":"1.1.1 删除节点","slug":"_1-1-1-删除节点","link":"#_1-1-1-删除节点","children":[{"level":3,"title":"1.1.2 案例：删除留言","slug":"_1-1-2-案例-删除留言","link":"#_1-1-2-案例-删除留言","children":[]},{"level":3,"title":"1.1.3 复制（克隆）节点","slug":"_1-1-3-复制-克隆-节点","link":"#_1-1-3-复制-克隆-节点","children":[]},{"level":3,"title":"1.1.4 案例：动态生成表格","slug":"_1-1-4-案例-动态生成表格","link":"#_1-1-4-案例-动态生成表格","children":[]},{"level":3,"title":"1.1.5 创建元素的三种方式","slug":"_1-1-5-创建元素的三种方式","link":"#_1-1-5-创建元素的三种方式","children":[]},{"level":3,"title":"1.1.6 innerTHML和createElement效率对比","slug":"_1-1-6-innerthml和createelement效率对比","link":"#_1-1-6-innerthml和createelement效率对比","children":[]}]},{"level":2,"title":"1.2. DOM的核心总结","slug":"_1-2-dom的核心总结","link":"#_1-2-dom的核心总结","children":[{"level":3,"title":"1.2.1. 创建","slug":"_1-2-1-创建","link":"#_1-2-1-创建","children":[]},{"level":3,"title":"1.2.2. 增加","slug":"_1-2-2-增加","link":"#_1-2-2-增加","children":[]},{"level":3,"title":"1.2.3. 删","slug":"_1-2-3-删","link":"#_1-2-3-删","children":[]},{"level":3,"title":"1.2.4. 改","slug":"_1-2-4-改","link":"#_1-2-4-改","children":[]},{"level":3,"title":"1.2.5. 查","slug":"_1-2-5-查","link":"#_1-2-5-查","children":[]},{"level":3,"title":"1.2.6. 属性操作","slug":"_1-2-6-属性操作","link":"#_1-2-6-属性操作","children":[]},{"level":3,"title":"1.2.7. 事件操作（重点）","slug":"_1-2-7-事件操作-重点","link":"#_1-2-7-事件操作-重点","children":[]}]},{"level":2,"title":"1.3. 事件高级","slug":"_1-3-事件高级","link":"#_1-3-事件高级","children":[{"level":3,"title":"1.3.1. 注册事件（ 2 种方式）","slug":"_1-3-1-注册事件-2-种方式","link":"#_1-3-1-注册事件-2-种方式","children":[]},{"level":3,"title":"1.3.2 事件监听","slug":"_1-3-2-事件监听","link":"#_1-3-2-事件监听","children":[]},{"level":3,"title":"1.3.3. 删除事件（解绑事件）","slug":"_1-3-3-删除事件-解绑事件","link":"#_1-3-3-删除事件-解绑事件","children":[]},{"level":3,"title":"1.3.4. DOM事件流","slug":"_1-3-4-dom事件流","link":"#_1-3-4-dom事件流","children":[]},{"level":3,"title":"1.3.5. 事件对象","slug":"_1-3-5-事件对象","link":"#_1-3-5-事件对象","children":[]},{"level":3,"title":"1.3.6 阻止默认行为","slug":"_1-3-6-阻止默认行为","link":"#_1-3-6-阻止默认行为","children":[]},{"level":3,"title":"1.3.7 阻止事件冒泡","slug":"_1-3-7-阻止事件冒泡","link":"#_1-3-7-阻止事件冒泡","children":[]},{"level":3,"title":"1.3.8 事件委托","slug":"_1-3-8-事件委托","link":"#_1-3-8-事件委托","children":[]}]},{"level":2,"title":"1.4. 常用鼠标事件","slug":"_1-4-常用鼠标事件","link":"#_1-4-常用鼠标事件","children":[{"level":3,"title":"1.4.1 案例：禁止选中文字和禁止右键菜单","slug":"_1-4-1-案例-禁止选中文字和禁止右键菜单","link":"#_1-4-1-案例-禁止选中文字和禁止右键菜单","children":[]},{"level":3,"title":"1.4.2 鼠标事件对象","slug":"_1-4-2-鼠标事件对象","link":"#_1-4-2-鼠标事件对象","children":[]},{"level":3,"title":"1.4.3 获取鼠标在页面的坐标","slug":"_1-4-3-获取鼠标在页面的坐标","link":"#_1-4-3-获取鼠标在页面的坐标","children":[]},{"level":3,"title":"1.4.4 案例：跟随鼠标的天使","slug":"_1-4-4-案例-跟随鼠标的天使","link":"#_1-4-4-案例-跟随鼠标的天使","children":[]}]}],"git":{"createdTime":1711447182000,"updatedTime":1711447182000,"contributors":[{"name":"yangle","email":"yanglenlh@163.com","commits":1}]},"readingTime":{"minutes":12.09,"words":3626},"filePathRelative":"pages/front-end/webapi/03-webapis.md","localizedDate":"2024年3月26日","autoDesc":true}');export{e as data};
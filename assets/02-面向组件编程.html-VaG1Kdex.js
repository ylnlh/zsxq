const e=JSON.parse('{"key":"v-7b6c5b14","path":"/pages/front-end/%E6%A1%86%E6%9E%B6/react/02-%E9%9D%A2%E5%90%91%E7%BB%84%E4%BB%B6%E7%BC%96%E7%A8%8B.html","title":"02 面向组件编程","lang":"zh-CN","frontmatter":{"description":"1.组件的使用 当应用是以多组件的方式实现，这个应用就是一个组件化的应用 只有两种方式的组件 函数组件; 类式组件; 注意： 1. 组件名必须是首字母大写（React 会将以小写字母开头的组件视为原生 DOM 标签。例如，< div />代表 HTML 的 div 标签，而< Weclome /> 则代表一个组件，并且需在作用域内使用 Welcome）...","head":[["meta",{"property":"og:url","content":"https://ylnlh.github.io/zsxq/pages/front-end/%E6%A1%86%E6%9E%B6/react/02-%E9%9D%A2%E5%90%91%E7%BB%84%E4%BB%B6%E7%BC%96%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"02 面向组件编程"}],["meta",{"property":"og:description","content":"1.组件的使用 当应用是以多组件的方式实现，这个应用就是一个组件化的应用 只有两种方式的组件 函数组件; 类式组件; 注意： 1. 组件名必须是首字母大写（React 会将以小写字母开头的组件视为原生 DOM 标签。例如，< div />代表 HTML 的 div 标签，而< Weclome /> 则代表一个组件，并且需在作用域内使用 Welcome）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:59:42.000Z"}],["meta",{"property":"article:author","content":"Mr.Yang"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:59:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02 面向组件编程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T09:59:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Yang\\",\\"url\\":\\"https://ylnlh.github.io/zsxq/\\"}]}"]]},"headers":[{"level":2,"title":"1.组件的使用","slug":"_1-组件的使用","link":"#_1-组件的使用","children":[{"level":3,"title":"1.1 函数式组件","slug":"_1-1-函数式组件","link":"#_1-1-函数式组件","children":[]},{"level":3,"title":"1.2 类式组件","slug":"_1-2-类式组件","link":"#_1-2-类式组件","children":[]},{"level":3,"title":"1.3 组合组件","slug":"_1-3-组合组件","link":"#_1-3-组合组件","children":[]},{"level":3,"title":"1.4 提取组件","slug":"_1-4-提取组件","link":"#_1-4-提取组件","children":[]}]},{"level":2,"title":"组件实例的三大属性 state props refs","slug":"组件实例的三大属性-state-props-refs","link":"#组件实例的三大属性-state-props-refs","children":[]},{"level":2,"title":"2.state","slug":"_2-state","link":"#_2-state","children":[{"level":3,"title":"2.1 基本使用","slug":"_2-1-基本使用","link":"#_2-1-基本使用","children":[]},{"level":3,"title":"2.2 setState()","slug":"_2-2-setstate","link":"#_2-2-setstate","children":[]},{"level":3,"title":"2.3 简化版本","slug":"_2-3-简化版本","link":"#_2-3-简化版本","children":[]},{"level":3,"title":"2.4 State 的更新可能是异步的","slug":"_2-4-state-的更新可能是异步的","link":"#_2-4-state-的更新可能是异步的","children":[]},{"level":3,"title":"2.5 异步更新解决方案","slug":"_2-5-异步更新解决方案","link":"#_2-5-异步更新解决方案","children":[]},{"level":3,"title":"2.6 数据是向下流动的","slug":"_2-6-数据是向下流动的","link":"#_2-6-数据是向下流动的","children":[]}]},{"level":2,"title":"3.props","slug":"_3-props","link":"#_3-props","children":[{"level":3,"title":"3.1 基本使用","slug":"_3-1-基本使用","link":"#_3-1-基本使用","children":[]},{"level":3,"title":"3.2 props限制","slug":"_3-2-props限制","link":"#_3-2-props限制","children":[]},{"level":3,"title":"3.3 简写方式","slug":"_3-3-简写方式","link":"#_3-3-简写方式","children":[]},{"level":3,"title":"3.4 函数式组件的使用","slug":"_3-4-函数式组件的使用","link":"#_3-4-函数式组件的使用","children":[]},{"level":3,"title":"3.5 props 的只读性","slug":"_3-5-props-的只读性","link":"#_3-5-props-的只读性","children":[]}]},{"level":2,"title":"4.refs","slug":"_4-refs","link":"#_4-refs","children":[{"level":3,"title":"4.1 字符串形式","slug":"_4-1-字符串形式","link":"#_4-1-字符串形式","children":[]},{"level":3,"title":"4.2 回调形式","slug":"_4-2-回调形式","link":"#_4-2-回调形式","children":[]},{"level":3,"title":"4.3 createRef 形式（推荐写法）","slug":"_4-3-createref-形式-推荐写法","link":"#_4-3-createref-形式-推荐写法","children":[]},{"level":3,"title":"4.4 为 DOM 元素添加 ref","slug":"_4-4-为-dom-元素添加-ref","link":"#_4-4-为-dom-元素添加-ref","children":[]},{"level":3,"title":"4.5 为 class 组件添加 Ref","slug":"_4-5-为-class-组件添加-ref","link":"#_4-5-为-class-组件添加-ref","children":[]},{"level":3,"title":"4.6 Refs 与函数组件","slug":"_4-6-refs-与函数组件","link":"#_4-6-refs-与函数组件","children":[]}]}],"git":{"createdTime":1711447182000,"updatedTime":1711447182000,"contributors":[{"name":"yangle","email":"yanglenlh@163.com","commits":1}]},"readingTime":{"minutes":28.59,"words":8576},"filePathRelative":"pages/front-end/框架/react/02-面向组件编程.md","localizedDate":"2024年3月26日","autoDesc":true}');export{e as data};

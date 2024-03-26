const e=JSON.parse('{"key":"v-7d93e39b","path":"/pages/front-end/js%E5%9F%BA%E7%A1%80/02-JavaScript%E5%9F%BA%E7%A1%80.html","title":"02-JavaScript基础","lang":"zh-CN","frontmatter":{"title":"02-JavaScript基础","icon":"markdown","description":"1 .构造函数和原型 1. 1 对象的三种创建方式--复习 1. 字面量方式 2. new关键字 3. 构造函数方式 1. 2 静态成员和实例成员 1. 2. 1 实例成员 实例成员就是构造函数内部通过this添加的成员 如下列代码中uname age sing 就是实例 成员,实例成员只能通过实例化的对象来访问 1. 2. 2 静态成员 静态成员 在...","head":[["meta",{"property":"og:url","content":"https://ylnlh.github.io/zsxq/pages/front-end/js%E5%9F%BA%E7%A1%80/02-JavaScript%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"02-JavaScript基础"}],["meta",{"property":"og:description","content":"1 .构造函数和原型 1. 1 对象的三种创建方式--复习 1. 字面量方式 2. new关键字 3. 构造函数方式 1. 2 静态成员和实例成员 1. 2. 1 实例成员 实例成员就是构造函数内部通过this添加的成员 如下列代码中uname age sing 就是实例 成员,实例成员只能通过实例化的对象来访问 1. 2. 2 静态成员 静态成员 在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:59:42.000Z"}],["meta",{"property":"article:author","content":"Mr.Yang"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:59:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02-JavaScript基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T09:59:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Yang\\",\\"url\\":\\"https://ylnlh.github.io/zsxq/\\"}]}"]]},"headers":[{"level":2,"title":"1 .构造函数和原型","slug":"_1-构造函数和原型","link":"#_1-构造函数和原型","children":[]},{"level":2,"title":"1. 1 对象的三种创建方式--复习","slug":"_1-1-对象的三种创建方式-复习","link":"#_1-1-对象的三种创建方式-复习","children":[]},{"level":2,"title":"1. 2 静态成员和实例成员","slug":"_1-2-静态成员和实例成员","link":"#_1-2-静态成员和实例成员","children":[{"level":3,"title":"1. 3 构造函数的问题","slug":"_1-3-构造函数的问题","link":"#_1-3-构造函数的问题","children":[]},{"level":3,"title":"1. 4 构造函数原型prototype","slug":"_1-4-构造函数原型prototype","link":"#_1-4-构造函数原型prototype","children":[]},{"level":3,"title":"1. 5 对象原型","slug":"_1-5-对象原型","link":"#_1-5-对象原型","children":[]},{"level":3,"title":"1. 6 constructor构造函数","slug":"_1-6-constructor构造函数","link":"#_1-6-constructor构造函数","children":[]},{"level":3,"title":"1. 7 原型链","slug":"_1-7-原型链","link":"#_1-7-原型链","children":[]},{"level":3,"title":"1. 8 构造函数实例和原型对象三角关系","slug":"_1-8-构造函数实例和原型对象三角关系","link":"#_1-8-构造函数实例和原型对象三角关系","children":[]},{"level":3,"title":"1. 9 原型链和成员的查找机制","slug":"_1-9-原型链和成员的查找机制","link":"#_1-9-原型链和成员的查找机制","children":[]},{"level":3,"title":"1. 10 原型对象中this指向","slug":"_1-10-原型对象中this指向","link":"#_1-10-原型对象中this指向","children":[]},{"level":3,"title":"1. 11 通过原型为数组扩展内置方法","slug":"_1-11-通过原型为数组扩展内置方法","link":"#_1-11-通过原型为数组扩展内置方法","children":[]}]},{"level":2,"title":"2 .继承","slug":"_2-继承","link":"#_2-继承","children":[{"level":3,"title":"2. 1 call()","slug":"_2-1-call","link":"#_2-1-call","children":[]},{"level":3,"title":"2. 2 子构造函数继承父构造函数中的属性","slug":"_2-2-子构造函数继承父构造函数中的属性","link":"#_2-2-子构造函数继承父构造函数中的属性","children":[]},{"level":3,"title":"2. 3 借用原型对象继承方法","slug":"_2-3-借用原型对象继承方法","link":"#_2-3-借用原型对象继承方法","children":[]}]},{"level":2,"title":"3 .ES 5 新增方法","slug":"_3-es-5-新增方法","link":"#_3-es-5-新增方法","children":[{"level":3,"title":"3. 1 数组方法forEach遍历数组","slug":"_3-1-数组方法foreach遍历数组","link":"#_3-1-数组方法foreach遍历数组","children":[]},{"level":3,"title":"3. 2 数组方法filter过滤数组","slug":"_3-2-数组方法filter过滤数组","link":"#_3-2-数组方法filter过滤数组","children":[]},{"level":3,"title":"3. 3 数组方法some","slug":"_3-3-数组方法some","link":"#_3-3-数组方法some","children":[]},{"level":3,"title":"3. 4 筛选商品案例","slug":"_3-4-筛选商品案例","link":"#_3-4-筛选商品案例","children":[]},{"level":3,"title":"3. 5 some和forEach区别","slug":"_3-5-some和foreach区别","link":"#_3-5-some和foreach区别","children":[]},{"level":3,"title":"3. 6 trim方法去除字符串两端的空格","slug":"_3-6-trim方法去除字符串两端的空格","link":"#_3-6-trim方法去除字符串两端的空格","children":[]},{"level":3,"title":"3. 7 获取对象的属性名","slug":"_3-7-获取对象的属性名","link":"#_3-7-获取对象的属性名","children":[]},{"level":3,"title":"3. 8 Object.defineProperty","slug":"_3-8-object-defineproperty","link":"#_3-8-object-defineproperty","children":[]}]}],"git":{"createdTime":1711447182000,"updatedTime":1711447182000,"contributors":[{"name":"yangle","email":"yanglenlh@163.com","commits":1}]},"readingTime":{"minutes":9.77,"words":2932},"filePathRelative":"pages/front-end/js基础/02-JavaScript基础.md","localizedDate":"2024年3月26日","autoDesc":true}');export{e as data};

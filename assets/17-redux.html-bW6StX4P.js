const e=JSON.parse('{"key":"v-478a333a","path":"/pages/front-end/%E6%A1%86%E6%9E%B6/react/17-redux.html","title":"17 redux","lang":"zh-CN","frontmatter":{"description":"引言 我们现在开始学习了 Redux ，在我们之前写的案例当中，我们对于状态的管理，都是通过 state 来实现的，比如，我们在给兄弟组件传递数据时，需要先将数据传递给父组件，再由父组件转发 给它的子组件。这个过程十分的复杂，后来我们又学习了消息的发布订阅，我们通过 pubsub 库，实现了消息的转发，直接将数据发布，由兄弟组件订阅，实现了兄弟组件间的...","head":[["meta",{"property":"og:url","content":"https://ylnlh.github.io/zsxq/pages/front-end/%E6%A1%86%E6%9E%B6/react/17-redux.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"17 redux"}],["meta",{"property":"og:description","content":"引言 我们现在开始学习了 Redux ，在我们之前写的案例当中，我们对于状态的管理，都是通过 state 来实现的，比如，我们在给兄弟组件传递数据时，需要先将数据传递给父组件，再由父组件转发 给它的子组件。这个过程十分的复杂，后来我们又学习了消息的发布订阅，我们通过 pubsub 库，实现了消息的转发，直接将数据发布，由兄弟组件订阅，实现了兄弟组件间的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:59:42.000Z"}],["meta",{"property":"article:author","content":"Mr.Yang"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:59:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17 redux\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T09:59:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Yang\\",\\"url\\":\\"https://ylnlh.github.io/zsxq/\\"}]}"]]},"headers":[{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[]},{"level":2,"title":"1.简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 状态（State）","slug":"_1-1-状态-state","link":"#_1-1-状态-state","children":[]},{"level":3,"title":"1.2 容器（Container）","slug":"_1-2-容器-container","link":"#_1-2-容器-container","children":[]},{"level":3,"title":"1.3 可预测（Predictable）","slug":"_1-3-可预测-predictable","link":"#_1-3-可预测-predictable","children":[]}]},{"level":2,"title":"2.为什么是Redux？","slug":"_2-为什么是redux","link":"#_2-为什么是redux","children":[]},{"level":2,"title":"3.什么情况使用 Redux","slug":"_3-什么情况使用-redux","link":"#_3-什么情况使用-redux","children":[]},{"level":2,"title":"4.Redux 的工作流程","slug":"_4-redux-的工作流程","link":"#_4-redux-的工作流程","children":[]},{"level":2,"title":"5.Redux API","slug":"_5-redux-api","link":"#_5-redux-api","children":[{"level":3,"title":"5.1 store","slug":"_5-1-store","link":"#_5-1-store","children":[]},{"level":3,"title":"5.2 state","slug":"_5-2-state","link":"#_5-2-state","children":[]},{"level":3,"title":"5.3 action","slug":"_5-3-action","link":"#_5-3-action","children":[]},{"level":3,"title":"5.4 Action Creator","slug":"_5-4-action-creator","link":"#_5-4-action-creator","children":[]},{"level":3,"title":"5.5 store.dispatch()","slug":"_5-5-store-dispatch","link":"#_5-5-store-dispatch","children":[]},{"level":3,"title":"5.6 reducer","slug":"_5-6-reducer","link":"#_5-6-reducer","children":[]}]},{"level":2,"title":"6.在网页中直接使用","slug":"_6-在网页中直接使用","link":"#_6-在网页中直接使用","children":[]},{"level":2,"title":"7.React-Redux 基本使用","slug":"_7-react-redux-基本使用","link":"#_7-react-redux-基本使用","children":[{"level":3,"title":"7.1 引言","slug":"_7-1-引言","link":"#_7-1-引言","children":[]},{"level":3,"title":"7.2 开始使用 React-Redux","slug":"_7-2-开始使用-react-redux","link":"#_7-2-开始使用-react-redux","children":[]},{"level":3,"title":"7.3 设置 provider","slug":"_7-3-设置-provider","link":"#_7-3-设置-provider","children":[]},{"level":3,"title":"7.4 操作数据","slug":"_7-4-操作数据","link":"#_7-4-操作数据","children":[]}]},{"level":2,"title":"8.复杂的State","slug":"_8-复杂的state","link":"#_8-复杂的state","children":[]},{"level":2,"title":"9.多个Reducer","slug":"_9-多个reducer","link":"#_9-多个reducer","children":[]},{"level":2,"title":"10.总结","slug":"_10-总结","link":"#_10-总结","children":[]}],"git":{"createdTime":1711447182000,"updatedTime":1711447182000,"contributors":[{"name":"yangle","email":"yanglenlh@163.com","commits":1}]},"readingTime":{"minutes":20.83,"words":6248},"filePathRelative":"pages/front-end/框架/react/17-redux.md","localizedDate":"2024年3月26日","autoDesc":true}');export{e as data};

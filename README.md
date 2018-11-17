# DIY Vuex

> 对 Vuex 源码进行浓缩，DIY 一个小型 Vuex

功能如下

1. 通过 `$store.commit` 改变 `$store.state`
2. 实现 strict model

[源码](https://github.com/jinzhanye/diy-vuex)约70行左右比较好理解，下面讲解一下两个比较重要的点。

## install
`Vue.use(Vuex)`实际上调用的是 Vuex 的 `install` 方法，该方法在每个组件的 `beforeCreate` 钩子中为当前组件注入 `$store`，使所有组件的 `$store` 属性都指向同一个对象，也就是创建 Vue 实例时传入的 `store` 对象。

## 监听 store
为什么当 state 对象发生变化时视图会被更新？原因是 store 内部创建了一个 Vue 对象对 state 进行监听(见源码 `resetStoreVM` 方法)。而且上面也提到，使用 Vuex 后，所有组件的 `$store` 都引用的都是同一个 store。所以当 state 变化时，绑定了 state 的视图都会更新。

# mobile

## 说明
本项目是一个移动端框架，已经结合rem自适应

使用技术:vue-cli3+axios+vuex

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 记录
1.tip：1、375px 即100%宽度，写px会自动rem处理，如果不想被rem处理，可以使用PX来写。

2.vue监听对象
```
watch: {
    args: {
      handler (newValue, oldValue) {
      },
      deep: true
    }

```

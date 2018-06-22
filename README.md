# react-simple-trend     [![npm version](https://badge.fury.io/js/react-simple-trend.svg)](https://badge.fury.io/js/react-simple-trend)

[![NPM](https://nodei.co/npm/react-simple-trend.png)](https://www.npmjs.com/package/react-simple-trend)

> 基于React的K线图组件

### 演示地址

* [Demo](https://lindakai2016.github.io/react-trend/index.html)

### 安装和使用

安装

```bash
$ npm install react-simple-trend
```

* 使用

```html
    import React from 'react';
    import ReactDOM from 'react-dom';
    import ReactTrend from 'react-simple-trend';

    class App extends React.Component {

        render() {
            return (
            	<ReactTrend width={100} height={50} stroke="red" strokeWidth={1}/>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
```

### 构建选项

| 参数名称  | 参数说明         |  默认值
|:---------|:-----------------|:------------
|`width`   | 宽度 (px)         | 200
|`height` | 高度度 (px) | 50
|`trends` | 数组数据 |  [120,345,300,432,253,163,765,324]
|`stroke` | 线颜色 | #ccc
|`strokeWidth`  | 线宽 | 2
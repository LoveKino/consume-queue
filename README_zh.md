# consume-queue

[中文文档](./README_zh.md)   [document](./README.md)

message queue
- [安装](#%E5%AE%89%E8%A3%85)
- [使用方法](#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
  * [API 快速运行](#api-%E5%BF%AB%E9%80%9F%E8%BF%90%E8%A1%8C)
- [开发](#%E5%BC%80%E5%8F%91)
  * [文件结构](#%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84)
  * [运行测试用例](#%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95%E7%94%A8%E4%BE%8B)
- [许可证](#%E8%AE%B8%E5%8F%AF%E8%AF%81)

## 安装

`npm i consume-queue --save` 或者 `npm i consume-queue --save-dev`

全局安装, 使用 `npm i consume-queue -g`



## 使用方法








### API 快速运行



```js
let messageQueue = require('consume-queue')
let {produce, consume} = messageQueue();

let {receipt, message} = produce({a: 1});

console.log(message);

consume({id: message.id, data: 'ok!'});

receipt.then((ret) => {
  console.log(ret);
});
```

```
输出

    { id: 'cb0cd4a6-e3f1-47ff-b29b-703bbf123318',
      source: { a: 1 },
      time: 1496384857225 }
    ok!

```


## 开发

### 文件结构

```
.    
│──LICENSE    
│──README.md    
│──README_zh.md    
│──coverage    
│   │──coverage.json    
│   │──lcov-report    
│   │   │──base.css    
│   │   │──consume-queue    
│   │   │   │──index.html    
│   │   │   │──index.js.html    
│   │   │   └──src    
│   │   │       │──index.html    
│   │   │       └──index.js.html    
│   │   │──index.html    
│   │   │──prettify.css    
│   │   │──prettify.js    
│   │   │──sort-arrow-sprite.png    
│   │   └──sorter.js    
│   └──lcov.info    
│──index.js    
│──package.json    
│──src    
│   └──index.js    
└──test    
    └──index.js     
```


### 运行测试用例

`npm test`

## 许可证

MIT License

Copyright (c) 2016 chenjunyu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

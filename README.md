# consume-queue

[中文文档](./README_zh.md)   [document](./README.md)

message queue
- [install](#install)
- [usage](#usage)
  * [API quick run](#api-quick-run)
- [develop](#develop)
  * [file structure](#file-structure)
  * [run tests](#run-tests)
- [license](#license)

## install

`npm i consume-queue --save` or `npm i consume-queue --save-dev`

Install on global, using `npm i consume-queue -g`



## usage








### API quick run



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
output

    { id: 'cb0cd4a6-e3f1-47ff-b29b-703bbf123318',
      source: { a: 1 },
      time: 1496384857225 }
    ok!

```


## develop

### file structure

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


### run tests

`npm test`

## license

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

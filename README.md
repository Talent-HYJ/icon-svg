# icon-svg

### Information
```bash
  icon-svg webComponent 支持svg图标的颜色，大小修改，hover颜色。
```
### Install
```bash
  npm install icon-svg 
```
 ### Usage
  ```bash
  // 在框架中使用 

  // main.js  eg: vue
  import "icon-svg"

  // 在组件中使用


  <template>
    <icon-svg src="**/*.svg" color="#000000" hover-color="#fff"></icon-svg>
  </template>


  // 在html中使用
  <html>
  <head>
     <script src="icon-svg.min.js"></script> // 引入js文件
  </head>
  <body>
    <icon-svg src="**/*.svg"></icon-svg> 
     <icon-svg src="**/*.svg" color="#000000" width="20" height="20" hover-color="#fff"></icon-svg>
    <icon-svg src="**/*.svg" color="#000000" hover-color="#fff"></icon-svg> // 使用组件
  </body>
  </html>
 

  
  ```







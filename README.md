# icon-svg-component

### Information
```bash
  icon-svg-component webComponent 支持svg图标的颜色，大小修改，hover颜色。
```
### Install
```bash
  npm install icon-svg-component 
```
 ### Attributes

| Attribute | Description | Type | Default |
| --------- | ----------- | ---- | ------- |
| src | 必填，svg图标路径 | string | - |
| color | 图标颜色 | string | #000000 |
| hover-color | 鼠标悬停颜色 | string | #000000 |
| width | 图标宽度 | number\|string | 24 |
| height | 图标高度 | number\|string | 24 |

 ### Usage

  ```bash
  // 在框架中使用 

  // main.js  eg: vue
  import "icon-svg-component"

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






# Kidship（开发中）



#### 采用react+TypeScript+Vite开发







采用storybook 采取开发文档

#### 目前以实现组件：

1 AutoComplete:输入框自动完成功能

2 Button:页面中最常用的的按钮元素，适合于完成特定的交互

3 Form:表单组件

4 Menu:为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。

5 Icon:提供了一套常用的图标集合 基于 react-fontawesome。

6 Icon:Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。

7 Upload：通过点击或者拖拽上传文件

#### 



![image-20231226110430266](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231226110430266.png)

![image-20231226110457912](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231226110457912.png)

![image-20231226110832878](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231226110832878.png)

![image-20231226110842836](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231226110842836.png)



#### 安装

```
npm i kidship
```

#### 用法

```
import { Button } from 'kidship'

<Button />
```

#### 加载样式

```
// 加载样式
import 'vikingship/dist/index.css'
```



#### 本地运行storyBook

```
npm run storybook
```



#### 目前问题

单元测试：出现问题

打包发布StoryBook：出现问题



#### 扩展功能： （日后实现）

Alert：用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失

Tab:用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失

Select:用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失

可以采用Rollup:优化组件库打包后的体积

# HTML & CSS

## 文档声明相关

## 盒模型

## 双栏布局

左边固定，右边铺满窗口

1. 浮动
	- 左：float
	- 右：margin 或者 padding 隔开距离
2. 定位
	- 父：relative
	- 左：absolute 
	- 右：padding/margin
3. table
4. flex
	- 父：`display:flex;`
	- 左：`width: 100px;`
	- 右：`flex-grow: 1;`
5. calc

## 三栏布局

## 定位


## 水平居中

- 定宽
	- margin
- 行内
	- `diaplay:inline-clock;text-align:center`
- 定位
	- 父： `position: relative`
	- 子： `postion: asolute;left: 50%;transform: translateX(-50%);`
	- 子(定宽)：`postion: asolute;left: 50%;margin-left: 0.5*width`
- flex
	- `display: flex;justify-content: center;`


## 垂直居中

1. 行内元素: `vertical-align: middle;`
2. table
	- 父 `display:table`
	- 子 `display:table-cell;vertical-align: middle;`
3. flex
	- 父: `display: flex;align-items:center;`
4. 定位
5. margin

## flexbox





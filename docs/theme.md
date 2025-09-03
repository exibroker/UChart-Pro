# 主题定制

图表内置了`dark`和`light`两种主题，默认是`light`。如果需要定制其它主题，需要完成核心图表的样式定制和 css 的定制。

## 核心图表的定制

通过 api `setStyles(styles)`设置。

## css 相关样式

css 样式采用 css 变量控制颜色，具体如下，

```css
.ucharts-pro {
	/* 亮色主题颜色 */
	--ucharts-pro-primary-color: #1677ff;
	--ucharts-pro-hover-background-color: rgba(22, 119, 255, 0.15);
	--ucharts-pro-background-color: #ffffff;
	--ucharts-pro-popover-background-color: #ffffff;
	--ucharts-pro-text-color: #051441;
	--ucharts-pro-text-second-color: #76808f;
	--ucharts-pro-border-color: #ebedf1;
	--ucharts-pro-selected-color: rgba(22, 119, 255, 0.15);
}

/* 暗色主题颜色 */
.ucharts-pro[data-theme='dark'] {
	--ucharts-pro-hover-background-color: rgba(22, 119, 255, 0.15);
	--ucharts-pro-background-color: #151517;
	--ucharts-pro-popover-background-color: #1c1c1f;
	--ucharts-pro-text-color: #f8f8f8;
	--ucharts-pro-text-second-color: #929aa5;
	--ucharts-pro-border-color: #292929;
}
```

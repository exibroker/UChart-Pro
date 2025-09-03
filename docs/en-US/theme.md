# Theme customization

The chart has two built-in themes, `dark` and `light`, and the default is `light`. If you need to customize other topics, you need to complete the style customization of the core chart and the customization of the CSS.

## Customization of core chart

Set through the API `setStyles(styles)`.

## CSS related styles

The css style uses css variables to control the color, as follows,

```css
.ucharts-pro {
	/* Light theme colors */
	--ucharts-pro-primary-color: #1677ff;
	--ucharts-pro-hover-background-color: rgba(22, 119, 255, 0.15);
	--ucharts-pro-background-color: #ffffff;
	--ucharts-pro-popover-background-color: #ffffff;
	--ucharts-pro-text-color: #051441;
	--ucharts-pro-text-second-color: #76808f;
	--ucharts-pro-border-color: #ebedf1;
	--ucharts-pro-selected-color: rgba(22, 119, 255, 0.15);
}

/* Dark theme colors  */
.ucharts-pro[data-theme='dark'] {
	--ucharts-pro-hover-background-color: rgba(22, 119, 255, 0.15);
	--ucharts-pro-background-color: #151517;
	--ucharts-pro-popover-background-color: #1c1c1f;
	--ucharts-pro-text-color: #f8f8f8;
	--ucharts-pro-text-second-color: #929aa5;
	--ucharts-pro-border-color: #292929;
}
```

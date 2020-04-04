---
title: Toast - 提示
---
# 提示

## 示例

<ClientOnly>
  <toast-demos />
</ClientOnly>


::: details 点击查看源码
<<< @/docs/.vuepress/components/toast-demos.vue
:::


## API

| 属性 | 说明 | 类型   | 可选值       | 默认值 |
| ---- | ------ |------ | ------------ | ------ |
| autoClose | 是否自动关闭 | boolean | true / false | true |
| autoCloseDelay | 自动关闭时间 | number |  | 3 |
| closeButton | 自定义关闭按钮内容 | object |                       | {    text: "关闭",    callback: undefined}; |
| enableHtml |  | boolean |                       |  |
| position | 提示位置 | string | top / bottom / center | top |

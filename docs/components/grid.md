---
title: Grid - 栅格
---
# 栅格

## 示例

<ClientOnly>
  <grid-demos />
</ClientOnly>


::: details 点击查看源码
<<< @/docs/.vuepress/components/grid-demos.vue
:::


## API

### gulu-row

| 属性   | 说明       | 类型            | 可选值                | 默认值 |
| ------ | ---------- | --------------- | --------------------- | ------ |
| gutter | 栅格的间距 | string / number |                       | 0      |
| align  |            | string          | left / right / center |        |

### gulu-col

| 属性 | 说明 | 类型   | 可选值       | 默认值 |
| ---- | ------ |------ | ------------ | ------ |
| span | 栅格占据的列数 | string / number |                           | 24 |
| offset | 栅格间的空隙 | string / number |  | 0 |
| phone | phone 上的占比 | object | { span: 8,    offset: 0 } |  |
| ipad | 同 phone |  |                           |  |
| narrowPc | 同 phone |  |                           |  |
| pc | 同 phone |  |                           |  |
| widePc | 同 phone |  |                           |  |


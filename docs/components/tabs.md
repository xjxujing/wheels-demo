---
title: Tabs - 选项卡
---
# Tabs

## 示例

<ClientOnly>
  <tabs-demos />
</ClientOnly>


::: details 点击查看源码
 <<< @/docs/.vuepress/components/tabs-demos.vue
:::

## API

### gulu-tabs

| 属性 | 说明     | 类型    | 可选值       | 默认值 | 是否必填 |
| ---- | ------ | ------------ | ------ | ---- | ---- |
| selected | 选项卡 | string  |    |  | 是 |
| direction（待完善） | 方向 | string | horizontal / vertical | horizontal |  |


### gulu-tabs-head

必须要有这个标签

### gulu-tabs-item

| 属性 | 说明     | 类型    | 可选值       | 默认值 | 是否必填 |
| ---- | ------ | ------------ | ------ | ---- | ---- |
| name | 选项卡的名字 | string / number |    |  | 是 |
| disabled | 禁用选项卡 | bollean |  | false |  |

### gulu-tabs-body

必须要有这个标签

### gulu-tabs-panel

| 属性 | 说明     | 类型    | 可选值       | 默认值 | 是否必填 |
| ---- | ------ | ------------ | ------ | ---- | ---- |
| name | 要与 tabs-item 的 name 一致才可以关联到 | string / number |    |  | 是 |

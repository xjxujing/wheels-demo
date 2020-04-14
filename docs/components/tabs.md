---
title: Tabs - 选项卡
---
# Tabs

## 示例

<ClientOnly>
  <tabs-demos />
</ClientOnly>


```html
<gulu-tabs :selected.sync="selected">
    <gulu-tabs-head>
      <template slot="actions">
        <button>设置</button>
      </template>
      <gulu-tabs-item name="gintama">
        银魂
      </gulu-tabs-item>
      <gulu-tabs-item name="onepeace">
        <gulu-icon icon="settings"></gulu-icon>
              海贼
        </gulu-tabs-item>
      <gulu-tabs-item name="naruto" disabled>火影</gulu-tabs-item>
    </gulu-tabs-head>
    <gulu-tabs-body>
        <gulu-tabs-pane name="onepeace">海贼王更新到 600 集了！</gulu-tabs-pane>
        <gulu-tabs-pane name="naruto">鸣人练成螺旋丸！</gulu-tabs-pane>
        <gulu-tabs-pane name="gintama">夜兔族超级强</gulu-tabs-pane>
    </gulu-tabs-body>
</gulu-tabs>
```

```javascript
import { Icon, Tab, TabsHead, TabsItem, TabsPane, TabsBody } from "@kokojing/wheels-ui-test"
import "@kokojing/wheels-ui-test/lib/wheels.css"

export default {
    components: {
      "gulu-icon": Icon,
      "gulu-tabs": Tab,
      "gulu-tabs-head": TabsHead,
      "gulu-tabs-item": TabsItem,
      "gulu-tabs-pane": TabsPane,
      "gulu-tabs-body": TabsBody
    },
    
    data() {
      return {
        selected: "onepeace"
      }
    }
}
```

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

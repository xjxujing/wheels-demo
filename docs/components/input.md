---
title: Input - 输入框
---
# 输入框

## 示例

<ClientOnly>
  <input-demos />
</ClientOnly>

```html
<div>
  <gulu-input v-model="value"></gulu-input>
</div>
<div>
  <gulu-input value="input 组件"></gulu-input>
</div>
<div>
  <gulu-input value="input 组件" disabled></gulu-input>
</div>
<div>
  <gulu-input value="input 组件" error="请输入"></gulu-input>
</div>
```

```javascript
import { Input } from "@kokojing/wheels-ui-test"
import "@kokojing/wheels-ui-test/lib/wheels.css"

export default {
    components: {
      "gulu-input": Input
    },
    
    data() {
      return {
        value: ""
      }
    },
}
```

## API

| 属性 | 说明     | 类型    | 可选值       | 默认值 |
| ---- | ------ | ------------ | ------ | ---- |
| v-model / value | 绑定值   | string  |              |  |
| error | 错误提示 | string  |              |  |
| disabled | 禁用     | boolean | true / false | false |

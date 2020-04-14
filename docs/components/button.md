---
title: Button - 按钮
---
# 按钮

## 示例

<ClientOnly>
  <button-demos />
</ClientOnly>


```html
<gulu-button>默认按钮</gulu-button>
<gulu-button icon="thumbs-up">点赞</gulu-button>
<gulu-button icon-position="right" icon="download">下载</gulu-button>

<gulu-button
  icon="settings"
  icon-position="left"
  :loading="loading"
  @click="loading = !loading"
>
  提交
</gulu-button>

<gulu-button-group>
  <gulu-button icon="left">上一页</gulu-button>
  <gulu-button>第 3 页</gulu-button>
  <gulu-button icon="right" icon-position="right">
    下一页
  </gulu-button>
</gulu-button-group>
```

```javascript
import { Button } from "@kokojing/wheels-ui-test"
import "@kokojing/wheels-ui-test/lib/wheels.css"
export default  {
  components: {
    "gulu-button": Button
  },
  data() {
    return {
      loading: false
    }
  }
}
```

## API

| 属性 | 说明 | 类型   | 可选值       | 默认值 |
| ---- | ------ |------ | ------------ | ------ |
| icon | 图标名称  | string  | error / loading / settings / left / right / download / thumbs-up | / |
| iconPosition |  图标位置 | string | left / right | left |
| loading | 是否显示加载动画 | boolean | true / false | false |

---
title: Toast - 提示
---
# 提示

## 示例

<ClientOnly>
  <toast-demos />
</ClientOnly>


```html
<gulu-button @click="showToast('top')">top</gulu-button>
<gulu-button @click="showToast('center')">center</gulu-button>
<gulu-button @click="doNotAutoClose('bottom')">不会自动关闭</gulu-button>
<hr />
<gulu-button @click="definedCloseButton">自定义关闭</gulu-button>
```

```javascript
import {Button, plugin} from "../../../src/button"
import "@kokojing/wheels-ui-test/lib/wheels.css"
import Vue from 'vue'
Vue.use(plugin)

export default {
    name: "ToastDemos",

    components: {
      "gulu-button": Button
    },

    methods: {
      showToast(position) {
       this.$toast("你好呀！", {
          position: position
       })
      },
      doNotAutoClose(position) {
        this.$toast("你好呀！", {
          position: position,
          autoClose: false
        })
      },
      definedCloseButton() {
        this.$toast("你喜欢吃梨子吗", {
          closeButton: {
            text: "喜欢",
            callback: () => {
              alert("你说喜欢！")
            }
          }
        })
      }
    }

}
```


## API

| 属性 | 说明 | 类型   | 可选值       | 默认值 |
| ---- | ------ |------ | ------------ | ------ |
| autoClose | 是否自动关闭 | boolean | true / false | true |
| autoCloseDelay | 自动关闭时间 | number |  | 3 |
| closeButton | 自定义关闭按钮内容 | object |                       | {    text: "关闭",    callback: undefined}; |
| enableHtml |  | boolean |                       |  |
| position | 提示位置 | string | top / bottom / center | top |

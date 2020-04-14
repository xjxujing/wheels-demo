---
title: Grid - 栅格
---
# 栅格

## 示例

<ClientOnly>
  <grid-demos />
</ClientOnly>


```html
  <div class="demos-wrapper">
    <gulu-row>
      <gulu-col align="center" span="8" :narrow-pc="{span: 8}">
        <div class="demo">8</div>
      </gulu-col>
      <gulu-col align="center" span="8" :narrow-pc="{span: 8}">
        <div class="demo">8</div>
      </gulu-col>
      <gulu-col align="center" span="8" :narrow-pc="{span: 8}">
        <div class="demo">8</div>
      </gulu-col>
    </gulu-row>

    <h4>设置 gutter</h4>
    <gulu-row gutter="10">
      <gulu-col align="center" span="8">
        <div class="demo">8</div>
      </gulu-col>
      <gulu-col align="center" span="8" >
        <div class="demo">8</div>
      </gulu-col>
      <gulu-col align="center" span="8" >
        <div class="demo">8</div>
      </gulu-col>
    </gulu-row>

    <h4>设置 offset</h4>
    <gulu-row>
      <gulu-col span="6" align="right">
        <div class="demo">6</div>
      </gulu-col>
      <gulu-col span="6"  offset="6">
        <div class="demo">6</div>
      </gulu-col>
      <gulu-col span="6">
        <div class="demo">6</div>
      </gulu-col>
    </gulu-row>
  </div>
```
```javascript
import {Row, Col } from "@kokojing/wheels-ui-test"
import "@kokojing/wheels-ui-test/lib/wheels.css"

 export default {
    components: {
      "gulu-row": Row,
      "gulu-col": Col
    }
  }
```

```scss
  * {
    box-sizing: border-box;
  }
  .demos-wrapper {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;

    .demo {
      background-color: #ffc67d;
      border: 1px solid #666;
      min-height: 50px;
      /*text-align: center;*/
      line-height: 50px;
    }

    .sider {
      width: 200px;
      background-color: #e8b7ff;
    }

    .header {
      min-height: 100px;
      background-color: #eba4a0;
    }

    .content {
      min-height: 100px;
      background-color: #9bb0e8;
    }

    .footer {
      min-height: 100px;
      background-color: #ffc67d;
    }
  }
```

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


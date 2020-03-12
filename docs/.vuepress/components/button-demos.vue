<template>
  <div>
    <gulu-button>默认按钮</gulu-button>
    <gulu-button icon="settings">默认按钮</gulu-button>
    <gulu-button :loading="true">默认按钮</gulu-button>
    <gulu-button disabled>默认按钮</gulu-button>
    <pre>
      <code>{{ content }}</code>
    </pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  name: "ButtonDemos",
  components: {
    "gulu-button": Button
  },
  data() {
    return {
      content: `
      <gulu-button>默认按钮</gulu-button>
      <gulu-button icon="settings">默认按钮</gulu-button>
      <gulu-button :loading="true">默认按钮</gulu-button>
      <gulu-button disabled>默认按钮</gulu-button>
      `
    };
  }
};
</script>

<style>
</style>
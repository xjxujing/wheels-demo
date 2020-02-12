<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "GuluTabsPane",
    inject: ["eventBus"],
    created() {
        console.log("tabs-pane 的 => ", this.eventBus);
    },
};
</script>

<style></style>

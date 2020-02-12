<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "GuluTabsItem",
    inject: ["eventBus"],
    created() {
        console.log("tabs-item 的 => ", this.eventBus);
    },
    props: {
        name: {
            type: String | Number
        }
    }
};
</script>

<style lang="scss" scoped>
.tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
}
</style>

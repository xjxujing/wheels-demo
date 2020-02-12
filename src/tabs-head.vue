<template>
    <div class="tabs-head">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "GuluTabsHead",
    inject: ["eventBus"],
    created() {
        console.log("tabs-head 的 => ", this.eventBus);
    }
};
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
.tabs-head {
    display: flex;
    height: $tabs-height;
    justify-content: flex-start;
    align-items: center;
}
</style>

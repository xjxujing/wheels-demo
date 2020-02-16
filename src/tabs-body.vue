<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "GuluTabsBody",
    inject: ["eventBus"],
    created() {
        // console.log("tabs-body 的 => ", this.eventBus);
    }
};
</script>

<style></style>

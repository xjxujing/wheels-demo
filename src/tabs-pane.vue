<template>
    <div class="tabs-pane" :class="paneClass" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "GuluTabsPane",
    inject: ["eventBus"],

    props: {
        name: {
            type: String | Number
        }
    },

    data() {
        return {
            active: false
        };
    },
    computed: {
        paneClass() {
            return {active: this.active};
        }
    },

    created() {
        this.eventBus.$on("update:selected", name => {
            this.active = this.name === name;
        });
    }
};
</script>

<style lang="scss" scoped>
.tabs-pane {
    padding: 1em;
    &.active {
    }
}
</style>

<template>
    <div class="tabs-item" :class="itemClass" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "GuluTabsItem",
    inject: ["eventBus"],

    props: {
        name: {
            type: String | Number
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            active: false
        };
    },

    computed: {
        itemClass() {
            return {
                active: this.active
            };
        }
    },

    created() {
        this.eventBus.$on("updated:selected", name => {
            this.active = this.name === name;
        });
    },

    methods: {
        xxx() {
            this.eventBus.$emit("updated:selected", this.name);
        }
    }
};
</script>

<style lang="scss" scoped>
.tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
        background-color: red;
    }
    
}
</style>

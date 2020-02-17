<template>
    <div class="tabs-item" :class="itemClass" @click="handleClick">
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
                active: this.active,
                disabled: this.disabled
            };
        }
    },

    created() {
        this.eventBus.$on("update:selected", name => {
            this.active = this.name === name;
        });
    },

    methods: {
        handleClick() {
            if(this.disabled) return
            console.log(this.disabled)
            this.eventBus.$emit("update:selected", this.name, this);
        }
    }
};
</script>

<style lang="scss" scoped>
$blue: #409eff;
$disabled-color: #ddd;
.tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
        color: $blue;
        font-weight: bold;
    }
    &.disabled {
        color: $disabled-color;
        cursor: not-allowed;
    }
}
</style>

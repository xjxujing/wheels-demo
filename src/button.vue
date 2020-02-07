<template>
    <button class="gulu-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
        <gulu-icon v-if="icon && !loading" class="icon" :icon="icon"></gulu-icon>
        <gulu-icon v-if="loading" class="loading icon" icon="loading"></gulu-icon>
        <div class="gulu-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import GuluIcon from "./icon";

export default {
    name: "GuluButton",

    components: {
        GuluIcon
    },
    props: {
        icon: {
            type: String
        },
        iconPosition: {
            type: String,
            default: "left",
            validator(value) {
                return value === "left" || value === "right";
            }
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./styles/_var.scss";
.gulu-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &:hover {
        border-color: $border-color-hover;
    }
    &:active {
        background-color: $button-active-bg;
    }
    &:focus {
        outline: none;
    }
    > .icon {
        order: 1;
        margin-top: 0.1em;
        margin-right: 0.2em;
    }
    > .gulu-button-content {
        order: 2;
    }
    &.icon-right {
        > .icon {
            order: 2;
            margin-right: 0;
            margin-left: 0.2em;
        }
        > .gulu-button-content {
            order: 1;
        }
    }
    > .loading {
        @include spin;
    }
}
</style>

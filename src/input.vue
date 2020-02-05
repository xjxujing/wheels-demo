<template>
    <div class="wrapper" :class="{ error }">
        <input
            type="text"
            :value="value"
            :disabled="disabled"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)"
        />
        <template v-if="error">
            <gulu-icon class="error-icon" icon="error"></gulu-icon>
            <span class="error-message">{{ error }}</span>
        </template>
    </div>
</template>

<script>
import GuluIcon from "./icon";

export default {
    name: "GuluInput",
    components: {
        GuluIcon
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String
        },
        error: {
            type: String
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../styles/_var.scss";
.wrapper {
    font-size: $font-size;
    > input {
        padding: 0 8px;
        height: 32px;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        &:hover {
            border-color: $border-color-hover;
        }
        &:focus {
            box-shadow: inset 0 1px 3px $box-shadow-color;
            outline: none;
        }
        &[disabled] {
            border-color: #bbb;
            color: #bbb;
            cursor: not-allowed;
        }
    }
    &.error {
        > input {
            border-color: $red;
            &:focus {
                box-shadow: inset 0 1px 1px $red;
                outline: none;
            }
        }
    }
    .error-icon {
        vertical-align: middle;
        fill: $red;
    }
    .error-message {
        vertical-align: middle;
        color: $red;
    }
}
</style>

<template>
    <div
        class="gulu-col"
        :class="[span && `span-${span}`, offset && `offset-${offset}`]"
        :style="{
            paddingLeft: gutter / 2 + 'px',
            paddingRight: gutter / 2 + 'px'
        }"
    >
        <div style="border: 1px solid red">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "GuluCol",
    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        }
    },
    data() {
        return {
            gutter: 0
        };
    }
};
</script>

<style lang="scss" scoped>
.gulu-col {
    width: 50%;

    $class-prefix: span-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%;
        }
    }

    $class-prefix: offset-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            margin-left: ($n / 24) * 100%;
        }
    }
}
</style>

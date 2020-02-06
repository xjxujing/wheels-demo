<template>
    <div class="gulu-col" :class="colClass" :style="colStyle">
        <div style="border: 1px solid red">
            <slot></slot>
        </div>
    </div>
</template>

<script>
let validator = value => {
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach(key => {
        if (!["span", "offset"].includes(key)) {
            valid = false;
        }
    });
    return valid;
};
export default {
    name: "GuluCol",
    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        },
        phone: { type: Object, validator },
        ipad: { type: Object, validator },
        narrowPc: { type: Object, validator },
        pc: { type: Object, validator },
        widePc: { type: Object, validator }
    },

    data() {
        return {
            gutter: 0
        };
    },

    computed: {
        colClass() {
            let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
            let phoneClass = [];
            return [
                this.span && `span-${span}`,
                this.offset && `offset-${offset}`,
                ...[phone && `span-phone-${phone.span}`],
                ...[ipad && `span-ipad-${ipad.span}`],
                ...[narrowPc && `span-narrowPc-${narrowPc.span}`],
                ...[pc && `span-pc-${pc.span}`],
                ...[widePc && `span-widePc-${widePc.span}`]
            ];
        },
        colStyle() {
            let { gutter } = this;
            return {
                paddingLeft: gutter / 2 + "px",
                paddingRight: gutter / 2 + "px"
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.gulu-col {
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

    @media (max-width: 576px) {
        $class-prefix: span-phone-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-phone-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }

    @media (min-width: 577px) and (max-width: 768px) {
        $class-prefix: span-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }

    @media (min-width: 769px) and (max-width: 992px) {
        $class-prefix: span-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        $class-prefix: span-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }

    @media (min-width: 1201px) {
        $class-prefix: span-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
}
</style>

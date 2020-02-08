<template>
    <div class="toast" ref="wrapper" :class="toastClass">
        <div class="message">
            <slot v-if="!enabelHtml"></slot>
            <div v-else v-html="this.$slots.default[0]"></div>
        </div>

        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{ closeButton.text }}
        </span>
    </div>
</template>

<script>
// export default 是 Vue 构建组件的选项
export default {
    name: "GuluToast",
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 50
        },
        closeButton: {
            type: Object,
            default: function() {
                return {
                    text: "关闭",
                    callback: undefined
                };
            }
        },
        enabelHtml: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: "top",
            validator(value) {
                return ["top", "bottom", "center", "middle"].indexOf(value) >= 0;
            }
        }
    },

    computed: {
        toastClass() {
            let { position } = this;
            return position;
        }
    },

    mounted() {
        this.updateStyles();
        this.execAutoClose();
    },

    methods: {
        updateStyles() {
            this.$nextTick(() => {
                this.$refs.line.style.height = `${
                    this.$refs.wrapper.getBoundingClientRect().height
                }px`;
            });
        },
        execAutoClose() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000);
            }
        },

        close() {
            this.$el.remove();
            this.$destroy();
        },
        onClickClose() {
            this.close();
            if (this.closeButton && typeof this.closeButton.callback === "function") {
                this.closeButton.callback(this);
            }
        },
        log() {
            console.log("通过 callback 回调, 传递的 this, 然后调用了我");
        }
    }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
    font-size: $font-size;
    min-height: $toast-min-height;
    line-height: 1.8;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 0 16px;
    &.top {
        top: 0;
    }
    &.bottom {
        bottom: 0;
    }
    &.center {
        top: 50%;
        transform: translate(-50%, -50%);
    }
    > .message {
        padding: 10px;
    }
    > .line {
        border-left: 1px solid #666;
        margin: 0 16px;
    }
    > .close {
        flex-shrink: 0;
    }
}
</style>

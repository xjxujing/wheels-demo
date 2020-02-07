<template>
    <div class="toast">
        <slot></slot>
<div class="line"></div>
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
            default: 3
        },
        closeButton: {
            type: Object,
            default: function() {
                return {
                    text: "关闭",
                    callback: undefined
                };
            }
        }
    },

    created() {
        this.closeButton;
    },

    mounted() {
        if (this.autoClose) {
            setTimeout(() => {
                this.close();
            }, this.autoCloseDelay * 1000);
        }
    },

    methods: {
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
        log(){
            console.log("通过 callback 回调, 传递的 this, 然后调用了我");
        }
    }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
    font-size: $font-size;
    height: $toast-height;
    line-height: 1.8;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 0 16px;
    > .line {
        height: 100%;
        border-left: 1px solid #666;
        margin: 0 16px;
    }
}
</style>

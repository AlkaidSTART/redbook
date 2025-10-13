<script setup>
import { ref, defineEmits } from 'vue'
const currentIndex = ref(0)
const emits = defineEmits(['change'])

// 修复事件处理函数
const setindex = (index) => {
    currentIndex.value = index
    emits('change', index)
}
</script>
<template>
    <footer class="foot">
        <ul>
            <li @click="setindex(0)"><img src="../assets/主页.png" alt=""></li>
            <li @click="setindex(1)"><img src="../assets/开始拍摄.png" alt=""></li>
            <li @click="setindex(2)"><img src="../assets/通知中心_o.png" alt=""></li>
            <li @click="setindex(3)"><img src="../assets/个人中心.png" alt=""></li>
        </ul>
    </footer>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;

.foot {
    background-color: #f5f5f5;
    height: calc(30 * #{$dp});
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    background-color: #0a0a0a;

    ul {
        display: flex;
        justify-content: space-around;
        padding-top: calc(2.5 * #{$dp});

        li {
            width: calc(9 * #{$dp});
            height: calc(9 * #{$dp});
            border-radius: 50%;
            overflow: hidden;
            filter: brightness(0.5);
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            &:active {
                filter: brightness(0.5);
            }
        }
    }
}
</style>
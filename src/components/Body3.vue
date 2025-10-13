<script setup>
import { ref } from 'vue'
import Body31 from './Body3-1.vue'
import Body32 from './Body3-2.vue'
import Body33 from './Body3-3.vue'

const currentIndex = ref(0)
const setIndex = (index) => {
    currentIndex.value = index
    const offset = index * 34 * 0.1 // index * 34 * $dp
    document.querySelector('.slider').style.transform = `translateX(${offset}rem)`
}

</script>
<template>
    <header class="T1">
        <ul>
            <li :class="{ 'active': currentIndex == 0 }" @click="setIndex(0)">评论和@</li>
            <li :class="{ 'active': currentIndex == 1 }" @click="setIndex(1)">赞和收藏</li>
            <li :class="{ 'active': currentIndex == 2 }" @click="setIndex(2)">新增关注</li>
            <div class="slider"></div>
        </ul>
    </header>
    <section class="T2">
        <template v-if="currentIndex == 0">
            <Body31></Body31>
        </template>
        <template v-else-if="currentIndex == 1">
            <Body32></Body32>
        </template>
        <template v-else-if="currentIndex == 2">
            <Body33></Body33>
        </template>
    </section>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;

.T1 {
    font-size: 16px;
    width: 100%;
    height: calc(10* $dp);
    display: flex;
    justify-content: space-around;
    text-align: center;

    ul {
        width: 100%;
        display: flex;
        padding: 0 calc(3* $dp);
        position: relative;

        li {
            color: #f1f1f1;
            flex: 1;
            line-height: calc(10* $dp);
            cursor: pointer;

            &.active {
                color: #363636;
                filter: brightness(1.5);
                // border: 2px solid #007aff;
                // border-radius: 5px;
            }
        }

        .slider {
            position: absolute;
            bottom: calc(2 * #{$dp});
            left: calc(3 * #{$dp});
            top: 0;
            width: calc(26 * #{$dp});
            height: calc(10 * #{$dp});
            background-color: #f9f2f0;
            border-radius: calc(2 * #{$dp});
            z-index: 100;
            border: 2px solid #141441;
            opacity: 0.5;
            transform: translateX(0);
            transition: transform 0.3s ease-in-out;
        }
    }
}

.T2 {
    width: 100%;
    height: calc(80* $dp);

}
</style>
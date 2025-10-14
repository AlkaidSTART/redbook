<script setup>
const props = defineProps({
    rotate: {
        type: Boolean,
        default: false
    }
})

</script>
<template>
    <div class="T1">
        <div class="T1-1" :class="{ 'rotate': rotate }">
            <img src="../assets/刷新.png" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;
$n: 10;

.T1 {
    width: 100%;
    height: calc(12 * #{$dp});
    line-height: calc(12 * #{$dp});
    font-size: 16px;
    margin-top: calc(10 * #{$dp});

    .T1-1 {
        width: calc(8 * #{$dp});
        height: calc(8 * #{$dp});
        line-height: calc(8 * #{$dp});
        margin: 0 auto;
        display: flex;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &.rotate {
            animation: rotate 1.4s linear infinite;
        }
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
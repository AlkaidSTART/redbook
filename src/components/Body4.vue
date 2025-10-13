<script setup>
import { onMounted, ref } from 'vue'
const activeIndex = ref(0)
function setIndex(index) {
    activeIndex.value = index
    // 直接计算偏移量
    const offset = index * 1.7 +3.3// 17 * 0.1 = 1.7
    document.querySelector('.slider').style.transform = `translateX(${offset}rem)`
}
onMounted(() => {
    setIndex(0)
})
</script>
<template>
    <header class="T1">
        <div class="thead">
            <div class="headimg">
                <img src="../assets/1.jpg" alt="">
            </div>
            <div class="usertext">
                <div class="title">AlkaidSTART</div>
                <div class="content">小红数号：114514</div>
            </div>
        </div>
        <p class="self">Inspir Creativity,Enrich Life.</p>
        <div class="total">
            <div class="box">
                <div class="num">11</div>
                <div class="text">关注</div>
            </div>
            <div class="box">
                <div class="num">113</div>
                <div class="text">粉丝</div>
            </div>
            <div class="box">
                <div class="num">142</div>
                <div class="text">获赞与收藏</div>
            </div>
            <div class="follow1">
                <div class="num1">关注</div>
                <div class="text1">更多</div>
            </div>

        </div>
    </header>
    <div class="body">
        <div class="bnav">
            <div class="box" @click="setIndex(0) ">笔记</div>
            <div class="box" @click="setIndex(1)">收藏</div>
            <div class="slider"></div>
        </div>

    </div>
    <div class="btext"></div>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;

.body {
    width: 100%;
    height: calc(24* #{$dp});
    line-height: calc(44* #{$dp});
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    .bnav {
        width: 100%;
        height:calc(12* #{$dp});
        line-height: calc(10* #{$dp});
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #000;
        padding-bottom: calc(2* #{$dp});
        position: relative;

        .box {
            width: calc(17*#{$dp});
            height: 100%;
            text-align: center;
            line-height: calc(10* #{$dp});
            font-weight: 500;
            color: #999;

            &:hover {
                filter: brightness(1.5);
                fill-opacity: 0.5;
                // background-color: #141414;
                // transition: all 0.3s ease-in-out;

            }
        }

        .slider {
    position: absolute;
    bottom: calc(2 * #{$dp});
    left: 0;  /* 改为0 */
    width: calc(17 * #{$dp});
    height: calc(9 * #{$dp});
    background-color: #f9f2f0;
    border-radius: calc(2 * #{$dp});
    z-index: 100;
    border: 1px solid #141414;
    opacity: 0.5;
    transform: translateX(0);  /* 初始位置为0 */
    transition: transform 0.3s ease-in-out;  /* 只保留一个transition */
}
    }



}

.btext {
    width: 100%;
    line-height: calc(10* #{$dp});
    overflow-y: scroll;
}






.T1 {
    font-size: 16px;
    width: 100%;
    height: auto;

    .thead {
        width: 100%;
        height: auto;
        display: flex;
        text-align: center;
        padding-left: calc(6* #{$dp});

        .headimg {
            width: calc(22* #{$dp});
            height: calc(22* #{$dp});
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }

        .usertext {
            height: calc(22* #{$dp});
            line-height: calc(22* #{$dp});
            padding-left: calc(6* #{$dp});

            .title {
                width: 100%;
                height: calc(12* #{$dp});
                line-height: calc(12* #{$dp});
                font-size: 16px;
                font-weight: bold;
            }

            .content {
                width: 100%;
                height: calc(10* #{$dp});
                line-height: calc(10* #{$dp});
                font-size: 12px;
                color: #999;
            }
        }
    }

    .self {
        width: 100%;
        height: calc(14* #{$dp});
        line-height: calc(10* #{$dp});
        margin-left: calc(6* #{$dp});
        font-size: 12px;
        color: #999;
    }

    .total {
        width: calc(120* #{$dp});
        height: calc(18* #{$dp});
        line-height: calc(30* #{$dp});
        margin-left: calc(6* #{$dp});
        font-size: 12px;
        color: #999;
        display: flex;

        .box {
            width: auto;
            height: calc(23* #{$dp});
            line-height: calc(23* #{$dp});
            display: inline-block;
            margin-right: calc(5* #{$dp});

            .num {
                width: calc(8* #{$dp});
                height: calc(8* #{$dp});
                line-height: calc(8* #{$dp});
                font-size: 16px;
                font-weight: bold;
                text-align: center;
            }

            .text {
                height: calc(12* #{$dp});
                line-height: calc(12* #{$dp});
                font-size: 12px;
                text-align: center;
            }
        }

        .follow1 {
            width: calc(40* #{$dp});
            height: calc(16* #{$dp});
            line-height: calc(23* #{$dp});
            display: flex;
            margin-right: calc(6* #{$dp});
            justify-content: center;
            align-items: center;

            .num1 {
                width: calc(22* #{$dp});
                height: calc(10* #{$dp});
                line-height: calc(10* #{$dp});
                font-size: 16px;
                font-weight: 500;
                text-align: center;
                text-align: center;
                background-color: #ff2e4d;
                color: #fff;
                margin-right: calc(6* #{$dp});
                border-radius: 10px;
            }

            .text1 {
                height: calc(12* #{$dp});
                line-height: calc(12* #{$dp});
                font-size: 12px;
                text-align: center;
            }
        }
    }
}
</style>
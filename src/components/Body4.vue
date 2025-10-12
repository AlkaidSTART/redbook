<script setup></script>
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
                <span class="num">11</span>
                <div class="text">关注</div>
            </div>
            <div class="box">
                <span class="num">113</span>
                <div class="text">粉丝</div>
            </div>
            <div class="box">
                <span class="num">142</span>
                <div class="text">获赞与收藏</div>
            </div>
            <div class="follow-">关注</div>
        </div>
    </header>


</template>
<style lang="scss" scoped>
$dp: 0.1rem;

.T1 {
    font-size: 16px;
    width: 100%;
    height: calc(128* #{$dp});

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
        height: calc(30* #{$dp});
        line-height: calc(30* #{$dp});
        margin-left: calc(6* #{$dp});
        font-size: 12px;
        color: #999;
        display: flex;

        .box {
            width: auto;
            height: calc(16* #{$dp});
            display: inline-block;
            .num {
                font-size: 16px;
                font-weight: bold;
            }
            .text {
                height: calc(12* #{$dp});
                line-height: calc(12* #{$dp});
                font-size: 12px;
            }
        }
    }
}
</style>
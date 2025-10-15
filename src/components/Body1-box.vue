<script setup>
</script>
<template>
    <div class="q">
        <a class="container" href="#">
            <section class="a-s">
                <div class="banner">
                    <img src="../assets/blank.png" alt="">
                </div>
                <span>hello</span>
                <div class="user-box">
                    <div class="user">
                        <img src="../assets/1.jpg" alt="">
                    </div>
                    <div class="user-name">
                        <span>用户昵称</span>
                    </div>
                    <div class="user-info">
                        <span class="like">
                            <img src="../assets/喜欢.png" alt=""></img>
                        </span>
                        <span class="follow">121</span>
                    </div>
                </div>
            </section>
        </a>
    </div>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;
.q{
    width: 50%;
    height: auto;
    margin: 0 auto;
}
.container {
    width: 100%; // 让组件占满网格单元格
    height: auto;
    background-color: #363636;
    display: block; // 改为 block
    font-size: 16px;
    padding-top: calc(2 * #{$dp});
    padding-right: calc(2 * #{$dp});
 border: 1px solid #fff;

    .a-s {
        width: calc(46* #{$dp});
        height: auto;
        background-color: #363636;


        .banner {
            width: calc(45 * #{$dp});
            height: calc(50 * #{$dp});
            background-color: #363636;
            border: 1px solid #fff;
            border-radius: calc(2 * #{$dp});

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        span {
            width: 100%;
            height: calc(10 * #{$dp});
            font-size: 16px;
            color: #fff;
            text-align: center;
        }

        .user-box {
            width: calc(50* #{$dp});
            height: calc(16 * #{$dp});
            background-color: #363636;
            display: flex;
            justify-content: flex-start;
            margin-top: calc(4 * #{$dp});
            margin-right: calc(3 * #{$dp});

            .user {
                width: calc(8 * #{$dp});
                height: calc(8 * #{$dp});
                line-height: calc(8 * #{$dp});
                border-radius: 50%;
                overflow: hidden;
                margin-top: calc(3 * #{$dp});
                margin-right: calc(2 * #{$dp});

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

            }

            .user-name {
                width: calc(20 * #{$dp});
                height: calc(8 * #{$dp});
                line-height: calc(8 * #{$dp});
                margin-right: calc(2 * #{$dp});
                font-size: 8px;
                color: #fff;
                text-align: center;

                span {
                    width: 100%;
                    height: calc(10 * #{$dp});
                    font-size: 16px;
                    color: #fff;
                    text-align: center;
                    display: inline-block;
                    margin-top: calc(3 * #{$dp});
                }
            }

            .user-info {
                width: calc(13 * #{$dp});
                height: calc(10 * #{$dp});
                line-height: calc(10 * #{$dp});
                font-size: 16px;
                color: #fff;
                display: flex;
                margin-top: calc(2.5 * #{$dp});
                text-align: center;

                .like {
                    width: calc(10 * #{$dp});
                    height: calc(10 * #{$dp});
                    margin-right: calc(4 * #{$dp});

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }

                    .follow {
                        display: flex;
                        font-size: 16px;
                        margin-top: calc(5 * #{$dp});
                        margin-left: calc(2 * #{$dp});
                        align-items: center;
                    }
                }
            }

        }
    }
}
</style>
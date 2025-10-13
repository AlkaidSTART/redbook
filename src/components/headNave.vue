<script setup>
import { ref } from 'vue'
const searchInput = ref(null)
const searchStatus = ref(false)
const moreStatus = ref(false)
function Search() {
    if (searchStatus.value) {
        searchInput.value.focus()
    }
}

</script>
<template>
    <header>
        <div class="head">
            <div class="ed">
                <div class="logo">
                    <img src="../assets/小红书.png" alt="">
                </div>
                <div class="im-box">
                    <div class="search">
                        <div class="sp" ref="searchInput" v-if="searchStatus"> <input type="text" placeholder=""></div>
                        <div class="si" @click="searchStatus = !searchStatus"><img src="../assets/搜索.png" alt=""></div>
                    </div>
                    <div class="more">
                        <button @click="moreStatus = !moreStatus"><img src="../assets/更多.png" alt=""></button>
                    </div>
                    <div class="line-container" v-if="moreStatus">
                        <ul>
                            <li>退出登录</li>
                            <li>键盘快捷键</li>
                            <li>添加小红书到桌面</li>
                            <li>打开小窗模式</li>
                            <li>创作中心</li>
                            <li>业务合作</li>
                            <li>帮助与客服</li>
                            <li>反馈</li>
                            <li>关于小红书</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- <nav class="nave">
            <ul>
                <li>推荐</li>
                <li>穿搭</li>
                <li>美食</li>
                <li>彩妆</li>
                <li>影视</li>
            </ul>
        </nav> -->
    </header>
</template>
<style scoped>
header {
    width: 100%;
    font-size: 16px;
}
</style>
<style lang="scss" scoped>
$dp: 0.1rem;

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

header {
    background-color: #363636;
}

header {
    width: 100%;
    height: calc(24 * #{$dp});

    .head {
        width: 100%;
        height: calc(22 * #{$dp});
        background-color: #363636;

        .ed {
            width: 100%;
            height: calc(16 * #{$dp});
            display: flex;

            .logo {
                width: calc(20 * #{$dp});
                height: calc(8 * #{$dp});
                background-color: #ff2442;
                border-radius: 15px;
                margin-top: calc(5 * #{$dp});
                margin-left: calc(5 * #{$dp});
            }

            .im-box {
                display: flex;

                .search {
                    width: calc(50* #{$dp});
                    height: calc(8* #{$dp});
                    margin: 0 auto;
                    display: flex;
                    margin-top: calc(5 * #{$dp});
                    margin-left: calc(5 * #{$dp});

                    .sp {
                        width: calc(40 * #{$dp});
                        height: calc(8* #{$dp});
                        background-color: #eaedf0;
                        border-radius: calc(4 * #{$dp});
                        transition: width 0.5s ease-in-out;

                        input {
                            width: 100%;
                            height: 100%;
                            border: none;
                            outline: none;
                            background-color: #ffffff;
                            overflow-x: hidden;
                            background-color: transparent;
                            padding-left: calc(3* #{$dp});
                            padding-right: calc(3.5* #{$dp});
                        }

                    }

                    .si {
                        width: calc(8 * #{$dp});
                        height: calc(8* #{$dp});
                        background-color: #ffffff;
                        z-index: 1000;
                        border-radius: 5px;
                        margin-left: calc(2 * #{$dp});
                        background-color: transparent;
                        position: absolute;
                        top: calc(5 * #{$dp});
                        right: calc(20 * #{$dp});
                    }
                }

                .more {
                    width: calc(8 * #{$dp});
                    height: calc(8 * #{$dp});
                    margin: 0 auto;
                    display: flex;
                    margin-top: calc(5 * #{$dp});
                    background-color: transparent;
                    margin-left: calc(5 * #{$dp});

                    button {
                        width: 100%;
                        height: 100%;
                        border: none;
                        outline: none;
                        background-color: transparent;
                    }
                }

                .line-container {
                    width: calc(40 * #{$dp});
                    height: calc(120 * #{$dp});

                    background-color: #ffffff;
                    border-radius: 12px;
                    position: absolute;
                    top: calc(17 * #{$dp});
                    right: calc(3 * #{$dp});
                    background-color:#141414 ;
                    ul {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        li {
                            text-align: start;
                            padding-left: calc(2 * #{$dp});
                            padding-top: calc(1 * #{$dp});
                            line-height: auto;
                            color: #ffffff;
                            font-size: 14px;
                            border-radius: calc(2 * #{$dp});
                            margin-bottom: calc(2 * #{$dp});
                            z-index: 1000;
                            flex: 1;
                            &:hover {
                                background-color: #abcdef;
                                border-radius: calc(2 * #{$dp});
                            }
                        }
                    }
                }
            }
        }
    }

    // .nave {
    //     width: 100%;
    //     height: calc(10 * #{$dp});
    //     // margin-bottom: calc(4 * #{$dp});
    //     background-color: #363636;

    //     ul {
    //         display: flex;
    //     }

    //     li {
    //         flex: 1;
    //         text-align: center;
    //         color: #ffa2b6;
    //         line-height: calc(10 * #{$dp});

    //         &:hover {
    //             background-color: #141414;
    //             border-radius: calc(2 * #{$dp});
    //         }
    //     }
    // }
}
</style>
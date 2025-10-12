<script setup>

</script>
<template>
  <nav class="nave">
    <ul>
      <li>推荐</li>
      <li>穿搭</li>
      <li>美食</li>
      <li>彩妆</li>
      <li>影视</li>
    </ul>
  </nav>
  <div class="main">
    <a class="container" href="#">
      <section class="a-s">
        <div class="banner">
          <img src="../assets/blank.png" alt="">
        </div>
        <span>你好</span>
        <div class="user-box">
          <div class="user">
            <img src="../assets/1.jpg" alt="">
          </div>
          <div class="user-name">
            <span>用户昵称</span>
          </div>
          <div class="user-info">
            <div class="like">
              <img src="../assets/喜欢.png" alt=""></img>
            </div>
            <span>123</span>
          </div>
        </div>
      </section>
    </a>
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
            <div class="like">
              <img src="../assets/喜欢.png" alt=""></img>
            </div>
            <div class="follow">121</div>
          </div>
        </div>
      </section>
    </a>
  </div>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

a {
  text-decoration: none;
  color: #fff;
}

.nave {
  width: 100%;
  height: calc(10 * #{$dp});
  // margin-bottom: calc(4 * #{$dp});
  background-color: #363636;
  font-size: 16px;

  ul {
    display: flex;
  }

  li {
    flex: 1;
    text-align: center;
    color: #ffa2b6;
    line-height: calc(10 * #{$dp});

    &:hover {
      background-color: #141414;
      border-radius: calc(2 * #{$dp});
    }
  }
}

.main {
  width: 100%;
  display: flex;
  margin-top: calc(4 * #{$dp});
  overflow-y: scroll;
  padding-left: calc(3 * #{$dp});
  padding-right: calc(3 * #{$dp});

  // flex-wrap: wrap;
  .container {
    width: calc(90* #{$dp});
    height: calc(140 * #{$dp});
    background-color: #363636;
    display: flex;
    padding-top: calc(2 * #{$dp});
    padding-right: calc(2 * #{$dp});

    .a-s {
      width: calc(46* #{$dp});
      height: calc(120 * #{$dp});
      background-color: #363636;


      .banner {
        width: calc(45 * #{$dp});
        height: calc(50 * #{$dp});
        background-color: #363636;
        border: 1px solid #fff;
        border-radius: calc(2 * #{$dp});

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
          width: calc(20 * #{$dp});
          height: calc(10 * #{$dp});
          font-size: 16px;
          color: #fff;
          display: flex;
          margin-top: calc(2.5 * #{$dp});
          text-align: center;

          .like {
            width: calc(10 * #{$dp});
            height: calc(10 * #{$dp});

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
}
</style>

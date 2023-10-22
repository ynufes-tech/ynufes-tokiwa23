<script lang="ts" setup></script>

<template>
  <HomeWidget>
    <template v-slot:title>
      <h1>各種SNS紹介</h1>
    </template>
    <template v-slot:content>
      <div class="sns-area">
        <div class="sns-field">
          <a
            id="sns-x"
            href="https://x.com/ynu_fes"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="x" src="/images/icons/x-white.webp" />
          </a>
          <a
            id="sns-ins"
            href="https://www.instagram.com/ynu_fes"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="instagram" src="/images/icons/instagram-logo.webp" />
          </a>
          <a
            id="sns-f"
            href="https://www.facebook.com/ynufes"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="facebook" src="/images/icons/facebook-logo.webp" />
          </a>
        </div>
        <p>
          <span>大学祭に関する情報を</span>
          <span>随時発信しています！</span>
          <span> ぜひご覧ください！！ </span>
        </p>
      </div>
    </template>
  </HomeWidget>
</template>

<style lang="scss" scoped>
h1 {
  height: 90px;
  line-height: 90px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}

.sns-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .sns-field {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px auto;
    gap: 30px;
    width: fit-content;

    img {
      transition: all 0.2s ease-in-out;
      aspect-ratio: 1;
    }

    #sns-f img {
      width: 55px;
    }

    #sns-x {
      width: 55px;
      margin: 2.5px;
      border-radius: 50%;
      background: black;

      img {
        width: 35px;
        padding: 10px;
      }
    }

    #sns-ins {
      width: 60px;

      img {
        width: 50px;
        padding: 5px;
      }
    }

    a:hover img {
      scale: 0.95;
      opacity: 0.8;
    }
  }

  p {
    margin: 10px;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 1.2;
    font-weight: bolder;

    span {
      display: inline-block;
    }
  }
}
</style>

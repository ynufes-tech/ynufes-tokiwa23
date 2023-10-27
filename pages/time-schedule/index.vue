<script lang="ts" setup>
useHead({
  title: "清陵祭 - タイムスケジュール",
  meta: [
    {
      name: "description",
      content: "特別な場所で行われる企画の日時はこちらからご確認いただけます。",
    },
  ],
});
const placeId = ref(1);
const changePlace = (id: number) => {
  placeId.value = id;
};
</script>

<template>
  <div>
    <PageTitle title="タイムスケジュール" class="section-title" />
    <p
      style="
        margin: 0 auto;
        width: fit-content;
        max-width: 96vw;
        margin-top: 1rem;
      "
    >
      タイムスケジュールを表示する場所を選択してください
    </p>

    <!-- 表示する場所を変更するボタンのラッパー -->
    <div class="button-wrapper">
      <SelectButton
        class="select-button"
        value="野外音楽堂"
        :selected="placeId == 1"
        @click="changePlace(1)"
      />
      <SelectButton
        class="select-button"
        value="中央図書館1階メディアホール"
        :selected="placeId == 2"
        @click="changePlace(2)"
      />
      <SelectButton
        class="select-button"
        value="経営学部2号館109教室"
        :selected="placeId == 3"
        @click="changePlace(3)"
      />
      <SelectButton
        class="select-button"
        value="教育6号館と7号館の間"
        :selected="placeId == 4"
        @click="changePlace(4)"
      />
      <SelectButton
        class="select-button"
        value="学生センター前ウッドデッキ"
        :selected="placeId == 5"
        @click="changePlace(5)"
      />
      <SelectButton
        class="select-button"
        value="多目的グラウンド"
        :selected="placeId == 6"
        @click="changePlace(6)"
      />
      <SelectButton
        class="select-button"
        value="大学会館4階 ホール"
        :selected="placeId == 7"
        @click="changePlace(7)"
      />
    </div>

    <!-- タイムスケジュール -->
    <div class="time-table-wrapper">
      <!-- 1. 野外音楽堂 -->
      <div v-show="placeId == 1" class="time-table">
        <SponsorsListTitle text="野外音楽堂" style="width: fit-content" />
        <h2 class="day-1">11/3 fri.</h2>

        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">17 : 00</span>
          <div class="item-text">
            <h2 class="item-title">
              Mr & Ms YNU Contest 2023
              <span class="item-subtitle"></span>
            </h2>
            <p class="item-description">
              「螺旋-RASEN-」というテーマで、4ヶ月間活動してきた10名のファイナリスト。このステージで10名の集大成をご覧ください。
            </p>
            <p class="item-warning">
              ※ 雨天時: 経営学部2号館109教室特設ステージにて開催
            </p>
          </div>

          <span class="item-end-time">18 : 50</span>
        </div>

        <div class="duration-box"></div>
        <h2 class="day-2">11/4 sat.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">17 : 45</span>
          <div class="item-text">
            <h2 class="item-title">
              花火大会〜未来〜 & ROCK IN TOKIWA FES.2023
            </h2>
            <p class="item-description">
              夜空を華々しく飾る花火と、横国生バンドによる野外フェス！
              秋に咲く花火を眺めた後は、夜の野音で盛り上がろう！
            </p>
            <p class="item-warning">※ 雨天時: 中止</p>
          </div>

          <span class="item-end-time">20 : 00</span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-2">11/5 sun.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">12 : 30</span>
          <div class="item-text">
            <h2 class="item-title">Grand &#9733; Finale</h2>
            <p class="item-description">
              来場者参加型クイズ企画！ミスミスターファイナリストも登場します！豪華景品獲得を目指して参加してくださいね！
            </p>
            <p class="item-warning">
              ※ 雨天時: 経営学部2号館109教室特設ステージにて開催
            </p>
          </div>

          <span class="item-end-time">14 : 10</span>
        </div>
        <div class="duration-box"></div>
      </div>

      <!-- 2. 中央図書館1階メディアホール -->
      <div v-show="placeId == 2" class="time-table">
        <SponsorsListTitle
          text="中央図書館1階メディアホール"
          style="width: fit-content"
        />
        <h2 class="day-1">11/3 fri.</h2>

        <div class="duration-box"></div>

        <h2 class="day-2">11/4 sat.</h2>
        <div class="duration-box"></div>
        <h2 class="day-1">11/5 sun.</h2>

        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">10 : 30</span>
          <div class="item-text">
            <h2 class="item-title">カラオケバトル in 横国</h2>
            <p class="item-description">
              横国生のカラオケ王者を決定するのど自慢企画！あなたの歌声が1位に輝くかも!?飛び入り参加も受付中！
            </p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time">12 : 30</span>
        </div>
        <div class="duration-box"></div>
      </div>

      <!-- 3. 経営学部2号館109教室 -->
      <div v-show="placeId == 3" class="time-table">
        <SponsorsListTitle
          text="経営学部2号館109教室"
          style="width: fit-content"
        />
        <h2 class="day-1">11/3 fri.</h2>

        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">14 : 10 (開場13 : 25〜)</span>
          <div class="item-text">
            <h2 class="item-title">
              東京ホテイソン降臨！横浜ナショナルクラッシュ!!
            </h2>
            <p class="item-description">
              なか卯でお笑いの話をするボケ・ショーゴさんと旅行に行った2日後に破局したツッコミ・たけるさんからなる超人気お笑いコンビ
              東京ホテイソンが横浜に降臨!!<br />抱腹絶倒の70分を見逃すな!!
            </p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time">15 : 20</span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-2">11/4 sat.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">14 : 00 (開場13 : 15〜)</span>
          <div class="item-text">
            <h2 class="item-title">声優トークライブ in YNU 2023</h2>
            <p class="item-description">
              大人気声優の「梶裕貴」、「岡本信彦」が横国に登場！共演作も多く、プライベートでも仲が良いふたりはどんなトークを繰り広げる...!?<br />さらにオリジナルサイン色紙が当たる抽選会も!?
            </p>
            <p class="item-warning">
              ※ライブビューイング会場が「経営学部1号館106教室」と「中央図書館メディアホール」にございます。
            </p>
          </div>

          <span class="item-end-time">15 : 15</span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-1">11/5 sun.</h2>

        <div class="duration-box"></div>
      </div>

      <!-- 4. 教育6号館と7号館の間 -->
      <div v-show="placeId == 4" class="time-table">
        <SponsorsListTitle
          text="教育6号館と7号館の間"
          style="width: fit-content"
        />
        <h2 class="day-1">11/3 fri.</h2>

        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">15 : 50</span>
          <div class="item-text">
            <h2 class="item-title">R3ude A & Liz B</h2>
            <p class="item-description">
              様々な魅力を纏ったダンスをお見逃しなく！
            </p>
            <p class="item-warning">
              ※雨天時: 中止<br />※盗撮防止のため、許可証をお持ちの方を除き、公演前、公演中ともに撮影を禁止とさせていただきます。
            </p>
          </div>

          <span class="item-end-time">18 : 30</span>
        </div>
        <div class="duration-box"></div>

        <h2 class="day-2">11/4 sat.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">10 : 00</span>
          <div class="item-text">
            <h2 class="item-title">BaySound Jazz Orchestra B</h2>
            <p class="item-description">
              ビッグバンドによるジャズ演奏。秋空の下、アツいJazzの演奏はいかがですか...？
            </p>
            <p class="item-warning">
              ※雨天時: 教室内での公演に変更となる場合があります。
            </p>
          </div>

          <span class="item-end-time">10 : 45</span>
        </div>
        <div class="duration-box"></div>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">12 : 00</span>
          <div class="item-text">
            <h2 class="item-title">R3ude A & Liz B</h2>
            <p class="item-description">
              様々な魅力を纏ったダンスをお見逃しなく！
            </p>
            <p class="item-warning">
              ※雨天時: 中止<br />※盗撮防止のため、許可証をお持ちの方を除き、公演前、公演中ともに撮影を禁止とさせていただきます。
            </p>
          </div>

          <span class="item-end-time">14 : 30</span>
        </div>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">15 : 50</span>
          <div class="item-text">
            <h2 class="item-title">R3ude A & Liz B</h2>
            <p class="item-description">
              様々な魅力を纏ったダンスをお見逃しなく！
            </p>
            <p class="item-warning">
              ※雨天時: 中止<br />※盗撮防止のため、許可証をお持ちの方を除き、公演前、公演中ともに撮影を禁止とさせていただきます。
            </p>
          </div>

          <span class="item-end-time">18 : 30</span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-2">11/5 sun.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">10 : 00</span>
          <div class="item-text">
            <h2 class="item-title">BaySound Jazz Orchestra B</h2>
            <p class="item-description">
              ビッグバンドによるジャズ演奏。秋空の下、アツいJazzの演奏はいかがですか...？
            </p>
            <p class="item-warning">
              ※雨天時: 教室内での公演に変更となる場合があります。
            </p>
          </div>

          <span class="item-end-time">10 : 45</span>
        </div>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">11: 30</span>
          <div class="item-text">
            <h2 class="item-title">
              あの日ノスタルジアゲリラライブ
              <span class="item-subtitle">by 横国アイドル研究会</span>
            </h2>

            <p class="item-description">
              J-POPアイドルのコピーダンスを行います！
            </p>
            <p class="item-warning">
              ※雨天時: 中止<br />
              ※盗撮防止のため、許可証をお持ちの方を除き、公演前、公演中ともに撮影を禁止とさせていただきます。
            </p>
          </div>

          <span class="item-end-time">11: 50</span>
        </div>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">12: 30</span>
          <div class="item-text">
            <h2 class="item-title">R3ude A & Liz B</h2>
            <p class="item-description">
              様々な魅力を纏ったダンスをお見逃しなく！
            </p>
            <p class="item-warning">※雨天時: 中止</p>
          </div>

          <span class="item-end-time">15: 00</span>
        </div>
        <div class="duration-box"></div>
      </div>

      <!-- 5. 学生センター前のウッドデッキ -->
      <div v-show="placeId == 5" class="time-table">
        <SponsorsListTitle
          text="学生センター前のウッドデッキ"
          style="width: fit-content"
        />
        <h2 class="day-1">11/3 fri.</h2>
        <div class="duration-box"></div>
        <h2 class="day-2">11/4 sat.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">14 : 30</span>
          <div class="item-text">
            <h2 class="item-title">
              アカペラストリートライブ
              <span class="item-subtitle">by Stairways</span>
            </h2>
            <p class="item-description">
              図書館前ウッドデッキにてアカペラストリートライブを行います！
            </p>
            <p class="item-warning">
              ※雨天時: 教室内での公演に変更となる場合があります。
            </p>
          </div>

          <span class="item-end-time">17 : 00</span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-2">11/5 sun.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">12 : 00</span>
          <div class="item-text">
            <h2 class="item-title">
              アカペラストリートライブ
              <span class="item-subtitle">by Stairways</span>
            </h2>
            <p class="item-description">
              図書館前ウッドデッキにてアカペラストリートライブを行います！
            </p>
            <p class="item-warning">
              ※雨天時: 教室内での公演に変更となる場合があります。
            </p>
          </div>
          <span class="item-end-time">13 : 30</span>
        </div>
        <div class="duration-box"></div>
      </div>

      <!-- 6. 多目的グラウンド -->
      <div v-show="placeId == 6" class="time-table">
        <SponsorsListTitle text="多目的グラウンド" style="width: fit-content" />
        <h2 class="day-1">11/3 fri.</h2>

        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">13 : 00</span>
          <div class="item-text">
            <h2 class="item-title">
              ソフトボール大会
              <span class="item-subtitle">by ペルソナーズ</span>
            </h2>
            <p class="item-description">
              多種多様な団体によるハイレベルなソフトボールが見られます⚾️
            </p>
          </div>

          <span class="item-end-time">16 : 00</span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-2">11/4 sat.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">10 : 00</span>
          <div class="item-text">
            <h2 class="item-title">
              ソフトボール大会
              <span class="item-subtitle">by ペルソナーズ</span>
            </h2>
            <p class="item-description">
              多種多様な団体によるハイレベルなソフトボールが見られます⚾️
            </p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time">13 : 00</span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-2">11/5 sun.</h2>
        <div class="duration-box"></div>
      </div>

      <!-- 7. 大学会館4階ホール -->
      <div v-show="placeId == 7" class="time-table">
        <SponsorsListTitle
          text="大学会館4階ホール"
          style="width: fit-content"
        />
        <h2 class="day-1">11/3 fri.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">14 : 15</span>
          <div class="item-text">
            <h2 class="item-title">ライブハウス from 1</h2>
            <p class="item-description">
              ステージ演出にも拘ったバンド演奏をします。是非来て下さい！
            </p>
          </div>
          <span class="item-end-time">16 : 45</span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-2">11/4 sat.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">14 : 00 (開場13 : 30〜)</span>
          <div class="item-text">
            <h2 class="item-title">
              常盤祭コンサート
              <span class="item-subtitle">by 横浜国立大学吹奏楽団</span>
            </h2>
            <p class="item-description">
              吹奏楽曲からポップス曲までさまざまな曲を お届けします♪
            </p>
            <p class="item-warning"></p>
          </div>
          <span class="item-end-time">15 : 00</span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-1">11/5 sun.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">11 : 00 (開場10 : 30〜)</span>
          <div class="item-text">
            <h2 class="item-title">オーケストラ・アラモード</h2>
            <p class="item-description">
              一度は聞いたことがある様々な名曲を数多く楽しんでいただけます！
            </p>
            <p class="item-warning"></p>
          </div>
          <span class="item-end-time">12 : 00</span>
        </div>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time">14 : 00 (開場13 : 30〜)</span>
          <div class="item-text">
            <h2 class="item-title">オーケストラ・アラモード</h2>
            <p class="item-description">
              一度は聞いたことがある様々な名曲を数多く楽しんでいただけます！
            </p>
            <p class="item-warning"></p>
          </div>
          <span class="item-end-time">15 : 00</span>
        </div>
        <div class="duration-box"></div>
      </div>
    </div>

    <!-- 表示する場所を変更するボタンのラッパー -->
    <div class="button-wrapper">
      <SelectButton
        class="select-button"
        value="野外音楽堂"
        :selected="placeId == 1"
        @click="changePlace(1)"
      />
      <SelectButton
        class="select-button"
        value="中央図書館1階メディアホール"
        :selected="placeId == 2"
        @click="changePlace(2)"
      />
      <SelectButton
        class="select-button"
        value="経営学部2号館109教室"
        :selected="placeId == 3"
        @click="changePlace(3)"
      />
      <SelectButton
        class="select-button"
        value="教育6号館と7号館の間"
        :selected="placeId == 4"
        @click="changePlace(4)"
      />
      <SelectButton
        class="select-button"
        value="学生センター前ウッドデッキ"
        :selected="placeId == 5"
        @click="changePlace(5)"
      />
      <SelectButton
        class="select-button"
        value="多目的グラウンド"
        :selected="placeId == 6"
        @click="changePlace(6)"
      />
      <SelectButton
        class="select-button"
        value="大学会館4階 ホール"
        :selected="placeId == 7"
        @click="changePlace(7)"
      />
    </div>
    <BackToHome />
  </div>
</template>

<style scoped lang="scss">
* {
  // outline: red 1px solid !important
}
.section-title {
  margin: 0 auto;
}
.button-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: min(1024px, 96%);
  margin: 10px auto;
  padding: 16px 0;

  .select-button {
    color: #3b3b3b;
    text-decoration: none;
    background-color: transparent;
    margin: 4px;
    width: fit-content;
    padding: 6px 16px;
    border: 1px solid #3b3b3b;
    border-radius: 16px;
  }
  .selected {
    background-color: #3b3b3b;
    color: #fff;
  }
}

.time-table {
  max-width: min(1024px, 96%);
  margin: 0 auto;
  .section-title {
    margin-left: 0;
    margin-bottom: 1em;
  }
  .frame-section {
    margin: 40px 0;
    width: 100%;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
  .day-1,
  .day-2 {
    font-size: 2rem;
  }
  .time-table-item {
    margin: 0 0 0 20px;
    padding: 20px;
    border-left: 1px solid #3b3b3b;
    position: relative;

    .item-text {
      margin: 20px 0;
      .item-title {
        font-size: 1.5rem;
        font-weight: bold;
        .item-subtitle {
          font-size: 1rem;
        }
      }
      .item-description {
        margin: 0;
        font-size: 0.8rem;
        line-height: 1.2rem;
      }
      .item-warning {
        margin: 0;
        font-size: 0.7rem;
        line-height: 1rem;
        color: red;
      }
    }

    .item-start-time {
      position: absolute;
      top: 0;
      left: 20px;
      font-size: 1.2rem;
    }
    .item-end-time {
      position: absolute;
      bottom: 0;
      left: 20px;
      font-size: 1.2rem;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -10px;
      width: 20px;
      height: 20px;
      background-color: #3b3b3b;
      border-radius: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -10px;
      width: 20px;
      height: 20px;
      background-color: #3b3b3b;
      border-radius: 100%;
    }
  }
  .duration-box {
    margin: 0 0 0 19px;
    // width: 100%;
    height: 60px;
    border-left: 3px dashed #3b3b3b;
  }
}
.back-to-home {
  margin: 40px auto;
}
.sponsors-list-title {
  height: fit-content !important;
  margin-bottom: 2rem;
}
</style>

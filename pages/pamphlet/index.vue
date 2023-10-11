<script setup lang="ts">

import BackToHome from "~/components/BackToHome.vue";
</script>

<template>
    <div class="page-root">
            <PageTitle title="学内マップ&amp;パンフレット"/>
        <div class="inner-map">
            <SectionTitle text="学内MAP" class="upper-title"/>
            <div class="inner-map-items">
                <p class="inner-map-text">PDFファイルはこちらからダウンロードできます</p>
                <a herf="https://www.ynu.ac.jp/about/public/publish/ynumap/pdf/ynumap_2022.pdf">
                    <div class="map-download">
                        <p>・学内MAPのダウンロード</p>
                        <img src="/images/pamphlet/PDF-icon.webp" alt="" class="pdf-icon"/>
                    </div>
                    <img class="map-img" src="/images/pamphlet/map-face.webp" alt=""/>
                </a>

            </div>
        </div>
        <div class="inner-pamphlet">
            <SectionTitle text="常盤祭パンフレット" class="upper-title"/>
            <div class="pamphlet-items">
                <img src="/images/pamphlet/pamphlet-face.webp" alt="pamphlet" class="pamphlet-img"/>
                <div class="pamphlet-text">
                    <p>下のボタンからパンフレットをダウンロードできます</p>
                    <div class="pamphlet-download">
                        <p>通常版（ーーM)</p>
                        <a href="" class="pamphlet-button">
                            <DownloadButton/>
                        </a>
                    </div>
                    <div class="pamphlet-download">
                        <p>軽量版（ーーM）</p>
                        <a href="" class="pamphlet-button">
                            <DownloadButton/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-button">
            <BackToHome/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.inner-map{
    color: var(--thick-font-color);
    .inner-map-items{
        width: 80svw;
        margin-left: 10svw;
        .map-img{
            width: 100%;
        }
        .inner-map-text{
            margin: 2em 0;
        }
        .map-download{
            display: flex;
            margin: 1em 0;
            > p {
                text-decoration: none;
                color: var(--thick-font-color);
            }
            > img{
                width: 1em;
            }
        }
    }
}
.inner-pamphlet{
    .pamphlet-items{
        display: flex;
        width: 80svw;
        margin-top: 2em;
        margin-left: 10svw;
        .pamphlet-img{
            width: 40svw;
            height: 31.46svw;/*縦横比固定*/
        }
        .pamphlet-text{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 10%;
            width: 40svw;
            margin-top: 2em;
            .pamphlet-download{
                margin-top: 3em;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .pamphlet-button{
                    color: var(--thick-font-color);
                    text-decoration: none;
                }
                > p {
                    margin-bottom: 1em;
                }
            }
        }
    }
}
.bottom-button{
      margin-top: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
}
@media screen and (max-width: 768px){
    .inner-pamphlet{
        .pamphlet-items{
            width: 100svw;
            margin-left: 0  ;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .pamphlet-text{
                margin-left: 0;
                width: 100%;
                .pamphlet-download{
                    margin-top: 1em;
                }
                > p {
                    text-align: center;
                    width: 80svw;
                    margin-left: 10svw;
                }
            }
        }
    }
}

</style>
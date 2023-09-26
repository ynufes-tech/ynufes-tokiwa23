<script setup lang="ts">

</script>

<template>
<div class="sponsors-page">
<div class="sponsors-title">
    <PageTitle title="SPONSORS"/>
</div>
    <div class="inner-sponsors-page">
        <div class="sponsors-about">
            <section-title text="ご協賛について" class="upper-title"/>
            <div class="sponsors-about-contents">
                <p class="text">感謝の文ーーーーーーーーーーーーーーーーーーーーーーー</p>
                <div class="banner-ads">
                <p>バナー広告</p>
                </div>
                <SponsorsWaveLine/>
            </div>

        </div>
        <div class="sponsors-list">
            <div class="ads-sponsor">
                <SponsorsListTitle text="広告協賛"/>
                <ul class="ads-sponsors-list">
                    <li>test----</li>
                    <li>test----</li>
                    <li>test----</li>
                    <li>test----</li>
                </ul>
                <SponsorsWaveLine/>
            </div>
            <div class="donation">
                <SponsorsListTitle text="寄付"/>
                <ul class="donation-sponsors-list">
                    <li>test----</li>
                    <li>test----</li>
                    <li>test----</li>
                    <li>test----</li>
                </ul>
                <SponsorsWaveLine/>
            </div>
            <div class="booth-sponsor">
                <SponsorsListTitle text="ブース協賛"/>
                <ul class="booth-sponsors-list">
                    <li>test----</li>
                    <li>test----</li>
                    <li>test----</li>
                    <li>test----</li>
                </ul>
                <SponsorsWaveLine/>
            </div>
            <div class="goods-sponsor">
                <SponsorsListTitle text="物品協賛"/>
                <ul class="goods-sponsors-list">
                    <li>test----</li>
                    <li>test----</li>
                    <li>test----</li>
                    <li>test----</li>
                </ul>
                <SponsorsWaveLine/>
            </div>
        </div>
    </div>
    <DarkButton @click="useRouter().push('/')" text="⇐ ホームに戻る"/>
</div>
</template>

<style scoped lang="scss">
.inner-sponsors-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.sponsors-about-contents{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text{
        padding: 2em;
        width: min(70vw, 50em);
    }
    .banner-ads{
         width: min(50vw, 500px );
        height: min(15vw, 150px );
         background-color: #D9D9D9;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
     }
}
.ads-sponsor,.donation,.booth-sponsor,.goods-sponsor{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
    > ul {
        width: 40svw;
        > li {
            display: inline-block;
            width: 48%;
            padding: 1%;
        }
    }
}
.dark-button {
    margin: 1em auto;
    cursor: pointer;
}
</style>
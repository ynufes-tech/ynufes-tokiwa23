<script lang="ts" setup>

</script>

<template>
    <div class="about-page">
        <div class="about-title">
            <PageTitle title="ABOUT"/>
        </div>
        <div class="inner-about-page">
            <div class="tokiwa-about">
                <sectionTitle text="常盤祭について" class="upper-title"/>
                <h1 class="child-title">常盤祭とは何か</h1>
                <hr class="dashed-line">
                <SectionParagraph
                    :textList="[
                        '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n',
                        '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n'
                        ]"
                />
                <hr class="dashed-line">
            </div>
            <div class="theme-about">
                <SectionTitle text="テーマについて" class="upper-title"/>
                <h1 class="child-title">未来航路</h1>
                <hr class="dashed-line">
                <SectionParagraph
                    :textList="[
                        '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n',
                        '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n'
                        ]"
                />
                <hr class="dashed-line">
            </div>
            <div class="committee-about">
                <SectionTitle text="実行委員会について" class="upper-title"/>
                <hr class="dashed-line">
                <SectionParagraph
                    :textList="[
                        '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n',
                        '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n'
                        ]"
                />
                <hr class="dashed-line">
                <div class="ynufes-photo">
                    <img src="https://placehold.jp/350x350.png" alt="pleceholder" class="committee-photo">
                    <img src="https://placehold.jp/350x350.png" alt="pleceholder" class="committee-photo">
                </div>
        </div>
        </div>
        <div class="scroll-button">
            <a href="#" class="gotop">top</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>

html{
    scroll-behavior: smooth;
}

.inner-about-page{
    width: min(1024px,100svw);
    margin: 0 auto;
}
.dashed-line {
    border: none;
    border-top: #575F6A 2px dashed;
    width: 90%;
    margin: 1.2rem auto;
}

.child-title {
    color: #575F6A;
    font-size: 2rem;
    font-weight: bold;
    margin: 0.75em 0 0.75em 5%;
}

.section-paragraph {
    width: 90%;
    margin: 1rem auto;
}

.ynufes-photo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.committee-photo{
    margin: 1.5em;
    border-radius: 1em;
    max-width: 80svw;
}

.gotop {
    display: block;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    background: #FFF;
    border: 1px solid #999;
    border-radius: 1em;
    padding-top: 30px;
    text-align: center;
    letter-spacing: -1px;
    font-size: 85%;
    text-decoration: none;
    color: #333;
    opacity: 0.5;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 10000;
}

.gotop::before {
    content: "";
    display: block;
    border-top: 2px solid #333;
    border-right: 2px solid #333;
    width: 25%;
    height: 25%;
    top: 25%;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    transform: rotate(-45deg);
}

.gotop:hover {
    opacity: 1;
}

@media (max-width: 750px) {
    .gotop {
        width: 40px;
        height: 40px;
        text-indent: -9999px;
        opacity: 1;
        border: none;
        background: none;
        bottom: 10px;
        right: 10px;
    }

    .gotop::before {
        bottom: 0;
    }
}
</style>

<script lang="ts" setup>
const props = defineProps({
        text: {
            type: String,
            required: true,
        },
    },
);
</script>

<template>
    <div class="pre-guest-event-button">
        <div class="pre-guest-event-button-text">
            <p> {{ props.text }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.pre-guest-event-button {
    height: 1em;
    width: 15em;
    background-color: #ffffff;
    border-radius: 1.5em;
    border: solid 2px #8CB6DE;
    font-size: 1.5em;
    transition: .7s;

    .pre-guest-event-button-text {
        text-align: center;
        justify-content: center;
    }
}
</style>
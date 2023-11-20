<template>
    <button class="button" :class="type">
        <span class="button__text">
            {{ text }}
        </span>
        <span v-if="icon" class="button__icon">
            <img src="icon" alt="icon">
        </span>
    </button>
</template>

<script lang="ts">
export default {
    name:'button-ui',
    props: {
        type: String,
        disabled: Boolean,
        text: String,
        icon: String
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

    .button {
        padding: rem(15) rem(45);

        cursor: pointer;

        border: none;
        border-radius: 10px;
        transition: all 0.3s;

        &__text {
            @include text-props(22, 30, 600);
        }

        &--dark-green {
            color: $white-rock;

            background-color: $cape-cod;
        }

        &--size {
            &-medium {
                @include text-props(28, 38, 600);
                
                padding: rem(15) rem(60);
            }
        }

        &--size-medium & {
            &__text {
                @include text-props(28, 38, 600);
            }
        }

        &:hover {
            opacity: .8;
        }

        &:active {
            opacity: .6;
        }
    }
</style>
<template>
    <form class="form">
        <div class="form__wrapper">
            <div class="form__heading">
                <h3 class="form__title">
                    Stay up to date
                </h3>
            </div>
            <div class="form__fields">
                <input type="text">
                <input type="text">
            </div>
            <div class="form__button">
                <button-ui text="Subscribe" type="button--dark-green button--size-medium"/>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

    .form {
        &__wrapper {
            padding: rem(60) rem(40);

            border-radius: rem(30);

            background-color: $corduroy;
            box-shadow: -1px 10px 0px 12px rgba(186, 121, 103, 0.25);
        }

        &__heading {
            margin-bottom: rem(35);
        }

        &__title {
            @include text-props(62, 67, 700)
        }

        &__fields {
            display: flex;
            flex-direction: column;
            gap: rem(25);

            margin-bottom: rem(40);
        }

        &__button {
            display: flex;
            justify-content: center;
        }
    }
</style>
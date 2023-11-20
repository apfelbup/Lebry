<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <div>
                    <router-link to="/" class="navigation__link">
                        <img class="header__logo" src="@/assets/images/icons/logo.svg" alt="logo">
                    </router-link>
                </div>
                <nav class="navigation">
                    <ul class="navigation__list">
                        <li>
                            <router-link to="/booklist" class="navigation__link">Books</router-link>
                        </li>
                        <li>
                            <router-link to="/reviews" class="navigation__link">Reviews</router-link>
                        </li>
                        <li>
                            <router-link to="/about" class="navigation__link">About</router-link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <li>
                        <router-link to="/shelf" class="navigation__link">Shelf</router-link>
                    </li>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
export default {
    
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

    .navigation__list .router-link-active {
        color: $bitter;
    }

    .header {
        padding: rem(15) 0;

        background-color: $cape-cod;

        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__logo {
            width: rem(60);
        }
    }

    .navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__list {
            display: flex;
            align-items: center;
            gap: rem(30);
        }

        &__link {
            @include text-props(28, 40, 500);

            transition: all 0.3s;

            color: $dawn-pink;

            &:hover {
                opacity: 0.8;
            }
        }
    }
</style>
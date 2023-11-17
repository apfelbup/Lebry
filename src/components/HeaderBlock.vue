<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__logo">
                    <router-link to="/" class="navigation__link"><img src="" alt="logo"></router-link>
                </div>
                <nav class="navigation">
                    <ul class="navigation__list">
                        <li>
                            <router-link to="/review" class="navigation__link">Рецензии</router-link>
                        </li>
                        <li>
                            <router-link to="/booklist" class="navigation__link">Книги</router-link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <li>
                        <router-link to="/shelf" class="navigation__link">Моя полка</router-link>
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
    .router-link-active {
        color: black;
    }

    .header {
        padding: 25px 0px;
        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__list {
            display: flex;
            align-items: center;
            gap: 30px;
        }
    }
</style>
<template>
    <button class="button">
        
    </button>
</template>

<script lang="ts">
export default {
    name:'button-ui',
    props: {
        type: String,
        disabled: Boolean,
    }
}
</script>

<style lang="scss">
    .button {
        cursor: pointer;

        border-radius: 12px;
        transition: all 0.3s;
    }
</style>
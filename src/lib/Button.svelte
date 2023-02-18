<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    function handleClick() {
        dispatch('click');
    }
    export let label;
    export let link;
</script>

<a class="button {$$props.class}" on:click={handleClick} href="{link}">{label}</a>

<style lang="scss">
   @import "../css/_variables.scss";
    /*strips all standard link styling*/
    a {
        all: unset;
        display: inline-flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        
        cursor: pointer;

    }

    .button {
        text-align: center;
        background: $button-background-color;
        color: $button-label-color;
        height: $button-height;
        padding-left: $button-padding-x;
        padding-right: $button-padding-x;
        border-radius: $button-border-radius;
        font-family: $button-label-font-family;
        font-size: $button-label-font-size;
        font-weight: $button-label-font-weight;
        line-height: $button-label-line-height;
        letter-spacing: $button-label-letter-spacing;
        
        &:hover {
            background: $button-background-color-hover;
        }
        &:active {
            background: $button-background-color-active;
        }
        &:focus {
            background: $button-background-color-focus;
        }
    }
    .full-width {
            width: 100%;
        }

</style>
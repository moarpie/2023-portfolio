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

<style>
   /* @import "../css/vars/_variables.scss"; */
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
        transition: background-color 250ms;
        background: var(--button-background-color);
        color: var(--button-label-color);
        height: var(--button-height);
        padding-left: var(--button-padding-x);
        padding-right: var(--button-padding-x);
        border-radius: var(--button-border-radius);
        font-family: var(--button-label-font-family);
        font-size: var(--button-label-font-size);
        line-height: var(--button-label-line-height);
        letter-spacing: var(--button-label-letter-spacing);
    }
    .button:hover {
        background: var(--button-background-color-hover);
    }
    .button:active {
        background: var(--button-background-color-active);
    }
    .button:focus {
        background: var(--button-background-color-focus);
    }
    .full-width {
            width: 100%;
        } 

</style>
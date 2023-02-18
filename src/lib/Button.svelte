<script>
    export let label;
    export let link;
</script>

<a class="button {$$props.class}" href="{link}">{label}</a>

<style lang="scss">
   @import "../css/_global.scss";
    /*strips all standard link styling*/
    a {
        all: unset;
        display: inline-block;
        box-sizing: border-box;
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
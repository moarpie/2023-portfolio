<script>
    export let label;
    export let link;
</script>

<a class="button {$$props.class}" href="{link}">{label}</a>

<style lang="scss">
    /*strips all standard link styling*/
    a {
        all: unset;
        display: block;
        &:hover {
            background-color: red;
        }
    }


    .button {
        background: #330066;
        color: white;
        padding: 16px;
    }
    .small {
        height: 20px;
    }
    .big {
        height: 50px;
    }
</style>
<script>
    import Button from "$lib/components/Button.svelte";

</script>

<div class="container">
    <slot />
    <div class="back-button flex justify-center mt-32">
        <Button class="primary" label="Back to home" link="/#work" />
    </div>
</div>

<style lang="scss">
    :global {

    }

</style>
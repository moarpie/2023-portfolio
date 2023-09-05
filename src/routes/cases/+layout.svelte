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
        .case-section {
            padding-top: 1rem;
        }
        @media all and (min-width: 768px) {
            .case-section {
            padding-top: 2rem;
        }
        }
        @media all and (min-width: 1024px) {
            .case-section {
            padding-top: 4rem;
        }
        }
    }

</style>
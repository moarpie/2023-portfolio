<script>
    import Button from "$lib/components/Button.svelte";
</script>
<div class="container pt-60">
    layout
    <slot />
    <div class="back-button flex justify-center mt-20">
        <Button class="primary" label="Back to home" link="/#work" />
    </div>
</div>

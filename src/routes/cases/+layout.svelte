<script>
    import Button from "$lib/components/Button.svelte";
    import CaseHeader from "$lib/components/CaseHeader.svelte";
</script>
<CaseHeader title="case title here" subtitle="subtitle here"></CaseHeader>    
<div class="container pt-60">
    layout
    <slot />
    <div class="back-button flex justify-center mt-20">
        <Button class="primary" label="Back to home" link="/#work" />
    </div>
</div>

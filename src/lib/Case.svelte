<script>
    export let cases = [];
    import Button from "$lib/Button.svelte";
</script>
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
    {#each cases as myCase}
        <div class="case">
            <div class="case-image mb-2" style="background-image: url('/img/cases/{myCase.image}')"></div>
            
            <h3 class="title-small mb-1">{myCase.title}</h3>
            <p class="subtitle-small">{myCase.description}</p>
            <Button link={myCase.link} label="View case" />
        </div>
    {/each}
</div>

<style lang="scss">
    .case-image {
        aspect-ratio: 16/9;
        border-radius: var(--card-border-radius);
        background-size: cover;
    }
</style>
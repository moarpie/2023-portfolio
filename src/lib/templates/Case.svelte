<script>
    export let cases = [];
    import Button from "$lib/components/Button.svelte";
</script>
<div class="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-16">
    {#each cases as myCase}
        
        {#if myCase.public == true}
            <div class="case">
                <div class="case-image mb-2" style="background-image: url('img/cases/thumbnails/{myCase.image}')"></div>

                <h3 class="title-small mb-1">{myCase.title}</h3>
                <p class="subtitle-small">{myCase.description}</p>
                <Button class="primary" link={myCase.link} label={myCase.cta} />
            </div>
        {:else if myCase.public == false}
        <!-- Placeholder logic for undisplayed cases -->
        {/if}

    {/each}
</div>

<style lang="scss">
    .case-image {
        aspect-ratio: 2.09/1;
        border-radius: var(--card-border-radius);
        background-size: cover;
    }
</style>
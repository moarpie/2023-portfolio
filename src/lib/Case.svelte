<script>
    export let portfolioCases = [];
    import Button from "$lib/Button.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each portfolioCases as portfolioCase}
        <div class="case">
            <div class="case-image mb-2" style="background-image: {`url(${portfolioCase.image})`}">
                <!-- <img src= alt={portfolioCase.title} /> -->
            </div>
            
            <h3 class="title-small mb-1">{portfolioCase.title}</h3>
            <p class="subtitle-small">{portfolioCase.description}</p>
            <Button link={portfolioCase.link} label="View case" />
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
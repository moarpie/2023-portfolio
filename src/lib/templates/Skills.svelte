<script>
    export let skills = [];
    import { isDarkMode } from '$lib/stores/store.js';

</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
    {#each skills as mySkills}
        <div class="skill">
            <div class="skill-content">
                <div class="skill-image flex justify-center mb-6">
                    
                    {#if $isDarkMode}
                        <img src="/img/skills/dark-{mySkills.image}" alt="{mySkills.altText}">
                    {:else}
                        <img src="/img/skills/light-{mySkills.image}" alt="{mySkills.altText}">
                    {/if}
                </div>
                
                <h3 class="title-small mb-1 text-center">{mySkills.title}</h3>
                <p class=" text-center vague">{mySkills.description}</p>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .skill-content {
        max-width: 24rem;
        margin: 0 auto;
    }
</style>

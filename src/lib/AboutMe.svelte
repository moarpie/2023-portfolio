<script>
    import Card from "$lib/Card.svelte";
    import Button from "$lib/Button.svelte";
    import AgeCalc from "$lib/AgeCalc.svelte";
    export let description;
</script>
<div class="container px-4">
    <div class="about-me flex flex-col justify-center items-center md:flex-row ">
        <div class="-mb-8 md:mb-0 profile-blob md:-mr-16">
            <img src="img/profile-blob.png" alt="A headshot photograph of me">
        </div>
        <div class="card-wrapper">
            <Card class="elevation-3">
                <h2 class="title-small mb-2">
                    Facts about me
                </h2>
                <p class="subtitle-small">I am <AgeCalc /> seconds old.</p>
                <p class="mb-8">
                    {description}
                </p>
                <Button class="full-width secondary" label="Download full CV" />
            </Card>
        </div>
    </div>
</div>

<style>
 .card-wrapper {
    max-width: 448px;
 }
 .profile-blob {
    max-width: 60vw;
 }
</style>
<script>
    import Card from "$lib/components/Card.svelte";
    import Button from "$lib/components/Button.svelte";
    import AgeCalc from "$lib/utility/AgeCalc.svelte";
    export let description;
</script>

<div class="about-me flex flex-col justify-center items-center md:flex-row ">
    <div class="-mb-16 md:mb-0 profile-blob md:-mr-16">
        <img src="$lib/assets/img/profile-blob.png" alt="A headshot photograph of me">
    </div>
    <div class="card-wrapper">
        <Card class="elevation-3">
            <h2 class="title-small mb-2">
                Facts about me
            </h2>
            <p class="subtitle-small">I am <AgeCalc /> years old.</p>
            <p class="mb-8">
                {description}
            </p>
            <Button class="full-width secondary" label="Download full CV" link="Michael Jensen - CV.pdf"/>
        </Card>
    </div>
</div>


<style>
 .card-wrapper {
    max-width: 448px;
 }
 .profile-blob {
    max-width: 70vw;
 }
</style>
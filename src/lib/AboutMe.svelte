<script>
    import Card from "$lib/Card.svelte";
    import ProfileBlob from "$lib/assets/img/profile-blob.png";
    import Button from "$lib/Button.svelte";
    import AgeCalc from "$lib/AgeCalc.svelte";
</script>
<div class="container px-4">
    <div class="about-me flex flex-col justify-center items-center md:flex-row ">
        <div class="-mb-8 md:mb-0 profile-blob md:-mr-16">
            <img src={ProfileBlob} alt="">
        </div>
        <div class="card-wrapper">
            <Card class="elevation-2">
                <h2 class="title-small mb-2">
                    Facts about me
                </h2>
                <p class="subtitle-small">I am <AgeCalc /> seconds old.</p>
                <p class="mb-8">
                    Originally from Vendyssel, I now live Aalborg with my girlfriend and daughter. I enjoy hiking, building my own custom mechanical keyboards, and tinkering with various coding projects. My passion lies in UX design, where I strive to create meaningful products for users with a logical and practical approach.
                </p>
                <Button class="full-width" label="Show full CV" />
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
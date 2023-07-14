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
            <Card class="elevation-3">
                <h2 class="title-small mb-2">
                    Facts about me
                </h2>
                <p class="subtitle-small">I am <AgeCalc /> seconds old.</p>
                <p class="mb-8">
                    Proident aliqua tempor tempor occaecat cillum sint fugiat. Laboris magna sint incididunt commodo amet voluptate in in nulla dolore. Quis cillum duis veniam reprehenderit tempor ullamco sunt.Irure irure minim ipsum dolor. Veniam nostrud dolore cillum culpa. Labore nisi enim cupidatat ullamco consequat. Esse ut et ut consequat esse et non. Nostrud minim eu ullamco minim.
                </p>
                <Button class="full-width" label="Download full CV" />
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
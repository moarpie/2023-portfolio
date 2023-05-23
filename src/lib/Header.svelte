<script>
    // import Button from "./Button.svelte";
</script>

<div class="header">
    <div class="text-center mt-16">
        <div class="jumbotron">Hello.</div>
        
    </div>
    <div class="text-center title mb-4">
        <h1 class="display">I am a product designer from Aalborg, Denmark</h1>
    </div>
    <div class="text-center title mb-8">
        <h1 class="subtitle-large">I convert caffeine and user insights to pixels</h1>
    </div>
    <div class="text-center">
        <!-- <Button label="See what I do" link="#"/> -->
    </div>
</div>


<style>
    .header {
        max-width: 700px;
        margin: 0 auto;
    }
.jumbotron {
    background-color: var(--interactive-color);
    background-image: var(--primary-gradient);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
}



</style>
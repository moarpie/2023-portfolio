<script>

</script>
<div class="header container">
    <div class="text-center mt-16 md:mt-24">
        <div class="jumbotron">Hello.</div>
        
    </div>
    <div class="text-center title mb-2 md:mb-4 mx-4">
        <h1 class="display">I am a product designer from Aalborg, Denmark</h1>
    </div>
    <div class="tagline text-center title mb-8 mx-4">
        <h1 class="subtitle-large">I convert caffeine and user insights into pixels</h1>
    </div>

</div>


<style>
    .header {
        max-width: 750px;
        margin: 0 auto;
    }
    .tagline {
        color: var(--vague-color);
    }
    .jumbotron {
    background-color: var(--interactive-color);
    background-image: var(--primary-gradient);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    animation: blurIn 700ms ease-out;
    opacity: 1;
    filter: blur(0px);
}

@keyframes blurIn {
    0% {
        opacity: 0;
        filter: blur(40px);
    }
    100% {
        opacity: 1;
        filter: blur(0px); /* No blur */
    }
}


 

</style>
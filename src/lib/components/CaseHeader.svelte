<script>
    export let title;
    export let subtitle;
</script>
<div class="header container">
    <div class="text-center mt-16 md:mt-24 mb-6">
        <div class="display">{title}</div>
        
    </div>
    <div class="seperator"></div>
    <div class="text-center title mb-2 md:mb-4 mx-4">
        <h1 class="subtitle-large mt-6">{subtitle}</h1>
    </div>
    <div class="text-center">

    </div>
</div>


<style>
    .header {
        max-width: 750px;
        margin: 0 auto;
    }
    .seperator {
        width: 60%;
        height: 1px;
        margin: 0 auto;
        background-image: var(--primary-gradient);
    }
.display {
    background-color: var(--interactive-color);
    background-image: var(--primary-gradient);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    }

</style>
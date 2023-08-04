<script>
    export let anchor;
    export let title;
</script>

<div class="spacer mt-16 md:mt-24"></div>
<div id={anchor} class="anchor"></div>
<div class="section pt-10">
    <div id={anchor} class="anchor"></div>

    <h2 class="title-large mb-10 md:mb-16 text-center">
        {title}
    </h2>

    <slot></slot>
</div>

<style lang="scss">


</style>
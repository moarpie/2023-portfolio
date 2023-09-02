<script>
    import CaseHeader from "$lib/components/CaseHeader.svelte";
    import content from "$lib/data/content.json";
</script>

<CaseHeader title="Concept work for campaign site" subtitle="Showcasing design and functionality"></CaseHeader>  
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <div class="order-2 md:order-1">
        <h2 class="title-medium">
            Background
        </h2>
        <p>I worked on this project as part of my job at Inwido, where my role in the project was mainly conceptualising the interactive elements on the site and taking the initial design mockups from our art director and making responsive versions of the site. The intention was to make a site that showcases a uniquely designed door in an unique and interesting way.
        </p>
        <p>
            The site includes a video with a 3D rendering of the door that plays when the user scrolls down the page.
        </p>
        <p>
            <a href="https://outrupdoeren.dk">View the site here</a>
        </p>
    </div>
    <div class="order-1 md:order-2">
            <video data-v-2ba094de="" width="100%" autoplay="autoplay" loop="loop" muted="muted">
            <source src="src/lib/assets/img/cases/outrup/colour-slider.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>

<div class="case-section grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <div class="">
        <img src="$lib/assets/img/cases/outrup/3d.png" alt="" />
    </div>
    <div class="">
        <h2 class="title-medium">
            Visualizing for stakeholders
        </h2>
        <p>
            Early on in the project, I realised it was very difficult to explain how I wanted the scroll effect to work and that people interpreted my explanation in many different ways. I decided to solve this by making a mockup video with a generic 3D model in Blender and make a dummy website, where I actually got the video to play on scroll using some javascript code that I found online.
        </p>
        <p>
            Interestingly enough, the final site uses individual image frames instead of an actual video, since there are a lot of compatibility issues with getting video to play on scroll.
        </p>
    </div>
</div>


<style lang="scss">

</style>

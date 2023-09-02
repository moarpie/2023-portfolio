<script>
    import CaseHeader from "$lib/components/CaseHeader.svelte";
    import content from "$lib/data/content.json";
</script>

<CaseHeader title="Design system based portfolio" subtitle="Overengineered for my own amusement"></CaseHeader>  

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <div class="order-2 md:order-1">
        <h2 class="title-medium">
            But why?
        </h2>
        <p>
            What started out as a small project to learn the JS framework Svelte, turned into a complete overhaul of my portfolio from the previous version. 
        </p>
        <p>
            I used the project as an opportunity to learn more about how the pixels we create as designers get turned into usable code. Along the way I learned a lot about how for example the complexity of components quickly grows as the design requires different properties. 
        </p>

    </div>
    <div class="order-1 md:order-2">
        <img src="$lib/assets/img/cases/portfolio/typography.jpg" alt="" />
    </div>
</div>

<div class="case-section grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <div class="order-1">
        <img src="$lib/assets/img/cases/portfolio/typography.jpg" alt="" />
    </div>
    <div class="order-2">
        <h2 class="title-medium">
            Responsive typography
        </h2>
        <p>Using Figma and the Token Studio plugin, I implemented responsive typography with design tokens, ensuring a consistent and visually appealing user experience on all devices.
        </p>

    </div>

</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <div class="order-2 md:order-1">
        <h2 class="title-medium">
            Responsive typography
        </h2>
        <p>
            Sit mollit commodo occaecat incididunt excepteur commodo eiusmod anim esse. Id laboris quis incididunt veniam mollit officia reprehenderit qui enim laboris officia ut anim id Lorem. Ipsum magna officia sint sit dolor pariatur tempor aliquip enim est aliqua. Ipsum tempor tempor sunt dolor ex. Tempor ipsum pariatur deserunt. Consequat anim sunt mollit et amet Lorem cupidatat excepteur eu ea nostrud deserunt excepteur non elit.

Nostrud mollit id ullamco minim sunt irure. Fugiat incididunt eiusmod labore labore tempor quis ex consequat sit duis. Pariatur velit tempor et commodo. Reprehenderit incididunt laborum nisi et commodo fugiat quis. Reprehenderit aliquip pariatur aliquip excepteur deserunt pariatur occaecat. Dolor do id enim voluptate velit ea culpa.
        </p>


    </div>
    <div class="order-1 md:order-2">
        <p><span class="display">I am a display title</span></p>
        <p><span class="title-large">I am a large title</span></p>
        
        
    </div>
</div>

<div class="case-section grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <div class="">
        <img src="$lib/assets/img/cases/skanva/skanva2.png" alt="" />
    </div>
    <div class="">
        <img src="$lib/assets/img/cases/skanva/skanva4.png" alt="" />
    </div>
</div>

<div class="case-section grid grid-cols-1 gap-8 mt-8">
    <h2 class="title-medium">
        Guerilla user research
    </h2>
    <p>Occasionally you can get creative with how you gather user data. For example when we were redesigning the contact page for the site, I realised that we could take form entries from the existing site and sort all the questions and inquiries that the users had into categories and then use those insights to figure out how the page should be structured and use that as a basis for the wireframing process.
    </p>
    <img src="$lib/assets/img/cases/skanva/skanva5.jpg" alt="" />
</div>

<style lang="scss">

</style>

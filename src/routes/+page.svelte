<script>
	import Header from "$lib/components/Header.svelte";
	import Section from "$lib/utility/Section.svelte";
	import Button from "$lib/components/Button.svelte";
	import Card from "$lib/components/Card.svelte";
	import AboutMe from "$lib/templates/AboutMe.svelte";
	import Case from "$lib/templates/Case.svelte";
	import Skills from "$lib/templates/Skills.svelte";
	import content from "$lib/data/content.json";
	import { dataset_dev } from "svelte/internal";
</script>

<svelte:head>
    <title>Michael Jensen's portfolio</title>
    <meta name="description" content="Description of your webpage">
</svelte:head>


<Header />

<div class="container">
	<Section title="About me" anchor="about">  
        <AboutMe description={content.aboutMe}/>
    </Section>

    <Section title="My Work" anchor="work">  
        <Case cases={content.cases} />
    </Section>

    <Section title="My skills" anchor="skills">  
        <Skills skills={content.skills}/>
    </Section>
</div>

<style>

</style>
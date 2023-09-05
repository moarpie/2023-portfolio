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
    import MetaHead from "$lib/utility/MetaHead.svelte";
</script>

<MetaHead title = "👋"></MetaHead>

<Header />

<div class="container">
	<Section title="Who am I?" anchor="about">  
        <AboutMe description={content.aboutMe}/>
    </Section>

    <Section title="Selected works" anchor="work">  
        <Case cases={content.cases} />
    </Section>

    <Section title="Notable skills" anchor="skills">  
        <Skills skills={content.skills}/>
    </Section>
</div>

<style>

</style>
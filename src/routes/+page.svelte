<script>
	import Header from "$lib/components/Header.svelte";
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
	
	<div class="section">
        <div id="about"></div>
		<AboutMe description={content.aboutMe}/>
	</div>
	<div id="work"></div>
	<div class="section">
		<div class="section-title"><h2 class="display">My work</h2></div>
		<div>
			<Case cases={content.cases} />
		</div>
	</div>
	<div class="section">
		<div class="section-title"><h2 class="display">My skills</h2></div>
		<div>
			<Skills skills={content.skills}/>
		</div>
	</div>
</div>

<style>
  .section-title {
    text-align: center;
    margin-bottom: 2rem;
  }
</style>
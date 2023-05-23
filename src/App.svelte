<script>
	import Button from './lib/Button.svelte'
	import Header from './lib/Header.svelte'

	import { onMount } from 'svelte';

	let isDarkMode = false; // Initial theme state
	let linkTag; // Reference to the <link> tag

	// Function to toggle the theme
	function toggleTheme() {
		isDarkMode = !isDarkMode;
		document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

		// Update the href attribute of the <link> tag
		const cssFilePath = isDarkMode ? 'css/_dark-variables.css' : 'css/_light-variables.css';
		linkTag.href = cssFilePath;
	}

	// Load the initial theme CSS on component mount
	onMount(() => {
		const cssFilePath = isDarkMode ? 'css/_dark-variables.css' : 'css/_light-variables.css';

		// Create the <link> tag
		linkTag = document.createElement('link');
		linkTag.rel = 'stylesheet';
		linkTag.href = cssFilePath;

		// Append the <link> tag to the document head
		document.head.appendChild(linkTag);
	});
</script>
<button class="toggle-button" on:click={toggleTheme}>
	Toggle Theme
  </button>

<Header/>
<div class="container mx-auto">

	<h1 class="mb-2">This is a large title</h1>
	<h2 class="mb-2">This is a medium title</h2>
	<h3 class="mb-2">This is a small title</h3>
	<p class="mb-2">This is some body text</p>
	<p class="mb-2 emphasis">This is EMPHASISED!</p>
	<Button class="full-width mb-2" link="#" label="toggle mode"/>

</div>

<style global>

@import "css/vars/_variables.css";
/*MacOS font rendering hack*/
body {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility;
	background-color: var(--canvas-color);
	color: var(--default-color);
}
.jumbotron {
	font-family: var(--typo-jumbotron-font-family);
	font-weight: var(--typo-jumbotron-font-weight);
	font-size: var(--typo-jumbotron-font-size);
}

</style>
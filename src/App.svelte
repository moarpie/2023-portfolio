<script>
	import Button from './lib/Button.svelte'
	import Header from './lib/Header.svelte'
    import ModeToggleButton from './lib/ModeToggleButton.svelte';

	// Function to detect system preference for light or dark mode
	function detectColorScheme() {
		let theme = "light"; // default to light

		// Check if system preference is set to dark mode
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			theme = "dark";
		}

		return theme;
	}

	// Get the saved theme from local storage, or default to system preference
	let savedTheme = localStorage.getItem("theme");
	if (!savedTheme) {
		savedTheme = detectColorScheme();
	}

	// Set the initial theme
	document.documentElement.setAttribute("data-theme", savedTheme);



	
</script>
<ModeToggleButton />
<Header/>
<div class="container mx-auto">

	<h1 class="mb-2">This is a large title</h1>
	<h2 class="mb-2">This is a medium title</h2>
	<h3 class="mb-2">This is a small title</h3>
	<p class="mb-2">This is some body text</p>
	<p class="mb-2 emphasis">This is EMPHASISED!</p>
	<Button class="full-width mb-2" link="#" label="toggle mode"/>

</div>

<style global lang="scss">
	@import "css/_global.scss";

</style>
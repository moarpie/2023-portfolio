<script>
	import Button from './lib/Button.svelte'
	import Header from './lib/Header.svelte'

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

	// Function to toggle the theme
	function toggleTheme() {
		let currentTheme = document.documentElement.getAttribute("data-theme");
		let newTheme = "";

		if (currentTheme === "light") {
			newTheme = "dark";
		} else {
			newTheme = "light";
		}

		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
	}

	
</script>

<div class="container mx-auto">

	<h1 class="mb-2">This is a large title</h1>
	<h2 class="mb-2">This is a medium title</h2>
	<h3 class="mb-2">This is a small title</h3>
	<p class="mb-2">This is some body text</p>
	<Button on:click={toggleTheme} class="full-width mb-2" link="#" label="toggle mode"/>

</div>



<style lang="scss">

</style>
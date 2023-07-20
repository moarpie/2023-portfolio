<script>
    import Header from "$lib/Header.svelte";
    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import AboutMe from "$lib/AboutMe.svelte";
    import Case from "$lib/Case.svelte";
    import Skills from "$lib/Skills.svelte";
    import content from "$lib/data/content.json";

    import { onMount } from 'svelte';
    import { isDarkMode } from '$lib/stores/store.js';
    import { dataset_dev } from "svelte/internal";


    let linkTag; // Reference to the <link> tag

    // Function to update the theme based on the store value
    function updateTheme() {
        document.documentElement.setAttribute('data-theme', $isDarkMode ? 'dark' : 'light');

        // Update the href attribute of the <link> tag
        const cssFilePath = $isDarkMode ? '/css/dark-variables.css' : '/css/light-variables.css';
        linkTag.href = cssFilePath;

        // Save the selected mode preference to localStorage
        localStorage.setItem('isDarkMode', JSON.stringify($isDarkMode));
    }

    // Function to toggle the theme
    function toggleTheme() {
        isDarkMode.update(value => !value);
    }

    // Load the initial theme CSS on component mount
    onMount(() => {
        // Retrieve the mode preference from localStorage
        const savedMode = localStorage.getItem('isDarkMode');
        if (savedMode !== null) {
            isDarkMode.set(JSON.parse(savedMode));
        } else {
            // Check user's system preference for dark or light mode
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                isDarkMode.set(true);
            } else {
                isDarkMode.set(false);
            }
        }

        // Create the <link> tag
        const cssFilePath = $isDarkMode ? '/css/dark-variables.css' : '/css/light-variables.css';
        linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.href = cssFilePath;

        // Append the <link> tag to the document head
        document.head.appendChild(linkTag);

        // Apply the user preference
        updateTheme();

        // Subscribe to the changes in the isDarkMode store
        const unsubscribe = isDarkMode.subscribe(() => {
            updateTheme();
        });

        // Clean up the subscription on component unmount
        return () => {
            unsubscribe();
        };
    });
</script>

<Header />

<div class="container">
  <div id="about"></div>
  <div class="section">
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
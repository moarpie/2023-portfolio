<script>
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import { isDarkMode } from '$lib/stores/store.js';
    import { onMount } from 'svelte';

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
        } 
        else {
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

<div class="gradient-container-top"></div>

<Nav />

<slot />

<Footer />

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "../css/reset.css";
@import "/css/variables.css";
:global {
    .gradient-container-top {
        position: absolute;
        z-index: -1;
        height: 100vh;
        width: 100vw;
        background: radial-gradient(
            circle clamp(30vw, 40vw, 50vw) /*circle size*/
            at clamp(30vw, 40vw, 50vw) /*x position*/
            clamp(-10vw, -50vw, -100vw), /*y position*/
            var(--top-gradient1-color) 0%,
            var(--top-gradient-end-color) 100%
        ),
            radial-gradient(
            circle clamp(30vw, 40vw, 50vw) /*circle size*/
            at clamp(70vw, 60vw, 50vw) /*x position*/
            clamp(-10vw, -50vw, -80vw), /*y position*/
            var(--top-gradient2-color) 0%,
            var(--top-gradient-end-color) 100%
        ) no-repeat;
    }

    body {
    /*MacOS font rendering hack*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    color: var(--default-color);
    background-color: var(--canvas-color);
    transition: background-color 300ms ease-in, color 400ms ease-out;
    }
    a {
        transition: color 100ms ease-in, color 100ms ease-out;
        color: var(--interactive-color);
        &:hover {
            color: var(--interactive-color-hover);
        }
        font-family: var(--typo-interactive-font-family);
        font-size: var(--typo-interactive-font-size);
        line-height: var(--typo-interactive-line-height);
        font-weight: var(--typo-interactive-font-weight);
        text-decoration: var(--typo-interactive-text-decoration);
    }
    .vague {
        color: var(--vague-color);
    }


    .jumbotron {
    font-family: var(--typo-jumbotron-font-family);
    font-weight: var(--typo-jumbotron-font-weight);
    /* font-size: calc(var(--typo-jumbotron-font-size) * 0.9); */
    font-size: clamp(2rem, 3rem + 15vw, var(--typo-jumbotron-font-size));
    line-height: var(--typo-jumbotron-line-height);
    }


    .display {
    font-family: var(--typo-display-font-family);
    font-weight: var(--typo-display-font-weight);
    font-size: clamp(3rem, 3rem + 0vw, var(--typo-display-font-size));
    /* font-size: var(--typo-display-font-size); */
    line-height: var(--typo-display-line-height);
    }

    .title-large,
    .title-medium,
    .title-small {
    font-family: var(--title-font-family);
    font-weight: var(--title-font-weight);
    }

    .title-large {
    font-size: var(--typo-title-large-font-size);
    line-height: var(--typo-title-large-line-height);
    }

    .title-medium {
    font-size: var(--typo-title-medium-font-size);
    line-height: var(--typo-title-medium-line-height);
    }

    .title-small {
    font-size: var(--typo-title-small-font-size);
    line-height: var(--typo-title-small-line-height);
    }

    .subtitle-large,
    .subtitle-small {
    font-family: var(--subtitle-font-family);
    font-weight: var(--subtitle-font-weight);
    }

    .subtitle-large {
    font-size: var(--typo-subtitle-large-font-size);
    line-height: var(--typo-subtitle-large-line-height);
    }

    .subtitle-small {
    font-size: var(--typo-subtitle-small-font-size);
    line-height: var(--typo-subtitle-small-line-height);
    }

    p {
    font-family: var(--body-font-family);
    font-weight: var(--body-font-weight);
    font-size: var(--typo-body-medium-bold-font-size);
    line-height: var(--typo-body-medium-bold-line-height);
    margin-bottom: 0.75rem;
    }
}

</style>
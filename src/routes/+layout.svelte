<script>
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Section from "$lib/utility/Section.svelte";
    import { isDarkMode } from '$lib/stores/store.js';
    import { onMount } from 'svelte';

    let linkTag;

    // Update the theme based on the store value
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

<Section title="Get in touch" anchor="contact">
    <Footer />
</Section>




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

    /*Responsive typography styling*/

    /*Jumbotron*/
    .jumbotron {
        font-family: var(--typo-sm-sm-jumbotron-font-family);
        font-weight: var(--typo-sm-jumbotron-font-weight);
        font-size: var(--typo-sm-jumbotron-font-size);
        line-height: var(--typo-sm-jumbotron-line-height);
    }
    
    @media all and (min-width: 768px) {
        .jumbotron {
            font-family: var(--typo-md-jumbotron-font-family);
            font-weight: var(--typo-md-jumbotron-font-weight);
            font-size: var(--typo-md-jumbotron-font-size);
            line-height: var(--typo-md-jumbotron-line-height);
        }
    }
    @media all and (min-width: 1024px) {
        .jumbotron {
            font-family: var(--typo-lg-jumbotron-font-family);
            font-weight: var(--typo-lg-jumbotron-font-weight);
            font-size: var(--typo-lg-jumbotron-font-size);
            line-height: var(--typo-lg-jumbotron-line-height);
        }
    }

    /*Display*/
    .display {
            font-family: var(--typo-sm-sm-display-font-family);
            font-weight: var(--typo-sm-display-font-weight);
            font-size: var(--typo-sm-display-font-size);
            line-height: var(--typo-sm-display-line-height);
        }
        
        @media all and (min-width: 768px) {
            .display {
                font-family: var(--typo-md-display-font-family);
                font-weight: var(--typo-md-display-font-weight);
                font-size: var(--typo-md-display-font-size);
                line-height: var(--typo-md-display-line-height);
            }
        }
        @media all and (min-width: 1024px) {
            .display {
                font-family: var(--typo-lg-display-font-family);
                font-weight: var(--typo-lg-display-font-weight);
                font-size: var(--typo-lg-display-font-size);
                line-height: var(--typo-lg-display-line-height);
            }
        }
        

    /*title-large*/
    .title-large {
            font-family: var(--typo-sm-sm-title-large-font-family);
            font-weight: var(--typo-sm-title-large-font-weight);
            font-size: var(--typo-sm-title-large-font-size);
            line-height: var(--typo-sm-title-large-line-height);
        }
        
        @media all and (min-width: 768px) {
            .title-large {
                font-family: var(--typo-md-title-large-font-family);
                font-weight: var(--typo-md-title-large-font-weight);
                font-size: var(--typo-md-title-large-font-size);
                line-height: var(--typo-md-title-large-line-height);
            }
        }
        @media all and (min-width: 1024px) {
            .title-large {
                font-family: var(--typo-lg-title-large-font-family);
                font-weight: var(--typo-lg-title-large-font-weight);
                font-size: var(--typo-lg-title-large-font-size);
                line-height: var(--typo-lg-title-large-line-height);
            }
        }

    /*title-medium*/
    .title-medium {
            font-family: var(--typo-sm-sm-title-medium-font-family);
            font-weight: var(--typo-sm-title-medium-font-weight);
            font-size: var(--typo-sm-title-medium-font-size);
            line-height: var(--typo-sm-title-medium-line-height);
        }
        
        @media all and (min-width: 768px) {
            .title-medium {
                font-family: var(--typo-md-title-medium-font-family);
                font-weight: var(--typo-md-title-medium-font-weight);
                font-size: var(--typo-md-title-medium-font-size);
                line-height: var(--typo-md-title-medium-line-height);
            }
        }
        @media all and (min-width: 1024px) {
            .title-medium {
                font-family: var(--typo-lg-title-medium-font-family);
                font-weight: var(--typo-lg-title-medium-font-weight);
                font-size: var(--typo-lg-title-medium-font-size);
                line-height: var(--typo-lg-title-medium-line-height);
            }
        }

    /*title-small*/
    .title-small {
            font-family: var(--typo-sm-sm-title-small-font-family);
            font-weight: var(--typo-sm-title-small-font-weight);
            font-size: var(--typo-sm-title-small-font-size);
            line-height: var(--typo-sm-title-small-line-height);
        }
        
        @media all and (min-width: 768px) {
            .title-small {
                font-family: var(--typo-md-title-small-font-family);
                font-weight: var(--typo-md-title-small-font-weight);
                font-size: var(--typo-md-title-small-font-size);
                line-height: var(--typo-md-title-small-line-height);
            }
        }
        @media all and (min-width: 1024px) {
            .title-small {
                font-family: var(--typo-lg-title-small-font-family);
                font-weight: var(--typo-lg-title-small-font-weight);
                font-size: var(--typo-lg-title-small-font-size);
                line-height: var(--typo-lg-title-small-line-height);
            }
        }

    /*subtitle-large*/
    .subtitle-large {
            font-family: var(--typo-sm-sm-subtitle-large-font-family);
            font-weight: var(--typo-sm-subtitle-large-font-weight);
            font-size: var(--typo-sm-subtitle-large-font-size);
            line-height: var(--typo-sm-subtitle-large-line-height);
        }
        
        @media all and (min-width: 768px) {
            .subtitle-large {
                font-family: var(--typo-md-subtitle-large-font-family);
                font-weight: var(--typo-md-subtitle-large-font-weight);
                font-size: var(--typo-md-subtitle-large-font-size);
                line-height: var(--typo-md-subtitle-large-line-height);
            }
        }
        @media all and (min-width: 1024px) {
            .subtitle-large {
                font-family: var(--typo-lg-subtitle-large-font-family);
                font-weight: var(--typo-lg-subtitle-large-font-weight);
                font-size: var(--typo-lg-subtitle-large-font-size);
                line-height: var(--typo-lg-subtitle-large-line-height);
            }
        }

    /*subtitle-small*/
    .subtitle-small {
            font-family: var(--typo-sm-sm-subtitle-small-font-family);
            font-weight: var(--typo-sm-subtitle-small-font-weight);
            font-size: var(--typo-sm-subtitle-small-font-size);
            line-height: var(--typo-sm-subtitle-small-line-height);
        }
        
        @media all and (min-width: 768px) {
            .subtitle-small {
                font-family: var(--typo-md-subtitle-small-font-family);
                font-weight: var(--typo-md-subtitle-small-font-weight);
                font-size: var(--typo-md-subtitle-small-font-size);
                line-height: var(--typo-md-subtitle-small-line-height);
            }
        }
        @media all and (min-width: 1024px) {
            .subtitle-small {
                font-family: var(--typo-lg-subtitle-small-font-family);
                font-weight: var(--typo-lg-subtitle-small-font-weight);
                font-size: var(--typo-lg-subtitle-small-font-size);
                line-height: var(--typo-lg-subtitle-small-line-height);
            }
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
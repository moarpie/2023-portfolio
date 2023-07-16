<script>
	
    import Nav from "$lib/Nav.svelte";

</script>

<div class="gradient-container"></div>
<Nav />

<slot />

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "../css/reset.css";
@import "/css/variables.css";
:global {
    .gradient-container {
        position: absolute;
        z-index: -1;
        height: 100vh;
        width: 100vw;
        background: radial-gradient(
            circle clamp(20vw, 40vw, 50vw) /*circle size*/
            at clamp(30vw, 40vw, 50vw) /*x position*/
            clamp(-10vw, -20vw, -30vw), /*y position*/
            var(--top-gradient1-color) 0%,
            var(--top-gradient-end-color) 100%
        ),
            radial-gradient(
            circle clamp(20vw, 40vw, 50vw) /*circle size*/
            at clamp(70vw, 60vw, 50vw) /*x position*/
            clamp(-10vw, -20vw, -30vw), /*y position*/
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
    .section {
        margin-top: 4rem;
    }
    @media (min-width: 1024px) {
        .section {
            margin-top: 8rem;
        }
     }
     .section-title {
        margin-bottom: 2rem;
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
    font-size: clamp(1rem, 1.2rem + 2.5vw, var(--typo-display-font-size));
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
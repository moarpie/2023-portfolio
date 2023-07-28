<script>
    import LightIcon from "$lib/assets/icons/light-mode.svg";
    import DarkIcon from "$lib/assets/icons/dark-mode.svg";
    import { isDarkMode } from '$lib/stores/store.js';
    import { onMount } from 'svelte';
  
    let darkMode = false;
  
    // Subscribe to the store and update the local 'darkMode' variable
    const unsubscribe = isDarkMode.subscribe(value => {
      darkMode = value;
    });
  
    // Unsubscribe from the store to avoid memory leaks when the component is destroyed
    onMount(() => {
      return () => {
        unsubscribe();
      };
    });
  
    // Function to handle the checkbox click event
    function toggleDarkMode() {
      isDarkMode.update(value => !value);
    }
  </script>
  
<div class="switch-container">
    <!-- Bind the 'checked' attribute of the input to the 'darkMode' variable -->
    <input type="checkbox" id="switch" bind:checked={darkMode} on:click={toggleDarkMode} aria-label="Toggle dark mode">
    <label for="switch" aria-hidden="true">
        <img class="dark" src="{LightIcon}" alt="">
        <img class="light" src="{DarkIcon}" alt="">
        <span class="ball" aria-hidden="true"></span>
    </label>
</div>

  

<style lang="scss">


    img {
        width: 24px;
        height: 24px;
    }
    label {
        display: flex;
        width: 72px;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        background: var(--modeswitcher-bg-light);
        border-radius: 50px;
        cursor: pointer;
        position: relative;
    }

    label .light {
        transition: 0.4s;
        transform: rotate(0deg);
    }
    label .dark {
        transition: 0.4s;
    }
    label .ball {
        display: none;
    }
    input:checked + label .dark {
        transform: translateX(0px) rotate(180deg);
    }
    input:checked + label .light {
        transform: translateX(-42px) rotate(180deg);
    }
    input:checked + label .ball {
        transform: translateX(32px);
    }
    label .dark {
        transform: translateX(42px);
    }
    label .light {
        opacity: 1;
    }
    input:checked + label .light {
        opacity: 0;
    }
    label .dark {
        opacity: 0;
    }
    input:checked + label .dark {
        opacity: 1;
    }
    label .ball {
        position: absolute;
        display: block;
        width: 24px;
        height: 24px;
        top: 8px;
        left: 8px;
        background: var(--modeswitcher-ball);
        opacity: 1;
        border-radius: 50%;
        transition: 0.4s;
    }
    label {
        transition: 0.4s;
    }
    input:checked + label {
        background: var(--modeswitcher-bg-dark)
    }
    input {
        display: none;
    }
</style>
<script>
    	// Function to toggle the theme
	function toggleTheme() {
		let currentTheme = document.documentElement.getAttribute("data-theme");
		let newTheme = "";

        currentTheme === "light" ? newTheme = 'dark' : newTheme =  'light'

		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
	}

    export let label;

    
</script>

<a class="button {$$props.class}" on:click={toggleTheme}>{label}</a>
<div class="test">
    tester
</div>

<style lang="scss">
    
    @import "../css/_global.scss";

    /*strips all standard link styling*/
    a {
        all: unset;
        display: inline-flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        cursor: pointer;

    }
    .test {
        
        color: $interactive-color;
    }

    // .button {
    //     text-align: center;
    //     transition: background-color 300ms;
    //     background: none;
    //     color: $interactive-color;
    //     border: 1px solid $interactive-color;;
    //     height: $button-height;
    //     padding-left: $button-padding-x;
    //     padding-right: $button-padding-x;
    //     border-radius: $button-border-radius;
    //     font-family: $button-label-font-family;
    //     font-size: $button-label-font-size;
    //     font-weight: $button-label-font-weight;
    //     line-height: $button-label-line-height;
    //     letter-spacing: $button-label-letter-spacing;
        
    //     &:hover {
    //         background: $button-background-color-hover;
    //     }
    //     &:active {
    //         background: $button-background-color-active;
    //     }
    //     &:focus {
    //         background: $button-background-color-focus;
    //     }
    // }
    // .full-width {
    //         width: 100%;
    //     }

</style>
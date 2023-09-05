<script>
    import { onMount, onDestroy } from 'svelte';

    let birthdate = '1988-11-09';
    let age = 0;
    let formattedAge = '';
    let intervalId;

    function calculateAgeInYears() {
      // Convert the birthdate to a JavaScript Date object
      const birthDateObj = new Date(birthdate);

      // Get the current date and time
      const currentDateObj = new Date();

      // Calculate the difference in milliseconds between the two dates
      const millisecondsDiff = currentDateObj - birthDateObj;

      // Convert the milliseconds difference to years
      const yearsDiff = millisecondsDiff / (1000 * 60 * 60 * 24 * 365.25); // Taking leap years into account

      // Update the age variable
      age = yearsDiff;

      // Format the age with two decimal places
      formattedAge = age.toFixed(2); // Adjust the number of decimal places as needed
    }

    onMount(() => {
      calculateAgeInYears();

      // Update the age periodically (e.g., every day) since years don't change every second
      intervalId = setInterval(calculateAgeInYears, 86400000); // 86400000 milliseconds in a day
    });

    onDestroy(() => {
      // Clear the interval when the component is destroyed
      clearInterval(intervalId);
    });
</script>

{#if age > 0}
    {formattedAge}
{/if}

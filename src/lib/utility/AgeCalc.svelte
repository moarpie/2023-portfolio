<script>
    import { onMount, onDestroy } from 'svelte';
  
    let birthdate = '1988-11-09';
    let age = 0;
    let formattedAge = '';
    let intervalId;
  
    function calculateAgeInSeconds() {
      // Convert the birthdate to a JavaScript Date object
      const birthDateObj = new Date(birthdate);
  
      // Get the current date and time
      const currentDateObj = new Date();
  
      // Calculate the difference in milliseconds between the two dates
      const millisecondsDiff = currentDateObj - birthDateObj;
  
      // Convert the milliseconds difference to seconds
      const secondsDiff = Math.floor(millisecondsDiff / 1000);
  
      // Update the age variable
      age = secondsDiff;
  
      // Format the age with a period as thousand separator
      //Use this to force period separator: .replace(/,/g, '.')
      formattedAge = age.toLocaleString();
    }
  
    onMount(() => {
      calculateAgeInSeconds();
  
      // Update the age every second
      intervalId = setInterval(calculateAgeInSeconds, 1000);
    });
  
    onDestroy(() => {
      // Clear the interval when the component is destroyed
      clearInterval(intervalId);
    });
  </script>
  
    {#if age > 0}
      {formattedAge}
    {/if}

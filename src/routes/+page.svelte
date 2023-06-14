<script>
    import Header from "$lib/Header.svelte";
    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import AboutMe from "$lib/AboutMe.svelte";
    import Case from "$lib/Case.svelte";
    let myPortfolioCases = [
    {
      image: 'http://placekitten.com/600/200',
      title: 'Portfolio Case 1',
      description: 'This is the description for portfolio case 1.',
      link: 'https://example.com/portfolio-case-1'
    },
    {
      image: 'http://placekitten.com/200/600',
      title: 'Portfolio Case 2',
      description: 'This is the description for portfolio case 2.',
      link: 'https://example.com/portfolio-case-2'
    }
  ];

</script>

<Header />


<p> <a href="about">about</a></p>

<div class="container">
    <div class="section">
        <AboutMe />
    </div>
    <div class="section">
        <div>
            <Case portfolioCases={myPortfolioCases} />
        </div>
    </div>
</div>


<br><br><br><br><br><br><br><br><br><br>
<Card class="elevation-1">
    <h1>Card stuff here!</h1>
</Card>

<br><br>

<br><br>
<Card class="elevation-3">
    <h1>Card stuff here!</h1>
</Card>
    <br><br>
<Card class="elevation-4">
    <h1>Card stuff here!</h1>
</Card>
<Button class="full-width" label="This is some text"/>

<style>

</style>
<script>
    import Header from "$lib/Header.svelte";
    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import AboutMe from "$lib/AboutMe.svelte";

</script>

<h1>Home</h1>

<Header />
<p> <a href="about">about</a></p>
<div class="container">
    <div class="section">
        <AboutMe />
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
    </div>
</div>

<Button class="full-width" label="This is some text"/>

<style>

</style>
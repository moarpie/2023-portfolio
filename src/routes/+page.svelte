<script>
    import Header from "$lib/Header.svelte";
    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import AboutMe from "$lib/AboutMe.svelte";
    import Case from "$lib/Case.svelte";
    import Skills from "$lib/Skills.svelte";
    import casesData from "$lib/data/cases.json";
    import skillsData from "$lib/data/skills.json";

</script>

<Header />


<p> <a href="about">about</a></p>

<div class="container">
  <div id="about"></div>
  <div class="section">
    <AboutMe />
  </div>
  <div id="work"></div>
  <div class="section">
    <div class="section-title"><h2 class="display">My work</h2></div>
    <div>
      <Case cases={casesData} />
    </div>
  </div>
  <div class="section">
    <div class="section-title"><h2 class="display">My skills</h2></div>
    <div>
      <Skills skills={skillsData}/>
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
  .section-title {
    text-align: center;
    margin-bottom: 2rem;
  }
</style>
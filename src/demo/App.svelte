<style>
  main {
    font-family: Helvetica, Arial, sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 50%;
    margin: auto;

    border: 1px solid lightgray;

    position: relative;
  }

  section .label {
    position: absolute;
    left: 100%;
    white-space: nowrap;
    top: 0;
    border: 1px solid lightgray;
    padding: 4px 10px;
  }

  button {
    margin: auto;
    font-size: 24px;
    padding: 4px 10px;
    color: #fff;
    background-color: orangered;
    border: none;
    border-radius: 8px;

    margin-top: 20px;
    margin-bottom: 40px;
  }

  .resized-text {
    position: fixed;
    top: 50vw;

    font-size: 20vw;
    font-weight: bold;
  }
</style>

<script>
  import resize from '../main';

  import { onMount } from 'svelte';

  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  import GithubCorner from './GithubCorner.svelte';
  import JazzCat from './JazzCat.svelte';

  let cats = [{}];
  let showResize = false;
  let size = '';

  let sectionElement;

  onMount(() => {
    size = `${sectionElement.offsetWidth}px x ${sectionElement.offsetHeight}px`;
  });

  function handleButtonClick() {
    cats = [...cats, {}];
  }

  function handleSectionResize() {
    showResize = true;

    size = `${sectionElement.offsetWidth}px x ${sectionElement.offsetHeight}px`;

    setTimeout(() => showResize = false, 200);
  }
</script>

<main>
  <GithubCorner url="https://github.com/Gennnji/svelte-actions-resize" />
  <h1>Svelte Actions Resize. Demo</h1>
  <button on:click={handleButtonClick}>More cats!</button>
  <section
    use:resize
    on:resize={handleSectionResize}
    bind:this={sectionElement}
  >
    <div class="label">{size}</div>
    {#each cats as cat}
      <JazzCat />
    {/each}
  </section>
  {#if showResize}
    <div class="resized-text" transition:scale>RESIZED</div>
  {/if}
</main>

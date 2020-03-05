# svelte-actions-resize

ResizeObserver action plugin for [Svelte 3](https://svelte.dev).

## Installation

Install with npm or yarn:
```bash
npm install svelte-actions-resize
```
OR
```bash
yarn add svelte-actions-resize
```

## Usage

```html
<style>
  section {
    border: 10px solid lightgray;
  }

  section > div {
    border: 2px solid red;
    width: 8px;
    height: 8px;
    background-color: green;
  }
</style>

<script>
  import resize from 'svelte-actions-resize';

  let elements = [{}];

  function handleResize() {
    alert('Resize done!');
  }
</script>

<button on:click={() => elements = [...elements, {}]}>Resize</button>
<section use:resize on:resize={handleResize}>
  {#each elements as element}
    <div></div>
  {/each}
</section>

```

## Options

| Name | Type | Description |
| --- | --- | --- |
| `on:resize` | `Function` | Callback to handle resize |

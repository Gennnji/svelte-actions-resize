# svelte-actions-resize

ResizeObserver action plugin for [Svelte 3](https://svelte.dev).
Based on ponyfill @juggle/resize-observer.

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

[DEMO](https://svelte.dev/repl/1a489d85e1fd4609ad86fc51d3b81d69?version=3)

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

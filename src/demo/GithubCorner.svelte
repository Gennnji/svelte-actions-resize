<script>
  import Octocat from './Octocat.svelte';
  export let url = '';
</script>

<a href={url} class="github-corner" aria-label="View source on GitHub">
  <Octocat />
</a>

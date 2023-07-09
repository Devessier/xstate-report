<script lang="ts">
  import { setContext } from "svelte";

  export let chapter: string;

  setContext("chapter", chapter);
  setContext("pageInChapter", { current: 0 });
</script>

<slot />

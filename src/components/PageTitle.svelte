<script lang="ts">
  import { getContext } from "svelte";

  const chapter = getContext("chapter");
</script>

<h1 class="mt-12 text-left">
  {chapter}
</h1>

<script lang="ts">
  import { getContext } from "svelte";

  export let id: string | undefined;

  const pageIndefRef = getContext("page") as { current: number } | undefined;
  const pageIndex = pageIndefRef === undefined ? 1 : pageIndefRef.current++;
  const chapter = getContext("chapter");

  const pageInChapterRef = getContext("pageInChapter") as
    | { current: number }
    | undefined;
  const pageInChapter =
    pageInChapterRef === undefined ? 0 : pageInChapterRef.current++;
</script>

<section {id} class="page relative">
  <div class="subpage prose text-justify">
    {#if pageInChapter > 0 && chapter !== undefined}
      <header
        class="border-b border-gray-200 flex justify-between not-prose pb-2 text-sm text-zinc-600"
      >
        <p>{pageIndex}</p>

        <p>{chapter}</p>
      </header>
    {/if}

    <slot />
  </div>
</section>

<style>
  /* See https://stackoverflow.com/a/16650459 */
  .page {
    width: 210mm;
    min-height: 297mm;
    padding: 20mm;
    margin: 10mm auto;
    border: 1px #d3d3d3 solid;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .subpage {
    /* padding: 1cm; */
    /* border: 5px red solid; */
    height: 257mm;
    /* outline: 2cm #FFEAEA solid; */
  }

  @media print {
    .page {
      margin: 0;
      border: initial;
      border-radius: initial;
      width: initial;
      min-height: initial;
      box-shadow: initial;
      background: initial;
      page-break-after: always;
    }
  }
</style>

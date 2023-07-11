<script>
  import Chapter from "../Chapter.svelte";
  import Page from "../Page.svelte";
  import PageTitle from "../PageTitle.svelte";

  import { compiledContent as Part0 } from "./Splitting Machines/0.md";
  import { compiledContent as Part1 } from "./Splitting Machines/1.md";
  import { compiledContent as Part2 } from "./Splitting Machines/2.md";
  import { compiledContent as Part3 } from "./Splitting Machines/3.md";
  import { compiledContent as Part4 } from "./Splitting Machines/4.md";
</script>

<Chapter chapter="Splitting machines">
  <Page id="splitting-machines-chapter">
    <PageTitle />

    {@html Part0()}
  </Page>

  <Page>
    {@html Part1()}
  </Page>

  <Page>
    {@html Part2()}
  </Page>

  <Page>
    {@html Part3()}
  </Page>

  <Page>
    {@html Part4()}
  </Page>
</Chapter>

<script>
  import Chapter from "../Chapter.svelte";
  import Page from "../Page.svelte";
  import PageTitle from "../PageTitle.svelte";

  import { compiledContent as Part0 } from "./Testing/0.md";
  import { compiledContent as Part1 } from "./Testing/1.md";
  import { compiledContent as Part2 } from "./Testing/2.md";
  import { compiledContent as Part3 } from "./Testing/3.md";
  import { compiledContent as Part4 } from "./Testing/4.md";
</script>

<Chapter chapter="Testing and XState">
  <Page id="testing-chapter">
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

<script>
  import Chapter from "../Chapter.svelte";
  import Page from "../Page.svelte";
  import PageTitle from "../PageTitle.svelte";

  import { compiledContent as Part0 } from "./Types/0.md";
  import { compiledContent as Part1 } from "./Types/1.md";
  import { compiledContent as Part2 } from "./Types/2.md";
  import { compiledContent as Part3 } from "./Types/3.md";
</script>

<Chapter chapter="Typing machines">
  <Page id="types-chapter">
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
</Chapter>

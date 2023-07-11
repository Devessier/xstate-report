<script>
  import Chapter from "../Chapter.svelte";
  import Page from "../Page.svelte";
  import PageTitle from "../PageTitle.svelte";

  import { compiledContent as Part0 } from "./Modeling/0.md";
  import { compiledContent as Part1 } from "./Modeling/1.md";
  import { compiledContent as Part2 } from "./Modeling/2.md";
  import { compiledContent as Part3 } from "./Modeling/3.md";
</script>

<Chapter chapter="Modeling state machines">
  <Page id="modeling-state-machines">
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

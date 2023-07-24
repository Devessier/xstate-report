<script>
  import Chapter from "../Chapter.svelte";
  import Page from "../Page.svelte";
  import PageTitle from "../PageTitle.svelte";

  import { compiledContent as Part0 } from "./Conclusion/0.md";
</script>

<Chapter chapter="Wrap up">
  <Page>
    <PageTitle />

    {@html Part0()}
  </Page>
</Chapter>

<script>
  import Chapter from "../Chapter.svelte";
  import Page from "../Page.svelte";
  import PageTitle from "../PageTitle.svelte";

  import { compiledContent as Part0 } from "./Conclusion/0.md";
  import { compiledContent as Part1 } from "./Conclusion/1.md";
</script>

<Chapter chapter="Wrap up">
  <Page id="wrap-up">
    <PageTitle />

    {@html Part0()}
  </Page>
</Chapter>

<Chapter chapter="Credits">
  <Page id="credits">
    <PageTitle />

    {@html Part1()}
  </Page>
</Chapter>

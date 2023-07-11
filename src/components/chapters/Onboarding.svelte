<script>
  import Chapter from "../Chapter.svelte";
  import Page from "../Page.svelte";
  import PageTitle from "../PageTitle.svelte";

  import { compiledContent as Part0 } from "./Onboarding/0.md";
  import { compiledContent as Part1 } from "./Onboarding/1.md";
  import { compiledContent as Part2 } from "./Onboarding/2.md";
  import { compiledContent as Part3 } from "./Onboarding/3.md";
</script>

<Chapter chapter="Onboarding new developers">
  <Page id="onboarding-new-developers-chapter">
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

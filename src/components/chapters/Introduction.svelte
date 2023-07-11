<script>
  import Chapter from "../Chapter.svelte";
  import Page from "../Page.svelte";
  import PageTitle from "../PageTitle.svelte";

  import { compiledContent as Part0 } from "./Introduction/0.md";
  import { compiledContent as Part1 } from "./Introduction/1.md";
  import { compiledContent as Part2 } from "./Introduction/2.md";
</script>

<Chapter>
  <Page>
    <div class="h-full w-full flex justify-center items-center">
      <h1>State of XState 2023</h1>
    </div>
  </Page>
</Chapter>

<Chapter chapter="Preface">
  <Page>
    <PageTitle />

    {@html Part0()}
  </Page>
</Chapter>

<Chapter chapter="Summary">
  <Page>
    <PageTitle />

    <div class="[&>h2>a]:no-underline">
      {@html Part1()}
    </div>
  </Page>

  <Page>
    <div class="[&>h2>a]:no-underline">
      {@html Part2()}
    </div>
  </Page>
</Chapter>

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
    <div class="absolute inset-0">
      <img
        src="/CleanShot 2023-07-17 at 20.04.59@2x.png"
        class="w-full h-full object-cover mt-0"
        alt=""
      />

      <div
        class="absolute inset-0 bg-white/[0.85] flex flex-col justify-center items-center"
      >
        <h1 class="text-6xl text-center mb-0">State of XState</h1>

        <h2 class="text-center mt-6 text-4xl font-bold">2023</h2>

        <h2
          class="absolute inset-x-0 bottom-0 text-center text-3xl font-semibold mb-24"
        >
          Baptiste Devessier
        </h2>
      </div>
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

    <div class="[&>h2>a]:no-underline prose-h2:font-bold">
      {@html Part1()}
    </div>
  </Page>

  <Page>
    <div class="[&>h2>a]:no-underline prose-h2:font-bold">
      {@html Part2()}
    </div>
  </Page>
</Chapter>

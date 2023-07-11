<script lang="ts">
  import Introduction from "../components/chapters/Introduction.svelte";
  import Onboarding from "../components/chapters/Onboarding.svelte";
  import BlankPage from "../components/BlankPage.svelte";
  import { setContext } from "svelte";
  import Modeling from "./chapters/Modeling.svelte";
  import Types from "./chapters/Types.svelte";
  import SplittingMachines from "./chapters/SplittingMachines.svelte";

  setContext("page", { current: 1 });
</script>

<Introduction />
<BlankPage />
<Onboarding />
<Modeling />
<Types />
<SplittingMachines />

<script lang="ts">
  import Introduction from "../components/chapters/Introduction.svelte";
  import Onboarding from "../components/chapters/Onboarding.svelte";
  import { setContext } from "svelte";
  import Modeling from "./chapters/Modeling.svelte";
  import Types from "./chapters/Types.svelte";
  import SplittingMachines from "./chapters/SplittingMachines.svelte";
  import Testing from "./chapters/Testing.svelte";
  import Conclusion from "./chapters/Conclusion.svelte";

  setContext("page", { current: 1 });
</script>

<Introduction />
<Onboarding />
<Modeling />
<Types />
<SplittingMachines />
<Testing />
<Conclusion />

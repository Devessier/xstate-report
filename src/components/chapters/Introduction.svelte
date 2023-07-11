<script>
  import Chapter from "../Chapter.svelte";
  import Page from "../Page.svelte";
  import PageTitle from "../PageTitle.svelte";
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

    <p>
      Thank you for downloading my report on the State of XState for 2023. This
      report details the most important centers of interest shared across the
      XState community, based on the responses I got to my survey and the
      interviews I conducted with the people willing to talk about their
      experience with XState.
    </p>
    <p>
      Thirty-nine people responded to my survey, which took place between 13 and
      30 May 2023. I contacted XState users before creating the survey to gather
      advice on which topics my final report should focus on. From the
      invaluable feedback received, I chose twenty questions for the survey.
      They focus on the subjects that XState developers want to learn more from
      others in the industry.
    </p>
    <p>
      I interviewed seven persons who shared their feedback about XState with
      me. This feedback allowed me to provide real examples for all the topics
      covered in the report.
    </p>
    <p>
      I want to thank everybody that took the time to answer my emails, respond
      to the survey, and get interviewed. It matters a lot to me, so thank you!
      Their help made this report accurate on the current State of XState.
    </p>
  </Page>
</Chapter>

<Chapter chapter="Summary">
  <Page>
    <PageTitle />

    <p>
      In this report, I’ll cover five topics that matter to XState developers.
    </p>

    <h2>
      <a href="#onboarding-new-developers" class="no-underline"
        >Onboarding new developers</a
      >
    </h2>

    <p>
      XState reports being hard to learn. Teams employ different methods to
      teach XState to developers new to state machines. Reading XState
      documentation, watching video courses, and giving modeling exercises are a
      few ways to teach XState.
    </p>

    <h2>
      <a href="#modeling-state-machines" class="no-underline"
        >Modeling state machines</a
      >
    </h2>

    <p>
      Modeling is known to be the most complicated part of creating state
      machines. Finding how to best solve a problem by modeling a state machine
      is a skill that takes practice. Sometimes it may also be better to stick
      to a simple solution using a more scoped tool instead of a state machine.
    </p>

    <h2><a href="#types" class="no-underline">Types</a></h2>

    <p>
      Types are crucial for building scalable software. XState supports typing
      machines. Throughout its history, XState has released different ways to
      type state machines. People are not expecting the same level of
      type-safety for their state machines, and they have their preferences
      about the method to achieve it.
    </p>
  </Page>

  <Page>
    <h2><a href="#" class="no-underline">Splitting machines</a></h2>

    <p>
      It is not rare for state machines to grow fast in size as adding more and
      more features. Splitting machines into smaller ones is a way to decouple
      independent blocks, as we do with separate functions. XStaters adopted
      several patterns to split their state machines and to be able to maintain
      complex systems of actors.
    </p>

    <h2><a href="#" class="no-underline">Testing and state machines</a></h2>

    <p>
      Testing usually leads to divergent opinions and is the same for testing
      XState machines. Some XStaters choose to unit-test their state machines.
      Others run integration or e2e tests that don’t care about implementation
      details. Model-Based Testing is also a pattern used to improve the
      reliability of software.
    </p>
  </Page>
</Chapter>

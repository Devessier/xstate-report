<script>
  import Chapter from "../Chapter.svelte";
  import Page from "../Page.svelte";
  import PageTitle from "../PageTitle.svelte";
</script>

<Chapter chapter="Onboarding new developers">
  <Page id="onboarding-new-developers">
    <PageTitle />

    <p>
      When discovering XState, most people also learn the foundational concepts
      of XState: state machines, finite states, transitions, services,
      statecharts, hierarchical states, etc.
    </p>

    <p>
      Though the XState's API is complete and brings tools to solve advanced
      issues, this is not learning the API of the library that takes the most of
      the time, it's learning how to use it efficiently to model things
      properly.
    </p>

    <p>
      Many teams worldwide are using XState to develop software, and they are
      all facing the same problem: <strong
        >how to teach XState to other developers in the team and newcomers?</strong
      >
    </p>

    <p>
      On this aspect, XState does not resemble most of the libraries, like
      React, TanStack Query, or date-fns, that solve a specific problem and are
      well-bounded: XState, on its own, does <em>nothing</em>; it’s a tool that
      allows expressing any logic declaratively and explicitly, and thus it can
      be used to do <em>anything</em>.
    </p>

    <p>
      The scope of XState is less identifiable, and it can be challenging for
      people discovering XState to see its benefits.
    </p>

    <h3>Learn with the documentation</h3>

    <p>
      83% of respondents to the survey declare to ask newcomers to read XState’s
      documentation to learn XState.
    </p>

    <p>
      It has been the official way to learn XState for a long time, and this is
      how I learned XState. I visited
      <a href="https://xstate.js.org/docs/">https://xstate.js.org/docs/</a>
      so much that my browser now forces me to go there when I type
      <em>xstate</em>.
    </p>
  </Page>

  <Page>
    <figure>
      <img
        style="width:1788px"
        src="/CleanShot_2023-06-04_at_12.47.482x.png"
        alt=""
      />
      <figcaption>
        My browser forces me to go to XState’s documentation when I type
        `xstate`.
      </figcaption>
    </figure>

    <p>
      Stately’s team is working on updating the documentation, which will now be
      live at
      <a href="https://stately.ai/docs">https://stately.ai/docs</a>. Be sure to
      follow the work they’ll be doing there, as it will be amazing! However, my
      browser will have to learn the new URL of XState’s documentation.
    </p>

    <h3>Learn with video courses</h3>

    <p>
      One new way to learn XState is through David Khourshid’s courses on
      Frontend Masters. At the time of writing, the most recent courses are
      about <a href="https://frontendmasters.com/courses/xstate-v2/"
        >State Machines in JavaScript with XState</a
      >, and
      <a href="https://frontendmasters.com/courses/xstate-react/"
        >State Modeling in React with XState</a
      >.
    </p>

    <p>
      44% of respondents declare they ask newcomers to learn XState with
      Frontend Masters’ courses and others, like
      <a
        href="https://egghead.io/courses/introduction-to-state-machines-using-xstate"
        >Kyle Shevlin’s introduction to State Machines with XState</a
      >.
    </p>

    <p>
      I watched these courses and recommend them too; they are great ways to
      have an overview of XState’s API and modeling techniques, the two
      difficulties with learning XState.
    </p>
  </Page>

  <Page>
    <h3>Learn from your company's specificities</h3>

    <p>
      Another exciting way to learn XState is to understand it based on real
      scenarios from companies’ problems.
    </p>

    <p>
      Christian Grøngaard pair-programs with newcomers to teach them how to use
      XState to solve specific issues, and so do 67% of the respondents.
    </p>

    <p>
      Richard Seaman also bets on modeling exercises based on the company’s
      business problems: newcomers have to model with XState a problem they
      already faced. 25% of the respondents use modeling exercises to teach
      XState.
    </p>

    <h3>Companies do teach XState to newcomers</h3>

    <p>
      Interestingly, no respondent said their team requires XState skills to
      join it, even if 21% of respondents said they use XState for most of their
      logic, and 15% use XState everywhere.
    </p>

    <p>
      I’m not sure we would get the same numbers if asking teams developing with
      React whether React is a required skill. This is mainly because XState
      developers are rarer than React developers, and training developers in
      XState is part of the hiring process.
    </p>

    <p>
      But I think it’s also due to XState being more versatile and used in many
      ways to solve various problems.
    </p>

    <p>
      React is mainly used to build web apps and native apps with React Native,
      though it can also be used to <a
        href="https://github.com/vadimdemedes/ink">create CLI</a
      >.
    </p>
  </Page>

  <Page>
    <p>At the same time, based on the survey results, XState is used for:</p>

    <ul>
      <li>Frontend (87%)</li>
      <li>Short-live machines on the backend (23%)</li>
      <li>Back-end workflows (23%)</li>
      <li>Hardware (3%)</li>
    </ul>

    <h3>Master XState by mixing different learning paths</h3>

    <p>
      My advice to onboard developers to XState would be to mix reading the
      documentation with watching courses and applying XState to real problems
      with your teammates.
    </p>

    <p>
      Most of the respondents combine these ways of learning. If you are
      learning XState on your side, <a href="https://discord.gg/xstate"
        >Stately’s community is here to help you on Discord</a
      >.
    </p>

    <p>
      Learning by example suits many people, and
      <a href="https://xstate-catalogue.com/">XState Catalogue</a> remains a good
      reference.
    </p>

    <p>It takes time to get good at XState, so take it slow!</p>
  </Page>
</Chapter>

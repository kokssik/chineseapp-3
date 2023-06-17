<script>
  export let nadpis;
  export let odkaz;
  export let subs;
</script>

<div class="text-column">
  <div class="font-sans leading-relaxed">
    <div class="text-2xl font-bold">
      <a
        href={odkaz}
        class="text-white bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 mr-2"
        >{nadpis}</a
      >
    </div>
    <div class="mt-3 mb-1">
      {#each subs as sub}
        <div class="leading-relaxed ml-5">- {sub}</div>
      {/each}
    </div>
  </div>
</div>

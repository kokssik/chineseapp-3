<script>
  export let character;
  export let pronunciation;
  export let meaning;
  export let strokeOrderImg;
  export let word1;
  export let word2;
  export let meaning1;
  export let meaning2;
</script>

<div
  class="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow mt-10"
>
  <div class="flex flex-row gap-10">
    <div class="flex-initial">
      <div class="border-solid border-2 rounded-md bg-teal-100 border-blue-400">
        <p class="text-7xl">{character}</p>
      </div>
    </div>
    <div class="flex-initial w-24">
      <div class="flex flex-col">
        <div class="font-bold text-xl">Výslovnost:</div>
        <div>{pronunciation}</div>
      </div>
    </div>
    <div class="flex-auto">
      <div class="flex flex-col">
        <div class="font-bold text-xl">Význam:</div>
        <div>{meaning}</div>
      </div>
    </div>
    <div class="flex-auto">
      <div class="flex flex-col">
        <div class="font-bold text-xl">Slovíčka:</div>
        <div>{word1}</div>
        <div>{meaning1}</div>
      </div>
    </div>
    <div class="flex-auto">
      <div class="flex flex-col">
        <div class="font-bold text-xl"><br /></div>
        <div>{word2}</div>
        <div>{meaning2}</div>
      </div>
    </div>
  </div>
</div>

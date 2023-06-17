<script lang="ts">
  export let character: string;
  export let pronunciation: string;
  export let meaning: string;
  export let strokeOrderImg: string;
  export let word1: string;
  export let word2: string;
  export let meaning1: string;
  export let meaning2: string;
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

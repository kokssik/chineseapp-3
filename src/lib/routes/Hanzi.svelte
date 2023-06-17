<script>
  import SQLite from "tauri-plugin-sqlite-api";
  import { onMount } from "svelte";
  import HanziCard from "../components/HanziCard.svelte";

  let rows = [];

  onMount(async () => {
    const db = await SQLite.open("./hanzi.db");

    rows = await db.select("SELECT * FROM hanzi");

    console.log(rows);
  });
</script>

<!-- Creates a <HanziCard/> element for each element in the rows array -->

<div class="flex">
  <div class="basis-2/12" />
  <div class="basis-8/12">
    {#each rows as row}
      <HanziCard
        character={row.symbol}
        pronunciation={row.pronounciation}
        meaning={row.meaning}
        word1={row.word1}
        word2={row.word2}
        meaning1={row.meaning1}
        meaning2={row.meaning2}
      />
    {/each}
  </div>
  <div class="basis-2/12" />
</div>

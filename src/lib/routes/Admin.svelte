<script>
  import SQLite from "tauri-plugin-sqlite-api";
  import { onMount } from "svelte";

  let db;
  let symbol = "";
  let pronounciation = "";
  let meaning = "";
  let word1 = "";
  let word2 = "";
  let meaning1 = "";
  let meaning2 = "";
  let id = "";
  let markdown = "";

  //Checks if the database exists:

  onMount(async () => {
    db = await SQLite.open("./hanzi.db");
    /* execute SQL */
    await db.execute(`
        CREATE TABLE hanzi (id TEXT NOT NULL PRIMARY KEY,
                             symbol TEXT,
                             pronounciation TEXT,
                             meaning TEXT,
                             image TEXT,
                             word1 TEXT,
                             word2 TEXT,
                             meaning1 TEXT,
                             meaning2 TEXT );

        INSERT INTO hanzi VALUES ('0', '我', 'Wo3', 'Já', 'static/stroke_order/1xd.png', '我们', '我的', 'My','Moje');
        INSERT INTO hanzi VALUES ('1', '是', 'Shi2', 'Být', 'static/stroke_order/1xd.png', '不是', '但是','Není','Ale');

        CREATE TABLE lekce (id TEXT NOT NULL PRIMARY KEY,
                            markdown TEXT);

        INSERT INTO lekce VALUES ('lekce69', '#nadpis1
                                              ##nadpis2
                                              text xd
                                              dddfgfgegetget');

        INSERT INTO lekce VALUES ('lekce420', '#nabdgbgd
                                              ##nadpibdbd
                                              text bgdbdgbdbd
                                              UwU');
       `);
  });

  async function submit() {
    await db.execute(
      "INSERT INTO hanzi VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)",
      [
        (Math.random() + 1).toString(36).substring(7),
        symbol,
        pronounciation,
        meaning,
        "static/stroke_order/1xd.png",
        word1,
        word2,
        meaning1,
        meaning2,
      ]
    );
    symbol = "";
    pronounciation = "";
    meaning = "";
    word1 = "";
    word2 = "";
    meaning1 = "";
    meaning2 = "";
  }

  async function submitMarkdown() {
    await db.execute("INSERT INTO lekce VALUES (?1, ?2)", [id, markdown]);
  }
</script>

<div>
  <h1>Add a new hanzi:</h1>
  <div class="content">
    <table>
      <tr>
        <td><label for="hanzi_insert">Znak:</label></td>
        <td><input type="text" bind:value={symbol} /></td>
      </tr>

      <tr>
        <td><label for="hanzi_insert">Vyslovnost:</label></td>
        <td><input type="text" bind:value={pronounciation} /></td>
      </tr>
      <tr>
        <td><label for="hanzi_insert">Význam:</label></td>
        <td><input type="text" bind:value={meaning} /></td>
      </tr>
      <tr>
        <td><label for="hanzi_insert">Slovo 1:</label></td>
        <td><input type="text" bind:value={word1} /></td>
      </tr>
      <tr>
        <td> <label for="hanzi_insert">Překlad 1:</label></td>
        <td> <input type="text" bind:value={meaning1} /></td>
      </tr>
      <tr>
        <td> <label for="hanzi_insert">Slovo 2:</label></td>
        <td> <input type="text" bind:value={word2} /></td>
      </tr>
      <tr>
        <td> <label for="hanzi_insert">Překlad 2:</label></td>
        <td> <input type="text" bind:value={meaning2} /></td>
      </tr>
      <tr>
        <td> <label for="hanzi_insert">Odeslat</label> </td>
        <td><button on:click={submit}>Odeslat</button></td>
      </tr>
    </table>
  </div>

  <h1>Insert markdown into DB:</h1>

  <div>
    <p><label for="markdown_insert">id:</label></p>
    <input type="text" bind:value={id} />
    <p><label for="markdown_insert">Markdown code:</label></p>
    <textarea bind:value={markdown} rows="4" cols="50" />
    <br />
    <button on:click={submitMarkdown}>Submit</button>
  </div>
</div>

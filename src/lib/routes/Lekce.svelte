<script>
  import Seznam from "../components/Seznam.svelte";
</script>

<div class="grid justify-center">
  <div class="mt-4">
    <div class="font-sans text-4xl font-bold mb-5">Seznam lekcí:</div>
    <Seznam
      nadpis="Lekce 1"
      odkaz="/lekce/1"
      subs={[
        "Základní větná stavba a sloveso být",
        "Pořadí slov ve větě",
        "Jednoduché věty",
      ]}
    />
    <Seznam
      nadpis="Lekce 2"
      odkaz="/lekce/2"
      subs={["Věty s přídavnými jmény", "很"]}
    />
    <Seznam
      nadpis="Lekce 3"
      odkaz="/lekce/3"
      subs={["Jak se zaptat na otázku", "吗", "呢"]}
    />
    <Seznam
      nadpis="Lekce 4"
      odkaz="/lekce/5656"
      subs={["Příliš", "Příliš se používá jinak", "太"]}
    />
    <Seznam
      nadpis="Lekce 5"
      odkaz="/lekce/5"
      subs={["Negace sloves", "Příslovce 不 a 没", "Nemám, nemáš"]}
    />
    <Seznam
      nadpis="Lekce 6"
      odkaz="/lekce/6"
      subs={["Spojka a", "Nebo", "和", "还是"]}
    />
    <Seznam
      nadpis="Lekce 7"
      odkaz="/lekce/7"
      subs={["Co se děje teď", "Vyjádření děje v přítomnosti", "在", "正在"]}
    />
  </div>
</div>

<script>
  import Header from "./Header.svelte";
</script>

<Header
  links={[
    { text: "Home", link: "/" },
    { text: "Lekce", link: "/lekce" },
    { text: "Hanzi", link: "/hanzi" },
    { text: "Admin", link: "/admin" },
  ]}
/>
<div class="container bg-gradient-to-r from-purple-100 to-white font-sans">
  <slot />
</div>

<style>
  .container {
    min-width: 100vw;
    min-height: 100vh;
  }
</style>

<script>
  export let links;

  import { Link } from "svelte-routing";
</script>

<div class="flex justify-center">
  <div class="flex flex-row gap-32 my-1 font-sans">
    {#each links as link}
      <Link
        to={link.link}
        class="no-underline font-semibold text-lg hover:uppercase"
        >{link.text}
      </Link>
    {/each}
  </div>
</div>

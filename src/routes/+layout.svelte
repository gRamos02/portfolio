<script>
	import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
  import "../app.css";


</script>

<ThemeSwitch />
<slot />

<style lang="postcss">
  /* :global(html) {
    background-color: theme(colors.bgDark);
    color: theme(colors.textDark)
  } */
</style>
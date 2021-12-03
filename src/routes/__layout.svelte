<script>
	import Footer from 'components/Footer.svelte';
	import Header from 'components/Header.svelte';
</script>

<Header />

<slot />

<Footer />

<style lang="postcss">
	@import 'src/styles/globals.pcss';
</style>

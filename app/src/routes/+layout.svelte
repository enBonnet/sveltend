<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import '../app.postcss';
</script>

<Header />
<main class="bg-gray-50 dark:bg-gray-800">
	<div
		class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh_-_100px)] lg:items-center"
	>
		<slot />
	</div>
</main>
<Footer />

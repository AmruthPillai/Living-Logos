<script>
	import 'ress';
	import '@fontsource/ibm-plex-sans/400.css';
	import '@fontsource/ibm-plex-sans/600.css';
</script>

<div class="app">
	<slot />
</div>

<style lang="scss">
	.app {
		width: 100vw;
		height: 100vh;

		font-size: 16px;
		font-family: 'IBM Plex Sans', sans-serif;

		color: #222222;
		background-color: #ffffff;
	}
</style>

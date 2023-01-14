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

		color: #f5f5f5;
		background-color: #151515;

		font-size: 16px;
		font-family: 'IBM Plex Sans', sans-serif;
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$components/logo-page/Header.svelte';
	import Footer from '$components/logo-page/Footer.svelte';

	let path: string = $page.route.id ?? '';
	let name: string = path.split('/').at(-1) ?? '';
</script>

<div class="container">
	<Header {name} />

	<div class="frame">
		<slot />
	</div>

	<Footer {name} />
</div>

<style lang="scss">
	$color-text: #222222;
	$color-background: #ffffff;

	.container {
		width: 100vw;
		height: 100vh;

		color: $color-text;
		background-color: $color-background;
	}

	.frame {
		top: 50%;
		left: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
	}
</style>

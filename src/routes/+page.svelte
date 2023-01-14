<script lang="ts">
	import Card from '$components/Card.svelte';
	import Footer from '$components/Footer.svelte';
	import logos from '$constants/logos';
</script>

<div class="container">
	<img src="/logo.png" alt="Living Logos" />

	<p class="lead">
		A curation of popular logos, brought to life using HTML, CSS and some fun keyframe animations.
	</p>

	<div class="grid">
		{#each Object.keys(logos) as name}
			<Card {name} />
		{/each}
	</div>

	<Footer />
</div>

<style lang="scss">
	.container {
		text-align: center;
		padding-top: 48px;

		img {
			width: 100%;
			padding: 0 30px;
			max-width: 512px;
		}
	}

	.lead {
		max-width: 700px;
		margin: 0 auto;
		margin-top: 8px;
		line-height: 1.5rem;
		font-size: 14px;
		opacity: 0.75;
		padding: 0 30px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-gap: 24px;
		margin: 0 auto;
		margin-top: 64px;
		max-width: 90vw;

		@media (min-width: 768px) {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		@media (min-width: 1366px) {
			grid-template-columns: repeat(6, minmax(0, 1fr));
		}
	}
</style>

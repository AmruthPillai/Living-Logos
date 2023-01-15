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
		text-align: left;
		padding: 24px;

		img {
			width: 100%;
			max-width: 300px;
		}
	}

	.lead {
		max-width: 600px;
		margin-top: 16px;
		line-height: 1.5rem;
		font-size: 14px;
		opacity: 0.75;
	}

	.grid {
		display: grid;
		grid-gap: 24px;
		max-width: 90vw;
		margin: 32px 0;
		grid-template-columns: repeat(2, minmax(0, 1fr));

		@media (min-width: 768px) {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		@media (min-width: 1366px) {
			grid-template-columns: repeat(6, minmax(0, 1fr));
		}
	}
</style>

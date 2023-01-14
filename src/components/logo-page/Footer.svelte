<script lang="ts">
	import Tooltip from '$components/Tooltip.svelte';
	import logos from '$constants/logos';

	export let name: string;

	$: logo = logos[name];
</script>

<footer>
	<div class="colors">
		{#each logo.colors as color}
			<Tooltip title={color}>
				<div class="box" style="background-color: {color};" />
			</Tooltip>
		{/each}
	</div>

	<img class="reference" src={logo.image} alt={logo.title} />
</footer>

<style lang="scss">
	footer {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;

		opacity: 0.5;
		padding: 8px 16px;

		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: opacity 0.25s ease-in-out;

		&:hover {
			opacity: 1;
		}

		.colors {
			display: flex;
			align-items: center;
			gap: 12px;
			margin-left: 12px;

			.box {
				width: 18px;
				height: 18px;
				border-radius: 2px;
			}
		}

		.reference {
			width: 64px;
			height: 64px;
		}
	}
</style>

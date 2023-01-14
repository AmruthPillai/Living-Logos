<script lang="ts">
	export let title: string = '';

	let isHovered: boolean = false;
	let x: number;
	let y: number;

	function mouseOver(event: MouseEvent) {
		isHovered = true;

		x = event.pageX + 5;
		y = event.pageY + 5;
	}

	function mouseMove(event: MouseEvent) {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}

	function mouseLeave() {
		isHovered = false;
	}
</script>

<div
	on:focus={undefined}
	on:mouseover={mouseOver}
	on:mousemove={mouseMove}
	on:mouseleave={mouseLeave}>
	<slot />
</div>

{#if isHovered}
	<div class="tooltip" style="top: {y}px; left: {x}px;">{title}</div>
{/if}

<style lang="scss">
	.tooltip {
		position: fixed;
		z-index: 10;

		font-size: 12px;
		color: #f5f5f5;
		background: #181818;
		border-radius: 4px;
		padding: 4px 8px;
	}
</style>

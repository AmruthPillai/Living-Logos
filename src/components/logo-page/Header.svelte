<script lang="ts">
	import 'iconify-icon';

	import logos from '$constants/logos';

	export let name: string;

	$: logo = logos[name];
	$: codeUrl = `https://github.com/AmruthPillai/Living-Logos/blob/main/src/routes/logo/${name}/%2Bpage.svelte`;
</script>

<header>
	<div>
		<a href="/" class="btn">
			<iconify-icon icon="ph:house-simple-bold" />
			<span>Home</span>
		</a>
	</div>

	<p class="title">{logo.title}</p>

	<div>
		<a href={codeUrl} target="_blank" rel="noreferrer" class="btn">
			<iconify-icon icon="ph:code-simple-bold" />
			<span>Code</span>
		</a>
	</div>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;

		opacity: 0.5;
		font-size: 14px;
		padding: 12px 16px;

		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: opacity 0.25s ease-in-out;

		&:hover {
			opacity: 1;
		}

		> div {
			&:first-child,
			&:last-child {
				flex-grow: 1;
				flex-basis: 0;
			}

			&:last-child {
				text-align: right;
			}
		}

		.btn {
			gap: 6px;
			display: inline-flex;
			align-items: center;
			color: inherit;
			text-decoration: none;

			cursor: pointer;
			padding: 10px 12px;
			border-radius: 4px;
			transition: background-color 0.15s ease-in-out;

			&:hover {
				background-color: rgba(255, 255, 255, 0.05);
			}
		}

		.title {
			font-weight: 600;
		}
	}
</style>

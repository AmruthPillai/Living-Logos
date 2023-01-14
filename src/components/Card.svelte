<script lang="ts">
	import { logos } from '$constants/logos';

	export let name: string;

	const logo = logos[name];
</script>

<a href={logo.path}>
	<div class="card">
		<img src={logo.image} alt={logo.title} />
		<p>{logo.title}</p>
	</div>
</a>

<style lang="scss">
	a {
		color: inherit;
		text-decoration: none;
	}

	.card {
		width: 100%;
		cursor: pointer;
		border-radius: 4px;
		aspect-ratio: 1 / 1;
		border: 1px solid #333;
		background-color: #181818;

		&:hover {
			border-color: #444;
			background-color: #1a1a1a;
		}

		img {
			width: 75%;
		}

		p {
			font-size: 13px;
			font-weight: 600;
		}
	}
</style>

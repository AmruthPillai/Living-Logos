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
		text-align: center;
		border-radius: 4px;
		aspect-ratio: 1 / 1;
		border: 1px solid #eee;
		background-color: #ffffff;
		transition: background-color 0.25s ease-in-out;

		&:hover {
			background-color: #eee;
		}

		img {
			width: 75%;
		}

		p {
			color: #444;
			font-size: 12px;
			font-weight: 600;
		}
	}
</style>

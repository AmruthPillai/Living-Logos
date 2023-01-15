<div class="container">
	<div />
	<div />
	<div />
	<div />
	<div />
</div>

<style lang="scss">
	$color-figma-red: #f24e1e;
	$color-figma-peach: #ff7262;
	$color-figma-purple: #a259ff;
	$color-figma-blue: #1abcfe;
	$color-figma-green: #0acf83;

	.container {
		width: 300px;
		height: 400px;

		display: grid;
		grid-template-rows: repeat(3, 150px);
		grid-template-columns: repeat(2, 150px);

		div {
			opacity: 0;

			animation: fade-in 0.5s ease-in-out forwards;
		}

		div:nth-child(1) {
			background-color: $color-figma-red;

			border-top-left-radius: 50%;
			border-bottom-left-radius: 50%;
		}

		div:nth-child(2) {
			background-color: $color-figma-peach;

			border-top-right-radius: 50%;
			border-bottom-right-radius: 50%;

			animation-delay: 0.5s;
		}

		div:nth-child(3) {
			background-color: $color-figma-purple;

			border-top-left-radius: 50%;
			border-bottom-left-radius: 50%;

			animation-delay: 1s;
		}

		div:nth-child(4) {
			background-color: $color-figma-blue;

			border-radius: 50%;

			animation-delay: 1.5s;
		}

		div:nth-child(5) {
			background-color: $color-figma-green;

			border-top-left-radius: 50%;
			border-bottom-left-radius: 50%;
			border-bottom-right-radius: 50%;

			animation-delay: 2s;
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>

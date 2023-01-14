<div class="container">
	<div />
	<div />
	<div />
	<div />
</div>

<style lang="scss">
	$color-background: #f3f3f3;
	$color-microsoft-red: #f35325;
	$color-microsoft-green: #81bc06;
	$color-microsoft-blue: #05a6f0;
	$color-microsoft-yellow: #ffba08;

	$bounce-in: cubic-bezier(0.25, 0.75, 0.5, 1.25);

	.container {
		width: 400px;
		height: 400px;

		display: grid;
		gap: 18px;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);

		div {
			transform: scale(0);
		}

		// Red
		div:nth-child(1) {
			transform-origin: bottom right;
			background-color: $color-microsoft-red;

			animation: slide-in 0.5s $bounce-in forwards;
		}

		// Green
		div:nth-child(2) {
			transform-origin: bottom left;
			background-color: $color-microsoft-green;

			animation: slide-in 0.5s $bounce-in 0.5s forwards;
		}

		// Blue
		div:nth-child(3) {
			transform-origin: top right;
			background-color: $color-microsoft-blue;

			animation: slide-in 0.5s $bounce-in 1.5s forwards;
		}

		// Yellow
		div:nth-child(4) {
			transform-origin: top left;
			background-color: $color-microsoft-yellow;

			animation: slide-in 0.5s $bounce-in 1s forwards;
		}
	}

	@keyframes slide-in {
		100% {
			transform: scale(1);
		}
	}
</style>

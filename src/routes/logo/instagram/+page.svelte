<div class="container">
	<div class="camera">
		<div class="lens" />
		<div class="flash" />
	</div>
</div>

<style lang="scss">
	$color-background: #f8f8f8;
	$color-instagram-yellow: #feda80;
	$color-instagram-orange: #f35c3d;
	$color-instagram-pink: #cf3187;
	$color-instagram-blue: #4867d7;

	.container {
		width: 400px;
		height: 400px;

		position: relative;
		border-radius: 70px;

		background: radial-gradient(
			circle at 25% 110%,
			$color-instagram-yellow 0%,
			$color-instagram-yellow 14%,
			$color-instagram-orange 45%,
			$color-instagram-pink 60%,
			$color-instagram-blue 95%
		);

		animation: moving-gradient 1.5s ease-in-out forwards;
	}

	.camera {
		width: 300px;
		height: 300px;

		position: absolute;
		top: 50px;
		left: 50px;

		border-radius: 80px;
		border: 28px solid $color-background;

		animation: fade-in 0.5s ease-in-out forwards;
	}

	.lens {
		width: 150px;
		height: 150px;

		position: absolute;
		top: 48px;
		left: 48px;

		opacity: 0;
		border-radius: 50%;
		border: 28px solid $color-background;

		animation: fade-in 0.5s ease-in-out 0.75s forwards;
	}

	.flash {
		width: 38px;
		height: 38px;

		position: absolute;
		top: 24px;
		right: 24px;

		transform: scaleY(0);
		border-radius: 50%;
		background-color: $color-background;

		animation: blink 0.15s ease-in-out 1.5s forwards;
	}

	@keyframes moving-gradient {
		0% {
			background-size: 200%;
		}

		100% {
			background-size: 100%;
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

	@keyframes blink {
		0% {
			transform: scaleY(0);
		}

		100% {
			transform: scaleY(1);
		}
	}
</style>
